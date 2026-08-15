# DPO Website Documentation

This repo contains a static Hebrew RTL website for a DPO / privacy-law / cybersecurity-compliance service.

## Current scope

- Vite + React + TypeScript
- Tailwind CSS
- shadcn/ui-style local primitives
- lucide-react icons
- Hebrew-first RTL layout
- Static contact section with real contact channel pending
- Playwright smoke and visual sanity tests

## Out of scope

- Supabase
- authentication
- database
- CMS
- payments
- backend lead storage

## Key docs

- `docs/research/reference-site-inventory.md` - reference-site structure and findings, paraphrased only.
- `docs/features/public-website/README.md` - public website feature scope and acceptance criteria.
- `docs/design/visual-direction.md` - visual direction, palette, CTA strategy, and responsive behavior.

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
npx playwright test
```
