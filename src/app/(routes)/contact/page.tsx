import { Metadata } from 'next'
import PageHeader from '@/components/common/PageHeader'
import ContactContent from '@/components/sections/contact/ContactContent'
import AnimatedSection from '@/components/common/AnimatedSection'

export const metadata: Metadata = {
  title: 'Book Appointment with Best Neurologist in Cuttack | Dr. Manasi Das — Call 9692579904',
  description:
    'Book a neurology consultation with Dr. Manasi Das at Sai Shree Polyclinic, Cuttack. Call 9692579904 or 7008512773 for Stroke, Epilepsy, Parkinson\'s & all neurological conditions. Same-day appointments available.',
  alternates: {
    canonical: 'https://drmanasidas.com/contact',
  },
  openGraph: {
    title: 'Book Appointment — Dr. Manasi Das, Neurologist in Cuttack',
    description: 'Call 9692579904 to book same-day neurology consultation at Sai Shree Polyclinic, Cuttack, Odisha.',
    url: 'https://drmanasidas.com/contact',
  },
}

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
