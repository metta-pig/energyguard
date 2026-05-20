# Assumptions — Energy Guard revamp

- **`revamp-input/` materials** (`brief.md`, `brand/`, `urls.txt`) were not present in the workspace (only `README.md`); ingest used the user prompt plus live [energyguard.com](https://energyguard.com/).
- **Phone:** Legacy site emphasizes `sales@energyguard.com` and `support@energyguard.com`; no public `tel:` was captured—contact is email-first until the client supplies a number.
- **Contact form:** Submits via `mailto:` with prefilled body (no CRM/reCAPTCHA). Wire to HubSpot, CF7 endpoint, or similar when integration is known.
- **Social URLs:** Legacy footer used generic platform homepages; YouTube channel URL is a placeholder until marketing confirms.
- **News:** Single seeded item for EverGuard launch; full news archive not migrated from WordPress.
- **Imagery:** Product photos hotlink legacy uploads; swap to `revamp-input/brand/` or `public/brand/` before production if CDN policy requires self-hosting.
