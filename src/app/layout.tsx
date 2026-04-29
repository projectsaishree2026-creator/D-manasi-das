import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/layout/ScrollToTop'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import MobileCTABar from '@/components/common/MobileCTABar'
import { SITE_CONFIG } from '@/lib/constants'
import {
  getDoctorStructuredData,
  getClinicStructuredData,
  getWebSiteStructuredData,
} from '@/seo/structuredData'

export const metadata: Metadata = {
  title: {
    default: 'Best Neurologist in Cuttack & Bhubaneswar | Dr. Manasi Das — MD, DM (Neurology)',
    template: '%s | Dr. Manasi Das — Neurologist Cuttack',
  },
  description:
    "Consult Dr. Manasi Das, MD (Medicine), DM (Neurology) — best neurologist in Cuttack & Bhubaneswar. Expert care for Stroke, Epilepsy, Parkinson's, Migraine & more at Sai Shree Polyclinic, Cuttack, Odisha. Call 9692579904.",
  keywords: [
    // Doctor + location
    'Dr Manasi Das', 'Dr Manasi Das Cuttack', 'Dr Manasi Das Bhubaneswar',
    // Primary speciality + location
    'neurologist Cuttack', 'neurologist Bhubaneswar', 'neurologist Odisha',
    // Best + location (high-intent)
    'best neurologist in Cuttack', 'best neurologist in Bhubaneswar', 'best neurologist in Odisha',
    // Doctor in city
    'doctor in Cuttack', 'neurology clinic Cuttack', 'neurology clinic Odisha',
    // Conditions + location
    'stroke specialist Cuttack', 'epilepsy doctor Cuttack', 'Parkinson disease doctor Cuttack',
    'migraine specialist Cuttack', 'migraine doctor Bhubaneswar',
    // Qualifications
    'DM Neurology Odisha', 'IMS SUM Hospital neurologist',
    // Clinic
    'Sai Shree Polyclinic', 'Sai Shree Polyclinic Cuttack',
    // Long-tail
    'brain doctor Cuttack', 'nerve specialist Odisha', 'neurology specialist Cuttack',
    'epilepsy treatment Odisha', 'stroke treatment Cuttack',
    'Parkinson treatment Odisha', 'Alzheimer specialist Cuttack',
    'MS specialist Bhubaneswar', 'neuropathy doctor Odisha',
    // Voice search
    'best neurologist near me Cuttack', 'neurology clinic near me Odisha',
  ],
  authors: [{ name: 'Dr. Manasi Das', url: 'https://drmanasidas.com/about' }],
  creator: 'Dr. Manasi Das',
  publisher: 'Dr. Manasi Das',
  category: 'Health, Neurology, Medical',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Best Neurologist in Cuttack & Bhubaneswar | Dr. Manasi Das',
    description:
      "Expert neurological care for Stroke, Epilepsy, Parkinson's & more. Trusted by 5000+ patients across Odisha. Sai Shree Polyclinic, Cuttack.",
    url: SITE_CONFIG.url,
    siteName: 'Dr. Manasi Das — Neurologist',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/doctor/Dr-image-20.webp',
        width: 1200,
        height: 630,
        alt: 'Dr. Manasi Das — Expert Neurologist in Cuttack & Bhubaneswar, Odisha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Neurologist in Cuttack | Dr. Manasi Das',
    description:
      "Expert care for Stroke, Epilepsy, Parkinson's & more. Trusted by 5000+ patients across Odisha.",
    images: ['/images/doctor/Dr-image-20.webp'],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  metadataBase: new URL(SITE_CONFIG.url),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const doctorSchema = getDoctorStructuredData()
  const clinicSchema = getClinicStructuredData()
  const websiteSchema = getWebSiteStructuredData()

  return (
    <html lang="en-IN">
      <head>
      <meta name="google-site-verification" content="fwkHXsUvTwtiNJaNOPAnDBvjkanRGUTWYsa2TUqBFX8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Global JSON-LD Structured Data — Physician + Clinic + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      {/* pb-16 lg:pb-0 reserves space for the sticky mobile CTA bar on small screens */}
      <body className="antialiased font-outfit pb-16 lg:pb-0">
        <ScrollToTop />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileCTABar />
      </body>
    </html>
  )
}
