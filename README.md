# GadgetAR

A dark-themed, Webflow-style landing page template for an AR gadget product. Built with Next.js 16, Tailwind CSS v4, shadcn/ui components and Framer Motion animations — hero section, feature showcase, pages grid, extras and footer, all client-rendered.

## Features

- Sticky header with mobile menu
- Animated hero section (Framer Motion)
- Feature showcase and "what's included" sections
- Pages grid and extras section
- Dark aesthetic, fully responsive
- Pure static landing page — no backend required

## Tech Stack

- Next.js 16 (App Router, static export)
- TypeScript, Tailwind CSS v4, shadcn/ui (Radix)
- Framer Motion

## Quick Start

```bash
npm install --legacy-peer-deps
npm run dev
# open http://localhost:3000
```

## Build (static export)

```bash
npm install --legacy-peer-deps
npx next build   # outputs to out/
```

Serve the `out/` directory with any static host.

## Project Structure

```
GadgetAR/
├── src/
│   ├── app/            # App Router: layout, page (landing), globals.css
│   └── components/
│       ├── landing/    # Header, HeroSection, FeatureShowcase, PagesGrid, ExtrasSection, Footer
│       └── ui/         # shadcn/ui primitives
├── public/             # static assets
├── next.config.ts      # static export config
└── package.json
```

## Deploy

Live demo: https://girishlade111.github.io/GadgetAR/

Static export served from GitHub Pages (`gh-pages` branch). Rebuild with `npx next build` and push `out/` to the `gh-pages` branch.

---

Built by Girish Lade · https://ladestack.in
