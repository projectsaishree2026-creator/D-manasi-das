import { Metadata } from 'next'
import { pageMetadata } from '@/seo/metadata'
import PageHeader from '@/components/common/PageHeader'
import ContactContent from '@/components/sections/contact/ContactContent'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = pageMetadata({
  title: "Book a Neurologist Appointment in Cuttack",
  description: "Book a neurology consultation with Dr. Manasi Das at Sai Shree Polyclinic, Cuttack (Mon–Sat, 9 AM–7 PM). Call 9692579904 or WhatsApp to book.",
  path: "/contact"
})

export default function ContactPage() {
  return (
    <>
      <AnimatedSection fadeOnly>
        <PageHeader
          badge="Get In Touch"
          title="Book Your"
          titleHighlight="Consultation"
          subtitle="Reach Dr. Manasi Das at Sai Shree Polyclinic, Cuttack. We are here to help with all neurological concerns."
        />
      </AnimatedSection>
      <AnimatedSection>
        <ContactContent />
      </AnimatedSection>
    </>
  )
}
