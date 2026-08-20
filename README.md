# xnjrealestate.com

Astro 5 static site on Cloudflare Pages. English + Simplified Chinese at launch;
Korean and Spanish scaffolded in the i18n config.

## Run

    pnpm install
    pnpm dev

## Deploy

Push to `main`. Either Cloudflare's Git integration or the GitHub Actions
workflow will build and deploy — pick ONE, not both, or every push
double-deploys. If you use Cloudflare's Git integration, delete
`.github/workflows/deploy.yml`.

## Cloudflare Pages build settings

| Field | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `pnpm build` |
| Output directory | `dist` |
| Production branch | `main` |
| Env var | `NODE_VERSION` = `22` |

## GitHub secrets (only if using Actions)

- `CLOUDFLARE_API_TOKEN` — Account → Cloudflare Pages → Edit
- `CLOUDFLARE_ACCOUNT_ID`

## Before launch

See `COPY-TODO.md`.

## Adding a locale

1. Add the code to `locales` in `astro.config.mjs` and `src/i18n/utils.ts`
2. Add `src/i18n/<code>.json`
3. Mirror content directories using the SAME slug per file
