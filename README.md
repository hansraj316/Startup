# Startup

[![Indian Avengers](https://img.shields.io/badge/Managed%20By-Indian%20Avengers-orange?style=flat-square&logo=gitbook)](https://github.com/hansraj316/mission-control-openclaw)

Workspace for startup projects and experiments under the Indian Avengers org.

## Projects

### [figworks-ai/](figworks-ai/)

Marketing website for FIGWORKS.AI — a modern Next.js site for an AI technology company. See [`figworks-ai/README.md`](figworks-ai/README.md) for details and [`README.md`](README.md) (this file) for the full PRD.

**Stack**: Next.js · Tailwind CSS · Vercel

## Product Requirements

See [figworks-ai PRD](docs/) for the full requirements covering hero section, product catalog, global shipping, performance targets (Lighthouse > 95), and contact conversion goals.

## Commercial Offer

See [Startup paid offer](docs/offer.md) for ICP, tiered pricing, scope boundaries, and delivery SLAs.

## License

MIT


## Daily TPM delivery update (2026-04-22)
- Functional: Build investor update generator from weekly KPI inputs and milestone status
- Non-functional: Introduce baseline observability stack templates for new services

## Contact lead capture setup

Set `CONTACT_WEBHOOK_URL` in your deployment environment to receive contact form submissions (Zapier/Make/CRM webhook endpoint).

Example:

```bash
CONTACT_WEBHOOK_URL="https://hooks.zapier.com/hooks/catch/xxxx/yyyy"
```
