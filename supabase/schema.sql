-- =============================================================
-- Montana Explorer — Supabase schema
-- =============================================================
-- Run this whole file once in your Supabase project's SQL editor
-- (Dashboard → SQL → New query → paste → Run). Re-running is safe.
-- =============================================================

-- ---- profiles ------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  username    text unique,
  role        text not null default 'user' check (role in ('user', 'admin')),
  created_at  timestamptz not null default now()
);

-- ---- pins ----------------------------------------------------
create table if not exists public.pins (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  lat         double precision not null,
  lng         double precision not null,
  label       text,
  created_at  timestamptz not null default now()
);

create index if not exists pins_user_id_idx on public.pins (user_id);

-- ---- helper: is_admin() bypasses RLS so policies don't recurse
create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  );
$$;

-- ---- new-user trigger: auto-create a profile row on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, username, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    'user'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---- enable RLS ---------------------------------------------
alter table public.profiles enable row level security;
alter table public.pins     enable row level security;

-- ---- profiles policies --------------------------------------
drop policy if exists profiles_select_own   on public.profiles;
drop policy if exists profiles_select_admin on public.profiles;
drop policy if exists profiles_update_own   on public.profiles;
drop policy if exists profiles_update_admin on public.profiles;

create policy profiles_select_own   on public.profiles for select using (auth.uid() = id);
create policy profiles_select_admin on public.profiles for select using (public.is_admin());
create policy profiles_update_own   on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id and role = 'user');
create policy profiles_update_admin on public.profiles for update using (public.is_admin()) with check (public.is_admin());

-- ---- pins policies ------------------------------------------
drop policy if exists pins_select_own    on public.pins;
drop policy if exists pins_select_admin  on public.pins;
drop policy if exists pins_insert_own    on public.pins;
drop policy if exists pins_update_own    on public.pins;
drop policy if exists pins_delete_own    on public.pins;

create policy pins_select_own   on public.pins for select using (auth.uid() = user_id);
create policy pins_select_admin on public.pins for select using (public.is_admin());
create policy pins_insert_own   on public.pins for insert with check (auth.uid() = user_id);
create policy pins_update_own   on public.pins for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy pins_delete_own   on public.pins for delete using (auth.uid() = user_id);

-- ---- admin view: profiles + email + pin count ---------------
create or replace view public.admin_users_view
with (security_invoker = true) as
  select
    p.id,
    u.email,
    p.username,
    p.role,
    p.created_at,
    (select count(*) from public.pins x where x.user_id = p.id) as pin_count
  from public.profiles p
  join auth.users u on u.id = p.id;

grant select on public.admin_users_view to authenticated;

-- =============================================================
-- After running this, promote your first user to admin:
--
--   update public.profiles set role = 'admin'
--   where id = (select id from auth.users where email = 'YOU@EXAMPLE.COM');
--
-- (Use the email of the account you just signed up with.)
-- =============================================================
