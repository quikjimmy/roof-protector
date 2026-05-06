# Roof Protector — Design & UI/UX Specification
**Version:** 1.0
**Last Updated:** 2026-05-06
**Product:** ARMO-VEX Roof Protector Landing Page
**Live URL:** roof-protector.vercel.app (pending)

---

## 1. Concept & Vision

A direct-response landing page that converts property owners and contractors who are actively researching roof restoration options. The site feels like a trusted technical resource — not a flashy marketing site. Every element earns the next click toward a form submission or Amazon purchase. Clean, dense with proof, zero fluff.

---

## 2. Design Language

### Aesthetic Direction
**Reference:** The technical documentation aesthetic of Stripe + the industrial trust signals of Sherwin-Williams commercial products. Clean, precise, authoritative. Not startup-cute, not corporate-boring.

### Color Palette
```
Primary Background:   #0F1923  (deep charcoal navy)
Secondary Background: #1A2530  (card/section background)
Accent:               #00C2FF  (electric cyan — innovation, precision)
Success/Green:        #22C55E  (proof, warranty, positive specs)
Text Primary:         #F8FAFC  (near-white)
Text Secondary:       #94A3B8  (muted descriptions)
Border/Divider:       #2D3F50  (subtle structure)
Warning:              #F59E0B  (use sparingly)
```

### Typography
```
Headlines:    Inter, 800 weight, -0.02em tracking
Subheads:     Inter, 600 weight
Body:         Inter, 400 weight, 1.6 line-height
Mono/specs:   JetBrains Mono (for technical numbers)
Fallbacks:    system-ui, -apple-system, sans-serif
```

### Spatial System
```
Base unit:      8px
Section padding: 80px top/bottom (desktop), 48px (mobile)
Container max:   1200px centered
Card padding:    32px
Grid gap:        24px
```

### Motion Philosophy
- Entrance: fade-up on scroll, 300ms ease-out, staggered 80ms
- Hover states: 150ms ease transitions on buttons/cards
- No parallax, no heavy animations — speed is a feature
- CTA buttons: subtle scale(1.02) on hover with cyan glow

### Visual Assets
- Icons: Lucide React (consistent stroke weight)
- Hero image: high-quality roof surface photo (to be sourced)
- Specs: use JetBrains Mono for numbers to feel "technical"
- No generic stock photos of contractors shaking hands

---

## 3. Layout & Structure

### Page Architecture (top to bottom)

```
[NAV]           Logo left, "Get Quote" button right — sticky, blurs on scroll
[HERO]          Full-width, dark bg, headline + sub + primary CTA + hero image
[SPECS GRID]    Dark cards, key numbers in mono font, proof-focused
[HOW IT WORKS]  3-step horizontal flow: Clean → Penetrate → Protect
[PROBLEM]       Left text, right image — aging roof pain point
[SOLUTION]      Dual-action mechanism explained visually
[APPLICATIONS]  Icon grid of use cases (residential, commercial, industrial, etc.)
[WARRANTY]      Prominent 15-year badge, clean section
[LEAD FORM]     Name/email/property type/sq ft — most visible CTA
[AMAZON CTA]    Secondary purchase path — "Buy on Amazon" button
[FOOTER]        Contact info, address, legal
```

### Responsive Strategy
- Mobile-first breakpoints: 640px, 1024px, 1280px
- Hero: stacks vertically on mobile, image moves below text
- Specs grid: 2-col mobile, 4-col desktop
- How it works: vertical on mobile, horizontal on desktop
- Form: single column always

---

## 4. Features & Interactions

### Navigation
- Sticky on scroll with `backdrop-filter: blur(12px)` and slight bg opacity
- "Get Quote" button scrolls to form section
- Logo links to top of page (single page)

### Hero CTA
- Primary: "Get a Quote" → scrolls to form
- Secondary: "See Specs" → scrolls to specs grid
- On hover: button lifts with subtle cyan shadow

### Specs Grid
- 6 key specs displayed as cards
- On hover: card brightens slightly, border glows cyan
- Numbers in JetBrains Mono font

### Lead Form
- Fields: Full Name, Email, Phone (optional), Property Type (dropdown), Sq Ft Estimate (number), Notes (textarea)
- Validation: real-time, red border + message below invalid fields
- Submit: button shows spinner → success message with green checkmark
- Error state: red border, error message, form stays populated

### Amazon CTA Button
- Opens Amazon product page in new tab
- Tracking-ready (UTM params on the link)

### Mobile Interactions
- Hamburger menu on mobile (slides in from right)
- Swipe gestures not implemented (not needed for this use case)
- Form fields: appropriate keyboard types (email, tel, number)

