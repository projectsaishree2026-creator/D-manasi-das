import { Metadata } from 'next'
import PageHeader from '@/components/common/PageHeader'
import BlogsContent from '@/components/sections/blogs/BlogsContent'
import CTA from '@/components/sections/home/CTA'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = {
  title: 'Neurology Health Blog — Expert Tips for Patients in Cuttack & Odisha | Dr. Manasi Das',
  description:
    'Evidence-based articles on Stroke, Epilepsy, Parkinson\'s, Migraine & brain health from Dr. Manasi Das — neurologist in Cuttack, Bhubaneswar & across Odisha. Helping patients make informed neurological health decisions.',
  alternates: {
    canonical: 'https://drmanasidas.com/blogs',
  },
  openGraph: {
    title: 'Neurology Health Blog | Dr. Manasi Das — Neurologist Cuttack, Odisha',
    description: 'Expert neurology articles from Dr. Manasi Das for patients across Cuttack, Bhubaneswar & Odisha.',
    url: 'https://drmanasidas.com/blogs',
  },
}

export default function BlogsPage() {
  return (
    <>
      <AnimatedSection fadeOnly>
        <PageHeader
          badge="Health Insights"
          title="Neurology Health"
          titleHighlight="Blog & Articles"
          subtitle="Evidence-based articles on neurological conditions — helping patients and families make informed decisions about brain and nerve health."
        />
      </AnimatedSection>
      <AnimatedSection>
        <BlogsContent />
      </AnimatedSection>
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>
  )
}
