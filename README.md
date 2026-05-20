# site-revamp-template

Team template for **rebuilding legacy marketing sites** in React (Vite) with **shared UI**, **token-based themes**, and two Cursor skills:

| Skill | Use when | Workspace root must be |
|-------|-----------|-------------------------|
| **`@site-revamp`** | Migrating or redesigning a **client website** from this template | **A new GitHub repo per client** (from **Use this template**), clone opened in Cursor—not the upstream template for delivery |
| **`@native-app-revamp`** | Building or revamping a **native** iOS/Android app (store binaries) | The **Expo / React Native** (or other native) **app repo** — not this Vite project |

This README is the **web** template. Native work uses the same skill **files** (see below) but a **different** git root in Cursor.

## Project — Energy Guard

Marketing site for [Energy Guard™](https://energyguard.com/) trailer aerodynamic solutions. **Theme:** `energyguard` · **Layout:** `local` (home: hero → trust → metrics → contact → story → routes → testimonial).

Routes: `/`, `/about`, `/solutions`, `/warranty`, `/info`, `/news`, `/contact`.

- **Config:** `src/lib/siteConfig.ts`, content helpers in `src/lib/energyGuardContent.ts`, imagery in `src/lib/siteMedia.ts`.
- **Handoff docs:** `SITE_MAP.md`, `THEME.md`, `CHECKLIST.md`, `ASSUMPTIONS.md`.
- **Deploy:** `npm run build` → `dist/`; SPA fallback on all routes; 301s per `SITE_MAP.md`.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173/

No **`.env`** file is required. This repo ships with **`energyguard`** theme and **`local`** home layout baked in (`src/lib/siteDefaults.ts`). All theme CSS under `src/themes/` is in git—clones get the full palette immediately.

### Optional environment overrides

To try another preset locally, copy **`.env.example`** to **`.env`** and set:

| Variable | Default (no `.env`) | Purpose |
|----------|---------------------|---------|
| `VITE_SITE_THEME` | `energyguard` | Theme id → `src/themes/<id>.css` (also `modern`, `classic`, `sports`, … in `src/lib/themePresets.ts`). |
| `VITE_LAYOUT_PRESET` | `local` | Home section order (`src/lib/layoutPresets.ts`). |

There are no API keys. **Production:** override only if needed; otherwise `npm run build` uses the same defaults.

- **Revamp inputs:** see `revamp-input/README.md` (folder is gitignored except that README).

## Using Cursor skills

Skills are invoked in **Cursor chat** with **`@site-revamp`** or **`@native-app-revamp`** (type `@` and pick the skill, or paste the name). The project **rule** in `.cursor/rules/revamp-template.mdc` applies automatically when this web repo is open; it encodes layout and theme conventions for the Vite app.

### A. Marketing website only (default)

1. **Create a new repository** for the client (or site): on GitHub use **Use this template** on `site-revamp-template` → create **new repo** → **clone** it locally. Do **not** build multiple unrelated client sites inside the upstream template checkout.
2. **Open the clone** in Cursor (**File → Open Folder**). Run **`npm install`** and **`cp .env.example .env`**; set **`package.json`** `name` to the project slug.
3. Add client materials under `revamp-input/` following `revamp-input/README.md` (`brief.md`, URLs in `urls.txt` or `urls.json`, brand assets, screenshots, optional `theme-preset.txt` / `layout-preset.txt`). For URL-driven revamps, copy **`.cursor/skills/site-revamp/URL_CAPTURE.example.md`** to **`revamp-input/url-capture.md`** and fill it (or let **`@site-revamp`** draft it from live pages).
4. Start a chat and run **`@site-revamp`**, pasting the brief or pointing at `revamp-input/brief.md`.
5. Let the agent update routes, `siteConfig`, themes, and root artifacts **`SITE_MAP.md`**, **`THEME.md`**, **`CHECKLIST.md`** (and **`ASSUMPTIONS.md`** if anything was unclear).

**Exception:** If you are **maintaining the template** for everyone, you may keep this template repo as the workspace and skip step 1—say *template maintenance* in the prompt so **`@site-revamp`** does not insist on a new clone.

### B. Native app only

1. Open your **mobile application repository** as the Cursor workspace root (not this template).
2. **Install the skill in that repo** if it is not already there: copy the folder `native-app-revamp` from this template into the app repo, e.g.  
   `cp -R /path/to/site-revamp-template/.cursor/skills/native-app-revamp /path/to/your-mobile-app/.cursor/skills/`  
   so you have `your-mobile-app/.cursor/skills/native-app-revamp/SKILL.md`.
3. Optionally mirror the same **`revamp-input/`** layout in the mobile repo for briefs, store links, and designs (`revamp-input` can be gitignored the same way).
4. Run **`@native-app-revamp`** in chat with the product brief.
5. The agent should maintain **`APP_FLOW.md`**, **`THEME.md`**, and **`CHECKLIST.md`** at the **mobile repo root** (optional **`STORE.md`**). To bootstrap navigation docs, copy **`APP_FLOW.example.md`** from `.cursor/skills/native-app-revamp/` to the mobile root as **`APP_FLOW.md`** and fill it in (or have the agent do it).

### C. Website and native app

Use **two workspace roots** (two Cursor windows or switch folders when a milestone is done):

1. **Web:** a **dedicated template clone** for the client → **`@site-revamp`** → `SITE_MAP.md`, `THEME.md`, `CHECKLIST.md`.
2. **Mobile:** app repo → **`@native-app-revamp`** → `APP_FLOW.md`, `THEME.md`, `CHECKLIST.md`.

Keep **visual tokens** (palette, type, radii, motion intent) consistent across both `THEME.md` files. The web `THEME.md` in this repo has a short **“Related skills (web + native)”** section that points here.

## GitHub “Use this template”

1. Publish this repo to GitHub.
2. Enable **Template repository** in repo **Settings → General**.
3. New sites: **Use this template** → create a **new repository** (per client) → clone → update `package.json` name → set remote → first commit → open **that clone** in Cursor → add `revamp-input/` materials → run **`@site-revamp`** with the client brief.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview production build |

## Artifacts maintained per project

**Marketing web (this template, `@site-revamp`):**

| File | Purpose |
|------|---------|
| `SITE_MAP.md` | Legacy URL → new route mapping |
| `THEME.md` | Token / brand decisions |
| `CHECKLIST.md` | Ship gate |
| `ASSUMPTIONS.md` | Optional; when inputs were incomplete |

**Native app (mobile repo root, `@native-app-revamp`):** `APP_FLOW.md` (start from `.cursor/skills/native-app-revamp/APP_FLOW.example.md` in the skill you copied), `THEME.md`, `CHECKLIST.md`, optional `STORE.md`. Skill source: `.cursor/skills/native-app-revamp/SKILL.md`.

## Stack

Vite 6, React 19, TypeScript (strict), React Router 7.
