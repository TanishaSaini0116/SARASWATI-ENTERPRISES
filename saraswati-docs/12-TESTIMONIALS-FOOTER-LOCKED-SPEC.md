# TESTIMONIALS-FOOTER-LOCKED-SPEC.md

## Why this file exists
The base website is already built (confirmed working on localhost). The Testimonials section and Footer are **structurally final** — do not redesign, restructure, reorder, or change their content/form. The only allowed change is adding cinematic motion on top, using the motion primitives from `CINEMATIC-SCROLL-SPEC.md`. If any future prompt to Antigravity conflicts with the locked structure below, this file wins.

---

## 1. Testimonials Section — Locked Structure
Keep exactly as-is:
1. **Top row:** horizontal image gallery (project/office/installation photos), with left/right arrow navigation and dot pagination below it.
2. **Section label:** small "Testimonials" pill/badge.
3. **Heading:** "Trusted by creatives and leaders from various industries."
4. **Testimonial cards row:** 3 cards shown side by side, each containing:
   - 5-star rating row
   - Quote text
   - Circular avatar with initials
   - Name
   - Role + company (e.g. "Vikram Singh — Resort Manager", "Rajesh Kumar — Plant Head", "Dr. Sunita Sharma — Quality Director, MedCure Pharma")
5. Small circular scroll/next control near the bottom-left of the section, floating WhatsApp button bottom-right (site-wide, not specific to this section).

### Cinematic enhancement allowed here (motion only, not layout)
- Top image gallery → wrap with `<HorizontalScrollRow>` so the images parallax slightly as the row scrolls/drags, instead of a plain static carousel.
- "Testimonials" badge + heading → `<RevealOnScroll>` word-stagger reveal (matches the Home "Story" section treatment).
- Testimonial cards → `<RevealOnScroll>` with a slight stagger between the 3 cards (card 1 reveals, then card 2 slightly after, then card 3) rather than all three appearing at once.
- Card hover: subtle lift + shadow (per existing DESIGN.md hover rule) — no new hover behavior beyond that.

---

## 2. Footer — Locked Structure
Keep exactly as-is:
1. **Top block:** logo + company blurb on the left; Newsletter signup (email input + Submit button) on the right.
2. **Illustration band:** the light-blue city/skyline illustration graphic spanning the width, directly below the top block.
3. **Four link columns:** Quick Links, Customer Care, Company Links, Connect With Us (with LinkedIn, Twitter/X, YouTube, Instagram icons).
4. **Contact line:** email + phone, near the Connect With Us column.
5. **Large wordmark:** oversized "SARASWATI ENTERPRISES" text as a decorative watermark-style element near the bottom.
6. **Copyright line:** "© 2026 SARASWATI ENTERPRISES. All Rights Reserved."

### Cinematic enhancement allowed here (motion only, not layout)
- Newsletter block + illustration band → `<RevealOnScroll>` fade-up as the footer enters the viewport.
- Four link columns → `<RevealOnScroll>` with a light stagger column-by-column.
- Large wordmark → a slow, subtle reveal (e.g. gradient sweep or soft fade-in from lower opacity to full), NOT a bouncy or fast animation — this is a quiet brand moment at the end of the page, not another "wow" beat. Keep it understated.
- Social icons → the existing icon-button hover treatment (from the uiverse.io reference already logged in DESIGN.md's component sourcing table) stays as-is; do not add extra motion on top of it.

---

## 3. Instruction for Antigravity
When enhancing these two sections, the prompt should explicitly say:

```
Do not change the structure, layout, order, or content of the Testimonials section or the Footer — they are final. Only add scroll-triggered motion using the existing <RevealOnScroll> and <HorizontalScrollRow> primitives from the motion foundation, exactly as described in TESTIMONIALS-FOOTER-LOCKED-SPEC.md. Do not introduce new sections, remove any existing element, or restyle colors/typography beyond what's already in styles/tokens.css.
```

This keeps the enhancement scoped to motion only and prevents Antigravity from "helpfully" redesigning something that's already approved.
