# SEO Update Log — CAPES Website

Record of the SEO work done on this project, what changed in the code, and the Google Analytics / Search Console setup completed alongside it.

## 1. Domain

- Replaced the placeholder domain in `site.config.ts` with the real production domain: `https://www.capespak.com`.
- All canonical URLs, the sitemap, robots.txt, and structured data now point at this domain.

## 2. Technical SEO foundations added

- **`app/robots.ts`** — generates `/robots.txt`, allows all crawlers, disallows `/api/`, points to the sitemap.
- **`app/sitemap.ts`** — generates `/sitemap.xml` covering every static route plus every team member's dynamic profile page (`/team/[slug]`), with priorities and change frequencies.
- **Canonical URL** (`alternates.canonical`) added to the root layout.
- **Open Graph / Twitter card image** added (previously none) — uses `Assets/About_bgimg.png`.
- **Organization JSON-LD** enriched with `logo` and a real `description` (previously just repeated the tagline).

## 3. Page-by-page metadata (titles + descriptions)

Before this work, only 8 of 29 pages had any `<title>`/meta description at all, and only one page had a description. Added unique, keyword-rich title + description to every page, including:

- All "About" pages (About, Structure & Governance, Partners)
- All regional chapter pages (Eurasia, Northeast Asia, Oceania, Southeast Asia, CAPES-CAF)
- Events, Fellowship, Internship, Newsletter, Opportunities, Policy Brief, Programs, Publication, Research, Research Publications, Think Points, Weekly News Monitor, weekly news-monitor archive pages
- Contact, Privacy, Terms
- Dynamic team member profile pages (`/team/[slug]`) — now uses each member's bio/role instead of a generic fallback

## 4. Bug fix: duplicated page titles

Pages that already had a title (About, Structure, Contact, Opportunities, Privacy, Programs, Research, Terms, team profiles) were manually appending `| CAPES` to their title string. The root layout **also** applies a `%s | CAPES` template automatically. Combined, this rendered doubled titles in the actual HTML, e.g.:

```
Opportunities | CAPES | CAPES
```

Fixed by removing the manual suffix from every affected page, so titles now render correctly as `Opportunities | CAPES`.

## 5. Structural fixes for metadata support

Next.js does not allow a page marked `"use client"` to export metadata. Three pages needed restructuring:

- **Homepage** (`app/page.tsx`) — split into a server component (`page.tsx`, exports metadata) rendering a new client component (`app/HomeClient.tsx`, holds all interactive state).
- **CAPES-CAF chapter page** — split into `page.tsx` (server, metadata) + `CapsCafDashboard.tsx` (client, holds the modal state).
- **Partners page** — extracted the shared UI into `components/PartnersSection.tsx` so it could be reused by both the standalone `/about/partners` route (with metadata) and the homepage (which embeds it inline) without a client/server conflict.
- **Internship page** — was marked `"use client"` without actually needing it (no hooks used); removed the directive and added metadata directly.

## 6. On-page content fixes

- **Homepage had zero `<h1>` anywhere.** Added a screen-reader-only `<h1>` in the hero section (doesn't change the visual design) naming the organization and its focus area.
- **Events page had two `<h1>` tags** on one page (heading hierarchy issue) — changed the second to `<h2>`.
- **Duplicate-content risk**: the five regional chapter pages (Eurasia, Northeast Asia, Oceania, Southeast Asia, CAPES-CAF) were near-identical copy-paste templates with no unique body text — only button labels differed, and some even had the wrong region's name/logo alt text hardcoded from copy-paste. Gave each page a unique `<h1>` + intro paragraph and corrected the alt text. *(Still recommended: replace these with real, region-specific content when available — the current text is a minimal placeholder, not full copy.)*
- **Noindexed two stub pages** (`/membership`, `/about/capes-chapters/indonesia-chapter`) that contain only a single placeholder word — indexing genuinely empty pages can drag down overall site quality signals in Google's eyes. Remove the noindex once real content is written for them.

## 7. Branding / keyword coverage

- Registered `"CAPS"` as a formal alternate name alongside `"CAPES"`:
  - Added to `site.config.ts` (`altName` field, keyword list)
  - Added to the Organization JSON-LD as `alternateName: ["CAPES", "CAPS"]`
  - Added to the homepage's `<h1>`
- Rationale: internal content (newsletters, event PDFs) already refers to the org as "CAPS" inconsistently alongside "CAPES" — this makes the association explicit to Google without keyword-stuffing. Note: this does **not** mean the site will rank for the bare, generic word "caps" (hats, capital letters, etc.) — no legitimate SEO technique achieves that. It targets realistic, qualified searches like "CAPS Pakistan think tank."

## 8. Google Analytics (GA4) — completed

- Real Measurement ID obtained and wired into `app/layout.tsx` in both required spots (script `src` and `gtag('config', ...)`).
- ID: `G-HGTBEEP17G`
- Previously a placeholder (`G-XXXXXXXXXX`) — no data was being collected before this.

## 9. Google Search Console — completed

- Property added for `https://www.capespak.com` (URL prefix method).
- Verified via HTML tag method — verification meta tag added to `app/layout.tsx` via Next.js's `metadata.verification.google` field.
- Ownership verified successfully.
- Sitemap (`sitemap.xml`) submitted successfully.

## Current status

| Item | Status |
|---|---|
| Real domain configured | Done |
| robots.txt / sitemap.xml | Done |
| Per-page titles & descriptions | Done |
| Duplicate-title bug | Fixed |
| Homepage/CAPES-CAF/Partners metadata support | Fixed |
| Heading structure (h1 issues) | Fixed |
| GA4 tracking | Live |
| Search Console verification | Verified |
| Sitemap submitted | Done |

## Outstanding / recommended follow-ups

1. **Write real, unique content** for the five regional chapter pages (currently minimal placeholder text was added just to avoid duplicate-content penalties — not a substitute for real copy).
2. **Finish and un-noindex** `/membership` and the Indonesia chapter page once real content exists for them.
3. Monitor Search Console's **Pages** report over the next 1–2 weeks to confirm pages are being indexed (`site:capespak.com` in Google Search is a quick manual check).
4. Consider setting up a free **Google Business Profile** listing (separate from Analytics/Search Console) for local search visibility, since CAPES has a real Islamabad address and phone number listed on the Contact page.
