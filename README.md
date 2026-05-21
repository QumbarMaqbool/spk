# SPK General Contracting — Next.js 14 Website

Production-ready bilingual (EN/AR) website for SPK General Contracting & Trading Co., Riyadh, KSA.

## Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS v3** with custom navy/gold/cream design system
- **Framer Motion** for animations
- **next-intl** for English + Arabic with full RTL support
- **Lucide React** icons
- **Google Fonts** (Playfair Display, DM Sans, Tajawal) via `next/font`

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000 — middleware redirects to `/en` (or `/ar`).

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at https://vercel.com/new
3. Framework will be detected as **Next.js** — no config needed.
4. Deploy. Done.

`vercel.json` is included for clarity.

## Project Structure

```
app/
  [locale]/
    layout.tsx              ← fonts, RTL dir, navbar, footer
    page.tsx                ← Home
    about/page.tsx
    services/page.tsx
    services/[slug]/page.tsx ← 12 dynamic service pages
    why-us/page.tsx
    contact/page.tsx
  globals.css
  not-found.tsx
components/
  Navbar.tsx, Footer.tsx, HeroSection.tsx, StatsBar.tsx,
  ServicesGrid.tsx, ServiceCard.tsx, ContactForm.tsx,
  LanguageSwitcher.tsx, AnimatedCounter.tsx
lib/
  services.ts        ← All 12 services with full content
  industries.ts      ← 6 industries
  why-us.ts          ← 6 reasons
  translations.ts    ← EN + AR strings
i18n.ts              ← next-intl config
middleware.ts        ← locale detection / routing
```

## Customization

- **Colors**: edit `tailwind.config.ts` (`navy`, `gold`, `cream`)
- **Content/translations**: edit `lib/translations.ts`
- **Services**: edit `lib/services.ts` (slug, sections, bullets)
- **Hero images**: drop images into `public/images/` and reference from components.
  Currently uses Unsplash CDN — already whitelisted in `next.config.js`.

## Notes
- Routing is locale-prefixed: `/en/...` and `/ar/...`. The `ar` locale sets `dir="rtl"` and switches the body font to Tajawal.
- The contact form uses `useState` and shows a success state on submit. Wire it to your email provider (Resend, SendGrid) by adding an API route at `app/api/contact/route.ts`.
- All pages export `metadata` for SEO.

© 2025 SPK General Contracting & Trading Co.
