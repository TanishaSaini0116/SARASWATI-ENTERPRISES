# AGENT-BRIEF.md — Paste this into Antigravity

You are building a production-ready, full-stack website for **Saraswati Enterprises**, a water treatment solutions company (RO/STP/ETP, industrial/commercial/residential).

Before writing any code, read these files in this order, fully:
1. `PRD.md` — what we're building and the non-negotiable rules
2. `SITEMAP.md` — every route and which template file it maps to
3. `DESIGN.md` — visual direction, component sourcing rules, color/motion system
4. `TECH-STACK.md` — exact stack to use
5. `FOLDER-STRUCTURE.md` — exact repo layout, don't deviate
6. `CONTENT.md` — real business content to populate pages with

## Hard rules (do not violate these)
1. **One page = one route = one file.** Never combine multiple unrelated page sections into a single file.
2. **Every page starts with a Hero section**, using the shared `<PageHero />` component — don't hand-build a new hero per page.
3. **Do not break existing/working code.** Before modifying a shared component (Header, Footer, PageHero, etc.), check every page that uses it. If a change is needed, make it backward-compatible via props, not a rewrite.
4. **Colors and type sizes come only from the design tokens file** (`styles/tokens.css`). Never hardcode a hex value or px font-size directly inside a component.
5. **Reuse before building.** If a component already exists that can do the job with different props, use it. Don't duplicate.
6. Code must be readable: clear names, no unexplained magic numbers, short functions, comments on anything non-obvious (especially the scroll-animation logic).
7. Build in small steps: scaffold the folder structure first → build shared layout (Header/Footer/PageHero) → build Home → then one page at a time, in the order listed in SITEMAP.md → forms/backend → then the signature 3D exploded-view animation last (it's the most complex piece, don't let it block the rest of the site).
8. After each page is built, confirm it renders correctly and doesn't affect previously built pages before moving to the next.

## Build order (do in this sequence)
**Note:** this order is superseded by the more detailed one in `CINEMATIC-SCROLL-SPEC.md` Step 4 — the whole site now uses a premium cinematic motion system throughout (not just the hero), so the motion foundation is set up early, right after design tokens, and every page gets its treatment as it's built. Follow the order in `CINEMATIC-SCROLL-SPEC.md`; the summary below is kept only for the pre-motion-system context.

1. Project scaffold (Next.js + TS + Tailwind + shadcn) matching `FOLDER-STRUCTURE.md`
2. Design tokens (`styles/tokens.css`) with placeholder palette from `DESIGN.md`
3. Global motion foundation — see `CINEMATIC-SCROLL-SPEC.md`
4. Shared layout: `Header.tsx`, `Footer.tsx`, `PageHero.tsx`
5. Home page (full cinematic treatment — dummy realistic content is fine for sections not yet finalized)
6. About page
7. Service hub + category pages + one working product detail template
8. Contact page + working form → `/api/leads` → Google Sheets
9. Remaining supporting routes (industries, case-studies, resources, estimator, faq)
10. Final mobile responsiveness / reduced-motion / performance pass

## Status reporting rule
When you report a page/feature as "done," it must actually render at its route with no console errors — don't report partial/stubbed work as complete. If something is 70% done, say so explicitly.
