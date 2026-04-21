# Dr. Manasi Das — Neurology Portfolio Website

A production-ready, multi-page doctor portfolio built with **Next.js 14 (App Router)** + **Tailwind CSS** + **Framer Motion**.

---

## 👩‍⚕️ Doctor Details

- **Name:** Dr. Manasi Das
- **Qualifications:** MD (Medicine), DM (Neurology)
- **Role:** Asst. Professor, IMS & SUM Hospital, Bhubaneswar
- **Clinic:** Sai Shree Polyclinic, Near Shreema Hospital, Cuttack
- **Contact:** 9692579904 / 7008512773

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Visit: `http://localhost:3000`

### 3. Build for production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Navbar, Footer, ScrollToTop)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   ├── loading.tsx         # Global loader
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   └── (routes)/           # Route group
│       ├── about/
│       ├── services/
│       │   └── [slug]/     # Dynamic service pages
│       ├── blogs/
│       │   └── [slug]/     # Dynamic blog pages
│       ├── patient-corner/
│       └── contact/
│
├── components/
│   ├── common/             # PageHeader, etc.
│   ├── layout/             # Navbar, Footer, ScrollToTop
│   ├── sections/           # Page-specific sections
│   │   ├── home/           # Hero, AboutPreview, ServicesHighlight, Testimonials, CTA
│   │   ├── about/          # AboutContent
│   │   ├── services/       # ServicesContent, ServiceDetailContent
│   │   ├── blogs/          # BlogsContent
│   │   ├── patient/        # PatientContent (FAQs, Resources)
│   │   └── contact/        # ContactContent
│   └── forms/              # ContactForm (React Hook Form)
│
├── lib/
│   └── constants.ts        # All site data (doctor info, services, blogs, FAQs)
│
├── animations/
│   └── index.ts            # Framer Motion variants
│
├── hooks/
│   ├── useScroll.ts        # Navbar scroll detection
│   └── useIntersection.ts  # Scroll reveal
│
├── seo/
│   └── structuredData.ts   # JSON-LD schema
│
├── types/
│   └── index.ts            # TypeScript interfaces
│
└── utils/
    └── helpers.ts          # cn(), getServiceColor(), etc.
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | Teal (`#0d9488`) |
| Secondary | Sky Blue accent |
| Background | White / Teal-50 |
| Headings | Manrope |
| Body | Inter |
| Border Radius | `rounded-2xl` / `rounded-full` |
| Spacing | 8px grid |

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, About Preview, Services, Testimonials, CTA |
| `/about` | Full biography, credentials, timeline, values |
| `/services` | All 8 specialisations with details |
| `/services/[slug]` | Individual service detail page |
| `/blogs` | Blog listing with featured post |
| `/blogs/[slug]` | Blog article detail |
| `/patient-corner` | Resources, FAQ accordion, consultation prep |
| `/contact` | Contact form, Google Maps, clinic info |

---

## ⚙️ Key Features

- ✅ **Next.js 14 App Router** with Server Components
- ✅ **Framer Motion** smooth animations
- ✅ **SEO** — Metadata API, Open Graph, JSON-LD schema
- ✅ **Responsive** — Mobile-first, all breakpoints
- ✅ **Scroll-to-top** on every route change
- ✅ **Transparent → Solid navbar** on scroll with blur
- ✅ **Contact form** with React Hook Form validation
- ✅ **Dynamic service + blog pages** with `generateStaticParams`
- ✅ **FAQ accordion** with smooth AnimatePresence
- ✅ **Google Maps embed** on Contact page

---

## 🔧 Customisation

All content lives in **`src/lib/constants.ts`**. Edit:
- `DOCTOR` — doctor bio, credentials, achievements
- `SERVICES` — specialisations (title, description, symptoms, benefits)
- `TESTIMONIALS` — patient reviews
- `BLOGS` — articles
- `FAQS` — frequently asked questions
- `SITE_CONFIG` — clinic name, phone, email, map URL

---

## 🌐 Deployment

Deploy to **Vercel** (recommended):

```bash
npx vercel
```

Or build and serve statically:
```bash
npm run build
npm start
```

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` 14 | React framework |
| `framer-motion` | Animations |
| `lucide-react` | Icons |
| `react-hook-form` | Form validation |
| `tailwindcss` | Styling |
| `clsx` + `tailwind-merge` | Class utilities |

---

Made with ❤️ for Dr. Manasi Das — Neurologist, Cuttack, Odisha.
