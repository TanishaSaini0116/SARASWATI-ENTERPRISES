# DATA-MODEL.md — Backend Data Structures

Phase 1 store: Google Sheets (one sheet per model below). Phase 2: migrate same shape into Supabase tables.

## 1. Lead / Contact Submission
| Field | Type | Notes |
|---|---|---|
| id | string (auto) | UUID or row number |
| submitted_at | datetime | server timestamp |
| form_type | enum | `general` \| `industrial-rfq` \| `commercial-quote` \| `amc-inquiry` \| `estimator` |
| name | string | required |
| phone | string | required |
| email | string | optional |
| company_name | string | optional, required for industrial-rfq |
| segment | enum | `industrial` \| `commercial` \| `residential` |
| message | text | optional |
| source_page | string | which page the form was submitted from (for tracking) |
| status | enum | `new` \| `contacted` \| `converted` \| `closed` (client updates manually in Sheet for v1) |

## 2. Estimator Tool Submission
| Field | Type | Notes |
|---|---|---|
| id | string | |
| submitted_at | datetime | |
| segment | enum | industrial / commercial / residential |
| capacity_required | number | liters/day or as relevant |
| industry_type | string | optional |
| estimated_result | string | what the tool showed the user |
| lead_id | string | link to Lead record if they submitted contact info after |

## 3. Product / Service (content, not user-submitted)
| Field | Type | Notes |
|---|---|---|
| slug | string | URL identifier, matches route |
| name | string | |
| category | enum | industrial / commercial / residential |
| short_description | text | for cards/grids |
| full_description | text | for detail page |
| key_features | string[] | bullet list |
| technical_specs | key-value pairs | table on detail page |
| image | string (path) | |
| related_products | slug[] | for "related products" carousel |

Stored as MDX frontmatter in `/content/services/[category]/[slug].mdx` for v1 — matches FOLDER-STRUCTURE.md.

## 4. Case Study (content)
| Field | Type |
|---|---|
| slug | string |
| client_industry | string |
| headline_result | string |
| problem | text |
| solution | text |
| results | key-value stats |
| images | string[] |

## 5. Resource/Blog Article (content)
| Field | Type |
|---|---|
| slug | string |
| title | string |
| category | string |
| published_date | date |
| body | MDX content |
| meta_description | string |

## Migration note
When moving to Supabase in Phase 2: Lead and Estimator Submission become real DB tables (they're transactional/growing data). Product/Case Study/Resource can stay as MDX or move to a headless CMS depending on how often non-technical staff need to edit them.