---

## 5. Component Inventory

### Button (Primary)
- Default: bg #00C2FF, text #0F1923, 16px/600, 12px 24px padding, 8px radius
- Hover: scale 1.02, box-shadow 0 0 20px rgba(0,194,255,0.3)
- Active: scale 0.98
- Disabled: opacity 0.5, cursor not-allowed
- Loading: spinner replaces text, disabled state

### Button (Secondary/Ghost)
- Default: transparent bg, border 1px #2D3F50, text #F8FAFC
- Hover: border #00C2FF, text #00C2FF
- Active/disabled/loading: same pattern as primary

### Card (Spec)
- bg: #1A2530, border: 1px solid #2D3F50, 24px padding, 12px radius
- Label: 12px, uppercase, letter-spacing 0.1em, text-secondary
- Value: 32px, JetBrains Mono, 800 weight, text-primary
- Hover: border transitions to rgba(0,194,255,0.4)
- Badge: small green or cyan tag for "Zero VOC" style callouts

### Form Input
- Default: bg #0F1923, border 1px #2D3F50, 12px 16px padding, 8px radius, text #F8FAFC
- Focus: border #00C2FF, subtle cyan glow
- Error: border #EF4444, error message below in red
- Placeholder: text-secondary

### Section Header
- Eyebrow: 12px, uppercase, #00C2FF, letter-spacing 0.15em
- Headline: 40px, 800 weight, text-primary, -0.02em tracking
- Subtext: 18px, text-secondary, 1.6 line-height, max 600px wide

### Navigation
- Height: 72px
- Logo: ARMO-VEX text mark (no logo file yet — use text)
- Background: rgba(15,25,35,0.8) + blur
- Mobile: same height, hamburger icon right

### Footer
- bg: #0A1017
- 3 columns: contact, links, legal
- Border-top: 1px solid #2D3F50

---

## 6. Technical Approach

### Stack
- **Framework:** React 19 + Vite
- **Routing:** TanStack Router (file-based)
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel (auto-deploy on main branch push)
- **Forms:** React Hook Form + Zod validation
- **Animations:** Tailwind + CSS transitions (no heavy animation library)

### Project Structure
```
src/
  components/
    ui/           # Button, Card, Input, Badge — reusable primitives
    sections/     # Hero, SpecsGrid, HowItWorks, LeadForm, Footer
    layout/       # Nav, Container, Section
  routes/
    index.tsx    # Single page — all sections rendered here
  lib/
    validation.ts  # Zod schemas for form
    constants.ts   # Colors, spacing, copy
  styles/
    globals.css   # CSS variables, base styles
```

### Performance Targets
- Lighthouse score: 90+ on mobile
- LCP: < 2.5s
- No layout shift on load
- Images: lazy loaded, proper srcset for retina

### SEO
- Title: "Roof Protector | ARMO-VEX — Roof Restoration Without Replacement"
- Meta description: "15-year warranty. Zero VOC. Spray-applied roof coating for asphalt shingle and concrete. Extend your roof's life without replacement."
- OG image: to be created

### Form Handling
- Client-side validation with Zod
- On submit: POST to internal endpoint that forwards to sales@armovex.com + logs to Google Sheet
- For Phase 1: can use a simple mailto: fallback or Formspree
- Success: inline success message, form clears
- Error: inline error message, form stays

---

## 7. Copy Guidelines

### Voice
- Direct, technical, confident — not salesy
- Numbers over adjectives ("15-year warranty" not "amazing long-lasting protection")
- Active verbs: "penetrates", "seals", "extends", "protects"
- No jargon that a homeowner wouldn't understand

### Headlines (Examples)
- "Roof Restoration Without Replacement"
- "15-Year Warranty. Zero VOC. Single-Component Application."
- "Penetrates. Seals. Protects."

### What to Avoid
- "The future of roofing"
- "Cutting-edge technology" (or any vague tech claims)
- "Trusted by thousands" without proof
- Exaggerated before/after claims

---

## 8. Phase 2 Features (Not in Scope for v1)

- Roof square footage calculator (address → satellite data → gallons + Amazon link)
- Live chat / chatbot
- Testimonial video section
- Blog / resource center
- Multi-language support

---

## 9. Quality Checklist (For Dev Agent)

Before marking a section as complete, verify:
- [ ] Mobile responsive at 375px, 768px, 1280px
- [ ] All hover/focus/active states implemented
- [ ] Form validation works on all fields
- [ ] No console errors
- [ ] All external links open in new tab
- [ ] Lighthouse Performance > 85
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Sticky nav doesn't overlap content on scroll