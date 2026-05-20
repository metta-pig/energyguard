# Theme — Energy Guard

## Presets

| Setting | Value | Rationale |
|---------|-------|-----------|
| `VITE_SITE_THEME` | `modern` | Cool neutrals, geometric sans—fits industrial B2B without the template’s dark showcase default. |
| `VITE_LAYOUT_PRESET` | `local` | Service/geo business flow; home order customized to **hero → proof (trust) → visit (contact) → story → bento → quote**. |

## Typography

- **Display / UI:** Space Grotesk  
- **Body:** DM Sans  
- Loaded in `index.html` (subset vs full template font bundle).

## Imagery

- Product and hero assets hotlink `energyguard.com` uploads via `src/lib/siteMedia.ts` until files land in `public/brand/` from `revamp-input/brand/`.
- Logo: `public/brand/logo.webp` (from legacy `EG_Color_TM@2000x.webp`).

## Conversion

- **Primary CTA:** Request estimate → `/contact`
- **Secondary:** Email sales (`sales@energyguard.com`), EverGuard warranty, sales sheet PDF (legacy upload URL).

## Motion

- Uses existing hero / tile transitions; respects `prefers-reduced-motion` in shared CSS.

## Native app

Out of scope — marketing web SPA only.
