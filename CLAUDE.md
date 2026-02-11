# CLAUDE.md — AI Operating Manual

## Project Overview

Springboard Malaysia corporate website. Static site for credibility/background check purposes. Target audience: corporate executives evaluating Springboard for enterprise AI transformation.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide React icons
- Quintessential + Instrument Serif fonts (Google Fonts)
- Static export (no backend)

## File Conventions

- Components: PascalCase (e.g., `Hero.tsx`)
- Utilities: camelCase (e.g., `utils.ts`)
- Sections go in `src/components/sections/`
- Layout components go in `src/components/layout/`
- shadcn components stay in `src/components/ui/`

## Design Tokens

Reference docs/FRONTEND_GUIDELINES.md for all colors, typography, spacing.

**Emulate Sequoia's website (https://sequoiacap.com/) exactly.**

Key colors (Sequoia-inspired light mode):
- Background: #FAF8F4 (warm cream)
- Text: #1A1A1A (near-black)
- Accent/Footer: #0D5C4B (dark teal)
- Buttons: #1A1A1A (black pill buttons)

Fonts:
- Quintessential: Hero headline ONLY
- Instrument Serif: Everything else

Key visual patterns from Sequoia:
- Massive centered headlines with generous whitespace
- Pill-shaped buttons and inputs
- Dark teal footer
- Uppercase, letter-spaced navigation
- Optional hand-drawn annotation on hero keyword (teal circle/underline)

## Component Patterns

- Use shadcn/ui components where available
- Extend with Tailwind classes
- Keep components single-responsibility
- Props interface defined for all components
- Use semantic HTML (section, article, nav, etc.)

## What's Allowed

- Tailwind utility classes
- shadcn/ui components
- Lucide icons
- Placeholder text (clearly marked)
- Placeholder images (grey with descriptive alt text)

## What's Forbidden

- Adding dependencies not in TECH_STACK.md
- Adding features not in PRD.md
- Using colors not in FRONTEND_GUIDELINES.md
- Complex animations or scroll effects
- Any backend code
- Any database calls
- Any authentication logic

## Reference Docs

All canonical documentation lives in `/docs/` directory. Read these before making decisions:
- docs/PRD.md → What to build
- docs/APP_FLOW.md → How users navigate
- docs/TECH_STACK.md → What tools to use
- docs/FRONTEND_GUIDELINES.md → How it looks
- docs/BACKEND_STRUCTURE.md → (Confirms no backend)
- docs/IMPLEMENTATION_PLAN.md → Build sequence

Session files live in root:
- CLAUDE.md (this file)
- progress.txt
- lessons.md

## Session Protocol

1. Read CLAUDE.md (this file)
2. Read progress.txt for current state
3. Read lessons.md for past corrections
4. Reference canonical docs in /docs/ as needed
5. Build only what's specified
6. Update progress.txt after each completed step
7. Update lessons.md after any correction

## Documentation Sync Protocol (CRITICAL)

**All documentation must stay in sync at all times. Docs are the source of truth—code follows docs, not the other way around.**

### When ANY new feature, change, or modification is requested:

**STEP 1: STOP. Do not write code yet.**

**STEP 2: Update ALL affected docs in /docs/:**

| If the change affects... | Update this doc |
|-------------------------|-----------------|
| What we're building, scope, or requirements | docs/PRD.md |
| User flows, navigation, screens, or routes | docs/APP_FLOW.md |
| New packages, tools, or dependencies | docs/TECH_STACK.md |
| Visual design, components, colors, or spacing | docs/FRONTEND_GUIDELINES.md |
| Data, forms, APIs, or external services | docs/BACKEND_STRUCTURE.md |
| Build order or new implementation steps | docs/IMPLEMENTATION_PLAN.md |

**STEP 3: Cross-reference check.** Ensure consistency:
- Feature in PRD.md? → Must have flow in APP_FLOW.md
- New component? → Must be in FRONTEND_GUIDELINES.md
- New dependency? → Must be in TECH_STACK.md with version
- New build step? → Must be in IMPLEMENTATION_PLAN.md in correct sequence

**STEP 4: Only then, implement the feature.**

**STEP 5: Update progress.txt** to reflect both documentation AND implementation completed.

### Hard Rules

- **Never implement an undocumented feature.** If it's not in the docs, it doesn't get built.
- **Never leave docs out of sync.** If you update one doc, check if others need updates.
- **If asked to "just add something quick"**—refuse. Explain that undocumented changes cause drift, inconsistency, and compounding errors. Offer to update docs first.
- **When in doubt, update the docs.** Over-documentation is better than under-documentation.
