# Ship checklist — Energy Guard

## Content & legal

- [ ] Client confirms phone number if click-to-call is required (currently email-first).
- [ ] Verify warranty legal copy with counsel before replacing WordPress warranty page.
- [ ] Rights for logos, photography, fonts, and testimonials documented in `revamp-input/` or contract.
- [ ] Replace hotlinked `energyguard.com` media with files in `public/brand/` when final assets arrive.

## Routes & redirects

- [ ] 301 map from legacy WordPress URLs (see `SITE_MAP.md`).
- [ ] SPA fallback on host for `/solutions`, `/warranty`, `/info`, `/news`, `/contact`.

## Accessibility

- [ ] Keyboard through header nav and contact form.
- [ ] Meaningful `alt` on hero and product imagery after asset swap.
- [ ] Form labels associated with inputs (`ContactPage`).

## Performance

- [ ] Run Lighthouse on home and `/contact` after deploy.
- [ ] Self-host hero image at responsive widths (currently full PNG from CDN).

## SEO

- [ ] Title/description in `index.html` match client copy.
- [ ] Open Graph image points to approved asset.

## Smoke (local)

- [ ] `npm run build` passes.
- [ ] `npm run dev` — home section order: hero, trust, contact band, about, tiles, quote.
- [ ] Header CTA and footer email open `mailto:sales@energyguard.com`.
