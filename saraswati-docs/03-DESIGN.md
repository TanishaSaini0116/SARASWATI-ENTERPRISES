# DESIGN.md — Design Strategy & Component Sourcing

## 1. Overall Direction
Feel: modern IT/SaaS company (think Sarvam, Linear, Vercel) — NOT a traditional industrial-catalog site.
Confident typography, generous whitespace, subtle motion, dark-accent + light-background sections mixed intentionally.

Explicitly avoid: flat boring grids, stock-photo "corporate template" look, cluttered nav, anything that resembles roplant.net.

## 2. Component Sourcing Map
You gave several reference sites — each has ONE specific job. Do not mix their roles; use each only for what it's good at, and always REBUILD the component in our own code/brand (never copy-paste external code or assets).

| Reference | Use it for | Do NOT use it for |
|---|---|---|
| sarvam.ai | Footer **structure only** (multi-column: brand block + 4-5 link columns + certifications/social row + bottom legal bar) | Do not copy their content, colors, or logos |
| awwwards.com/websites/technology | Product page layout/interaction inspiration (how tech sites present a "product" — big visual, spec reveal, scroll storytelling) | Not for color/typography |
| uiverse.io (modern-mouse-31) | ONE component only: the social media icon button style in the footer | Not for anything else on the page |
| lucion.co, getdesign.md | Overall page composition/design-system reference (getdesign.md literally generates a DESIGN.md-style breakdown per site — useful to understand spacing/type-scale logic) | Not literal color/asset copying |
| mindsparklemag.com, reactbits.dev | Component-level inspiration + reactbits.dev specifically = actual React component code you can adapt (cards, reveals, buttons) | Don't import wholesale — adapt to our tokens |
| motionsite.ai, swishy.ai/ui-elements | **Micro-interaction reference** — how small elements move (toggles, notification pop-ups, button clicks, hover states). These are video/AI-animation tools, not code libraries — watch, then rebuild the motion with Framer Motion/CSS | Not a source of layout or copy-paste code |
| aura.build/components | **Section/block layout inspiration** (hero sections, pricing blocks, feature grids) — an AI landing-page builder's component gallery. Good for structure/composition ideas | Don't export their HTML directly — rebuild in our own components with our tokens |
| Pinterest (moodboard) | General visual moodboarding — collect screenshots of layouts/vibes you like, then pick specific elements from it and slot them into this table with a specific job (like the others) before handing to Antigravity | Never hand Pinterest links directly to the agent — a moodboard has no single "job," it needs to be broken down first |
| tasteskill.dev, github.com/pbakaus/impeccable, github.com/kylezantos/design-motion-principles | **Design/motion principles** — these are reading material, not components. Use them as the "rules" the AI agent should follow when animating anything (timing, easing, restraint) | Don't treat as component libraries |
| colorhunt.co | Final color palette selection (see Section 3) | — |

**Rule for Antigravity:** when building a component, first check this table for which reference (if any) applies, follow the principles from the motion-principles repos for HOW it moves, and always output it as our own component in our own file — not an iframe/embed/copy of the source site.

## 3. Color System
**Status: FINALIZED (locked, do not change without updating this file first).** "Warm Trust" palette + one muted green accent pulled from the real logo, so the site and the logo read as one consistent brand.

| Token | Hex | Role |
|---|---|---|
| `--color-primary` | `#26495C` | Headers, nav bar, primary CTAs/buttons, footer background |
| `--color-accent` | `#6C9BB0` | Links, hover states, secondary icons |
| `--color-green-accent` | `#7A9B6E` | **Sparing use only** — small badges/tags (e.g. "AMC Available", "Certified"), success states, icon accents. This is a muted version of the logo's green, included specifically so the site doesn't feel disconnected from the logo. Never use as a large background or primary button color. |
| `--color-soft-bg` | `#D9C9A3` | Alternate/soft section backgrounds, card backgrounds |
| `--color-bg` | `#F7F3EA` | Main page background |
| `--color-text` | `#1C3444` | Body text (deep navy-charcoal) |

Define these ONCE in `styles/tokens.css` / `tailwind.config`. Every component references the token — never a hardcoded hex. This is the final palette — no further placeholder/exploration needed.

**Logo compatibility note:** the logo uses navy blue + sky blue + green + dark gray text. This palette's primary/accent blues sit in the same hue family (just more refined/muted), and the green accent token exists specifically to keep the logo's green represented on the site — just used sparingly, not as a dominant color, to preserve the "light premium" restraint.

