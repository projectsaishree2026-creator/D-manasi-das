import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Calendar, CheckCircle, MessageCircle, Clock, Shield, Award, Users, BookOpen } from 'lucide-react'
import { SITE_CONFIG, SERVICES } from '@/lib/constants'
import AnimatedSection from '@/components/common/AnimatedSection'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: 'Expert Neurologist in Bhubaneswar | Dr. Manasi Das — IMS & SUM Hospital',
  description:
    "Consulting Neurologist at IMS & SUM Hospital, Bhubaneswar — Dr. Manasi Das, MD (Medicine), DM (Neurology). Expert care for MS, Stroke, Epilepsy, Parkinson's & complex neurological disorders. Book now.",
  keywords: [
    'neurologist in Bhubaneswar',
    'best neurologist Bhubaneswar',
    'doctor in Bhubaneswar',
    'IMS SUM Hospital neurologist',
    'Dr Manasi Das Bhubaneswar',
    'stroke specialist Bhubaneswar',
    'epilepsy doctor Bhubaneswar',
    'migraine specialist Bhubaneswar',
    'MS specialist Bhubaneswar',
    'neurology clinic Bhubaneswar Odisha',
  ],
  alternates: {
    canonical: 'https://drmanasidas.com/doctor-in-bhubaneswar',
  },
  openGraph: {
    title: 'Expert Neurologist in Bhubaneswar | Dr. Manasi Das | IMS & SUM Hospital',
    description:
      "Consultant Neurologist & Asst. Professor at IMS & SUM Hospital, Bhubaneswar. Expert care for complex neurological conditions across Odisha.",
    url: 'https://drmanasidas.com/doctor-in-bhubaneswar',
    type: 'website',
    locale: 'en_IN',
  },
}

const BHUBANESWAR_FAQS = [
  {
    q: 'Does Dr. Manasi Das practice in Bhubaneswar?',
    a: "Yes. Dr. Manasi Das is an Assistant Professor in the Department of Neurology at IMS & SUM Hospital, Bhubaneswar — one of Odisha's premier medical institutions. She also sees private patients at Sai Shree Polyclinic, Cuttack.",
  },
  {
    q: 'How can I consult Dr. Manasi Das in Bhubaneswar?',
    a: "You can reach Dr. Manasi Das at IMS & SUM Hospital, Bhubaneswar, and also at Sai Shree Polyclinic, Cuttack. Call 9692579904 or 7008512773 to schedule your appointment. Many Bhubaneswar patients travel to the Cuttack clinic for private consultations.",
  },
  {
    q: 'What neurological conditions are treated at IMS & SUM Hospital, Bhubaneswar?',
    a: "Dr. Das and her neurology team treat Stroke, Multiple Sclerosis, Parkinson's Disease, Epilepsy, Migraine, Neuropathies, Alzheimer's and other complex neurological disorders at IMS & SUM Hospital.",
  },
  {
    q: 'Is IMS & SUM Hospital in Bhubaneswar a good option for neurology?',
    a: "IMS & SUM Hospital is one of the leading hospitals in Odisha with a dedicated Neurology department. Dr. Manasi Das, DM (Neurology), practises here as an Assistant Professor, providing both inpatient and outpatient neurological care.",
  },
  {
    q: 'Can I get a second opinion from Dr. Manasi Das in Bhubaneswar?',
    a: "Yes. Dr. Manasi Das offers second opinions for complex neurological cases. Bhubaneswar-based patients can call 9692579904 to discuss their reports and arrange a consultation either in Bhubaneswar or at the Cuttack clinic.",
  },
  {
    q: 'What is the advantage of consulting a neurologist at IMS & SUM Hospital?',
    a: "IMS & SUM Hospital offers comprehensive neurological services including advanced MRI, EEG, nerve conduction studies, and multidisciplinary care. Dr. Manasi Das combines her academic expertise there with access to cutting-edge diagnostic tools.",
  },
]

const bhubaneswarSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Physician',
      '@id': 'https://drmanasidas.com/doctor-in-bhubaneswar#physician',
      name: 'Dr. Manasi Das',
      description:
        "Consultant Neurologist and Assistant Professor at IMS & SUM Hospital, Bhubaneswar. Expert in Stroke, Epilepsy, Multiple Sclerosis and complex neurological conditions.",
      url: 'https://drmanasidas.com/doctor-in-bhubaneswar',
      telephone: ['+919692579904', '+917008512773'],
      email: 'drmanasidas@gmail.com',
      medicalSpecialty: 'Neurology',
      jobTitle: 'Assistant Professor, Department of Neurology',
      worksFor: {
        '@type': 'Hospital',
        name: 'IMS & SUM Hospital',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bhubaneswar',
          addressRegion: 'Odisha',
          addressCountry: 'IN',
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: BHUBANESWAR_FAQS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://drmanasidas.com' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Neurologist in Bhubaneswar',
          item: 'https://drmanasidas.com/doctor-in-bhubaneswar',
        },
      ],
    },
  ],
}

