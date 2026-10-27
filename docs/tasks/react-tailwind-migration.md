# React + Tailwind Migration

> Branch: `feature/react-tailwind-migration`

## Goal
Port the static landing page (HTML/CSS/vanilla JS) to **Vite + React 19 + React Router 7 + Tailwind CSS v4**
with **zero visual change**, and add internal service routes (`/procedimentos/:slug`).

## Decisions
| Topic | Decision |
|-------|----------|
| Tailwind | v4 via `@tailwindcss/vite`, tokens in `@theme static` |
| Preflight | **Disabled** (only `theme` + `utilities` layers) — preflight would resize classless `h2/h3` and change inline SVG layout |
| Legacy CSS | `src/styles/globals.css` imported into `@layer components` → utilities still win, same as inline styles did |
| Inline styles | Replaced 1:1 by Tailwind utilities (arbitrary values where exact rgba/clamp matters) |
| `.container` | `@source not inline("container")` so Tailwind's container utility never overrides ours |
| Animations | `gsap` + `ScrollTrigger`, `lenis`, `motion` from npm (no vendored bundles) |
| Old site | Moved to `legacy/` (served by `npm run legacy` for side-by-side comparison) |

## Structure
```
src/
  main.jsx, App.jsx (router)
  styles/index.css (Tailwind layers + @theme), globals.css (design system)
  data/        content (sections, procedures, hero fan, faq, course…)
  context/     SmoothScrollContext (Lenis + GSAP ticker)
  hooks/       header scroll, nav shift, scrollspy, drawer, reveal, media query, meta
  components/  layout/, sections/, ui/ (icons, SectionLink)
  pages/       HomePage, ProcedurePage, NotFoundPage
```

## Tasks
- [x] Branch + move legacy files
- [x] Scaffold Vite/React/Tailwind
- [x] Port design system + tokens
- [x] Componentize layout + all landing sections
- [x] Port interactivity (Lenis, scrollspy, drawer springs, FAQ, GSAP reveals)
- [x] Procedure pages + routing
- [x] Build + visual diff legacy vs React (desktop/mobile) via browser subagent

## Verification
- `npm run build` passes
- Screenshot diff legacy vs React at 1440px and 390px (animations frozen)
- Manual: drawer, scrollspy, edge rail, FAQ, anchor navigation from internal pages
