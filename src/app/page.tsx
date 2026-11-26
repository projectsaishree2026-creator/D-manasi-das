import { Metadata } from 'next'
import { pageMetadata } from '@/seo/metadata'
import Hero from '@/components/sections/home/Hero'
import AboutPreview from '@/components/sections/home/AboutPreview'
import ServicesHighlight from '@/components/sections/home/ServicesHighlight'
import Testimonials from '@/components/sections/home/Testimonials'
import CTA from '@/components/sections/home/CTA'
import AnimatedSection from '@/components/common/AnimatedSection'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = pageMetadata({
  absolute: true,
  title: "Best Neurologist in Cuttack & Bhubaneswar | Dr. Manasi Das",
  description: "Dr. Manasi Das, MD, DM (Neurology) — neurologist in Cuttack & Bhubaneswar for stroke, epilepsy, Parkinson's & migraine. Sai Shree Polyclinic. Call 9692579904.",
  path: "/"
})

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
