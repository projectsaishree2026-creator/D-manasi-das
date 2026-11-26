import { Metadata } from 'next'
import { pageMetadata } from '@/seo/metadata'
import PageHeader from '@/components/common/PageHeader'
import ServicesContent from '@/components/sections/services/ServicesContent'
import CTA from '@/components/sections/home/CTA'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = pageMetadata({
  title: "Neurology Services in Cuttack & Bhubaneswar",
  description: "Stroke, epilepsy, Parkinson's, MS, migraine, neuropathy & Alzheimer's care by Dr. Manasi Das, DM (Neurology), at Sai Shree Polyclinic, Cuttack. Book today.",
  path: "/services"
})

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
