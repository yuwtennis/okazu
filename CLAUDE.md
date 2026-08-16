# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**okazu** — a preventative illness solution that recommends side dishes to lower the risk of common symptoms, intended to build healthier daily habits. Not a medical remedy.

## Tooling

- **Language:** TypeScript / JavaScript (Next.js 14, React 18)
- **Runtime:** Node.js (npm)
- **Framework:** Next.js 14 App Router
- **IDE:** IntelliJ IDEA (project files in `.idea/`)

## Build & Run

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:3000
npm run build      # production build
npm run start      # serve production build
npm run lint       # ESLint via next lint
```

## Directory Structure

```
okazu/
├── public/              # static assets served at /
│   └── okazu.html       # standalone landing page (Perfect Landing submission)
├── src/
│   └── app/             # Next.js App Router
│       ├── layout.tsx   # root layout + metadata
│       ├── page.tsx     # home page
│       └── globals.css  # global styles
├── next.config.mjs      # Next.js config
├── tsconfig.json        # TypeScript config (paths: @/* → src/*)
└── package.json
```

## Key Files

- `public/okazu.html` — self-contained HTML/CSS/JS landing page with symptom picker, dish recommendations, and nutrient-linking interaction. No build step required; open directly in a browser.
- `src/app/` — Next.js scaffolding; intended as the future home of the full application.
