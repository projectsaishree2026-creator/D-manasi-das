import { Metadata } from 'next'
import { pageMetadata } from '@/seo/metadata'
import PageHeader from '@/components/common/PageHeader'
import CTA from '@/components/sections/home/CTA'
import AboutContent from '@/components/sections/about/AboutContent'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = pageMetadata({
  absolute: true,
  title: "About Dr. Manasi Das | Neurologist in Cuttack, Odisha",
  description: "Dr. Manasi Das, MD (Medicine), DM (Neurology), Asst. Professor at IMS & SUM Hospital, consults at Sai Shree Polyclinic, Cuttack. 10+ years in neurology.",
  path: "/about"
})

export default function AboutPage() {
  return (
    <>
      <AnimatedSection fadeOnly>
        <PageHeader
          badge="About the Doctor"
          title="Dr. Manasi Das"
          titleHighlight="MD · DM (Neurology)"
          subtitle="Expert Neurologist and Asst. Professor at IMS & SUM Hospital, providing evidence-based neurological care for patients across Odisha."
        />
      </AnimatedSection>
      <AnimatedSection>
        <AboutContent />
      </AnimatedSection>
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>
  )
}
