# 00-MASTER-WORKFLOW.md — Read This First, Every Time

This is the single file to open whenever you forget "what do I do next" or "which file do I need." Everything else in this folder is referenced from here.

---

## PART 1 — What every file in this folder is (keep them ALL in one project folder)

| # | File Name | What it's for |
|---|---|---|
| 00 | `00-MASTER-WORKFLOW.md` | This file. The map of everything else. |
| 01 | `01-PRD.md` | What the website is, goals, target users, non-negotiable build rules. |
| 02 | `02-SITEMAP.md` | Every page/route the site needs, and which template file each one maps to. |
| 03 | `03-DESIGN.md` | Visual direction, color/typography system, which reference site is used for what, motion rules. |
| 04 | `04-TECH-STACK.md` | The exact tech stack (Next.js, Tailwind, forms, backend, hosting). |
| 05 | `05-FOLDER-STRUCTURE.md` | Exact folder/file layout the codebase should follow. |
| 06 | `06-CONTENT.md` | All real business content — services, industries, taglines, homepage copy. |
| 07 | `07-AGENT-BRIEF.md` | The master brief to paste into Antigravity — hard rules + build order. |
| 08 | `08-BRAND-GUIDELINES.md` | Logo usage rules, brand colors, tone of voice. |
| 09 | `09-DATA-MODEL.md` | How leads/forms/content are structured behind the scenes. |
| 10 | `10-SEO.md` | Keyword targets and meta descriptions per page. |
| 11 | `11-CINEMATIC-SCROLL-SPEC.md` | The premium cinematic motion system (Lenis + GSAP) — hero scroll, fanned cards, horizontal galleries — used sitewide. |
| 12 | `12-TESTIMONIALS-FOOTER-LOCKED-SPEC.md` | Exact locked structure for Testimonials + Footer (already approved) — motion upgrades only, no redesign. |
| 13 | `13-PAGE-SECTIONS-SPEC.md` | Checklist of exactly which sections each page needs — use this to find out what's missing. |
| 14 | `14-DAILY-PLAN.md` | Your day-by-day, 14-day execution plan — open this every morning and do that day's steps. |
| 15 | `15-IMPLEMENTATION-STATUS.md` | Daily status tracker — fill in after each day's work is git-pushed, send to Claude for review before starting the next day. |
| — | `Saraswati-Enterprises-Website-Plan.docx` | The client-facing version of this whole plan (non-technical, for sharing with the client, not for Antigravity). |
| — | `logo-assets/` folder | `saraswati-logo-full.png` (full lockup) + `saraswati-icon-transparent.png` (icon-only, for header/footer). |

**Rule:** whenever any file gets updated (colors decided, new reference added, etc.), that same updated file is what goes to Antigravity next time — always use the latest version.

---

## PART 2 — The Step-by-Step Workflow

### ✅ Phase 1 — Planning (DONE, no action needed)
Files 01-10 + the docx + logo assets. This is already complete and approved.

### ✅ Phase 2 — Base Site Build (DONE — you already have this on localhost)
The core Next.js site exists. Home page has some sections built. This is your current starting point.

### 🔲 Phase 3 — Fix & Complete the Home Page
1. Open `13-PAGE-SECTIONS-SPEC.md` → find the **HOME** section list.
2. Compare it against what's actually on your live Home page right now.
3. Tell Antigravity exactly which sections from that list are missing or incomplete, and ask it to build/fix only those — referencing `06-CONTENT.md` for real copy and `03-DESIGN.md` for tokens.
4. **Do not touch Testimonials or Footer in this step** — they're already correct (see Phase 5).

### 🔲 Phase 4 — Set Up the Motion Foundation (if not already done)
1. Open `11-CINEMATIC-SCROLL-SPEC.md` → copy the **Step 1 "Global Motion Foundation"** prompt.
2. Paste it into Antigravity as its own message.
3. Confirm Lenis + GSAP + the 5 reusable motion components (`PinnedSection`, `RevealOnScroll`, `HorizontalScrollRow`, `FannedCardStack`, `useImageSequence`) exist in the codebase before moving on.

