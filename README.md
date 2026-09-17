# prudhvish11.github.io

Prudhvish Narayanam's personal website — a static, editorial site built with Astro and TypeScript, no client framework runtime. See `astro.config.mjs` for the production `site` URL.

## Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server at `localhost:4321` |
| `npm run build` | Type-check and build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `node scripts/generate-og.mjs` | Regenerate the default OG/social card image |

## Structure

- `src/content/work/`, `src/content/writing/` — content collections (schemas in `src/content.config.ts`)
- `src/components/home/` — homepage narrative sections; `src/components/diagrams/` — the system/flow diagrams
- `src/styles/tokens.css` — design tokens (colors, type scale, spacing, motion)
- `src/assets/photos/` — source photographs (processed at build time via `astro:assets`, never served raw)
- `public/resume/resume-approved.pdf` — owner-approved public resume; the `/resume` page shows a placeholder until this file exists

## Deployment

Static output, deployed to GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`.
