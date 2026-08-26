# FOLDER-STRUCTURE.md — Repository Layout

Rule: **one page/section = one file.** No file should render more than one route's content. Shared pieces become components.

```
saraswati-enterprises/
├── app/
│   ├── page.tsx                          # Home
│   ├── layout.tsx                        # Root layout (Header + Footer wrap)
│   ├── globals.css                       # imports design tokens
│   ├── about/
│   │   └── page.tsx
│   ├── products/
│   │   ├── page.tsx                      # Products hub
│   │   └── [category]/
│   │       ├── page.tsx                  # industrial | commercial | residential
│   │       └── [slug]/
│   │           └── page.tsx              # individual product detail (reused template)
│   ├── services/
│   │   ├── page.tsx                      # Services hub
│   │   └── [slug]/page.tsx               # installation | amc-maintenance | consultation | turnkey-project-setup | spare-parts-support
│   ├── industries/
│   │   └── [slug]/page.tsx
│   ├── case-studies/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── resources/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── tools/
│   │   └── estimator/page.tsx
│   ├── faq/page.tsx
│   ├── contact/
│   │   ├── page.tsx
│   │   └── [type]/page.tsx               # industrial-rfq | commercial-quote | amc-inquiry
│   └── api/
│       └── leads/route.ts                # form submissions → Google Sheets
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── PageHero.tsx                  # reusable hero used on EVERY page
│   │   ├── TrustBar.tsx
│   │   ├── ServiceGrid.tsx
│   │   ├── ExplodedProductView.tsx       # the signature 3D-style animation
│   │   ├── Testimonials.tsx
│   │   └── CtaBand.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── RfqForm.tsx
│   │   └── EstimatorForm.tsx
│   └── ui/                               # shadcn primitives live here
│
├── content/
│   ├── products/
│   │   ├── industrial/*.mdx
│   │   ├── commercial/*.mdx
│   │   └── residential/*.mdx
│   ├── services/*.mdx
│   ├── industries/*.mdx
│   ├── case-studies/*.mdx
│   └── resources/*.mdx
│
├── lib/
│   ├── config.ts                         # nav items, contact info, site constants
│   ├── types.ts
│   └── sheets.ts                         # Google Sheets API helper
│
├── public/
│   ├── images/
│   │   └── products/                     # exploded-view layered assets live here
│   └── icons/
│
├── styles/
│   └── tokens.css                        # color + type tokens (edit palette ONLY here)
│
├── PRD.md
├── SITEMAP.md
├── DESIGN.md
├── TECH-STACK.md
├── FOLDER-STRUCTURE.md
├── CONTENT.md
└── AGENT-BRIEF.md
```

## Naming conventions
- Components: PascalCase (`PageHero.tsx`)
- Routes/folders: kebab-case (`amc-maintenance`)
- Content files: kebab-case matching the slug used in the URL

## Golden rule for the agent
Before adding a new page or component, check if one already exists that can be reused with different props/data. If yes — reuse it. If no — build it in the correct folder above, not inline inside a page file.