## 4. Typography
- Headings: Space Grotesk or Sora
- Body: Inter or IBM Plex Sans
- Set as a type scale (h1–h6, body, small) in the same token file as colors — don't set font sizes ad-hoc per component.

## 5. Hero Section — required on every page
Every route needs a hero at the top with:
- Eyebrow label (small tag above headline)
- Headline (page-specific, not generic)
- Subtext (1-2 lines)
- Primary CTA + optional secondary CTA
- Visual (product image / illustration / relevant graphic)

Build ONE reusable `<PageHero />` component that takes props (`eyebrow`, `title`, `subtitle`, `ctaLabel`, `ctaHref`, `visual`) — every page imports and configures it. Do not hand-build a new hero markup per page.

## 6. The 3D RO Product Effect (signature element)
Approach (matches what's already working — keep this):
1. Take a real RO plant/product photo.
2. Use an AI image tool (Gemini or similar) to generate a labeled, part-by-part breakdown / pseudo-exploded view of that same product.
3. Slice that output into layered image assets (each part as its own layer/image).
4. On the Home page and relevant Product Detail pages, animate these layers on scroll — parts separate and labels fade in as the user scrolls down (Framer Motion `useScroll`/`useTransform`, or GSAP ScrollTrigger).
5. This is a 2.5D layered-image technique, NOT full Three.js/WebGL 3D. True 3D is a Phase 2 upgrade once real CAD/product photography is available — don't let the agent over-build this into a heavy 3D engine for v1.

## 6.1 "Fanned Card Stack" Scroll Effect (second signature element — from video reference)
Reference: a premium real-estate site (screen-recorded, shared by client) using a distinct effect worth adopting:
- **Hero:** full-bleed cinematic photo background, minimal top nav overlaid on the image, large editorial-style headline positioned bottom-left (not centered) — feels high-end and confident, not a generic centered hero.
- **Section transition effect:** a stack of image cards, slightly rotated/offset like a fanned hand of cards, animates into an arranged layout as the section scrolls into view. This appears alongside a text block with a short bullet list (in the reference: "Specifications" / "Highlights").

**Where we use this on our site:**
- **Product Detail pages** — Technical Specifications section: fan out real product/installation images as the spec bullet list fades in beside them.
- **Case Studies** — fan out before/after or installation photos as the results/stats text appears.
- **Industries/Gallery sections** — same fanned-card treatment for project photo galleries.

**Build notes for the agent:**
- Implement with Framer Motion (`useScroll` + `useTransform` on each card's rotate/x/y/opacity) — no need for a 3D engine, this is a 2D-cards-with-rotation-and-offset illusion, not real 3D.
- Keep card count small (3-5 images) per instance so it stays performant.
- Use real product/installation photos here once available — do not fake this with stock imagery long-term.
- This effect and the RO Exploded-View (Section 6) are the site's two signature motion moments — don't add a third competing "wow" animation; restraint elsewhere keeps these two impactful.

## 7. Motion Rules (from the principles repos)
**Updated: cinematic, scroll-driven motion is now the standard across the ENTIRE site, not limited to one or two signature moments.** See `CINEMATIC-SCROLL-SPEC.md` for the full per-page breakdown — every page template gets a scroll-linked treatment (pinned reveals, horizontal scroll rows, fanned card stacks, etc.), built on a single shared Lenis + GSAP foundation.

- Every scroll-reveal uses the same easing/duration across the whole site — consistency > novelty.
- Motion should support meaning (e.g., parts separating = "here's what's inside"), never be decorative-only.
- Respect `prefers-reduced-motion` — provide a static fallback, sitewide, not just on the signature elements.
- Hover states: subtle lift + shadow, not flashy color jumps.
- **Exception — pull back on Resources/FAQ/Estimator/Contact:** these are utility/conversion pages. Keep motion to simple reveal-on-scroll here; heavy pinning/scrubbing works against a visitor trying to read an answer or submit a form. Restraint on these specific pages is what makes the cinematic treatment elsewhere feel intentional rather than exhausting.

## 8. Footer Spec (structure from sarvam.ai, styled in our own brand)
- Row 1: Brand block (logo + one-line tagline) + 4-5 link columns (Service, Industries, Company, Resources, Legal)
- Row 2: Certifications/trust badges + social icons (using the uiverse "modern mouse" hover style)
- Row 3: Address / contact line + copyright

## 9. What NOT to do
- Don't literally copy any external site's code, images, or copy text.
- Don't introduce a new animation library per component — standardize on Framer Motion (+ GSAP only for the exploded-view scroll sequence).
- Don't let 3D/animation work block core page functionality — ship functional pages first, then layer in signature motion.
