import { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero'
import AboutPreview from '@/components/sections/home/AboutPreview'
import ServicesHighlight from '@/components/sections/home/ServicesHighlight'
import Testimonials from '@/components/sections/home/Testimonials'
import CTA from '@/components/sections/home/CTA'
import AnimatedSection from '@/components/common/AnimatedSection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Best Neurologist in Cuttack & Bhubaneswar | Dr. Manasi Das — Book Appointment',
  description:
    "Meet Dr. Manasi Das, MD (Medicine), DM (Neurology) — trusted by 5000+ patients in Cuttack, Bhubaneswar & across Odisha. Expert care for Stroke, Epilepsy, Parkinson's & Migraine at Sai Shree Polyclinic. Call 9692579904.",
  alternates: {
    canonical: 'https://drmanasidas.com',
  },
  openGraph: {
    title: 'Best Neurologist in Cuttack & Bhubaneswar | Dr. Manasi Das',
    description:
      "Trusted by 5000+ patients for Stroke, Epilepsy, Parkinson's & Migraine care. Sai Shree Polyclinic, Cuttack.",
    url: 'https://drmanasidas.com',
    images: [{ url: '/images/doctor/Dr-image-2.webp', width: 1200, height: 630, alt: 'Dr. Manasi Das — Neurologist Cuttack Odisha' }],
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero already has rich internal motion — fade-only to avoid conflicts */}
      <AnimatedSection fadeOnly>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <AboutPreview />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesHighlight />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>
  )
}
