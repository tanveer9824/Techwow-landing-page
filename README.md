# Conquer Circles — Landing Page

> **Walk. Claim. Conquer.** — The landing page for the Conquer Circles fitness/walking gamification app.

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Vite | 8.x | Build tool & dev server |
| React | 19.x | UI framework |
| TypeScript | 6.x | Type safety |
| Tailwind CSS | 4.x | Utility-first styling (via `@tailwindcss/vite`) |
| Framer Motion | 13.x | Scroll-linked animations (`useScroll`, `useTransform`) |
| React Router | 7.x | Client-side routing |
| lucide-react | latest | Icons |
| Prettier | 3.x | Code formatting |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy env vars
cp .env.example .env

# 3. Start dev server
npm run dev
```

Dev server runs at **http://localhost:5173**

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check + production bundle → `/dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run oxlint |

---

## Folder Structure

```
conquer-landing-page/
├── public/
│   ├── favicon.svg        ← Placeholder — swap before launch
│   ├── robots.txt
│   └── sitemap.xml        ← Update URLs as pages are added
├── src/
│   ├── assets/            ← Static assets (images, fonts)
│   ├── components/
│   │   ├── Hero.tsx           ← Sticky-pinned hero section
│   │   ├── HowItWorks.tsx     ← Curtain-reveal overlapping section
│   │   └── ScrollWrapper.tsx  ← Reusable sticky+curtain scroll pattern
│   ├── hooks/             ← Custom React hooks (empty, ready for use)
│   ├── lib/               ← Utilities / helpers (empty, ready for use)
│   ├── pages/
│   │   └── Home.tsx       ← Assembles all landing page sections
│   ├── App.tsx            ← Router root
│   ├── main.tsx           ← React entry point
│   └── index.css          ← Global styles + Tailwind v4 @theme tokens
├── index.html             ← Full meta/OG/Twitter tags
├── vite.config.ts         ← Tailwind plugin + path aliases + chunk splitting
├── .env.example           ← Document env vars here (committed)
├── .env                   ← Local env vars (gitignored)
├── .prettierrc            ← Prettier config
└── .gitignore
```

---

## Core Scroll Mechanic

The hero → "How It Works" transition uses a **curtain reveal** effect:

1. `ScrollWrapper` wraps two children: `[primarySection, curtainSection]`
2. The primary section sits inside a `position: sticky` container, pinned at the top
3. As the user scrolls, Framer Motion's `useScroll` + `useTransform` scales the hero down (`1 → 0.92`) and adds border-radius — driven entirely by transform/opacity, no layout thrash
4. The curtain section has `z-index: 10` and `margin-top: -600px`, so it slides up over the hero as scroll progresses

**To reuse this pattern for later sections:**
```tsx
<ScrollWrapper scrollDistance={500}>
  <SectionA />   {/* pinned */}
  <SectionB />   {/* curtain */}
</ScrollWrapper>
```

---

## Deployment (Vercel)

This project is optimized for Vercel zero-config deployment:

1. Push to GitHub
2. Import repo in [vercel.com/new](https://vercel.com/new)
3. Framework: **Vite** (auto-detected)
4. Build command: `npm run build` 
5. Output directory: `dist`

No `vercel.json` needed for a pure SPA — Vercel handles it automatically.

---

## Environment Variables

See [`.env.example`](.env.example) for all available variables. Copy to `.env` to use locally.

Prefix all Vite-exposed variables with `VITE_` — they'll be available as `import.meta.env.VITE_*`.

---

## Roadmap

- [ ] Hero visual (app mockup / map graphic)
- [ ] Features section
- [ ] Social proof / testimonials
- [ ] Download / app store CTA
- [ ] Footer with nav links
- [ ] Privacy Policy page (`/privacy`)
- [ ] Terms of Service page (`/terms`)
- [ ] Analytics integration (`VITE_GA_MEASUREMENT_ID`)
