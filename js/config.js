// Montana Explorer — Supabase configuration
//
// REPLACE THE TWO VALUES BELOW with your own Supabase project's URL and anon key.
// Get them at: https://app.supabase.com/project/_/settings/api
//
// The anon key is safe to expose in client code — it's the public key. Row Level
// Security policies (set up by supabase/schema.sql) keep users from reading or
// modifying each other's data.
//
// If these values are still the placeholders below, the site falls back to
// localStorage-only mode (no real login, pins stored per-browser).

window.MONTANA_CONFIG = {
  SUPABASE_URL: 'https://ypgvoebcipsanzlwfntp.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZ3ZvZWJjaXBzYW56bHdmbnRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyMzQ0NTIsImV4cCI6MjA5NDgxMDQ1Mn0.EGIf1nOjRLDWKKzIszmOlw27btvvwqVf-ILOWkux_hg'
};

window.MONTANA_CONFIG.isConfigured = function () {
  return this.SUPABASE_URL && this.SUPABASE_URL.startsWith('http') &&
         this.SUPABASE_ANON_KEY && this.SUPABASE_ANON_KEY.length > 20;
};
