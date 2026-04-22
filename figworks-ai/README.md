# FIGWORKS.AI — Website

[![Indian Avengers](https://img.shields.io/badge/Managed%20By-Indian%20Avengers-orange?style=flat-square&logo=gitbook)](https://github.com/hansraj316/mission-control-openclaw)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org)

> Marketing website for FIGWORKS.AI — an AI technology company website targeting C-level decision-makers, product managers, and investors.

## Goals

- Professional digital presence converting visitors to leads
- Lighthouse score > 95, page load < 2s, WCAG 2.1 AA
- Contact form conversion > 3%

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Deploy**: Vercel

## Development

```bash
npm install
cp .env.example .env.local
npm run dev
# → http://localhost:3000
```

### Contact lead capture setup

Set these variables in `.env.local`:

- `LEAD_WEBHOOK_URL`: webhook endpoint for durable lead capture (Zapier/Make/CRM)
- `NEXT_PUBLIC_CONTACT_ANALYTICS_ENABLED`: set to `true` to emit contact conversion events in client logs

The contact form posts to `POST /api/contact`, validates fields server-side, blocks honeypot spam, and applies basic rate limits.

### Tests

```bash
npm run test
```

## Roadmap

- [x] Connect contact form to webhook/CRM endpoint
- [ ] Add product/services pages
- [ ] SEO: structured data, meta tags, sitemap
- [ ] Analytics: Vercel Analytics

## Full PRD

See [`../README.md`](../README.md) for the complete Product Requirements Document.
