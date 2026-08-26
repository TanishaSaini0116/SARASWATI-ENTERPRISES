# TECH-STACK.md — Full-Stack Setup

## Framework & Language
- **Next.js 15+ (App Router)** with TypeScript — one codebase for frontend + backend (API routes), matches "full stack" requirement without needing a separate backend service.
- **Turbopack** for dev speed.

## Styling & UI
- **Tailwind CSS** (v4) — utility-first, fast for an AI agent to generate consistently.
- **shadcn/ui** — for base primitives (buttons, inputs, dialogs) so we're not hand-rolling accessible components from scratch.
- **lucide-react** — icons.

## Animation
- **Framer Motion** — page transitions, scroll reveals, hover states (default for everything).
- **GSAP + ScrollTrigger** — only for the exploded-view product animation (Section 6 of DESIGN.md). Keep this isolated to one component so it doesn't bleed complexity into the rest of the app.

## Forms & Validation
- **react-hook-form** + **zod** — all forms (contact, RFQ, AMC inquiry, estimator).

## Backend / Data
- **Phase 1 (launch fast):** Next.js API routes → Google Sheets API as the lead/data store. No database server to manage, client can view leads directly in Sheets.
- **Phase 2 (once volume grows):** migrate to **Supabase** (Postgres + auth + storage) — plan the API route logic so swapping the data layer later doesn't require rewriting form components.
- **Content (services, case studies, blog):** MDX files in the repo (`/content` folder) for v1 — no CMS needed yet. Structured this way so migrating to a headless CMS later (e.g. Sanity) is a content-layer swap, not a rebuild.

## Hosting & Ops
- **Vercel** for hosting (pairs natively with Next.js).
- **GitHub** for version control — Antigravity should commit in small, logical chunks per feature/page, not one giant commit.

## SEO & Performance
- Use Next.js built-in `metadata` API per page (title, description, OG tags).
- `next/image` for all images (automatic optimization).
- Add `LocalBusiness` + `Service` JSON-LD structured data on relevant pages.

## Environment/Config
- `.env.local` for API keys (Google Sheets service account, etc.) — never commit real keys.
- Central `lib/config.ts` for site-wide constants (nav items, contact info, social links) so they're not hardcoded across components.

## Folder-level dependency rule for the agent
- UI components → `components/`
- Page-specific logic stays in that page's `page.tsx` only
- Shared logic/types → `lib/`
- No component should import directly from another route's folder — shared things move to `components/` or `lib/` first.
