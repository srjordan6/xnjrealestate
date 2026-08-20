# xnjrealestate.com

Astro 5 static site on Cloudflare Pages. English + Simplified Chinese at launch;
Korean and Spanish scaffolded in the i18n config.

## Run

    pnpm install
    pnpm dev

## Deploy

Cloudflare Workers Builds is connected to this repo. Push to `main` to deploy;
non-production branches get preview URLs. No GitHub secrets needed — Cloudflare
manages its own token.

The GitHub Actions workflow is parked at `.github/deploy.yml.disabled`. Do not
move it back into `.github/workflows/` unless you also disconnect Workers
Builds, or every push will deploy twice.

## Cloudflare Workers Builds settings

| Field | Value |
| --- | --- |
| Build command | `pnpm install && pnpm build` |
| Deploy command | `npx wrangler deploy` |
| Production branch | `main` |
| Non-production branch builds | On |
| Env var | `NODE_VERSION` = `22` |

Static assets are served from `dist` per `wrangler.toml`.

## Before launch

See `COPY-TODO.md`.

## Adding a locale

1. Add the code to `locales` in `astro.config.mjs` and `src/i18n/utils.ts`
2. Add `src/i18n/<code>.json`
3. Mirror content directories using the SAME slug per file
