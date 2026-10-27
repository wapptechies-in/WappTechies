# Wapp Techies — Premium Creative Technology Website

> **"IDEAS INTO IMPACT."**  
> **"WE BUILD DIGITAL EXPERIENCES."**

A bespoke, responsive, and high-performance digital engineering studio website for **Wapp Techies**. Designed with warm ivory canvases, sharp electric-blue typography, coral accents, floating dimensional interface mockups, and rich editorial layouts.

---

## 🌟 Visual Direction & Key Features

- **Reference Art Direction**: Follows the bright, warm ivory (`#FFF7ED`), electric blue (`#155EEF`), coral (`#FF6848`), and ink navy (`#111827`) palette with dimensional floating panels and rounded white glass cards.
- **Dimensional Hero Composition**:
  - Three-line hero headline (`WE BUILD` / `DIGITAL` / `EXPERIENCES.`).
  - Floating 3D-inspired badges: Web Development, Mobile App Dev, AI & Automation, GIS & Geospatial.
  - Studio Collaboration badge and authentic handwritten script accents.
  - Verified capability tags (*Web • Mobile • Desktop*, *Design • Engineering • Automation*, *Client Projects • Digital Products*).
- **Interactive Quick Dock**: Floating vertical right-hand dock with fast navigation shortcuts and an interactive WhatsApp direct chat widget.
- **Global Search Modal**: Accessible via the navbar search pill or keyboard shortcut (`Ctrl+K` / `Cmd+K`), indexing all services, products, and case studies in real time.
- **Interactive Project Quote Modal**: Streamlined project intake flow with budget ranges, service categories, and validation.
- **Studio Story Modal**: Interactive "Watch Our Story" walkthrough of Wapp Techies' design and engineering philosophy.
- **Services Strip & 10 Dedicated Pages**:
  1. Website Development
  2. Web Application Development
  3. Mobile Application Development
  4. Desktop Application Development
  5. UI/UX Design
  6. AI Integration and Automation
  7. WhatsApp Business Automation
  8. GIS and Geospatial Solutions
  9. Custom Business Software
  10. Cloud Deployment and Maintenance
- **5 Proprietary Products**:
  1. **SnapFind AI** — AI-powered event photo discovery with face recognition.
  2. **Ull Oor Auto** — Local auto booking mobility platform with bilingual Tamil/English interface.
  3. **Dine Easy** — Smarter restaurant POS, kitchen display system (KDS), and digital QR table ordering.
  4. **LR Consignment Billing** — Dedicated logistics management for lorry receipts and freight accounts.
  5. **Student Vault** — Academic resource and assignment organizer.
- **Featured Work & Real Case Studies**:
  - **Jebaraj Alex Robin Portfolio** (Live Link: `https://jebaraj-alex-robin.vercel.app/`)
  - **CSI Christ Church Kallidaikurichi** (Live Link: `https://csi-christ-church-website.vercel.app/`)
  - High-resolution showcase assets and clear distinction between delivered client projects and conceptual prototypes.
- **6-Stage Process**: 01 Discover → 02 Plan → 03 Design → 04 Develop → 05 Test & Launch → 06 Support.
- **Honest Testimonial & Trust Policy**: No fake reviews or fabricated client stats; includes an editable framework ready for verified partner reviews.

---

## 🛠️ Tech Stack

- **Framework**: React 18 / 19 with TypeScript
- **Bundler & Server**: Vite 6
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS with custom glassmorphism & color tokens
- **Icons**: Lucide React
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Inter*, *Caveat*)

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### 2. Opening in VS Code
Open the project folder directly:
```bash
code "e:\wapp techies"
```

### 3. Installing Dependencies
Install the required packages using npm:
```bash
npm install
```
*(Note: If using the included wrapper on Windows, you can also run `.\npm.cmd install`)*

### 4. Running the Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 5. Running the Production Build
Validate types and compile an optimized production bundle:
```bash
npm run build
```
The output files will be generated in the `dist/` directory.

### 6. Previewing the Production Build
To test the built production bundle locally:
```bash
npm run preview
```

---

## 📂 Project Structure

