# APP_FLOW.md (User Flows & Navigation)

## Screen Inventory

| Screen | Route | Type |
|--------|-------|------|
| Home | / | Single page with sections |

This is a single-page website. All navigation is anchor-based.

## Section Anchors

| Section | Anchor ID | Nav Label |
|---------|-----------|-----------|
| Hero | #hero | (none - top of page) |
| About | #about | About |
| Services | #services | Services |
| Partners | #partners | Partners |
| Team | #team | Team |
| Contact | #contact | Contact |

## User Flow: Primary (Corporate Executive)

**Entry Point:** Direct URL, Google search, or referral link

1. User lands on Hero section
2. Sees headline + Silicon Foundry partnership mention
3. Scrolls down OR clicks nav link
4. Reviews About section (company overview)
5. Reviews Services section (Consulting + Ventures)
6. Reviews Partners section (sees Silicon Foundry logo)
7. Reviews Team section (CEO + Advisors)
8. Reaches Contact section
9. Either:
   - Fills out contact form → Success message
   - Clicks email link → Opens email client
   - Clicks LinkedIn link → Opens LinkedIn profile in new tab

**Exit Points:**
- Contact form submitted
- Email sent
- LinkedIn profile visited
- Leaves site (task complete or abandoned)

## User Flow: Navigation

1. User clicks nav link (e.g., "Team")
2. Page smooth-scrolls to #team section
3. Nav link shows active state

## User Flow: Mobile Navigation

1. User taps hamburger icon
2. Mobile menu slides in (overlay or drawer)
3. User taps nav link
4. Menu closes
5. Page scrolls to section

## Error States

| Scenario | Handling |
|----------|----------|
| Contact form submission fails | Show error message: "Something went wrong. Please try again or email us directly." |
| Required field empty | Show inline validation: "This field is required" |
| Invalid email format | Show inline validation: "Please enter a valid email" |

## Success States

| Scenario | Handling |
|----------|----------|
| Contact form submitted | Replace form with: "Thanks for reaching out. We'll be in touch soon." |