const IMS_MAP_URL =
  'https://maps.google.com/maps?q=IMS+SUM+Hospital+Bhubaneswar+Odisha&t=&z=15&ie=UTF8&iwloc=&output=embed'

export default function DoctorInBhubaneswarPage() {
  const whatsappUrl =
    'https://wa.me/919692579904?text=Hello%20Dr.%20Manasi%20Das%2C%20I%20am%20a%20patient%20from%20Bhubaneswar%20and%20would%20like%20to%20book%20a%20neurology%20consultation.'

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bhubaneswarSchema) }} />

      {/* ── HERO ── */}
      <AnimatedSection fadeOnly>
        <section
          className="relative bg-hero-gradient overflow-hidden"
          style={{ paddingTop: 'var(--navbar-height)' }}
        >
          <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
          <div className="container-custom relative z-10 py-16 lg:py-24">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8 font-outfit" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#0EA5E9] transition-colors">Home</Link>
              <span className="text-neutral-400">/</span>
              <span className="text-neutral-700 font-medium">Neurologist in Bhubaneswar</span>
            </nav>

            <div className="max-w-3xl">
              <span className="badge mb-5 inline-flex">
                <MapPin className="w-3.5 h-3.5" />
                Bhubaneswar, Odisha
              </span>
              <h1 className="heading-xl text-neutral-900 mb-5">
                Expert{' '}
                <span className="gradient-text">Neurologist in Bhubaneswar</span>
                <br />— Dr. Manasi Das
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl font-outfit">
                MD (Medicine) · DM (Neurology) — Assistant Professor at{' '}
                <strong>IMS &amp; SUM Hospital, Bhubaneswar</strong>, one of Odisha&apos;s premier
                medical institutions. Offering expert diagnosis and treatment for Stroke, MS,
                Epilepsy, Parkinson&apos;s &amp; all neurological conditions.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="btn-primary text-base px-8 py-4"
                  aria-label="Book an appointment with Dr. Manasi Das — neurologist in Bhubaneswar"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a
                  href={`tel:${SITE_CONFIG.phone[0]}`}
                  className="btn-secondary text-base px-8 py-4"
                  aria-label={`Call Dr. Manasi Das at +91 ${SITE_CONFIG.phone[0]}`}
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Dr. Manasi Das on WhatsApp"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base font-outfit text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
              <div className="flex flex-wrap gap-5">
                {[
                  { icon: Shield, text: 'IMS & SUM Hospital Faculty' },
                  { icon: Users, text: '5000+ Patients Treated' },
                  { icon: Award, text: 'DM Neurology Specialist' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-sm text-neutral-500 font-outfit">
                    <Icon className="w-4 h-4 text-[#0EA5E9]" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── ROLE AT IMS SUM ── */}
      <AnimatedSection>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge mb-4 inline-flex">
                  <BookOpen className="w-3.5 h-3.5" /> Academic Excellence
                </span>
                <h2 className="heading-md text-neutral-900 mb-4">
                  Consultant Neurologist at
                  <br />
                  <span className="gradient-text">IMS &amp; SUM Hospital</span>
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-4 font-outfit">
                  IMS &amp; SUM Hospital, Bhubaneswar is among Odisha&apos;s most respected
                  tertiary-care institutions. Dr. Manasi Das serves as Assistant Professor in its
                  Neurology department — bringing advanced diagnostic expertise and research-backed
                  treatment to patients across the state.
                </p>
                <p className="text-neutral-600 leading-relaxed mb-6 font-outfit">
                  At IMS &amp; SUM Hospital, Dr. Das has access to state-of-the-art neurological
                  facilities including advanced MRI, EEG, nerve conduction studies, and a full
                  multidisciplinary care team — making it an ideal setting for managing complex
                  neurological conditions like Multiple Sclerosis, treatment-resistant epilepsy, and
                  acute stroke.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    'Advanced MRI Interpretation',
                    'EEG & Nerve Studies',
                    'MS Disease Management',
                    'Complex Stroke Cases',
                    'Multidisciplinary Team',
                    'Academic Research',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-neutral-700 font-outfit">
                      <CheckCircle className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/about" className="btn-primary" aria-label="Learn more about Dr. Manasi Das's qualifications and experience">
                  About Dr. Manasi Das
                </Link>
              </div>

              <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-2xl p-8">
                <h3 className="text-lg font-bold text-neutral-900 mb-5 font-outfit">
                  Bhubaneswar Contact
                </h3>
                <ul className="space-y-5">
                  <li className="flex gap-3">
                    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#0EA5E9]" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 font-outfit">Hospital</p>
                      <p className="text-sm font-medium text-neutral-800 font-outfit">
                        IMS &amp; SUM Hospital, Bhubaneswar, Odisha
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <Phone className="w-4 h-4 text-[#0EA5E9]" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 font-outfit">Appointment</p>
                      <a
                        href={`tel:${SITE_CONFIG.phone[0]}`}
                        className="text-sm font-medium text-[#0EA5E9] hover:text-[#0369A1] transition-colors font-outfit"
                      >
                        +91 {SITE_CONFIG.phone[0]}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <Clock className="w-4 h-4 text-[#0EA5E9]" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 font-outfit">Private Clinic</p>
                      <p className="text-sm font-medium text-neutral-800 font-outfit">
                        Sai Shree Polyclinic, Cuttack (Mon–Sat, 9AM–7PM)
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-white rounded-xl border border-[#BFDBFE]">
                  <p className="text-xs text-neutral-500 font-outfit mb-1">Note for Bhubaneswar Patients</p>
                  <p className="text-sm text-neutral-700 font-outfit leading-relaxed">
                    Many patients from Bhubaneswar travel to Sai Shree Polyclinic, Cuttack (1 hr drive)
                    for private consultations. Call ahead to book and minimise wait time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SERVICES ── */}
      <AnimatedSection>
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="badge mb-4 inline-flex">Specialisations</span>
              <h2 className="heading-md text-neutral-900 mb-3">
                Neurology Services for{' '}
                <span className="gradient-text">Bhubaneswar Patients</span>
              </h2>
              <p className="text-neutral-600 max-w-xl mx-auto font-outfit">
                World-class neurological expertise available to patients from Bhubaneswar and across Odisha.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  aria-label={`Dr. Manasi Das specialises in ${service.title} — available to Bhubaneswar patients`}
                  className="group bg-white rounded-xl p-5 shadow-sm border border-neutral-100 hover:border-[#0EA5E9] hover:shadow-md transition-all duration-200"
                >
                  <span className="text-2xl mb-3 block">{service.icon}</span>
                  <h3 className="font-semibold text-neutral-900 text-sm mb-1 font-outfit group-hover:text-[#0EA5E9] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-outfit leading-relaxed">{service.shortDesc}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/services" className="btn-secondary" aria-label="View all neurology specialisations">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── MAP ── */}
      <AnimatedSection>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <span className="badge mb-4 inline-flex">
                <MapPin className="w-3.5 h-3.5" /> IMS &amp; SUM Hospital
              </span>
              <h2 className="heading-md text-neutral-900 mb-2">
                Find Dr. Manasi Das in{' '}
                <span className="gradient-text">Bhubaneswar</span>
              </h2>
              <p className="text-neutral-600 font-outfit">IMS &amp; SUM Hospital, Bhubaneswar, Odisha</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-md" style={{ height: 400 }}>
              <iframe
                src={IMS_MAP_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IMS & SUM Hospital location map, Bhubaneswar, Odisha — Dr. Manasi Das Neurologist"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href={`tel:${SITE_CONFIG.phone[0]}`}
                className="btn-primary"
                aria-label={`Call Dr. Manasi Das at +91 ${SITE_CONFIG.phone[0]}`}
              >
                <Phone className="w-4 h-4" />
                Call {SITE_CONFIG.phone[0]}
              </a>
              <Link href="/contact" className="btn-secondary" aria-label="Book a neurology appointment">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── FAQ ── */}
      <AnimatedSection>
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <span className="badge mb-4 inline-flex">FAQs</span>
              <h2 className="heading-md text-neutral-900 mb-2">
                Frequently Asked Questions —{' '}
                <span className="gradient-text">Bhubaneswar Patients</span>
              </h2>
              <p className="text-neutral-600 font-outfit">
                Common questions from patients in Bhubaneswar seeking neurological care.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {BHUBANESWAR_FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-neutral-100 shadow-sm">
                  <h3 className="font-semibold text-neutral-900 mb-2 font-outfit">{faq.q}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-outfit">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/patient-corner" className="btn-secondary" aria-label="View more neurology patient resources">
                Patient Resources
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── CTA ── */}
      <AnimatedSection>
        <CTA />
      </AnimatedSection>
    </>
  )
}
