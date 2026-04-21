import { Metadata } from 'next'
import PageHeader from '@/components/common/PageHeader'
import PatientContent from '@/components/sections/patient/PatientContent'
import CTA from '@/components/sections/home/CTA'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = {
  title: 'Patient Corner — Neurology Guides, FAQs & Resources for Odisha Patients | Dr. Manasi Das',
  description:
    'Neurology patient resources, FAQs, health guides and expert tips for Stroke, Epilepsy, Parkinson\'s & MS — from Dr. Manasi Das, neurologist in Cuttack & Bhubaneswar, Odisha. Helping you navigate neurological health with confidence.',
  alternates: {
    canonical: 'https://drmanasidas.com/patient-corner',
  },
  openGraph: {
    title: 'Patient Corner — Neurology Resources for Odisha Patients | Dr. Manasi Das',
    description: 'Guides, FAQs and resources from Dr. Manasi Das to help patients across Cuttack, Bhubaneswar & Odisha understand neurological conditions.',
    url: 'https://drmanasidas.com/patient-corner',
  },
}

export default function PatientCornerPage() {
  return (
    <>
      <AnimatedSection fadeOnly>
        <PageHeader
          badge="Patient Resources"
          title="Your Health,"
          titleHighlight="Our Priority"
          subtitle="Guides, FAQs, and resources to help you and your family understand and manage neurological conditions better."
        />
      </AnimatedSection>
      <AnimatedSection>
        <PatientContent />
      </AnimatedSection>
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>
  )
}
