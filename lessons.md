# lessons.md — Development Learnings

## Purpose
This file tracks corrections and learnings to prevent repeated mistakes.

## Format
Each entry: Date | Issue | Correction | Rule

## Entries

### 2025-02-10 | Missing peer dependencies | Install explicitly | Always install shadcn peer deps
- **Issue:** `class-variance-authority`, `clsx`, `tailwind-merge` were not auto-installed by `npx shadcn@latest init` in this environment
- **Correction:** Ran `npm install class-variance-authority clsx tailwind-merge` manually
- **Rule:** After shadcn init, verify peer deps are present before building

### 2025-02-10 | src/lib/utils.ts not auto-generated | Create manually | shadcn init may not scaffold utils.ts
- **Issue:** shadcn components import `@/lib/utils` but the file was not created by shadcn init
- **Correction:** Manually created `src/lib/utils.ts` with `cn()` helper using clsx + tailwind-merge
- **Rule:** Always verify `src/lib/utils.ts` exists after shadcn init

### 2025-02-10 | Event handlers on server components | Add "use client" | App Router RSC constraint
- **Issue:** Next.js 14 App Router throws "Event handlers cannot be passed to Client Component props" when server components use onMouseEnter/Leave/onClick
- **Correction:** Added `"use client"` directive to Hero.tsx, Footer.tsx, Team.tsx
- **Rule:** Any component with event handlers (onClick, onMouseEnter, onChange, etc.) MUST have `"use client"` at the top in Next.js App Router

### 2025-02-10 | Apostrophes in JSX | Use HTML entities | ESLint react/no-unescaped-entities
- **Issue:** Raw apostrophes in JSX text (e.g. "Malaysia's") trigger ESLint error `react/no-unescaped-entities`
- **Correction:** Replace `'` with `&rsquo;` in JSX text nodes
- **Rule:** Always use HTML entities for apostrophes and quotes in JSX: `&rsquo;` for right single quote, `&ldquo;`/`&rdquo;` for double quotes

### 2025-02-10 | create-next-app conflicts with existing files | Move files temporarily | Project init limitation
- **Issue:** create-next-app@14 refuses to run if target directory contains files (CLAUDE.md, lessons.md, progress.txt)
- **Correction:** Temporarily moved conflicting files to a temp dir, ran create-next-app, moved files back
- **Rule:** For future projects, create docs files AFTER running create-next-app, or use a subdirectory then promote
