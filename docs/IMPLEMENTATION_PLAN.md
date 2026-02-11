# IMPLEMENTATION_PLAN.md

## Phase 1: Project Setup

### Step 1.1: Initialize Project
```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

### Step 1.2: Install Dependencies
```bash
npm install lucide-react
npx shadcn@latest init
```
When prompted:
- Style: Default
- Base color: Slate
- CSS variables: Yes

### Step 1.3: Add shadcn Components
```bash
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add card
```

### Step 1.4: Configure Tailwind
- Extend theme with color tokens from FRONTEND_GUIDELINES.md
- Add Quintessential font from Google Fonts (hero only)
- Add Instrument Serif font from Google Fonts (all other text)
- Configure light mode (no dark mode toggle)

### Step 1.5: Create Folder Structure
```
springboard/
├── docs/
│   ├── PRD.md
│   ├── APP_FLOW.md
│   ├── TECH_STACK.md
│   ├── FRONTEND_GUIDELINES.md
│   ├── BACKEND_STRUCTURE.md
│   └── IMPLEMENTATION_PLAN.md
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Partners.tsx
│   │   │   ├── Team.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       └── (shadcn components)
│   └── lib/
│       └── utils.ts
├── public/
├── .env.example
├── CLAUDE.md
├── progress.txt
├── lessons.md
├── package.json
└── README.md
```

## Phase 2: Layout Components

### Step 2.1: Build Header Component (Sequoia-style)
Per docs/FRONTEND_GUIDELINES.md navigation specs:
- Fixed position, solid background (no blur)
- Logo placeholder (left-aligned)
- Nav links (right-aligned): ABOUT, SERVICES, PARTNERS, TEAM, CONTACT
- Nav links: uppercase, letter-spacing: 0.1em, font-size: 12px, Instrument Serif
- Nav link color: muted grey, hover: dark
- Border bottom: 1px solid border color
- Mobile hamburger menu
- Smooth scroll on click

### Step 2.2: Build Footer Component (Sequoia-style)
- Background: dark teal (#0D5C4B)
- Text: white and semi-transparent white
- Multi-column layout with link groups
- Section headers: uppercase, small caps
- Logo placeholder (white version)
- Copyright text
- Privacy/Terms links
- LinkedIn icon

### Step 2.3: Create Root Layout
- Import fonts (Quintessential, Instrument Serif)
- Apply warm cream background
- Add Header and Footer
- Configure metadata (title, description)

## Phase 3: Section Components

### Step 3.1: Build Hero Section (Sequoia-style)
- Full viewport height (min-h-screen)
- Centered content with massive vertical padding (200px+)
- Headline using Quintessential font (text-hero size, centered)
- Optional: hand-drawn teal annotation (circle or underline) on one keyword using SVG or CSS
- Subheadline with Silicon Foundry mention (Instrument Serif, smaller)
- CTA button: black pill-shaped ("Get in Touch" → scrolls to #contact)
- NO background image—pure typography on cream background

### Step 3.2: Build About Section
- Section ID: #about
- Section title
- 2-3 paragraph placeholder copy
- Max-width prose container

### Step 3.3: Build Services Section
- Section ID: #services
- Section title
- Two-column grid (stack on mobile)
- Card for Consulting: icon + title + description
- Card for Ventures: icon + title + description

### Step 3.4: Build Partners Section
- Section ID: #partners
- Section title: "Strategic Partners"
- Silicon Foundry logo placeholder (grey rectangle)
- Grid for future partner logos (3-6 slots)
- Partnership description text

### Step 3.5: Build Team Section
- Section ID: #team
- Section title: "Leadership"
- CEO card (larger, prominent):
  - Headshot placeholder (160px circle)
  - Name, title, bio
  - LinkedIn link
- Advisors grid (2x2 on desktop, stack on mobile):
  - 4 advisor cards
  - Headshot placeholder (96px circle)
  - Name, title, 1-line bio

### Step 3.6: Build Contact Section
- Section ID: #contact
- Section title: "Let's Talk"
- Contact form:
  - Name input
  - Email input
  - Message textarea
  - Submit button
- Form action: Formspree endpoint (placeholder)
- Success/error states
- Location text: "Kuala Lumpur, Malaysia"

## Phase 4: Assembly & Polish

### Step 4.1: Assemble Page
- Import all sections into page.tsx
- Verify section order: Hero → About → Services → Partners → Team → Contact
- Test all anchor navigation

### Step 4.2: Mobile Responsiveness
- Test all breakpoints (640px, 768px, 1024px)
- Verify hamburger menu works
- Verify text scales correctly
- Verify cards stack properly

### Step 4.3: Accessibility Audit
- Add skip-to-content link
- Verify heading hierarchy (h1 → h2 → h3)
- Check color contrast
- Test keyboard navigation
- Add aria-labels where needed

### Step 4.4: Performance Check
- Run Lighthouse audit
- Optimize images (Next.js Image component)
- Verify no layout shift
- Target: 90+ performance score

## Phase 5: Deployment Prep

### Step 5.1: Static Export
```bash
npm run build
```
Verify static export works.

### Step 5.2: Environment Setup
- Create .env.local for Formspree ID (if used)
- Add to .gitignore

### Step 5.3: Final Review
- Check all placeholder text is clearly marked
- Verify all links work
- Test on real mobile device
- Cross-browser check (Chrome, Safari, Firefox)
