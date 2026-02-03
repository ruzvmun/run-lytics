# Task: Build Run-lytics Data Services Website

## Goal

Build a professional, responsive single-page marketing website for **Run-lytics Data Services** — a BI & analytics company. The site should follow the visual style of inspirational and use the same code architecture as the SCard inspiration project (React + TypeScript, Vite, Tailwind CSS + MUI 5, feature-based module structure).

---

## Current State

- `site/` folder exists with config files (`package.json`, `vite.config.ts`, `tailwind.config.js`, etc.) and `node_modules` installed
- **No `src/` directory** — the project is a blank canvas
- `index.html` and `package.json` currently reference "PACALO Transportation" (a client project) — these need to be updated for Run-lytics
- All needed dependencies are already in `package.json` (React, MUI, Tailwind, Framer Motion, React Router, etc.)

---

## Source Material Summary

### From PowerPoint Mockups (`downloads/description/`)

**Slide Structure (4 pages):**
1. **About Us / Hero** — Company logo + description + tagline "Run on Insights!"
2. **Services** — Business Intelligence + Data Storytelling
3. **Clients** — Logos of past clients
4. **Contact Us** — Arnold, 309-307-4564, data@runlytics.com + contact form

**Images in PowerPoints (6-7 files):**
| Image                   | Content                                                             | Use              |
| ----------------------- | ------------------------------------------------------------------- | ---------------- |
| image1.jpg              | Run-lytics logo (dark blue bg, ascending blue gradient bars)        | Header/Hero logo |
| image2.png              | Dashboard Development graphic (Power BI + Tableau dashboards)       | Services section |
| image3.png              | Data Analysis icon (bar chart + line in circle, blue/yellow)        | Services section |
| image4.png              | Business Intelligence icon (head + lightbulb + charts, blue/yellow) | Services section |
| image5.png              | PACALO Medical Transportation logo                                  | Clients section  |
| image6.jpg              | Comfort Transit LLC logo                                            | Clients section  |
| image7.png (PPTX2 only) | Park National Bank logo                                             | Clients section  |

**Company Copy:**
- **About:** "Run-lytics Data Services is a dynamic technology provider at the forefront of digital transformation. We specialize in Business Intelligence & Analytics solutions powered by tools like Power BI, Tableau and Qlik. We build robust BI & Analytics platforms to drive business growth, create seamless online experiences in eCommerce, deliver cutting-edge fintech innovations, and craft scalable, custom applications tailored to your needs."
- **BI Service:** "Unlock smarter decision-making with tech-driven data insights. We turn raw data into clear, actionable info that helps leaders and teams make confident, informed decisions — fast."
- **Data Storytelling:** "Give your team the power to make smarter, faster decisions with top-tier analytics. We build Business Dashboards, Data Visuals, and Interactive Reports that actually drive impact. Tap into leading tools like Qlik, Power BI, and Tableau — and turn your data into real action."
- **Contact:** Arnold — 309-307-4564, data@runlytics.com (PPTX2 notes: add contact form)

### Inspiration: Analytics

- Professional analytics/consulting firm website
- Dark, modern design with gradient accents
- Sections: Hero with value prop, Services grid, Client logos, Contact/CTA
- Smooth animations and transitions
- Responsive layout

### Inspiration: SCard Code Architecture

- **Stack:** Vite + React 18 + TypeScript, MUI 5, Tailwind CSS
- **Structure:** Feature-based modules under `src/features/`
- **Shared core:** `src/@runlytics.core/` (adapted from `@scard.core/`)
- **Styling convention:** Tailwind for utilities/layout, MUI for complex components (buttons, dialogs, icons)
- **Path alias:** `@/*` → `src/*`
- **Formatting:** Single quotes, no semicolons, trailing commas, 100-char width
- **Naming:** PascalCase components, camelCase hooks/utils

---

## Implementation Plan

### Phase 1: Project Setup & Configuration

