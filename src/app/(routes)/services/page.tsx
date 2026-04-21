import { Metadata } from 'next'
import PageHeader from '@/components/common/PageHeader'
import ServicesContent from '@/components/sections/services/ServicesContent'
import CTA from '@/components/sections/home/CTA'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = {
  title: 'Neurology Services in Cuttack & Bhubaneswar — Stroke, Epilepsy, Parkinson\'s | Dr. Manasi Das',
  description:
    'Expert neurological services at Sai Shree Polyclinic, Cuttack & IMS SUM Hospital, Bhubaneswar. Dr. Manasi Das treats Stroke, Epilepsy, Parkinson\'s, MS, Migraine, Neuropathy, Alzheimer\'s & all brain/nerve conditions in Odisha.',
  alternates: {
    canonical: 'https://drmanasidas.com/services',
  },
  openGraph: {
    title: 'Neurology Services in Cuttack, Bhubaneswar & Odisha | Dr. Manasi Das',
    description: 'Comprehensive brain & nerve care across 8 specialisations — available at Sai Shree Polyclinic, Cuttack.',
    url: 'https://drmanasidas.com/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      <AnimatedSection fadeOnly>
        <PageHeader
          badge="Our Specialisations"
          title="Expert Care for All"
          titleHighlight="Neurological Conditions"
          subtitle="From emergency stroke management to chronic neurological diseases — Dr. Manasi Das provides comprehensive, evidence-based care across 8 specialisations."
        />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesContent />
      </AnimatedSection>
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>
  )
}
