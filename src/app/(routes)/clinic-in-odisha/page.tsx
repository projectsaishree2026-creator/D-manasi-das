import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Calendar, CheckCircle, MessageCircle, Clock, Shield, Award, Users, Globe } from 'lucide-react'
import { SITE_CONFIG, SERVICES } from '@/lib/constants'
import AnimatedSection from '@/components/common/AnimatedSection'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: 'Best Neurology Clinic in Odisha | Dr. Manasi Das — Sai Shree Polyclinic, Cuttack',
  description:
    "Odisha's trusted neurology clinic — Dr. Manasi Das, MD (Medicine), DM (Neurology) at Sai Shree Polyclinic, Cuttack. Serving patients from Bhubaneswar, Puri, Kendrapara, Balasore & across Odisha. Call 9692579904.",
  keywords: [
    'neurology clinic Odisha',
    'best neurologist Odisha',
    'clinic in Odisha',
    'neurologist Odisha',
    'brain specialist Odisha',
    'DM neurology Odisha',
    'stroke specialist Odisha',
    'epilepsy treatment Odisha',
    'Parkinson disease doctor Odisha',
    'Sai Shree Polyclinic Cuttack',
    'neurology hospital Odisha',
    'Dr Manasi Das Odisha',
  ],
  alternates: {
    canonical: 'https://drmanasidas.com/clinic-in-odisha',
  },
  openGraph: {
    title: 'Best Neurology Clinic in Odisha | Dr. Manasi Das — Sai Shree Polyclinic',
    description:
      'Expert neurological care serving all of Odisha at Sai Shree Polyclinic, Cuttack. Trusted by patients from Bhubaneswar, Puri, Balasore and beyond.',
    url: 'https://drmanasidas.com/clinic-in-odisha',
    type: 'website',
    locale: 'en_IN',
  },
}

const ODISHA_FAQS = [
  {
    q: 'Which is the best neurology clinic in Odisha?',
    a: "Sai Shree Polyclinic in Cuttack, led by Dr. Manasi Das (MD, DM Neurology), is one of the leading neurology clinics in Odisha. It is centrally located in Cuttack, making it accessible to patients from cities and districts across the state.",
  },
  {
    q: 'Does Dr. Manasi Das treat patients from across Odisha?',
    a: "Yes. Dr. Manasi Das regularly sees patients from across Odisha — including Bhubaneswar, Puri, Kendrapara, Balasore, Sambalpur, Angul, Paradip, Berhampur, and other districts. The clinic's Cuttack location is well-connected by road and rail.",
  },
  {
    q: 'How far is Sai Shree Polyclinic from Bhubaneswar?',
    a: "Sai Shree Polyclinic in Cuttack is approximately 30–40 km from Bhubaneswar, around a 45-minute to 1-hour drive. Regular bus and auto services also connect Bhubaneswar and Cuttack.",
  },
  {
    q: 'Are there any neurologists in Odisha with DM Neurology qualification?',
    a: "Dr. Manasi Das has DM (Neurology) — a super-speciality qualification that is relatively rare in Odisha. She is available for consultations at Sai Shree Polyclinic, Cuttack, and at IMS & SUM Hospital, Bhubaneswar.",
  },
  {
    q: 'What districts in Odisha do patients travel from to see Dr. Manasi Das?',
    a: "Patients visit from across Odisha — including Cuttack, Bhubaneswar, Puri, Kendrapara, Jagatsinghpur, Balasore, Bhadrak, Jajpur, Angul, Sambalpur, Dhenkanal, and other districts.",
  },
  {
    q: 'How do I book an appointment at the neurology clinic if I am travelling from another district?',
    a: 'Call 9692579904 or 7008512773 to schedule your appointment in advance. This ensures minimal waiting time when you arrive. You can also WhatsApp to share reports and discuss your case before visiting.',
  },
]

const odishaSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalClinic',
      '@id': 'https://drmanasidas.com/clinic-in-odisha#clinic',
      name: 'Sai Shree Polyclinic — Best Neurology Clinic in Odisha',
      description:
        "Odisha's premier neurology clinic at Sai Shree Polyclinic, Cuttack, led by Dr. Manasi Das (DM Neurology). Serving patients from across Odisha.",
      url: 'https://drmanasidas.com/clinic-in-odisha',
      telephone: ['+919692579904', '+917008512773'],
      email: 'drmanasidas@gmail.com',
      medicalSpecialty: 'Neurology',
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'At- Kathagola, Ring Rd, near Shree Maa',
        addressLocality: 'Cuttack',
        addressRegion: 'Odisha',
        postalCode: '753110',
        addressCountry: 'IN',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 20.4625, longitude: 85.883 },
      areaServed: [
        { '@type': 'State', name: 'Odisha' },
        { '@type': 'City', name: 'Cuttack' },
        { '@type': 'City', name: 'Bhubaneswar' },
        { '@type': 'City', name: 'Puri' },
        { '@type': 'City', name: 'Kendrapara' },
        { '@type': 'City', name: 'Balasore' },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '120', bestRating: '5' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: ODISHA_FAQS.map((f) => ({
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
          name: 'Neurology Clinic in Odisha',
          item: 'https://drmanasidas.com/clinic-in-odisha',
        },
      ],
    },
  ],
}

const DISTRICTS = [
  'Cuttack', 'Bhubaneswar', 'Puri', 'Kendrapara', 'Balasore', 'Bhadrak',
  'Jajpur', 'Jagatsinghpur', 'Angul', 'Dhenkanal', 'Sambalpur', 'Berhampur',
]

