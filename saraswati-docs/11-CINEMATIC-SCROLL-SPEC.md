# CINEMATIC-SCROLL-SPEC.md — Site-Wide Premium Motion System

## What changed
Earlier this spec only covered the Home page hero. **This is now the motion standard for the entire site** — every page template gets a cinematic scroll treatment, not just Home. This means the scroll system (Lenis + GSAP ScrollTrigger) is now a FOUNDATIONAL piece of the build, set up early, not a late bolt-on.

---

## Step 0 — Assets you must prepare BEFORE giving this to Antigravity
1. Pick your best real RO plant/facility photo (or best available placeholder) for the Home hero sequence.
2. Run it through an image-to-video AI tool (e.g. Kling AI) with a simple prompt: slow zoom-in, or slow camera pan/orbit. 5-8 seconds is enough.
3. Extract the video into numbered frames (`ro-plant_0001.webp` ... `_0120.webp`) — Antigravity can do this with `ffmpeg` if you hand it the video.
4. Compress every frame with EZGIF/Squoosh.
5. Place the sequence in `/public/seq/`.
6. Collect at least 3-5 real (or best available) images per page for the fanned-card and gallery treatments below (product photos, installation photos, team photo, etc.) — these sections look weak with generic stock, so prioritize getting real photos even if only a few exist right now.

Without step 0, Antigravity has nothing to scrub through for the hero — build everything else first, add the hero sequence once the asset exists.

---

## Step 1 — Global Motion Foundation (build this FIRST, right after design tokens)

```
Set up a site-wide smooth-scroll and animation foundation in this Next.js 14 (App Router) + TypeScript + Tailwind project. Install Lenis for smooth scrolling and GSAP + ScrollTrigger for scroll-driven animation. Create a `LenisProvider` wrapping the root layout, sync it with GSAP's ticker (lenis 'scroll' event drives ScrollTrigger.update, gsap.ticker drives requestAnimationFrame, lagSmoothing(0)). This must be in place before any page-level animation is built, since every page will use it.

Also create these reusable primitives so every page's motion stays consistent instead of custom-built per page:
- `<PinnedSection>` — wraps a section, pins it in place while its internal content animates as the user scrolls through it.
- `<RevealOnScroll>` — fade + slight upward slide, triggered once a section enters the viewport, same easing/duration everywhere.
- `<HorizontalScrollRow>` — translates a row of cards left as the user scrolls down, for gallery-style sections.
- `<FannedCardStack>` — 3-5 images in a fanned/offset stack that animate into an arranged layout as the section scrolls into view (rotate/x/y/opacity via scroll-linked transforms).
- `useImageSequence` hook — for canvas-based frame-sequence scrubbing (used by the Home hero).

All of these must respect `prefers-reduced-motion` (fall back to a simple static/fade appearance) and must degrade to lighter, non-pinned versions on mobile — no heavy scroll-scrubbing on small screens.
```

---

## Step 2 — Per-Page Cinematic Treatment
Once the foundation above exists, apply this treatment per page template (from SITEMAP.md). Give these to Antigravity as separate prompts, one page/template at a time — not all at once — so each can be checked before moving to the next.

### Home
- Hero: canvas image-sequence scrub (see Step 0 assets), headline fades as user scrolls into the image, loading screen with % while frames preload.
- `STORY` section directly after hero: `<PinnedSection>` with word-stagger text reveal of our positioning statement ("Compliance-Certified Water & Wastewater Systems, Engineered for Uptime").
- Trust bar: animated number counters (as already planned).
- Services overview: `<HorizontalScrollRow>` of the 6 service category cards.
- Featured case study: `<FannedCardStack>` of project photos beside the results text.
- Rest (industries, testimonials, final CTA): `<RevealOnScroll>`.

### About
- Hero: `<RevealOnScroll>` headline + mission statement (no need for the heavy canvas sequence here — reserve that for Home only).
- Company story: `<PinnedSection>` with staggered text reveal.
- Milestone timeline: pinned horizontal or vertical timeline, each milestone revealing as the user scrolls through the pin.
- Certifications, team: `<RevealOnScroll>` grid.

### Service Hub (`/service`)
- Hero: `<RevealOnScroll>`.
- Category tabs (Industrial/Commercial/Residential): `<HorizontalScrollRow>` — a pinned section that translates the category cards left as the user scrolls, each card parallaxing slightly.

### Product/Service Detail (`/service/[category]/[slug]`)
- Hero block: `<RevealOnScroll>`.
- Technical Specifications section: `<FannedCardStack>` of product/installation images beside the spec list.
- Related products carousel: standard horizontal carousel with `<RevealOnScroll>` entrance.

### Industry/Sector Detail
- Hero + "Challenges this industry faces": `<RevealOnScroll>`.
- Recommended solutions: `<FannedCardStack>` if relevant images exist, otherwise `<RevealOnScroll>` grid.

### Case Study Detail
- Hero (result headline): `<RevealOnScroll>`.
- Problem/Solution/Results: `<FannedCardStack>` of before/after or installation photos beside the results stats.
- Numbers/stats visualization: animated counters, same as Trust Bar.

### Resources (Blog) / FAQ / Estimator / Contact
- Keep these lighter: `<RevealOnScroll>` only. These are utility/conversion pages — heavy motion here can slow down the exact moment a visitor is trying to submit a form or read an answer. Restraint matters more here than anywhere else on the site.

---

## Step 3 — What NOT to carry over from the real-estate reference
- Their warm neutral luxury palette (bone/taupe/charcoal/gold) — we keep OUR palette (from `styles/tokens.css`, once finalized via Color Hunt).
- Their serif display font — we keep Space Grotesk/Sora + Inter as already decided in DESIGN.md.
- Floor plan tabs, residence types, price-from listings — our equivalent is the Service category tabs, not a new feature.
- Full 3D orbitable GLB model — that's a Phase 2 item requiring real CAD; the image-sequence technique is the v1-appropriate version of "3D scroll."

## Step 4 — Revised Build Order (replaces the order in AGENT-BRIEF.md)
1. Project scaffold (Next.js + TS + Tailwind + shadcn)
2. Design tokens (`styles/tokens.css`)
3. **Global motion foundation (Step 1 above)** — Lenis + GSAP + the five reusable motion primitives
4. Shared layout: `Header.tsx`, `Footer.tsx`, `PageHero.tsx`
5. Home page (with full cinematic treatment, including hero sequence once assets are ready)
6. About page (with its cinematic treatment)
7. Service hub + category pages + one working product detail template (with their treatments)
8. Contact page + working form → `/api/leads`
9. Remaining supporting routes (industries, case-studies, resources, estimator, faq)
10. Final mobile/performance/reduced-motion pass across every page

**Note:** because the motion foundation is now built early (step 3), each page gets its cinematic treatment DURING its own build step, not as a separate pass at the end. Only the Home hero image-sequence is still asset-dependent and may need to be slotted in once footage/frames are ready — everything else can be built immediately using the primitives from Step 1.
