# SEO.md — Keyword & Meta Strategy

## Strategy
Competitors (e.g. roplant.net) have no content/SEO layer at all. Industrial/pharma buyers research silently for weeks before contacting anyone — our content should capture that research-stage search behavior with specific, technical, cost-transparent content.

## Global
- Register Google Business Profile with correct service categories and service area.
- Add `LocalBusiness` + `Service` JSON-LD structured data sitewide.
- Every page needs a unique title tag and meta description — never duplicate across pages.

## Page-by-page targets (starting set — expand once site is live and Search Console data comes in)

| Page | Primary keyword focus | Sample meta description |
|---|---|---|
| Home | "water treatment company [city]", "RO plant supplier [region]" | "Industrial, commercial & residential water treatment solutions — RO plants, STP, ETP, and AMC support across [region]." |
| Service hub | "water treatment services" | "Explore our full range of RO, STP, ETP, and water softening solutions for every industry." |
| /service/industrial/ro-plant | "industrial RO plant [region]", "RO plant for factory" | "Heavy-duty industrial RO plants engineered for compliance and uptime. Get a quote today." |
| /service/industrial/etp | "ETP plant cost", "effluent treatment plant [region]" | "Effluent treatment plants built for regulatory compliance — installation, AMC, and consultation." |
| /service/commercial/stp | "STP for hotel", "STP capacity for hospital" | "Commercial sewage treatment plants sized for hotels, hospitals, and schools." |
| /industries/pharmaceutical | "water treatment for pharma company", "GMP compliant water system" | "Compliance-first water treatment systems built for pharmaceutical manufacturing." |
| /service/amc-maintenance | "RO plant AMC", "water treatment maintenance contract" | "Annual maintenance contracts with guaranteed response times — keep your system compliant and running." |
| /resources | "water treatment blog", "STP ETP guides" | "Guides on choosing the right water treatment capacity, compliance requirements, and more." |
| /contact | "water treatment company near me", "get RO plant quote" | "Get in touch for a free consultation or quote on your water treatment project." |

## Long-tail content opportunities (blog/resource articles — uncontested by competitors)
- "How to Choose the Right STP Capacity for Your Hotel"
- "Understanding ETP Compliance Requirements for [industry]"
- "Zero Liquid Discharge (ZLD) in the Textile Industry"
- "RO Plant AMC Cost: What's Included and What to Expect"
- "STP Capacity for a 50-Bed Hospital: A Simple Guide"

## Technical SEO checklist
- Fast load times (image optimization via `next/image`, no unused JS)
- Mobile-first responsive on every page
- Clean URL structure (already defined in SITEMAP.md — no query-string-based routing)
- XML sitemap auto-generated (`next-sitemap` or App Router's built-in `sitemap.ts`)
- `robots.txt` configured correctly
- Alt text on every image (product name + context, not generic "image1.jpg")
- Internal linking: every product page links to its category hub and at least one related industry page

## Note
This is a starting keyword list based on strategic direction, not a full keyword-research-tool export. Once the site is live, refine using Google Search Console + Google Keyword Planner data.
