# Site map — Energy Guard

Legacy source: [energyguard.com](https://energyguard.com/) (WordPress single-page + subpages).

| Legacy URL | New route | Notes |
|------------|-----------|-------|
| `https://energyguard.com/` | `/` | Home — EverGuard hero, trust, contact band, solutions story, bento routes, testimonial. |
| `https://energyguard.com/#about` | `/about` | Company story and pillars (was home anchor). |
| `https://energyguard.com/energy-guard-aerodynamic-solutions/` | `/solutions` | Kits and components. |
| `https://energyguard.com/warranty/` | `/warranty` | EverGuard™ lifetime warranty. |
| `https://energyguard.com/#faq` | `/info` | Durability, fuel savings, ROI, testing, Made in USA. |
| `https://energyguard.com/news/` | `/news` | Newsroom (seeded with EverGuard launch). |
| `https://energyguard.com/#contact` | `/contact` | Estimate request + sales/support email. |

## Redirect guidance

When deploying the SPA at the apex domain:

- SPA fallback: serve `index.html` for all routes above.
- Redirect legacy paths to new routes (301):
  - `/energy-guard-aerodynamic-solutions/` → `/solutions`
  - `/warranty/` → `/warranty` (same path)
  - `/news/` → `/news`
  - `/#about`, `/#faq`, `/#contact` → `/about`, `/info`, `/contact`
- Keep WordPress admin or form endpoints on separate host if still required during transition.
