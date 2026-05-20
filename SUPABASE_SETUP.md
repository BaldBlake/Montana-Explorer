# Supabase setup — one-time, ~5 minutes

Montana Explorer uses [Supabase](https://supabase.com) for accounts and pin storage. Supabase has a generous free tier (50,000 monthly active users, 500 MB database) and the frontend stays hosted on GitHub Pages — you only need to set up one Supabase project.

You only do this **once**.

---

## 1. Create a Supabase project

1. Go to <https://supabase.com> and click **Start your project** (sign in with GitHub or email).
2. **New project**. Give it a name like `montana-explorer`. Pick a strong database password (you won't need it day-to-day — Supabase stores it). Region: pick one close to you.
3. Wait ~1 minute for the project to provision.

## 2. Run the schema

1. In your project, open **SQL Editor** (left sidebar) → **+ New query**.
2. Open `supabase/schema.sql` from this repo, copy the whole file, paste it into the SQL editor, and click **Run**.
3. You should see "Success. No rows returned." This creates the `profiles` and `pins` tables, the row-level-security policies, and an admin view.

## 3. Get your project's URL and anon key

1. **Project Settings** (gear icon, bottom-left) → **API**.
2. Copy the two values under **Project URL** and **anon / public** key.
3. Open `js/config.js` in this repo and paste them in:
   ```js
   window.MONTANA_CONFIG = {
     SUPABASE_URL: 'https://xxxxxxxxx.supabase.co',
     SUPABASE_ANON_KEY: 'eyJhbGc…long string…'
   };
   ```
   The anon key is **safe to commit** — it only allows what the RLS policies allow.

## 4. Configure email auth (optional but recommended)

By default Supabase requires users to confirm their email after sign-up.

- For a quick test, you can disable that under **Authentication → Providers → Email** → toggle off **Confirm email**. Sign-ups then work instantly without an inbox check.
- For production, leave it on and customize the email templates under **Authentication → Templates**.

## 5. Make yourself the first admin

1. Open `login.html` in the site and sign up for an account with your email + a password (≥ 6 chars) + a username. The schema's trigger auto-creates your `profiles` row with role = `user`.
2. Back in the Supabase dashboard: **SQL Editor → + New query**, paste:
   ```sql
   update public.profiles set role = 'admin'
   where id = (select id from auth.users where email = 'YOU@EXAMPLE.COM');
   ```
   Replace `YOU@EXAMPLE.COM` with the email you just signed up with. Run it.
3. Refresh the site. You'll now see an **Admin** link in the nav. Use that page to promote other users from inside the app.

## 6. (Optional) Lock down sign-ups

If you don't want anyone on the internet to be able to make accounts:

- **Authentication → Providers → Email** → toggle off **Enable signups**.
- Anyone you want to add: create them via **Authentication → Users → Invite user**.

---

## Troubleshooting

- **"Supabase is not configured" warning on login.html** — you forgot to paste the URL/key into `js/config.js`, or you put them on the wrong line.
- **Sign-up succeeds but pins fail with a permission error** — schema didn't run cleanly. Re-run `supabase/schema.sql`; it's idempotent.
- **Admin page shows "Not authorized"** — your `profiles.role` is still `'user'`. Re-run step 5.
- **Password reset email never arrives** — check spam, and verify under **Project Settings → Auth → SMTP Settings**. For a hobby project you can rely on Supabase's default sender; for production wire up SMTP.

## What about deleting accounts or directly setting a password?

The site's admin panel can update usernames, toggle the admin role, and send password-reset emails — all of which the `anon` key is allowed to do (under RLS or with the user's consent via email).

Direct account deletion and admin-overriding a password require Supabase's `service_role` key, which is too privileged to ship to a browser. For those operations, log into the Supabase dashboard:

- **Delete a user** → Authentication → Users → click the row → Delete.
- **Force-set a password** → same Users page → click the row → Reset password (sets a temporary one) or Generate password.

That's intentional, not a missing feature — it keeps the public key safe.
