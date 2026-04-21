import { SITE_CONFIG, DOCTOR, FAQS } from '@/lib/constants'

// ── 1. PHYSICIAN SCHEMA ──────────────────────────────────────────────────────
export function getDoctorStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_CONFIG.url}/#physician`,
    name: DOCTOR.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/doctor/Dr-image-2.webp`,
    telephone: SITE_CONFIG.phone.map((p) => `+91${p}`),
    email: SITE_CONFIG.email,
    medicalSpecialty: 'Neurology',
    jobTitle: DOCTOR.role,
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
      {
        '@type': 'MedicalClinic',
        name: SITE_CONFIG.clinic.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'At- Kathagola, Ring Rd, near Shree Maa',
          addressLocality: 'Cuttack',
          addressRegion: 'Odisha',
          postalCode: '753110',
          addressCountry: 'IN',
        },
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'At- Kathagola, Ring Rd, near Shree Maa',
      addressLocality: 'Cuttack',
      addressRegion: 'Odisha',
      postalCode: '753110',
      addressCountry: 'IN',
    },
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
export function getClinicStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': `${SITE_CONFIG.url}/#clinic`,
    name: SITE_CONFIG.clinic.name,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}/images/doctor/Dr-image-2.webp`,
    telephone: SITE_CONFIG.phone.map((p) => `+91${p}`),
    email: SITE_CONFIG.email,
    medicalSpecialty: 'Neurology',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'At- Kathagola, Ring Rd, near Shree Maa',
      addressLocality: 'Cuttack',
      addressRegion: 'Odisha',
      postalCode: '753110',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 20.4625,
      longitude: 85.883,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    hasMap: SITE_CONFIG.clinic.mapUrl,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '120',
      bestRating: '5',
    },
    founder: {
      '@type': 'Physician',
      name: DOCTOR.name,
    },
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
    '@id': `${SITE_CONFIG.url}/#website`,
    name: 'Dr. Manasi Das — Neurologist in Cuttack',
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Physician',
      '@id': `${SITE_CONFIG.url}/#physician`,
      name: DOCTOR.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/blogs?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
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
    url: `${SITE_CONFIG.url}/services/${service.slug}`,
    possibleTreatment: service.benefits.map((b) => ({
      '@type': 'MedicalTherapy',
      name: b,
    })),
    signOrSymptom: service.symptoms.map((s) => ({
      '@type': 'MedicalSign',
      name: s,
    })),
    recognizingAuthority: {
      '@type': 'Physician',
      '@id': `${SITE_CONFIG.url}/#physician`,
      name: DOCTOR.name,
    },
  }
}
