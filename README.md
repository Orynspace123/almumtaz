# Al Mumtaz Trading Co. — Website

Marketing site for **Al Ikhtiar Al Mumtaz Trading Company** (شركة الاختيار الممتاز للتجارة) —
a truck & trailer spare parts and repair workshop in Dammam's Second Industrial Area.

Built with **React 19 + Vite + Framer Motion**.

**Art direction:** industrial spec-sheet. Paper ground, ink strokes, safety orange;
poster type (Anton) + Archivo + IBM Plex Mono for technical labels; hard 2px borders
and numbered sections instead of soft-shadow cards. Bespoke assets: an animated
blueprint truck schematic in the hero (callouts point at the systems the workshop
services), the finder styled as a workshop job card, and the company facts on a
machine data plate. The UX/accessibility rules in
`design-system/al-mumtaz-trading-co/MASTER.md` (generated with
[UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)) still
apply — contrast, touch targets, reduced-motion, focus states — but the visual
direction intentionally departs from its generic corporate palette.

## The idea

Instead of a generic brochure page, the site is built around **"Find Your Fix"** — pick
your truck brand and what's wrong, and it composes a pre-filled WhatsApp message straight
to the workshop. That mirrors how leads actually convert here (click-to-WhatsApp), rather
than just describing the business.

## Run it locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build locally
```

## ⚠️ Before this goes live

Everything below lives in one place — `src/data/content.js` — edit there and it updates
every link on the site:

- **Phone numbers** — transcribed from a photo of the shop's promo poster, not confirmed.
  Verify the real digits before publishing.
- **C.R. (commercial registration) number** — not included; add if you want it displayed.
- **Exact map pin** — currently a Google Maps *search* for the address text, not a precise
  pin. Swap in a real Maps link once you have one.
- **Real logo & photos** — the site currently uses a text/initials mark ("AM") in place of
  the actual logo, and no real storefront/workshop photography yet.

## Project structure

```
src/
  data/content.js       # brands, services, contact info — single source of truth
  components/           # one component per section (Hero, Finder, Services, ...)
  index.css             # design tokens + all styling
design-system/           # generated design spec (UI/UX Pro Max output)
```
