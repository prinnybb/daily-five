# Daily Five

5 tiny brain tests, 1 score out of 500, a new set every day. Pure static site:
no database, no backend, no build step. Progress, streaks, levels and badges live in each
player's browser (localStorage).

Tests: Time Sense, Mental Math, Reflex, Pattern, Quick Count.

## Before you upload (checklist)

1. **Your domain** in `index.html`: replace both `https://YOUR-DOMAIN.com` (the `og:url` and
   `og:image` lines near the top). Link previews in WhatsApp, iMessage, X and Facebook need the full address.
2. **Contact email** in `privacy.html`: replace `[YOUR CONTACT EMAIL]`.
3. **Upload every file in this folder** to the site root:
   `index.html privacy.html sw.js manifest.webmanifest ads.txt icon.svg icon-32.png icon-192.png
   icon-512.png icon-maskable-512.png apple-touch-icon.png favicon.ico og-image.png`
   (README.md is optional.) The site must be served over **https**.
4. After uploading, open the site on your phone and play one round to confirm it works.

Until AdSense is set up the live site simply shows no ads (the dashed placeholder boxes only appear
on localhost).

## Turning on ads (Google AdSense)

1. Apply at https://adsense.google.com with your live site (approval can take days to weeks).
   The privacy page is already in place, which AdSense requires.
2. In AdSense, open **Privacy & messaging** and create a **European regulations (GDPR) message**.
   Google's own consent banner is required for visitors from the EEA, UK and Switzerland. It needs no code here.
3. In `index.html`, fill in `CONFIG.adsenseClient` (`ca-pub-...`) and the 4 slot IDs
   (`top`, `bottom`, `between`, `results`), created as "Display" ad units.
4. In `ads.txt`, replace `pub-0000000000000000` with your publisher ID.
5. In `sw.js`, bump `CACHE` (e.g. `dailyfive-v4`) so returning players get the new version.

## Every time you upload a new version
Bump the `CACHE` name in `sw.js`. Old offline copies are then deleted automatically.

## Run locally
    python -m http.server 5173
then open http://localhost:5173

## Deploy (free)
Netlify Drop, Cloudflare Pages, GitHub Pages or Vercel. Drag the folder in; no configuration needed.
