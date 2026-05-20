# Montana Explorer

An interactive web map of Montana's public lands, wildlife habitat, weather, and trails. Sign in to save pins that sync across every device.

**Live features**

- BLM-administered land (live from the BLM National SMA service) with click-to-identify and parcel labels
- Grizzly Recovery Zones, 2022 Estimated Occupied Range, generalized black/grizzly distribution (Montana FWP)
- USFS campsites + National Forest System trails + Motor Vehicle Use Map (OHV) trails
- Live NEXRAD radar (NOAA / Iowa State Mesonet) and 4-hour storm forecast (Open-Meteo, bilinear interpolated)
- Live wind arrows and city temperature badges (Open-Meteo)
- Right-click anywhere → coordinates, current weather, 7-day forecast, BLM status, bear likelihood
- Search by town name or `lat,lng`
- Account system with admin panel (Supabase)

## Project structure

```
montana-site/
├── index.html              ← landing page
├── map.html                ← the interactive map
├── login.html              ← login + signup
├── account.html            ← your account, pins list, change password/username
├── admin.html              ← admin panel (admin role only)
├── about.html              ← data sources & docs
├── css/
│   ├── shared.css          ← site-wide styles
│   └── map.css             ← map-page-only styles
├── js/
│   ├── config.js           ← Supabase URL + anon key (fill these in)
│   ├── auth.js             ← MTAuth: sessions, pins API, admin API
│   ├── nav.js              ← shared nav (user chip, login/logout)
│   ├── map.js              ← the map app (1000+ lines)
│   └── data/
│       └── montana-boundary.js  ← MT state ring coordinates
├── supabase/
│   └── schema.sql          ← run once in Supabase SQL editor
├── SUPABASE_SETUP.md       ← step-by-step backend setup
├── .nojekyll               ← tells GitHub Pages to skip Jekyll
└── README.md               ← you are here
```

## Local development

No build step. Just open `index.html` in a browser (preferably via a tiny local server so `fetch()` works for Supabase):

```bash
cd "montana-site"
python3 -m http.server 8000
# open http://localhost:8000
```

Until you set up Supabase, login/signup will show a "Supabase is not configured" banner and pins will fall back to `localStorage`. Set up Supabase by following [SUPABASE_SETUP.md](SUPABASE_SETUP.md) (~5 minutes).

## Deploy to GitHub Pages (free)

1. Create an empty public repo on GitHub (e.g. `montana-explorer`). Do **not** add a README — the one in this folder will be used.

2. From inside the `montana-site/` folder:
   ```bash
   cd "montana-site"
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/montana-explorer.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings → Pages**.
   - **Source**: Deploy from a branch
   - **Branch**: `main` / `(root)`
   - **Save**

4. Within ~1 minute the site is live at `https://<your-username>.github.io/montana-explorer/`.

5. Update `js/config.js` with your Supabase URL + anon key (commit + push again).

> ⚠️ **The anon key is safe to commit.** It's the public key — what users can do with it is fully governed by the row-level-security policies in `supabase/schema.sql`. **Never** commit a `service_role` key.

## Where things come from

| Layer | Source |
|---|---|
| BLM land | gis.blm.gov (BLM National SMA cached, BLM-only) |
| Bears | services3.arcgis.com (Montana FWP open data) |
| Campsites & trails | apps.fs.usda.gov (USFS EDW) |
| Live radar | mesonet.agron.iastate.edu (NEXRAD) |
| Forecast | api.open-meteo.com |
| Geocoding | nominatim.openstreetmap.org |
| Base maps | OpenStreetMap, OpenTopoMap, Esri World Imagery |
| State boundary | U.S. Census via glynnbird/usstatesgeojson |

## Privacy

There is **no analytics, no third-party tracking, and no ads**. The only data we store is what you save while signed in (email, username, your pins). All of it lives in your own Supabase project and only you (or an admin) can read it.

## License

The site code in this repo is open source — use it however you like. All map data remains © its respective providers; respect each provider's terms of service.
