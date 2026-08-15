# Reference Site Inventory

Reference inspected: `https://www.marianadan-itlawyer.com/`

Inspection date: August 12, 2026, Asia/Jerusalem workspace time.

## Tooling status

- Playwright: installed and validated. Used successfully for rendered DOM extraction and desktop/mobile full-page screenshots.
- just-scrape: installed and validated as a CLI, but `SGAI_API_KEY` is missing. The CLI prompted for a ScrapeGraph API key, so ScrapeGraph extraction was not used.
- Browser Use: installed and CLI help validated. Live inspection was blocked by local Chrome remote-debugging permission. The tool opened the Chrome permission setup page and requires a user click before local control can proceed.
- Scrapfly skills: installed. `SCRAPFLY_API_KEY` is missing, so Scrapfly was not used. No escalation was needed because Playwright completed the capture.

Raw Playwright captures are in `.reference-capture/` locally and ignored by git.

## Section Order

Observed section flow, paraphrased:

1. Accessibility overlay and skip links load before the visible page.
2. Header with social links, primary navigation, and a compact professional brand area.
3. Hero with firm positioning, portrait-led authority signal, short introductory promise, and consultation CTA.
4. Services/expertise block with four core service cards.
5. Repeated high-intent CTA encouraging business protection.
6. Testimonials/proof section with multiple short client quotes and a link to more reviews.
7. Education section explaining regulatory exposure, fines, and why privacy/security readiness matters.
8. Values or mindset section that frames what the firm cares about.
9. Self-assessment section with a numbered list of diagnostic questions.
10. Final CTA and lead form.
11. Footer with contact details, social links, privacy policy, accessibility statement, and copyright.

## Navigation And CTA Strategy

Navigation labels are simple and broad: home, about, media, expertise/services, and Q&A. The header also exposes social/contact channels through icon links.

CTA pattern, paraphrased:

- A consultation CTA appears in the hero.
- Service cards include links for deeper information.
- Strong repeated CTAs appear after services, after education, and near the self-assessment section.
- Testimonials include a separate path to more public reviews.
- The final CTA drives to a lead form with name, email, phone, message, consent/disclosure checkbox, and submit action.

The new site keeps the effective repeated-CTA rhythm but reduces visual heaviness and improves scanability.

## Content Themes

Themes observed, paraphrased:

- External CISO/DPO support for organizations with privacy/security obligations.
- Legal documents for websites, digital services, and data collection.
- Regulatory compliance, security levels, assessments, and audits.
- Employee and manager training.
- Cyber/legal risk, fines, class actions, and business disruption.
- Short self-diagnosis questions that push visitors toward a consultation.

The new site uses these as service-theme inspiration only and rewrites all copy from scratch.

## Visual Style Observations

- Dark navy and brass/gold dominate the brand expression.
- Hero uses a portrait and framed message panel.
- Typography mixes serif headline styling with simpler body text.
- Services sit on a dark block with icon-style visuals.
- Several sections use centered long-form text, which makes scanning harder.
- Third-party cookie and accessibility overlays can interrupt the reading flow.
- The visual system feels older and heavier than the cleaner legal-tech direction desired for this repo.

## Mobile And Responsive Observations

The Playwright mobile capture showed a fixed-width page canvas of roughly desktop width rather than a true phone reflow. This causes the page to appear scaled and dense on mobile. The cookie banner can cover service content, and the header/navigation remains visually compressed.

Design implication for this repo: build mobile-first with real reflow, no horizontal overflow, readable Hebrew line lengths, and a usable mobile menu.

## Lead Form Behavior

The reference form appears near the bottom and asks for name, email, phone, and message. It includes a disclosure/consent checkbox and a submit button. Placeholders appear to carry much of the input labeling, which is weaker for accessibility than visible labels.

The new site uses visible labels, LTR direction for phone/email inputs, and a static-site message explaining that no data is submitted yet.

## SEO And Accessibility Observations

- The page declares Hebrew language, but the inspected HTML did not expose a document-level `dir` value.
- There are skip links and a third-party accessibility widget.
- Some heading hierarchy is noisy because widget headings appear before core page headings.
- Some images have useful alt text, while small decorative/social images are mixed.
- The mobile fixed-width layout is a usability and accessibility concern.
- Long centered text blocks may be hard to scan and can be harder at increased zoom.

## Asset Inventory

Observed asset categories only; no assets were copied:

- Brand logo image.
- Professional portrait image.
- Social media icon images.
- Animated service illustrations/GIFs.
- Decorative quote marks and background imagery.
- Third-party accessibility widget assets.
- Cookie/consent management banner.

The new site now uses the DPO-provided portrait at `public/images/amal-bransi-dpo.jpg`, a generated branded social preview at `public/images/amlawtech-og.png`, and lucide-react icons. No reference-site assets are used.

## Legal And Copyright Note

The reference site was inspected only for structure, flow, CTA placement, visual pacing, and service themes. This repo does not copy its exact text, photographs, testimonials, logo, contact details, legal disclaimers, or brand identity. The site must not publish invented testimonials or fake contact flows.
