# SITEMAP.md — Routes & Navigation

## Top Nav (updated — Products and Services are now separate)
```
Home | About | Products | Services | Contact Us
```

**Why split:** Products = physical items customers browse/buy (RO Plants, STP, ETP, softeners, etc. — organized by Industrial/Commercial/Residential). Services = what we DO for the customer, not what we sell them (Installation, AMC & Maintenance, Consultation, Turnkey Project Setup, Spare Parts & Support). These are conceptually different visitor intents, so they get separate hubs instead of being merged under one "Service" menu.

## Full Route Map

```
/                                → Home
/about                           → About Us

/products                        → Products Hub (all categories, filterable)
/products/industrial             → Industrial category
/products/industrial/[slug]      → e.g. /products/industrial/ro-plant, /etp, /stp, /dm-plant, /uf-system, /desalination-plant, /mix-bed-unit, /water-treatment-chemicals, /instruments
/products/commercial             → Commercial category
/products/commercial/[slug]      → e.g. /ro-plant, /stp, /water-softener, /uv-plant, /filtration-plant, /packaged-drinking-water-plant
/products/residential            → Residential category
/products/residential/[slug]     → e.g. /ro-system, /water-softener, /uv-purifier, /cartridge-filter, /water-testing-kits

/services                        → Services Hub
/services/installation           → Installation service
/services/amc-maintenance        → AMC / recurring maintenance plans
/services/consultation           → Consultation service
/services/turnkey-project-setup  → Turnkey project setup
/services/spare-parts-support    → Spare parts & support

/industries/[slug]                → pharmaceutical, manufacturing, textile, food-beverage, hospitals, hotels, schools, offices
/case-studies                     → Case study list
/case-studies/[slug]              → Individual case study
/resources                        → Blog/articles list
/resources/[slug]                 → Individual article
/tools/estimator                  → Capacity/cost estimator tool
/faq                              → FAQ

/contact                          → Main contact page
/contact/industrial-rfq           → Segmented form
/contact/commercial-quote         → Segmented form
/contact/amc-inquiry              → Segmented form
```

## Why this structure
- Top nav now has 5 items: Home, About, Products, Services, Contact Us.
- `/products` is a **hub-and-spoke**: one hub page + category pages + dynamic `[slug]` detail pages. 20+ product pages reuse ONE template file — not 20 separate hand-built pages.
- `/services` is a **simpler hub**: one hub page + 5 individual service pages (lighter template than product detail — no technical specs table needed, more about process/what's included).
- `/industries`, `/case-studies`, `/resources` exist as supporting routes (good for SEO, and for the "who is this for" story) but are **not in the top nav** — they're linked from Home, Products hub, and Footer instead.

## Page → Template mapping (for the developer)
| Route pattern | Template file | Reused for |
|---|---|---|
| `/` | `app/page.tsx` | 1 page |
| `/about` | `app/about/page.tsx` | 1 page |
| `/products` | `app/products/page.tsx` | 1 hub |
| `/products/[category]` | `app/products/[category]/page.tsx` | 3 categories |
| `/products/[category]/[slug]` | `app/products/[category]/[slug]/page.tsx` | 20+ products |
| `/services` | `app/services/page.tsx` | 1 hub |
| `/services/[slug]` | `app/services/[slug]/page.tsx` | 5 services |
| `/industries/[slug]` | `app/industries/[slug]/page.tsx` | 8 industries |
| `/case-studies/[slug]` | `app/case-studies/[slug]/page.tsx` | N case studies |
| `/resources/[slug]` | `app/resources/[slug]/page.tsx` | N articles |
| `/contact/*` | `app/contact/[type]/page.tsx` | 3 forms |

This is the "9-10 templates, ~50 routes" idea from your earlier research — kept, just re-organized to split Products from Services.
