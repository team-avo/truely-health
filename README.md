# Truly Health — Premium Omega-3 Website

A complete, modern React website for **Truly Health** — a premium Indian nutraceutical brand selling RTG 1000 Ultra-Pure Omega-3 Fish Oil. Built with Vite, React 18, and React Router v6.

## ✨ Features

- 🏠 **Home** — Hero, benefits, product highlight, certifications, testimonials, batch lookup
- 💊 **Product Page** — Full RTG 1000 details, supplement facts, RTG vs EE comparison, FAQs, batch transparency
- 📋 **Batch Report** — `/report/:batchId` — QR code destination showing Certificate of Analysis for each batch
- 🏢 **About** — Brand story, mission, the Truly Health Standard
- 🔒 **Our Promise** — Quality chain, oxidation standards, sourcing philosophy
- 📞 **Contact** — Form with validation + contact info
- 📱 Fully responsive (mobile-first)
- ✨ Scroll-triggered animations
- 🖨️ Print-optimized batch report pages

## 🚀 Getting Started

### Prerequisites
You need **Node.js 18+** installed. Download it from [nodejs.org](https://nodejs.org/).

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (opens at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📁 Project Structure

```
truly-health/
├── public/assets/images/     # Add product photos here
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── Button/
│   │   ├── BenefitCard/
│   │   ├── CertBadge/
│   │   ├── TestimonialCard/
│   │   ├── FAQAccordion/
│   │   ├── NutritionFacts/
│   │   └── SectionLabel/
│   ├── pages/                # Route pages
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Product/
│   │   ├── Promise/
│   │   ├── Report/           # /report/:batchId
│   │   └── Contact/
│   ├── data/                 # Static content
│   │   ├── batchReports.js   # ⭐ COA data per batch
│   │   ├── faqs.js
│   │   └── testimonials.js
│   ├── hooks/
│   │   └── useInView.js      # Scroll animation hook
│   ├── App.jsx               # Routes
│   ├── main.jsx              # Entry
│   └── index.css             # Global styles + design tokens
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Design Tokens

All colors are pulled from the product packaging. Edit them in `src/index.css`:

| Token | Value | Use |
|---|---|---|
| `--teal-dark` | `#0B5E6E` | Primary, hero, footer |
| `--teal-mid` | `#1A8A9A` | Hover states |
| `--teal-light` | `#E8F6F8` | Section bg |
| `--gold` | `#D4A017` | CTAs, accents |

Font: **Plus Jakarta Sans** (loaded from Google Fonts in `index.html`).

## 🔍 Batch Report System (QR Code Feature)

The QR code on each product box should encode the URL:

```
https://www.trulyhealth.in/report/<BATCH-ID>
```

**Example URLs that work out of the box:**
- `/report/RTG1000-B001`
- `/report/RTG1000-B002`
- `/report/RTG1000-B003`

### How to add a new batch

Open `src/data/batchReports.js` and add an entry keyed by the batch ID:

```js
'RTG1000-B004': {
  batchId: 'RTG1000-B004',
  productName: 'RTG 1000 Ultra-Pure Omega-3 Fish Oil',
  manufactureDate: '01 Sep 2025',
  expiryDate: '31 Aug 2027',
  reportDate: '05 Sep 2025',
  // ... rest of the COA data
}
```

That's it — no backend changes needed. The route `/report/RTG1000-B004` will work immediately.

### Generating QR codes for boxes

Use any QR generator (e.g., [qr-code-generator.com](https://www.qr-code-generator.com/)) and encode:
```
https://www.trulyhealth.in/report/RTG1000-B001
```

## 🚢 Deployment

This is a static React app — deploy to any static host:

- **Netlify**: Drag the `dist/` folder after `npm run build`
- **Vercel**: `vercel deploy` (auto-detects Vite)
- **GitHub Pages**: Use `gh-pages` package
- **Cloudflare Pages**: Connect Git repo, build command `npm run build`, output `dist`

### IMPORTANT: SPA routing fallback

For dynamic routes like `/report/:batchId` to work on a static host, you need a fallback rule:

**Netlify** — create `public/_redirects`:
```
/*  /index.html  200
```

**Vercel** — auto-handled by `vercel.json`:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

## 📝 Adding Real Product Photos

Replace the CSS-illustrated product cards with real photos:

1. Drop your product images into `public/assets/images/`
2. In `src/pages/Home/Home.jsx` and `src/pages/Product/Product.jsx`, swap the `.heroProductCard` div for an `<img>` tag pointing to your image.

## 🛠️ Tech Stack

- **Vite** — Build tool
- **React 18** — UI
- **React Router v6** — Routing
- **CSS Modules** — Scoped styling per component
- **No external UI libraries** — All styling is custom

## 📞 Contact

For technical questions about this site, refer to the codebase. For brand/business questions, see the contact page.

---

**FSSAI Lic. No:** 10062002209904
**Manufactured by:** ABH Health Care Pte. Ltd., Chennai, Tamil Nadu
# truely-health