```
wapp-techies/
├── public/
│   ├── favicon.svg              # Wapp Techies brand SVG icon
│   └── images/                  # High-resolution 4K product & project renders
│       ├── Dine Easy Restaurant Management Banner.png
│       ├── Dine Easy Restaurant Platform Showcase.png
│       ├── DineEasy Restaurant Management UI Showcase.png
│       ├── Gemini_Generated_Image_lunm74lunm74lunm.png   # Student Vault 3D
│       ├── Smart Logistics Billing Dashboard.png         # LR Consignment
│       ├── SnapFind AI Event Gallery Showcase.png
│       ├── SnapFind AI_ Every Moment, Easy to Find.png
│       ├── Ull Oor Auto App Showcase.png
│       ├── Ull Oor Auto_ Your Local Ride.png
│       ├── website page 2.png                            # Jebaraj Alex Robin site
│       ├── website page.png                              # CSI Christ Church site
│       └── hero-reference.jpg                            # Studio hero composition
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx             # Centered pill nav with search & drawer
│   │   │   ├── Footer.tsx             # Dark ink-navy footer with verified links
│   │   │   ├── FloatingDock.tsx       # Vertical dock + WhatsApp direct trigger
│   │   │   ├── SearchModal.tsx        # Global search with Ctrl+K shortcut
│   │   │   ├── ProjectQuoteModal.tsx  # Project inquiry modal with validation
│   │   │   └── StoryVideoModal.tsx    # "Watch Our Story" studio presentation
│   │   └── home/
│   │       ├── HeroSection.tsx        # Reference-inspired dimensional hero
│   │       ├── ServicesStrip.tsx      # 6 horizontal service cards
│   │       ├── FeaturedWorkSection.tsx# Project carousel with live URLs
│   │       ├── ProductsSection.tsx    # Flagship showcase cards
│   │       ├── ProcessSection.tsx     # 6-stage connected timeline
│   │       ├── WhyWappTechiesSection.tsx # 4 studio strengths
│   │       ├── ApproachTrustSection.tsx # Honest collaboration principles
│   │       └── FinalCtaSection.tsx    # Closing CTA with 3D crystal motif
│   ├── data/
│   │   ├── company.ts           # Company info, verified capabilities & contacts
│   │   ├── services.ts          # All 10 services with full specs & workflows
│   │   ├── products.ts          # All 5 products with verified vs roadmap features
│   │   ├── projects.ts          # Real client websites & conceptual prototypes
│   │   ├── process.ts           # 6 delivery stages and deliverables
│   │   ├── faqs.ts              # Studio FAQs
│   │   └── navigation.ts        # Header & footer navigation schema
│   ├── layouts/
│   │   └── MainLayout.tsx       # Main layout orchestrating navigation & modals
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── ServiceDetailPage.tsx   # Dynamic route: /services/:slug
│   │   ├── ProductsPage.tsx
│   │   ├── ProductDetailPage.tsx   # Dynamic route: /products/:slug
│   │   ├── WorkPage.tsx
│   │   ├── CaseStudyDetailPage.tsx # Dynamic route: /work/:slug
│   │   ├── ProcessPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── PrivacyPolicyPage.tsx
│   │   ├── TermsPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── styles/
│   │   └── index.css            # Tailwind directives, glassmorphism & tokens
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   ├── App.tsx                  # React Router configuration
│   └── main.tsx                 # Application root
├── index.html                   # HTML5 entry with Google Fonts & OG meta
├── package.json
├── tailwind.config.js           # Exact color palette & typography tokens
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Content & Branding Customization

### 1. Updating Company Information & Contact Details
Open [`src/data/company.ts`](file:///e:/wapp%20techies/src/data/company.ts):
- Change `email`, `phone`, `location`, or `whatsappMessageUrl`.
- Adjust values in `COMPANY.capabilities` to highlight new competencies.

### 2. Adding or Editing Services
Open [`src/data/services.ts`](file:///e:/wapp%20techies/src/data/services.ts):
- Every service entry includes `problemsSolved`, `targetAudience`, `deliverables`, `workflow`, and `faqs`.

### 3. Adding or Updating Products
Open [`src/data/products.ts`](file:///e:/wapp%20techies/src/data/products.ts):
- Modify status between `'Research'`, `'Prototype'`, `'Pilot'`, or `'Production'`.
- Clearly separate `verifiedFeatures` from `plannedCapabilities`.

### 4. Updating Portfolio Projects
Open [`src/data/projects.ts`](file:///e:/wapp%20techies/src/data/projects.ts):
- Set `isConcept: false` for verified client projects with live links (e.g. Jebaraj Alex Robin, CSI Christ Church).
- Set `isConcept: true` for research or prototype concepts.

### 5. Connecting the Contact / Inquiry Form
In [`src/pages/ContactPage.tsx`](file:///e:/wapp%20techies/src/pages/ContactPage.tsx) and [`src/components/common/ProjectQuoteModal.tsx`](file:///e:/wapp%20techies/src/components/common/ProjectQuoteModal.tsx):
- Currently, inquiries are stored locally in the browser's `localStorage` under `wapp_techies_inquiries`.
- To connect to a live backend (e.g., Formspree, Resend, or your REST endpoint), update the `handleSubmit` method to dispatch a `fetch()` request with your endpoint.

---

## 🌐 Deploying to Vercel

1. Push this repository to GitHub or GitLab.
2. Log into [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the repository.
4. Select the preset **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

For single-page client routing on Vercel, a [`vercel.json`](file:///e:/wapp%20techies/vercel.json) file is included to route all paths to `index.html`.

---

## 📄 License & Attribution
© 2026 Wapp Techies. All rights reserved.
Client projects and trademarks referenced are property of their respective owners.

