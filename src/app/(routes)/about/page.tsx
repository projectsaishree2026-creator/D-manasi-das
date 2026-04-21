import { Metadata } from 'next'
import PageHeader from '@/components/common/PageHeader'
import CTA from '@/components/sections/home/CTA'
import AboutContent from '@/components/sections/about/AboutContent'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = {
  title: 'About Dr. Manasi Das — Best Neurologist in Cuttack & Bhubaneswar, Odisha',
  description:
    'Dr. Manasi Das, MD (Medicine), DM (Neurology), Asst. Professor at IMS & SUM Hospital — trusted neurologist in Cuttack and Bhubaneswar with 10+ years experience treating Stroke, Epilepsy, Parkinson\'s & more across Odisha.',
  alternates: {
    canonical: 'https://drmanasidas.com/about',
  },
  openGraph: {
    title: 'About Dr. Manasi Das — Expert Neurologist in Cuttack & Bhubaneswar',
    description: 'MD (Medicine) · DM (Neurology) · Asst. Professor IMS & SUM Hospital · Sai Shree Polyclinic, Cuttack.',
    url: 'https://drmanasidas.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <AnimatedSection fadeOnly>
        <PageHeader
          badge="About the Doctor"
          title="Dr. Manasi Das"
          titleHighlight="MD · DM (Neurology)"
          subtitle="Expert Neurologist and Asst. Professor at IMS & SUM Hospital, dedicated to delivering world-class neurological care across Odisha."
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
