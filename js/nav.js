// Montana Explorer — shared nav behavior
//
// Each page includes the nav markup inline (no JS required for layout).
// This script populates the user chip / login link based on auth state and
// highlights the active page from <body data-page="...">.

(function () {
  function paint() {
    const auth = window.MTAuth;
    const slot = document.getElementById('nav-auth-slot');
    if (!slot) return;
    const session = auth && auth.getSession && auth.getSession();
    const profile = auth && auth.getProfile && auth.getProfile();

    if (session && session.user) {
      const name = (profile && profile.username) || session.user.email || 'account';
      const isAdmin = auth.isAdmin && auth.isAdmin();
      const adminLink = isAdmin
        ? '<a href="admin.html" data-link="admin">Admin</a>'
        : '';
      slot.innerHTML = `
        ${adminLink}
        <a href="account.html" data-link="account">
          <span class="user-chip">
            ${escapeHtml(name)}
            ${isAdmin ? '<span class="role-badge">admin</span>' : ''}
          </span>
        </a>
        <button type="button" id="nav-signout">Sign out</button>
      `;
      const out = document.getElementById('nav-signout');
      if (out) out.addEventListener('click', async () => {
        try { await auth.signOut(); } catch (e) {}
        location.href = 'index.html';
      });
    } else {
      slot.innerHTML = `
        <a href="login.html" data-link="login">Log in</a>
        <a href="login.html?mode=signup" class="cta" data-link="signup">Sign up</a>
      `;
    }
    highlightActive();
  }

  function highlightActive() {
    const page = document.body && document.body.dataset && document.body.dataset.page;
    if (!page) return;
    document.querySelectorAll('.site-nav a[data-link]').forEach(a => {
      if (a.dataset.link === page) a.classList.add('active');
    });
  }

  function escapeHtml(s) {
    return String(s || '').replace(/[&<>"']/g, c => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[c]));
  }

  function init() {
    if (window.MTAuth && window.MTAuth.ready) {
      window.MTAuth.ready.then(paint);
      window.MTAuth.onChange(paint);
    } else {
      paint();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
