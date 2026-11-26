import { Metadata } from 'next'
import { pageMetadata } from '@/seo/metadata'
import PageHeader from '@/components/common/PageHeader'
import PatientContent from '@/components/sections/patient/PatientContent'
import CTA from '@/components/sections/home/CTA'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = pageMetadata({
  title: "Patient Corner — Neurology Guides & FAQs",
  description: "Neurology guides, FAQs and resources on stroke, epilepsy, Parkinson's & MS from Dr. Manasi Das, neurologist in Cuttack, for patients across Odisha.",
  path: "/patient-corner"
})

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
