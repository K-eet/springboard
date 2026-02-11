# FRONTEND_GUIDELINES.md (Design System)

## Design Philosophy

- Premium, professional, trustworthy
- Minimalist with generous whitespace
- Light mode only (warm cream background, NOT harsh white)
- Editorial typography with classic serif headlines
- No "startup-y" or playful elements
- **Emulate Sequoia Capital's website exactly**

## Visual References

**Primary reference: https://sequoiacap.com/**

Key elements to replicate from Sequoia:
1. **Hero:** Massive centered serif headline on warm cream (#FAF8F4) background, optional hand-drawn teal annotation (circle/underline) on one keyword, generous vertical padding (200px+)
2. **Navigation:** Uppercase, letter-spaced links (12px), right-aligned, subtle grey color
3. **Typography:** Large serif headlines, clean body text, lots of breathing room
4. **Inputs:** Pill-shaped (border-radius: 50px) with subtle border
5. **Buttons:** Black pill-shaped buttons with white text
6. **Footer:** Dark teal (#0D5C4B) background, white text, multi-column link layout
7. **Sections:** Separated by subtle horizontal lines or generous whitespace
8. **Overall feel:** Editorial, confident, unhurried—like a high-end magazine

Secondary alignment: https://sifoundry.com/ (partner visual consistency)

## Color Palette

### Light Theme (Sequoia-Inspired)

| Token | Hex | Usage |
|-------|-----|-------|
| --background | #FAF8F4 | Page background (warm cream, matches Sequoia) |
| --background-elevated | #FFFFFF | Cards, input fields |
| --background-subtle | #F5F3EF | Section alternates |
| --foreground | #1A1A1A | Primary text (near-black) |
| --foreground-muted | #6B6B6B | Secondary text, nav links |
| --foreground-subtle | #9A9A9A | Tertiary text, placeholders |
| --accent | #0D5C4B | Dark teal/green (Sequoia footer color) |
| --accent-hover | #0A4A3D | Darker teal for hover |
| --accent-highlight | #2D8C7A | Teal for highlights/annotations |
| --border | #E8E6E1 | Subtle warm grey borders |
| --button-dark | #1A1A1A | Black buttons (like Sequoia "Submit") |
| --button-dark-text | #FFFFFF | White text on black buttons |

## Typography

### Font Families
```css
--font-display: 'Quintessential', cursive; /* Hero headline only */
--font-serif: 'Instrument Serif', Georgia, serif; /* All other text */
```

**Usage:**
- **Quintessential:** Hero headline ONLY (large statement text)
- **Instrument Serif:** Everything else (subheadlines, body, navigation, buttons, captions)

### Type Scale

| Token | Size | Font | Weight | Line Height | Usage |
|-------|------|------|--------|-------------|-------|
| --text-hero | 72px / 4.5rem | Quintessential | 400 | 1.1 | Hero headline ONLY |
| --text-h1 | 48px / 3rem | Instrument Serif | 400 | 1.2 | Section titles |
| --text-h2 | 32px / 2rem | Instrument Serif | 400 | 1.3 | Subsection titles |
| --text-h3 | 24px / 1.5rem | Instrument Serif | 400 | 1.4 | Card titles |
| --text-body | 18px / 1.125rem | Instrument Serif | 400 | 1.6 | Body copy |
| --text-small | 14px / 0.875rem | Instrument Serif | 400 | 1.5 | Captions, labels |
| --text-nav | 16px / 1rem | Instrument Serif | 400 | 1.5 | Navigation links |

### Responsive Typography

| Breakpoint | Hero | H1 | H2 | Body |
|------------|------|----|----|------|
| Mobile (<640px) | 40px | 32px | 24px | 16px |
| Tablet (640-1024px) | 56px | 40px | 28px | 17px |
| Desktop (>1024px) | 72px | 48px | 32px | 18px |

## Spacing Scale

| Token | Value |
|-------|-------|
| --space-1 | 4px |
| --space-2 | 8px |
| --space-3 | 12px |
| --space-4 | 16px |
| --space-6 | 24px |
| --space-8 | 32px |
| --space-12 | 48px |
| --space-16 | 64px |
| --space-20 | 80px |
| --space-24 | 96px |
| --space-32 | 128px |

## Layout

### Container
- Max width: 1200px
- Centered with auto margins
- Horizontal padding: 24px (mobile), 48px (tablet), 64px (desktop)

### Section Spacing
- Vertical padding: 80px (mobile), 120px (desktop)

### Grid
- 12-column grid for complex layouts
- Gap: 24px (mobile), 32px (desktop)

## Components

### Buttons

**Primary Button (Black, Sequoia-style):**
- Background: var(--button-dark) #1A1A1A
- Text: white
- Padding: 16px 32px
- Border radius: 50px (pill shape)
- Font: Instrument Serif, 16px
- Hover: slight opacity change (0.9)
- Transition: 150ms ease

**Ghost/Outline Button:**
- Background: transparent
- Border: 1px solid var(--border)
- Text: var(--foreground)
- Border radius: 50px (pill shape)
- Hover: background var(--background-subtle)

### Form Inputs (Sequoia-style)

**Text Input:**
- Background: var(--background-elevated) white
- Border: 1px solid var(--border)
- Border radius: 50px (pill shape, like Sequoia email input)
- Padding: 16px 24px
- Font: Instrument Serif, 16px
- Placeholder color: var(--foreground-subtle)
- Focus: border-color var(--foreground-muted)

### Cards
- Background: var(--background-elevated) or transparent
- Border: 1px solid var(--border) OR no border with subtle shadow
- Border radius: 0px (sharp edges) or 8px max
- Padding: 32px

### Navigation (Sequoia-style)
- Fixed position, top: 0
- Background: var(--background) solid (no blur)
- Height: 80px
- Border bottom: 1px solid var(--border)
- Logo: left-aligned
- Nav links: right-aligned, uppercase, letter-spacing: 0.1em, font-size: 12px
- Nav link color: var(--foreground-muted)
- Nav link hover: var(--foreground)

### Footer (Sequoia-style)
- Background: var(--accent) dark teal #0D5C4B
- Text color: white and rgba(255,255,255,0.7)
- Padding: 64px vertical
- Multi-column layout with link groups
- Small caps for section headers

### Hero Section (Sequoia-style)
- Massive centered headline
- Generous vertical padding (200px+ top and bottom)
- Optional: hand-drawn annotation/underline on key word (teal color)
- Single-line subheadline below
- Minimal—no background images, no gradients

### Section Dividers
- Use subtle horizontal lines (1px solid var(--border))
- Or generous whitespace between sections
- Sequoia uses top border on sections to create separation

## Responsive Breakpoints

| Name | Min Width | Tailwind Prefix |
|------|-----------|-----------------|
| Mobile | 0px | (default) |
| sm | 640px | sm: |
| md | 768px | md: |
| lg | 1024px | lg: |
| xl | 1280px | xl: |

## Accessibility

- Minimum contrast ratio: 4.5:1 for body text
- Focus states visible on all interactive elements
- Semantic HTML (header, nav, main, section, footer)
- Alt text on all images (even placeholders)
- Skip to content link (hidden until focused)

## Animation

- Keep animations subtle and purposeful
- Default transition: 150ms ease
- Hover states only (no scroll animations)
- No autoplay video
- Respect prefers-reduced-motion
- Optional: subtle hand-drawn annotation on hero keyword (SVG or CSS)

## Imagery

- NO hero images—pure typography like Sequoia
- Minimal imagery overall—let typography and whitespace breathe
- Team headshots: circular crop, consistent size, professional quality
- Partner logos: clean, possibly greyscale for consistency
- Placeholder headshots: solid grey circles with user icon
- If using decorative elements: hand-drawn style annotations (like Sequoia's teal circle/underline on "daring")
- All images optimized for web (Next.js Image component)
