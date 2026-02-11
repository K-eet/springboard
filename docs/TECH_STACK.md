# TECH_STACK.md (Dependencies & Tools)

## Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.x | React framework, static export |
| React | 18.2.x | UI library |
| TypeScript | 5.x | Type safety |

## Styling

| Technology | Version | Purpose |
|------------|---------|---------|
| Tailwind CSS | 3.4.x | Utility-first styling |
| tailwindcss-animate | latest | Subtle animations |

## UI Components

| Technology | Version | Purpose |
|------------|---------|---------|
| shadcn/ui | latest | Pre-built accessible components |
| Radix UI | (via shadcn) | Primitive components |
| Lucide React | latest | Icons |

## Fonts

| Font | Source | Usage |
|------|--------|-------|
| Quintessential | Google Fonts | Hero headline ONLY |
| Instrument Serif | Google Fonts | All other text (headings, body, nav, buttons) |

## Build & Deploy

| Technology | Purpose |
|------------|---------|
| Static Export | next export for static HTML/CSS/JS |
| Vercel OR Netlify | Hosting (client choice) |

## Development Tools

| Tool | Purpose |
|------|---------|
| ESLint | Code linting |
| Prettier | Code formatting |
| Git | Version control |

## What NOT to Use

- No backend framework (Express, Fastify, etc.)
- No database (Supabase, Firebase, etc.)
- No CMS (Contentful, Sanity, etc.)
- No authentication (Clerk, Auth0, etc.)
- No state management library (Redux, Zustand)
- No heavy animation libraries (GSAP, Framer Motion)
- No jQuery
