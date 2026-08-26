# 14-DAILY-PLAN.md — Your 2-Week, Day-by-Day Roadmap

**Rule: don't skip ahead. Do today's day, check the "Done when" line, then move to tomorrow. If a day runs long, push everything back by that many days — don't compress by skipping steps.**

Decision made: **continuing the existing base site, not restarting from scratch.**

---

## DAY 1 — Motion Foundation + Color Decision
**Goal:** the site's animation "engine" exists, and colors are finally locked.

1. Open `11-CINEMATIC-SCROLL-SPEC.md` → copy the **Step 1 "Global Motion Foundation"** code block.
2. Paste it into Antigravity as one message.
3. While that runs: go to colorhunt.co (and your Pinterest board), pick your final 4-5 color palette.
4. Tell me the hex codes → I update `03-DESIGN.md` + `08-BRAND-GUIDELINES.md` for you.
5. Give Antigravity: "update the color tokens in styles/tokens.css to [hex codes]."

**Done when:** Lenis/GSAP is installed and working (page scrolls smoothly), the 5 motion components exist in the codebase, and the site's colors reflect your final palette everywhere.

---

## DAY 2 — Fix the Home Page (Part 1)
**Goal:** Hero, Trust Bar, and Services Overview are correct.

1. Open `13-PAGE-SECTIONS-SPEC.md` → **HOME** section, items 1-4.
2. Open your live site, compare against this list.
3. Tell Antigravity exactly what's missing/wrong for items 2 (Hero), 3 (Trust Bar), 4 (Services Overview) — reference `06-CONTENT.md` for the real copy to use.
4. Hero: use a placeholder static image for now (real cinematic sequence comes Day 12) — just get layout + headline + CTA right today.

**Done when:** Hero, Trust Bar, and Services grid all look correct and match the content doc.

---

## DAY 3 — Fix the Home Page (Part 2) + Enhance Testimonials/Footer
**Goal:** Home page fully complete; Testimonials/Footer get their motion upgrade.