- [x] Update `index.html` — Change all PACALO references to Run-lytics Data Services, update meta tags, SEO, Open Graph, schema.org markup
- [x] Update `package.json` — Change name to `runlytics-site`, update scripts if needed
- [x] Update `tailwind.config.js` — Define Run-lytics color palette (dark navy `#0a1628`, blue gradient `#2563eb` to `#60a5fa`, accent gold/yellow)
- [x] Update `vite.config.ts` — Already configured with `@/*` path alias and chunk splitting
- [x] Update `tsconfig.app.json` — Already configured with `@/*` path alias
- [x] Create `src/` directory structure:
  ```
  src/
  ├── @runlytics.core/
  │   ├── components/       # Shared UI components
  │   ├── theme/            # MUI theme config
  │   └── hooks/            # Shared hooks
  ├── app/
  │   ├── App.tsx           # Main app with router
  │   └── layout/
  │       └── Layout.tsx    # Page layout (nav + footer wrapper)
  ├── features/
  │   ├── hero/
  │   │   └── components/   # HeroSection.tsx
  │   ├── about/
  │   │   └── components/   # AboutSection.tsx
  │   ├── services/
  │   │   └── components/   # ServicesSection.tsx, ServiceCard.tsx
  │   ├── clients/
  │   │   └── components/   # ClientsSection.tsx
  │   └── contact/
  │       └── components/   # ContactSection.tsx, ContactForm.tsx
  ├── assets/
  │   └── images/
  │       ├── logos/         # Run-lytics logo
  │       ├── services/      # Service icons & dashboard graphic
  │       └── clients/       # Client logos
  ├── styles/
  │   ├── index.css         # Tailwind directives + global styles
  │   └── app-base.css      # Base overrides
  ├── main.tsx              # Entry point
  └── vite-env.d.ts         # Vite type defs
  ```
- [x] Copy PowerPoint images into `src/assets/images/` with descriptive names:
  - `logos/runlytics-logo.jpg` ← image1.jpg
  - `services/dashboard-development.png` ← image2.png
  - `services/data-analysis-icon.png` ← image3.png
  - `services/business-intelligence-icon.png` ← image4.png
  - `clients/pacalo-logo.png` ← image5.png
  - `clients/comfort-transit-logo.jpg` ← image6.jpg
  - `clients/park-national-bank-logo.png` ← image7.png

### Phase 2: Core Infrastructure

- [x] Create MUI theme (`src/@runlytics.core/theme/theme.ts`) — Dark navy primary, blue accent, gold highlight, custom typography
- [x] Create global CSS (`src/styles/index.css`) — Tailwind directives, smooth scrolling, custom scrollbar, dark background
- [x] Create entry point (`src/main.tsx`) — React root with MUI ThemeProvider, CssBaseline
- [x] Create App component (`src/app/App.tsx`) — Single-page layout with scroll-based navigation
- [x] Create Layout (`src/app/layout/Layout.tsx`) — Navbar + content + Footer + ScrollToTop

### Phase 3: Navigation & Footer

- [x] Create `Navbar.tsx` — Sticky top nav with Run-lytics logo, section links (About, Services, Clients, Contact), smooth scroll on click, transparent → solid on scroll, mobile hamburger menu
- [x] Create `Footer.tsx` — Company info, contact details, copyright, quick links

### Phase 4: Hero Section

- [x] Create `HeroSection.tsx` — Full-viewport hero with dark gradient background, Run-lytics logo, tagline "Run on Insights!", brief value proposition, CTA buttons ("Get Started" + "Our Services"), Framer Motion entrance animations

### Phase 5: About Section

- [x] Create `AboutSection.tsx` — Company description from PPTX, highlight cards (BI & Analytics, eCommerce, Fintech, Custom Apps), Framer Motion scroll-triggered animations

### Phase 6: Services Section

- [x] Create `ServicesSection.tsx` — Section header "Services We Offer", grid of 3 service cards
- [x] Create `ServiceCard.tsx` — MUI Card with icon, title, description, hover lift effect
  1. **Business Intelligence** — image4.png icon + BI description
  2. **Data Storytelling** — image3.png icon + storytelling description
  3. **Dashboard Development** — image2.png + dashboard description
- [x] Add Framer Motion staggered entrance animations

### Phase 7: Clients Section

- [x] Create `ClientsSection.tsx` — "Clients We've Worked With" header, logo grid displaying:
  - PACALO Medical Transportation
  - Comfort Transit LLC
  - Park National Bank
- [x] Style logos with grayscale → color on hover, glass card containers

### Phase 8: Contact Section

- [x] Create `ContactSection.tsx` — Section with contact info (Arnold, phone, email) + contact form
- [x] Create `ContactForm.tsx` — Form with Name, Email, Message fields using React Hook Form + MUI TextField, mailto: submission
- [x] Display phone number and email as clickable links (`tel:`, `mailto:`)

### Phase 9: Polish & Responsiveness

