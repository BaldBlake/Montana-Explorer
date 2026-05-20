// Montana Explorer — auth & Supabase client wrapper
//
// Exposes `window.MTAuth` with the API used by every page:
//   MTAuth.client            — the raw Supabase client (or null if not configured)
//   MTAuth.isConfigured()    — true if Supabase URL+key are filled in
//   MTAuth.getSession()      — current session ({ user, ...} or null)
//   MTAuth.getProfile()      — profile row for current user ({ username, role } or null)
//   MTAuth.isAdmin()         — true if current user has role='admin'
//   MTAuth.signUp(email, pw, username)
//   MTAuth.signIn(email, pw)
//   MTAuth.signOut()
//   MTAuth.sendPasswordReset(email)
//   MTAuth.updateMyPassword(newPw)
//   MTAuth.updateMyUsername(newName)
//   MTAuth.onChange(cb)      — subscribe to auth state changes

(function () {
  const cfg = window.MONTANA_CONFIG || {};
  const ok = cfg.isConfigured && cfg.isConfigured();
  let client = null;
  if (ok && window.supabase && window.supabase.createClient) {
    client = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
  }

  let cachedSession = null;
  let cachedProfile = null;
  const subscribers = new Set();

  async function refreshProfile(user) {
    if (!client || !user) { cachedProfile = null; return null; }
    const { data, error } = await client
      .from('profiles')
      .select('id, username, role, created_at')
      .eq('id', user.id)
      .maybeSingle();
    if (error) { console.warn('profile fetch failed', error.message); cachedProfile = null; return null; }
    cachedProfile = data;
    return data;
  }

  async function init() {
    if (!client) return;
    const { data } = await client.auth.getSession();
    cachedSession = data.session || null;
    if (cachedSession) await refreshProfile(cachedSession.user);
    client.auth.onAuthStateChange(async (_event, session) => {
      cachedSession = session;
      if (session && session.user) await refreshProfile(session.user);
      else cachedProfile = null;
      subscribers.forEach(cb => { try { cb({ session: cachedSession, profile: cachedProfile }); } catch (e) {} });
    });
  }

  const MTAuth = {
    client,
    isConfigured: () => !!client,
    getSession: () => cachedSession,
    getProfile: () => cachedProfile,
    isAdmin: () => !!(cachedProfile && cachedProfile.role === 'admin'),

    async signUp(email, password, username) {
      if (!client) throw new Error('Supabase is not configured. See SUPABASE_SETUP.md');
      const { data, error } = await client.auth.signUp({
        email, password,
        options: { data: { username } }
      });
      if (error) throw error;
      // The DB trigger `handle_new_user` will create the profile row. Best-effort
      // upsert the username here in case the trigger isn't installed yet.
      if (data.user && username) {
        await client.from('profiles')
          .upsert({ id: data.user.id, username, role: 'user' }, { onConflict: 'id' });
      }
      return data;
    },

    async signIn(email, password) {
      if (!client) throw new Error('Supabase is not configured. See SUPABASE_SETUP.md');
      const { data, error } = await client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      cachedSession = data.session;
      await refreshProfile(data.user);
      return data;
    },

    async signOut() {
      if (!client) return;
      await client.auth.signOut();
      cachedSession = null; cachedProfile = null;
    },

    async sendPasswordReset(email) {
      if (!client) throw new Error('Supabase is not configured');
      const redirectTo = window.location.origin + window.location.pathname.replace(/[^/]*$/, '') + 'login.html';
      const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo });
      if (error) throw error;
    },

    async updateMyPassword(newPassword) {
      if (!client) throw new Error('Supabase is not configured');
      const { error } = await client.auth.updateUser({ password: newPassword });
      if (error) throw error;
    },

    async updateMyUsername(newUsername) {
      if (!client || !cachedSession) throw new Error('Not logged in');
      const { error } = await client.from('profiles')
        .update({ username: newUsername })
        .eq('id', cachedSession.user.id);
      if (error) throw error;
      cachedProfile = { ...cachedProfile, username: newUsername };
    },

    onChange(cb) { subscribers.add(cb); return () => subscribers.delete(cb); },

    /* ---------- Pins API (used by map.js) ---------- */
    pins: {
      async list() {
        if (!client || !cachedSession) return [];
        const { data, error } = await client.from('pins')
          .select('id, lat, lng, label, created_at')
          .eq('user_id', cachedSession.user.id)
          .order('created_at', { ascending: false });
        if (error) { console.warn(error.message); return []; }
        return data || [];
      },
      async add(lat, lng, label) {
        if (!client || !cachedSession) throw new Error('Not logged in');
        const { data, error } = await client.from('pins')
          .insert({ user_id: cachedSession.user.id, lat, lng, label: label || null })
          .select().single();
        if (error) throw error;
        return data;
      },
      async remove(id) {
        if (!client || !cachedSession) throw new Error('Not logged in');
        const { error } = await client.from('pins').delete().eq('id', id);
        if (error) throw error;
      },
      async updateLabel(id, label) {
        if (!client || !cachedSession) throw new Error('Not logged in');
        const { error } = await client.from('pins').update({ label }).eq('id', id);
        if (error) throw error;
      }
    },

    /* ---------- Admin-only operations ---------- */
    admin: {
      async listUsers() {
        if (!client) throw new Error('Supabase is not configured');
        const { data, error } = await client.from('admin_users_view').select('*');
        if (error) throw error;
        return data || [];
      },
      async listAllPins() {
        if (!client) throw new Error('Supabase is not configured');
        const { data, error } = await client.from('pins').select('*');
        if (error) throw error;
        return data || [];
      },
      async setUsername(userId, newUsername) {
        if (!client) throw new Error('Supabase is not configured');
        const { error } = await client.from('profiles')
          .update({ username: newUsername }).eq('id', userId);
        if (error) throw error;
      },
      async setRole(userId, role) {
        if (!client) throw new Error('Supabase is not configured');
        const { error } = await client.from('profiles')
          .update({ role }).eq('id', userId);
        if (error) throw error;
      },
      async sendPasswordReset(email) {
        return MTAuth.sendPasswordReset(email);
      }
    }
  };

  window.MTAuth = MTAuth;
  // Kick off async init; pages can `await MTAuth.ready` before checking session.
  MTAuth.ready = init();
})();