1. Continue `13-PAGE-SECTIONS-SPEC.md` HOME items 5-7 (Story section, Industries Overview, Featured Case Study) and item 9 (Final CTA band).
2. Open `12-TESTIMONIALS-FOOTER-LOCKED-SPEC.md` → copy the instruction block at the bottom.
3. Give that to Antigravity as its own message (separate from step 1's work).

**Done when:** Home page has all 10 sections from the spec, and Testimonials/Footer are animated but visually unchanged in structure.

---

## DAY 4 — About Page
**Goal:** full About page built.

1. Open `13-PAGE-SECTIONS-SPEC.md` → **ABOUT** section (all 8 items).
2. Give Antigravity that list + reference `06-CONTENT.md` (About Page Content Direction) + `03-DESIGN.md` (cinematic treatment for About, per `11-CINEMATIC-SCROLL-SPEC.md`).

**Done when:** About page renders with all 8 sections, mobile and desktop.

---

## DAY 5 — Products Hub + Services Hub
**Goal:** `/products` and `/services` hub pages both built.

1. Open `13-PAGE-SECTIONS-SPEC.md` → **PRODUCTS HUB** section (6 items) and **SERVICES HUB** section (5 items).
2. Give both to Antigravity, referencing `06-CONTENT.md` for the product categories/service list and `02-SITEMAP.md` for the exact route structure.

**Done when:** `/products` shows the category selector and grids, `/services` shows the 5 service cards, and links work (even if detail pages don't exist yet).

---

## DAY 6 — Product Detail Template + Service Detail Template
**Goal:** both reusable detail-page templates work for at least one real example each.

1. Open `13-PAGE-SECTIONS-SPEC.md` → **PRODUCT DETAIL** section (9 items) and **SERVICE DETAIL** section (6 items).
2. Build Product Detail for ONE product first (e.g. Industrial RO Plant) — get it fully right, then apply to the rest.
3. Build Service Detail for ONE service (e.g. AMC & Maintenance) — get it fully right, then apply to the remaining 4.

**Done when:** at least one product detail page and one service detail page are fully correct, and both templates are confirmed reusable.

---

## DAY 7 — Contact Page + Lead Form Backend (Midpoint Checkpoint)
**Goal:** forms actually work and deliver leads.

1. Open `13-PAGE-SECTIONS-SPEC.md` → **CONTACT** section.
2. Open `09-DATA-MODEL.md` → Lead/Contact Submission table — give this to Antigravity so form fields match exactly.
3. Open `04-TECH-STACK.md` → confirm Google Sheets API approach, get the API route (`/api/leads`) working.
4. Test-submit the form yourself and confirm it appears in your Sheet.

**Done when:** you can submit a test lead and see it land in Google Sheets. **This is your midpoint checkpoint — if you're behind schedule, this is the day to reassess, not skip ahead.**

---

## DAY 8 — Industries Detail Pages
**Goal:** industry pages built using the same template pattern.

1. Open `13-PAGE-SECTIONS-SPEC.md` → **INDUSTRY/SECTOR DETAIL** section.
2. Build one fully (e.g. Pharmaceutical), then apply to the rest (Manufacturing, Textile, Food & Beverage, Hospitals, Hotels, Schools, Offices) from `06-CONTENT.md`.

**Done when:** at least 2-3 industry pages are live and the rest can follow the same template.

---

## DAY 9 — Case Studies
**Goal:** case study list + detail template built.

1. Open `13-PAGE-SECTIONS-SPEC.md` → **CASE STUDY DETAIL** section.
2. Use the fanned-card treatment here (per `11-CINEMATIC-SCROLL-SPEC.md`) for before/after or installation photos.
3. Even one strong case study is fine for launch — quality over quantity here.

**Done when:** the case studies list page + at least one full detail page work.

---

## DAY 10 — Resources (Blog) + FAQ
**Goal:** both lighter-motion pages built.

1. Open `13-PAGE-SECTIONS-SPEC.md` → **RESOURCES/BLOG** and **FAQ** sections.
2. Use the blog topic ideas from `06-CONTENT.md` / `10-SEO.md` for at least 2-3 starter articles.
3. Keep motion light on both, as noted in the spec.

**Done when:** the resources list + 2-3 articles + the FAQ accordion all work.

---

## DAY 11 — Estimator Tool
**Goal:** the interactive calculator works.

1. Open `13-PAGE-SECTIONS-SPEC.md` → **ESTIMATOR TOOL** section.
2. Open `09-DATA-MODEL.md` → Estimator Tool Submission table for the data shape.
3. Keep the calculation logic simple for v1 (a rough estimate, not a precise engineering tool).

**Done when:** a visitor can input basic info and get a result + CTA.

---

## DAY 12 — Real Hero Footage + Wire It In
**Goal:** replace the placeholder Home hero with the real cinematic image-sequence.

1. Open `11-CINEMATIC-SCROLL-SPEC.md` → **Step 0** — prepare your real photo, run it through Kling AI, extract frames, compress, place in `/public/seq/`.
2. Give Antigravity the **Step 1 hero prompt** to wire the sequence into the Home hero (if not already wired on Day 2).

**Done when:** scrolling the Home hero actually scrubs through your real footage, and it still works on mobile (as a simpler fallback per the spec).

---

## DAY 13 — Full QA Pass
**Goal:** everything works everywhere.

1. Go through `13-PAGE-SECTIONS-SPEC.md` top to bottom — every page, every section, checked off.
2. Test every page on mobile.
3. Test `prefers-reduced-motion` (turn it on in your OS settings, reload the site).
4. Test every form submission end-to-end.
5. Check `01-PRD.md` rule: every page has a hero.
6. Check page titles/meta descriptions from `10-SEO.md` are in place.

**Done when:** you've personally clicked through the entire site once, on both desktop and mobile, with nothing broken.

---

## DAY 14 — Final Polish + Client Handoff Prep
**Goal:** ready to actually launch or present.

1. Fix anything flagged on Day 13.
2. Proofread all real content against `06-CONTENT.md` (swap out any remaining placeholder stats/testimonials if real ones have arrived).
3. Confirm the logo displays correctly everywhere (header, footer, About) per `08-BRAND-GUIDELINES.md`.
4. Do a final read-through of `Saraswati-Enterprises-Website-Plan.docx` and update anything that changed from the original plan, so the client-facing doc matches reality.
5. Deploy (per `04-TECH-STACK.md` — Vercel).

**Done when:** the live site matches the plan, works end-to-end, and you're ready to show the client.

---

## If you fall behind on any day
Don't try to catch up by rushing multiple days into one. Instead:
- Cut scope, not quality: e.g. on Day 8, ship 2 industry pages instead of all 8 — the template makes adding the rest later easy.
- Push Day 14 (polish) later rather than skipping Day 13 (QA) — a working site with lighter content beats a broken site with everything attempted.
- Message me the day you're stuck on — I can help you re-plan the remaining days.
