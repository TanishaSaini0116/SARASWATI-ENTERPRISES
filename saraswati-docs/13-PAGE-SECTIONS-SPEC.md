# 13-PAGE-SECTIONS-SPEC.md — Required Sections Per Page

## Why this file exists
Right now only the Home page has sections built (and even those aren't fully correct — see notes below). Every other page (About, Service, Product Detail, Industries, Case Studies, Resources, Contact, FAQ, Estimator) currently has NO defined sections. This file is the checklist — for every page, this is exactly what sections must exist, in this order. Use this to tell Antigravity what's missing and get it built page by page.

**How to use this file:** pick one page at a time, copy its section list below into your message to Antigravity along with the instruction "build these sections for [page name], following our existing design tokens, motion primitives (CINEMATIC-SCROLL-SPEC.md), and content (CONTENT.md)." Don't ask for all pages at once — go one at a time and check each before moving to the next (per 00-MASTER-WORKFLOW.md).

---

## HOME (`/`) — ⚠️ exists but needs fixing, don't rebuild from scratch
1. Header / Nav
2. Hero — cinematic image-sequence (see `CINEMATIC-SCROLL-SPEC.md`)
3. Trust Bar — animated counters (15+ Years, 500+ Installations, 50+ Industries Served)
4. Services Overview — grid of 6 service category cards
5. Story section — pinned text reveal of positioning statement
6. Industries Overview — grid/row of industries served
7. Featured Case Study — fanned card stack treatment
8. Testimonials — **locked structure, see `TESTIMONIALS-FOOTER-LOCKED-SPEC.md`**
9. Final CTA band
10. Footer — **locked structure, see `TESTIMONIALS-FOOTER-LOCKED-SPEC.md`**

*Action needed: compare what's currently built against this list — flag which of #2-9 are missing or incomplete, keep #8 and #10 exactly as they are.*

---

## ABOUT (`/about`) — ❌ not built yet
1. Header / Nav
2. Hero — mission statement headline + subtext
3. Our Story — pinned text reveal (company history)
4. Company Journey Timeline — scroll-animated milestones
5. Certifications — badge grid
6. Meet the Team — team member cards
7. CTA band
8. Footer (locked structure)

---

## PRODUCTS HUB (`/products`) — ❌ not built yet
1. Header / Nav
2. Hero — intro to products
3. Category selector — horizontal-scroll row: Industrial / Commercial / Residential
4. Grid of products within the selected category
5. "Not sure what you need?" CTA banner
6. Footer (locked structure)

---

## PRODUCT DETAIL (`/products/[category]/[slug]`) — ❌ not built yet
1. Header / Nav
2. Breadcrumb
3. Hero block — product name, image, short tagline
4. Description
5. Key Features — icon grid
6. Technical Specifications — fanned card stack (images + spec list)
7. Related Products — carousel
8. CTA — "Request a Quote"
9. Footer (locked structure)

---

## SERVICES HUB (`/services`) — ❌ not built yet
1. Header / Nav
2. Hero — intro to services (Installation, AMC & Maintenance, Consultation, Turnkey Project Setup, Spare Parts & Support)
3. Grid of 5 service cards
4. CTA banner
5. Footer (locked structure)

---

## SERVICE DETAIL (`/services/[slug]`) — ❌ not built yet
Lighter template than Product Detail — no technical specs table, this is about process and reassurance, not a physical spec sheet.
1. Header / Nav
2. Breadcrumb + Hero — service name, short tagline
3. Description — what this service is and why it matters
4. "What's Included" — icon list or steps (e.g. for AMC: response time commitment, what's covered, visit frequency)
5. CTA — "Request This Service" / "Get a Quote"
6. Footer (locked structure)

---

## INDUSTRY / SECTOR DETAIL (`/industries/[slug]`) — ❌ not built yet
1. Header / Nav
2. Breadcrumb + Hero
3. "Challenges This Industry Faces"
4. Recommended Solutions
5. Mini case study or testimonial specific to this industry
6. CTA
7. Footer (locked structure)

---

## CASE STUDY DETAIL (`/case-studies/[slug]`) — ❌ not built yet
1. Header / Nav
2. Breadcrumb + Hero — result headline
3. Problem / Solution / Results structure
4. Numbers/stats visualization
5. Related case studies
6. CTA
7. Footer (locked structure)

---

## RESOURCES / BLOG ARTICLE (`/resources/[slug]`) — ❌ not built yet
1. Header / Nav
2. Breadcrumb + Article hero
3. Article content
4. Related articles
5. Soft CTA
6. Footer (locked structure)
*(Keep motion light here per CINEMATIC-SCROLL-SPEC.md — reveal-on-scroll only.)*

---

## ESTIMATOR TOOL (`/tools/estimator`) — ❌ not built yet
1. Header / Nav
2. Hero
3. Calculator widget
4. Result + CTA
5. Footer (locked structure)
*(Keep motion light here.)*

---

## CONTACT (`/contact` + `/contact/[type]`) — ❌ not built yet
1. Header / Nav
2. Hero
3. Segment-specific form (industrial-rfq / commercial-quote / amc-inquiry / general)
4. Contact info + map side panel
5. Mini-FAQ (optional)
6. Footer (locked structure)
*(Keep motion light here.)*

---

## FAQ (`/faq`) — ❌ not built yet
1. Header / Nav
2. Hero
3. Accordion Q&A list
4. Footer (locked structure)
*(Keep motion light here.)*
