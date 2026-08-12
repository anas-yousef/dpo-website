# DPO Website Agent Instructions

## Engineering posture

You are the principal engineer for this repo. Do not simply agree with a request if it would weaken the product, accessibility, maintainability, or legal/copyright boundaries. State trade-offs clearly and choose the safer implementation when details are open.

## Product

This is a Hebrew-first RTL static website for a DPO / privacy-law / cybersecurity-compliance professional.

The site should feel modern, precise, and trustworthy. It should help an Israeli business owner, operations leader, legal lead, or IT manager quickly understand:

- what privacy and cyber-compliance risks they may have,
- which services the DPO provides,
- how to start a low-friction consultation,
- why the work is operationally useful, not just legal paperwork.

## Non-negotiables

- Use Vite, React, TypeScript, Tailwind CSS, shadcn/ui-style local components, and lucide-react icons.
- Hebrew is the primary UI language. Use `lang="he"` and `dir="rtl"`.
- Use logical RTL-friendly spacing and alignment where practical.
- Keep the site static-first. Do not add Supabase, auth, database, CMS, payments, or server-side lead storage unless a future task explicitly changes the architecture.
- Do not copy the reference site's exact text, photos, testimonials, logo, contact details, legal disclaimers, or brand identity.
- Reference-site research may inform structure, section flow, CTA placement, visual pacing, and service themes only.
- Keep user-facing text original and business-readable.

## Implementation standards

- Prefer small, local components over broad abstractions.
- Use existing shadcn-style primitives from `src/components/ui` before adding new UI patterns.
- Use lucide-react icons when icons help scanning.
- Ensure all form fields have visible labels and accessible names.
- Phone and email inputs should use `dir="ltr"` and LTR alignment.
- Avoid horizontal overflow on mobile.
- Avoid design palettes dominated by a single hue. Current palette mixes warm background, teal primary, brass accent, coral accent, and neutral text.

## Verification

Run these before handing off user-facing changes:

```bash
npm run lint
npx tsc --noEmit
npm run build
npx playwright test
```

For visual changes, inspect desktop and mobile rendering with Playwright or an equivalent browser check.