export default function ClinicInOdishaPage() {
  const whatsappUrl =
    'https://wa.me/919692579904?text=Hello%20Dr.%20Manasi%20Das%2C%20I%20am%20from%20Odisha%20and%20would%20like%20to%20book%20a%20neurology%20appointment.'

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(odishaSchema) }} />

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
              <span className="text-neutral-700 font-medium">Neurology Clinic in Odisha</span>
            </nav>

            <div className="max-w-3xl">
              <span className="badge mb-5 inline-flex">
                <Globe className="w-3.5 h-3.5" />
                Serving All of Odisha
              </span>
              <h1 className="heading-xl text-neutral-900 mb-5">
                Best{' '}
                <span className="gradient-text">Neurology Clinic in Odisha</span>
                <br />— Sai Shree Polyclinic, Cuttack
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl font-outfit">
                Dr. Manasi Das, MD (Medicine) · DM (Neurology) — Serving patients from{' '}
                <strong>across Odisha</strong> at Sai Shree Polyclinic, Cuttack. Centrally
                located for easy access from Bhubaneswar, Puri, Kendrapara, Balasore and all
                major districts of Odisha.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="btn-primary text-base px-8 py-4"
                  aria-label="Book an appointment at Odisha's best neurology clinic"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </Link>
                <a
                  href={`tel:${SITE_CONFIG.phone[0]}`}
                  className="btn-secondary text-base px-8 py-4"
                  aria-label={`Call Sai Shree Polyclinic at +91 ${SITE_CONFIG.phone[0]}`}
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
                  { icon: Shield, text: 'DM Neurology Specialist' },
                  { icon: Users, text: '5000+ Patients Served' },
                  { icon: Clock, text: 'Mon – Sat · 9 AM – 7 PM' },
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

      {/* ── WHY CUTTACK ── */}
      <AnimatedSection>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="badge mb-4 inline-flex">
                  <Award className="w-3.5 h-3.5" /> Why Choose Us
                </span>
                <h2 className="heading-md text-neutral-900 mb-4">
                  Odisha&apos;s Trusted Destination
                  <br />
                  <span className="gradient-text">for Neurological Care</span>
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-4 font-outfit">
                  Patients from across Odisha choose Sai Shree Polyclinic because Dr. Manasi Das
                  offers a rare combination: the academic expertise of a hospital professor with the
                  personal attention of a private practice. Dr. Das holds both MD (Medicine) and DM
                  (Neurology) — a qualification that is scarce in Odisha.
                </p>
                <p className="text-neutral-600 leading-relaxed mb-6 font-outfit">
                  Whether you are from coastal Kendrapara, the capital Bhubaneswar, or the western
                  districts, Cuttack&apos;s central location makes Sai Shree Polyclinic a practical
                  choice for specialist neurological care without the long wait times of a major
                  government hospital.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'DM (Neurology) Qualified',
                    '10+ Years Clinical Experience',
                    'Central Odisha Location',
                    'Same-Day Appointments',
                    'Evidence-Based Treatment',
                    'Compassionate Patient Care',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-neutral-700 font-outfit">
                      <CheckCircle className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-2xl p-8 mb-6">
                  <h3 className="text-base font-bold text-neutral-900 mb-4 font-outfit">
                    Patients Travel From Across Odisha
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {DISTRICTS.map((d) => (
                      <span
                        key={d}
                        className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-[#0369A1] border border-[#BFDBFE] font-outfit"
                      >
                        {d}
                      </span>
                    ))}
                    <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-neutral-500 border border-neutral-200 font-outfit">
                      + more districts
                    </span>
                  </div>
                </div>
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                  <h3 className="text-base font-bold text-neutral-900 mb-3 font-outfit">Travel from Bhubaneswar?</h3>
                  <p className="text-sm text-neutral-600 font-outfit leading-relaxed mb-4">
                    Sai Shree Polyclinic is just <strong>~45 minutes from Bhubaneswar</strong>. Call
                    ahead to book so your visit is efficient. Many patients drive, take Bhubaneswar–Cuttack
                    buses, or use ride-share apps.
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phone[0]}`}
                    className="btn-primary text-sm"
                    aria-label="Call to book an appointment before travelling to Cuttack"
                  >
                    <Phone className="w-4 h-4" />
                    Book Before You Travel
                  </a>
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
                Neurological Services Available
                <br />
                <span className="gradient-text">Across Odisha</span>
              </h2>
              <p className="text-neutral-600 max-w-xl mx-auto font-outfit">
                All services available at Sai Shree Polyclinic, Cuttack. No referral needed — call to book directly.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  aria-label={`${service.title} treatment available to patients across Odisha`}
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
              <Link href="/services" className="btn-secondary" aria-label="View complete list of neurology services">
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
                <MapPin className="w-3.5 h-3.5" /> Central Location
              </span>
              <h2 className="heading-md text-neutral-900 mb-2">
                Sai Shree Polyclinic —{' '}
                <span className="gradient-text">Cuttack, Odisha</span>
              </h2>
              <p className="text-neutral-600 font-outfit">
                Centrally located for patients from across Odisha · Cuttack, Odisha 753110
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-md" style={{ height: 400 }}>
              <iframe
                src={SITE_CONFIG.clinic.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sai Shree Polyclinic — best neurology clinic in Odisha, Cuttack location map"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href={`tel:${SITE_CONFIG.phone[0]}`}
                className="btn-primary"
                aria-label={`Call Sai Shree Polyclinic Cuttack at +91 ${SITE_CONFIG.phone[0]}`}
              >
                <Phone className="w-4 h-4" />
                Call {SITE_CONFIG.phone[0]}
              </a>
              <Link href="/contact" className="btn-secondary" aria-label="Book an appointment online">
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
                <span className="gradient-text">Odisha Neurology</span>
              </h2>
              <p className="text-neutral-600 font-outfit">
                Common questions from patients travelling from across Odisha for specialist neurological care.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {ODISHA_FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-neutral-100 shadow-sm">
                  <h3 className="font-semibold text-neutral-900 mb-2 font-outfit">{faq.q}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-outfit">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/patient-corner" className="btn-secondary" aria-label="Patient resources and health guides">
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
