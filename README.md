# DPO Privacy Compliance Website

Hebrew-first RTL static website for a DPO / privacy-law / cybersecurity-compliance service.

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
npx playwright test
```

## Deployment

This repo deploys to GitHub Pages through `.github/workflows/deploy-pages.yml`.

The Vite config uses `/` locally and switches to the repository subpath during production builds on GitHub Actions, so assets resolve correctly from the GitHub Pages project URL.
