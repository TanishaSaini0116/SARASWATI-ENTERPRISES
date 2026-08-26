# PRD.md — Saraswati Enterprises Website

## 1. What this document is
This is the single source of truth for WHAT we're building. Read this before touching any code. If a requirement changes, update this file first, then build.

## 2. Business Snapshot
- **Client:** Saraswati Enterprises
- **Industry:** Water Treatment Solutions (RO, STP, ETP, industrial/commercial/residential)
- **Goal of the site:** Lead generation — not a brochure. Every page should end in a way for the visitor to contact/request a quote.
- **Positioning:** Feels like a modern IT/SaaS company, NOT a generic industrial catalog site. Confidence, whitespace, motion — not clutter.

## 3. Target Users (who lands on this site)
| Segment | What they care about | What convinces them |
|---|---|---|
| Industrial / Pharma buyer | Compliance, no downtime, vendor reliability | Case studies with real numbers, certifications |
| Commercial (hotel/hospital/school) | No disruption, clear pricing, easy maintenance | Clear service pages, AMC plans |
| Residential homeowner | Safety, price, trust | Simple product info, testimonials, fast contact |

## 4. Core Pages (v1 scope)
Per your instruction, nav bar stays simple but now has 5 items — Products and Services are split (Products = what you sell, Services = what you do for the customer).

1. **Home** — hero + services overview + trust signals + CTA
2. **About** — company story, certifications, team
3. **Products** — hub page → category (Industrial/Commercial/Residential) → individual product detail pages
4. **Services** — hub page → individual service pages (Installation, AMC & Maintenance, Consultation, Turnkey Project Setup, Spare Parts & Support)
5. **Contact Us** — form + phone/WhatsApp + map

> Note: the earlier research doc proposed ~49 routes (Industrial/Commercial/Residential/Industries/Sectors/etc.). We are **not discarding that content** — we're simplifying the *navigation*. Those become filterable categories inside `/service`, not top-level nav items. This keeps the nav bar clean like you asked, while keeping all the service depth.

## 5. Non-Negotiable Rules for the build
- **One page = one section = one route.** No cramming multiple unrelated sections into one file.
- **Every page has a Hero section** at the top (headline, subtext, CTA, visual).
- Do not modify or break already-working pages/components when adding new ones.
- Code must be readable by a human developer later — clear naming, no magic values, comments where logic isn't obvious.
- Mobile-first responsive on every page.

## 6. Out of scope for v1 (Phase 2)
- Full e-commerce/checkout
- Multi-language (English only for now, Hindi/Gujarati later)
- Blog CMS backend (static MDX is enough for v1)
- Full Three.js 3D model (v1 uses the layered "exploded image" technique, see DESIGN.md)

## 7. Success Criteria
- Site loads fast (Lighthouse Performance 90+)
- Every page has a working, segmented CTA
- Contact form actually delivers leads (to Sheet/DB — see TECH-STACK.md)
- Design feels distinct — not a Bootstrap-template look, not a roplant.net clone
