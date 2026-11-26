import { Metadata } from 'next'
import { pageMetadata } from '@/seo/metadata'
import PageHeader from '@/components/common/PageHeader'
import BlogsContent from '@/components/sections/blogs/BlogsContent'
import CTA from '@/components/sections/home/CTA'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = pageMetadata({
  title: "Neurology Health Blog for Patients in Odisha",
  description: "Articles on stroke, epilepsy, Parkinson's, migraine & brain health from Dr. Manasi Das, neurologist in Cuttack, for patients and families across Odisha.",
  path: "/blogs"
})

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