### 🔲 Phase 5 — Enhance Testimonials & Footer (motion only)
1. Open `12-TESTIMONIALS-FOOTER-LOCKED-SPEC.md`.
2. Copy the exact instruction block at the bottom ("Do not change the structure...").
3. Give that to Antigravity. Confirm the layout looks unchanged, just more animated.

### 🔲 Phase 6 — Build Missing Pages, One at a Time
For each page below, in this order:
1. About
2. Service Hub
3. One Product/Service Detail page (the template gets reused for the rest)
4. Contact
5. Industries
6. Case Studies
7. Resources
8. Estimator
9. FAQ

For each one:
1. Open `13-PAGE-SECTIONS-SPEC.md` → copy that page's section list.
2. Tell Antigravity to build exactly those sections, using `06-CONTENT.md` for copy, `03-DESIGN.md` for tokens, and the motion primitives from `11-CINEMATIC-SCROLL-SPEC.md` (checking whether that page should be "cinematic" or "light motion" — the spec file tells you which).
3. **Check the page actually renders correctly before moving to the next one.** Don't let Antigravity build all 9 pages in one go.

### 🔲 Phase 7 — Hero Cinematic Upgrade (once you have real photos/video)
1. Open `11-CINEMATIC-SCROLL-SPEC.md` → follow **Step 0** (prepare the image sequence via Kling AI + ffmpeg + compression).
2. Once the sequence exists in `/public/seq/`, give Antigravity the **Step 1 hero prompt** to wire it up (only if not already done in Phase 4).

### ✅ Phase 8 — Colors & Final Branding (DONE — LOCKED)
Final palette: "Warm Trust" + a muted green accent pulled from the real logo, checked against the actual logo file for compatibility. `#26495C` (primary) / `#6C9BB0` (accent) / `#7A9B6E` (green accent, sparing use only) / `#D9C9A3` (soft bg) / `#F7F3EA` (main bg) / `#1C3444` (text). `03-DESIGN.md` and `08-BRAND-GUIDELINES.md` are updated and matching. Give Antigravity this instruction on Day 1: "update the color tokens in styles/tokens.css to the finalized palette in 08-BRAND-GUIDELINES.md Section 2 — nothing else should change since every component uses these tokens."

### 🔲 Phase 9 — Final QA Pass
1. Check every page has a hero (per `01-PRD.md` rule #5).
2. Check mobile responsiveness on every page.
3. Check `prefers-reduced-motion` fallback works.
4. Check the contact/quote forms actually submit and reach your leads sheet/database.
5. Re-check `13-PAGE-SECTIONS-SPEC.md` top to bottom — every checkbox should now be satisfied.

---

## PART 3 — The Daily Review Loop (do this every single day)
1. Do today's work following `14-DAILY-PLAN.md`.
2. Once it's actually complete and pushed to git — not before — fill in that day's section in `15-IMPLEMENTATION-STATUS.md`. Be honest, only check boxes you personally verified.
3. Send me that filled-in section (or the whole file).
4. I check it against the day's "Done when" criteria and the relevant `13-PAGE-SECTIONS-SPEC.md` checklist.
5. I either approve (and give you tomorrow's exact prompt) or flag what needs fixing first.
6. Only start the next day after an approval. This is the safeguard against the earlier "✅ Done" status-mismatch problem — nothing gets marked complete just because Antigravity says so.

## PART 4 — Golden Rules (repeat to yourself before every Antigravity session)
1. One page at a time. Never "build the whole site" in one prompt.
2. Never let Antigravity touch Testimonials/Footer structure — motion only.
3. Always tell Antigravity which file(s) you're referencing, so it isn't guessing.
4. Confirm a page actually works before starting the next one.
5. If something breaks, tell Antigravity exactly what looks wrong and what page — don't restart the project.
