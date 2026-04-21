import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHeader from '@/components/common/PageHeader'
import CTA from '@/components/sections/home/CTA'
import { SERVICES } from '@/lib/constants'
import ServiceDetailContent from '@/components/sections/services/ServiceDetailContent'
import AnimatedSection from '@/components/common/AnimatedSection'
import { getServiceStructuredData } from '@/seo/structuredData'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return { title: 'Service Not Found' }
  return {
    title: `${service.title} Specialist in Cuttack, Odisha | Dr. Manasi Das — Book Today`,
    description: `Expert ${service.title} treatment in Cuttack & Odisha. Dr. Manasi Das, DM (Neurology) — ${service.shortDesc} Call 9692579904 for same-day consultation at Sai Shree Polyclinic, Cuttack.`,
    alternates: {
      canonical: `https://drmanasidas.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} Specialist in Cuttack, Odisha | Dr. Manasi Das`,
      description: service.shortDesc,
      url: `https://drmanasidas.com/services/${service.slug}`,
      type: 'website',
    },
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const currentIndex = SERVICES.findIndex((s) => s.slug === params.slug)
  const prev = SERVICES[currentIndex - 1]
  const next = SERVICES[currentIndex + 1]
  const serviceSchema = getServiceStructuredData(service)

  return (
    <>
      {/* Per-service JSON-LD: MedicalCondition schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AnimatedSection fadeOnly>
        <PageHeader
          badge={service.category}
          title={service.title}
          subtitle={service.shortDesc}
        />
      </AnimatedSection>
      <AnimatedSection>
        <ServiceDetailContent service={service} prev={prev} next={next} />
      </AnimatedSection>
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>
  )
}
