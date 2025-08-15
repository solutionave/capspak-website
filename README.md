## CAPSPak Website

This repository contains the public website for the Centre for Aerospace & Policy Studies Pakistan (CAPSPak). It is built with the Next.js App Router and Tailwind CSS (v4) for rapid iteration, accessibility, and performance.

### Tech Stack
- Next.js 15 App Router
- React 19
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- TypeScript

### Project Structure (Key)
```
app/              # Route segments & pages
components/       # Reusable UI (navigation, layout, sections)
site.config.ts    # Global metadata & navigation config
```

### Getting Started
Run the dev server:
```bash
bun install   # or npm install / pnpm install / yarn
bun dev       # starts http://localhost:3000
```

### Content Roadmap
- Publications listing with filtering & search
- Dynamic events (with ical export + registration)
- Research program pages with structured metadata
- Staff / fellows directory
- Open data / dashboards section
- Newsletter signup (privacy-compliant)

### Configuration
Update `site.config.ts` with the production domain, contact email, and social links before launch.

### Accessibility & Performance
- Semantic landmarks added (header, main, footer, skip link)
- Responsive nav with mobile disclosure
- Minimal blocking assets; leverage Next.js font optimization

### Deployment
Recommend Vercel for zero-config deployment (`bun build` / `next build`). Set environment variables (if later added) in the hosting dashboard.

### Contributing
1. Create a feature branch
2. Keep changes focused
3. Open a PR with a concise description

### License
Proprietary – all rights reserved (update if adopting an open license).

---
Future enhancements tracked in Issues (create if absent):
- Add CMS (e.g., Sanity, Contentlayer, or headless CMS of choice)
- Add unit tests for components (Playwright / React Testing Library)
- Implement SEO enhancements (structured data, sitemap, RSS)