- [x] Ensure full mobile responsiveness (Tailwind breakpoints throughout all components)
- [x] Add smooth scroll behavior for nav links (CSS smooth-scroll + JS scrollIntoView)
- [x] Add scroll-to-top button (`ScrollToTop.tsx` with Framer Motion animation)
- [ ] Add loading state / skeleton (deferred — not critical for MVP)
- [x] Mobile hamburger menu in Navbar
- [x] Verify all images load correctly (build succeeds with all assets)
- [x] Performance: Vite chunk splitting configured for MUI, Framer Motion, etc.

---

## Progress Summary

| Phase                        | Status | Progress |
| ---------------------------- | ------ | -------- |
| Phase 1: Project Setup       | DONE   | 7/7      |
| Phase 2: Core Infrastructure | DONE   | 5/5      |
| Phase 3: Navigation & Footer | DONE   | 2/2      |
| Phase 4: Hero Section        | DONE   | 1/1      |
| Phase 5: About Section       | DONE   | 1/1      |
| Phase 6: Services Section    | DONE   | 3/3      |
| Phase 7: Clients Section     | DONE   | 2/2      |
| Phase 8: Contact Section     | DONE   | 3/3      |
| Phase 9: Polish              | DONE   | 6/7      |

---

## Files to Create/Modify

| File                                                        | Action             | Status  |
| ----------------------------------------------------------- | ------------------ | ------- |
| `site/index.html`                                           | Modify             | Pending |
| `site/package.json`                                         | Modify             | Pending |
| `site/tailwind.config.js`                                   | Modify             | Pending |
| `site/vite.config.ts`                                       | Modify             | Pending |
| `site/tsconfig.app.json`                                    | Modify (if needed) | Pending |
| `site/src/main.tsx`                                         | Create             | Pending |
| `site/src/vite-env.d.ts`                                    | Create             | Pending |
| `site/src/styles/index.css`                                 | Create             | Pending |
| `site/src/@runlytics.core/theme/theme.ts`                   | Create             | Pending |
| `site/src/@runlytics.core/theme/index.ts`                   | Create             | Pending |
| `site/src/app/App.tsx`                                      | Create             | Pending |
| `site/src/app/layout/Layout.tsx`                            | Create             | Pending |
| `site/src/app/layout/Navbar.tsx`                            | Create             | Pending |
| `site/src/app/layout/Footer.tsx`                            | Create             | Pending |
| `site/src/features/hero/components/HeroSection.tsx`         | Create             | Pending |
| `site/src/features/about/components/AboutSection.tsx`       | Create             | Pending |
| `site/src/features/services/components/ServicesSection.tsx` | Create             | Pending |
| `site/src/features/services/components/ServiceCard.tsx`     | Create             | Pending |
| `site/src/features/clients/components/ClientsSection.tsx`   | Create             | Pending |
| `site/src/features/contact/components/ContactSection.tsx`   | Create             | Pending |
| `site/src/features/contact/components/ContactForm.tsx`      | Create             | Pending |
| `site/src/assets/images/logos/*`                            | Copy from PPTX     | Pending |
| `site/src/assets/images/services/*`                         | Copy from PPTX     | Pending |
| `site/src/assets/images/clients/*`                          | Copy from PPTX     | Pending |

---

## Design Decisions

1. **Single-page scroll site** (not multi-page) — matches the PPTX structure (4 sections) and is appropriate for a services company landing page
2. **Dark theme** — matching the Run-lytics logo aesthetic (dark navy background) 
3. **Color palette:** Dark navy (`#0a1628`, `#0f172a`), Blue gradient (`#2563eb` → `#60a5fa`), Gold accent (`#f59e0b`) for highlights, White text
4. **Feature-based folder structure** — following the SCard inspiration architecture, adapted for a simpler marketing site
5. **Tailwind + MUI hybrid** — Tailwind for layout/utilities, MUI for form inputs (TextField, Button) and icons
6. **Framer Motion** — for scroll-triggered animations and hero entrance effects (already in dependencies)
7. **React Hook Form** — for the contact form validation (already in dependencies)
8. **No backend needed** — static site, contact form uses `mailto:` or can be wired to an API later
9. **`@runlytics.core/`** — shared design system namespace adapted from `@scard.core/`

## Dependencies

- [x] All npm packages already installed in `site/node_modules`
- [ ] Images need to be extracted from PowerPoint files and placed in `src/assets/`

## Blockers

- None currently

## Next Steps

1. Get plan approval
2. Begin Phase 1: Project setup & configuration
3. Copy images from PPTX extractions to project assets
4. Build infrastructure and components phase by phase
