import { SITE_CONFIG, DOCTOR, FAQS } from '@/lib/constants'

const URL = SITE_CONFIG.url
const PHYSICIAN_ID = `${URL}/#physician`
const CLINIC_ID = `${URL}/#clinic`
const WEBSITE_ID = `${URL}/#website`

/** Serialise JSON-LD for dangerouslySetInnerHTML without allowing `</script>` breakouts. */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

// Clinic NAP — identical to https://www.saishreepolyclinic.com/contact
export const CLINIC_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: SITE_CONFIG.clinic.streetAddress,
  addressLocality: 'Cuttack',
  addressRegion: 'Odisha',
  postalCode: '753001',
  addressCountry: 'IN',
}

export const CLINIC_HOURS = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
]

// ── 1. PHYSICIAN SCHEMA ──────────────────────────────────────────────────────
export function getDoctorStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': PHYSICIAN_ID,
    name: DOCTOR.name,
    description: SITE_CONFIG.description,
    url: URL,
    image: `${URL}/images/doctor/Dr-image-20.webp`,
    telephone: SITE_CONFIG.phone.map((p) => `+91${p}`),
    email: SITE_CONFIG.email,
    medicalSpecialty: 'Neurology',
    jobTitle: DOCTOR.role,
    sameAs: [SITE_CONFIG.clinic.doctorProfileUrl],
    knowsAbout: [
      'Stroke Management',
      "Parkinson's Disease",
      'Epilepsy Management',
      'Multiple Sclerosis',
      'Migraine Treatment',
      'Peripheral Neuropathy',
      "Alzheimer's Disease",
      'General Neurology',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'MD (Medicine)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'DM (Neurology)',
      },
    ],
    alumniOf: [
      { '@type': 'MedicalOrganization', name: 'MD (Medicine)' },
      { '@type': 'MedicalOrganization', name: 'DM (Neurology)' },
    ],
    worksFor: [
      {
        '@type': 'Hospital',
        name: SITE_CONFIG.hospital.name,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bhubaneswar',
          addressRegion: 'Odisha',
          addressCountry: 'IN',
        },
      },
      { '@type': 'MedicalClinic', '@id': CLINIC_ID, name: SITE_CONFIG.clinic.name },
    ],
    address: CLINIC_ADDRESS,
    openingHoursSpecification: CLINIC_HOURS,
    areaServed: [
      { '@type': 'City', name: 'Cuttack' },
      { '@type': 'City', name: 'Bhubaneswar' },
      { '@type': 'State', name: 'Odisha' },
    ],
    availableService: [
      { '@type': 'MedicalTherapy', name: 'Stroke Management' },
      { '@type': 'MedicalTherapy', name: "Parkinson's Disease Treatment" },
      { '@type': 'MedicalTherapy', name: 'Epilepsy Management' },
      { '@type': 'MedicalTherapy', name: 'Multiple Sclerosis Treatment' },
      { '@type': 'MedicalTherapy', name: 'Migraine Treatment' },
      { '@type': 'MedicalTherapy', name: 'Neuropathy Management' },
      { '@type': 'MedicalTherapy', name: "Alzheimer's Disease Care" },
    ],
  }
}

// ── 2. MEDICAL CLINIC SCHEMA ─────────────────────────────────────────────────
// No aggregateRating: Google does not allow self-served review markup for local businesses.
export function getClinicStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': CLINIC_ID,
    name: SITE_CONFIG.clinic.name,
    url: SITE_CONFIG.clinic.website,
    image: `${URL}/images/doctor/Dr-image-20.webp`,
    telephone: `+91${SITE_CONFIG.clinic.phone}`,
    email: SITE_CONFIG.clinic.email,
    medicalSpecialty: 'Neurology',
    priceRange: '₹₹',
    address: CLINIC_ADDRESS,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.4625,
      longitude: 85.883,
    },
    openingHoursSpecification: CLINIC_HOURS,
    hasMap: SITE_CONFIG.clinic.mapsUrl,
    sameAs: [SITE_CONFIG.clinic.website],
    employee: { '@id': PHYSICIAN_ID },
    areaServed: [
      { '@type': 'City', name: 'Cuttack' },
      { '@type': 'City', name: 'Bhubaneswar' },
      { '@type': 'State', name: 'Odisha' },
    ],
  }
}

// ── 3. WEBSITE SCHEMA ────────────────────────────────────────────────────────
export function getWebSiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: 'Dr. Manasi Das — Neurologist in Cuttack',
    url: URL,
    description: SITE_CONFIG.description,
    inLanguage: 'en-IN',
    publisher: { '@id': PHYSICIAN_ID },
  }
}

// ── 4. FAQ PAGE SCHEMA ───────────────────────────────────────────────────────
export function getFAQStructuredData(faqs?: { q: string; a: string }[]) {
  const items = faqs ?? FAQS
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

// ── 5. BREADCRUMB SCHEMA ─────────────────────────────────────────────────────
export function getBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// ── 6. SERVICE / MEDICAL CONDITION SCHEMA ────────────────────────────────────
export function getServiceStructuredData(service: {
  title: string
  description: string
  slug: string
  symptoms: string[]
  benefits: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name: service.title,
    description: service.description,
    url: `${URL}/services/${service.slug}`,
    possibleTreatment: service.benefits.map((b) => ({
      '@type': 'MedicalTherapy',
      name: b,
    })),
    signOrSymptom: service.symptoms.map((s) => ({
      '@type': 'MedicalSign',
      name: s,
    })),
    recognizingAuthority: { '@id': PHYSICIAN_ID },
  }
}

// ── 7. BLOG POSTING SCHEMA ───────────────────────────────────────────────────
/** 'June 12, 2024' -> '2024-06-12' (parsed as UTC so the build machine's timezone can't shift the day). */
function isoDate(date: string) {
  const d = new Date(`${date} 00:00:00 UTC`)
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10)
}

export function getBlogPostingStructuredData(blog: {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
  category: string
}) {
  const url = `${URL}/blogs/${blog.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: blog.title,
    description: blog.excerpt,
    url,
    mainEntityOfPage: url,
    image: blog.image,
    datePublished: isoDate(blog.date),
    articleSection: blog.category,
    inLanguage: 'en-IN',
    author: { '@type': 'Physician', '@id': PHYSICIAN_ID, name: DOCTOR.name, url: `${URL}/about` },
    publisher: { '@id': PHYSICIAN_ID },
  }
}
