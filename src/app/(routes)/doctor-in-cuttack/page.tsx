import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Calendar, CheckCircle, Star, MessageCircle, Clock, Shield, Award, Users } from 'lucide-react'
import { SITE_CONFIG, SERVICES, DOCTOR } from '@/lib/constants'
import AnimatedSection from '@/components/common/AnimatedSection'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: 'Best Neurologist in Cuttack | Dr. Manasi Das — Book Appointment Today',
  description:
    "Looking for the best neurologist in Cuttack? Dr. Manasi Das, MD (Medicine), DM (Neurology) offers expert care at Sai Shree Polyclinic for Stroke, Epilepsy, Parkinson's & Migraine. Call 9692579904 for same-day consultation.",
  keywords: [
    'best neurologist in Cuttack',
    'doctor in Cuttack',
    'neurology clinic Cuttack',
    'Sai Shree Polyclinic Cuttack',
    'Dr Manasi Das Cuttack',
    'stroke doctor Cuttack',
    'epilepsy doctor Cuttack',
    'migraine treatment Cuttack',
    'brain doctor Cuttack',
    'nerve specialist Cuttack',
    'neurology specialist Cuttack Odisha',
    'Parkinson disease treatment Cuttack',
  ],
  alternates: {
    canonical: 'https://drmanasidas.com/doctor-in-cuttack',
  },
  openGraph: {
    title: 'Best Neurologist in Cuttack | Dr. Manasi Das — MD, DM (Neurology)',
    description:
      'Expert neurological care at Sai Shree Polyclinic, Cuttack. Trusted by 5000+ patients across Odisha. Call 9692579904.',
    url: 'https://drmanasidas.com/doctor-in-cuttack',
    type: 'website',
    locale: 'en_IN',
  },
}

const CUTTACK_FAQS = [
  {
    q: 'Who is the best neurologist in Cuttack?',
    a: "Dr. Manasi Das, MD (Medicine), DM (Neurology) is widely regarded as one of the best neurologists in Cuttack. She practises at Sai Shree Polyclinic, Kathagola, Ring Road, Cuttack and also serves as an Assistant Professor at IMS & SUM Hospital, Bhubaneswar.",
  },
  {
    q: "Where is Dr. Manasi Das's neurology clinic in Cuttack?",
    a: "Dr. Manasi Das's clinic is Sai Shree Polyclinic, located at Kathagola, Ring Road, near Shree Maa, Cuttack, Odisha — PIN 753110. It is easily accessible by auto-rickshaw and private vehicle.",
  },
  {
    q: 'How do I book an appointment with a neurologist in Cuttack?',
    a: "You can book an appointment by calling 9692579904 or 7008512773. You can also use WhatsApp or visit the Contact page on this website. Same-day consultations with Dr. Das are often available at Sai Shree Polyclinic, Cuttack.",
  },
  {
    q: 'What neurological conditions does Dr. Manasi Das treat in Cuttack?',
    a: "Dr. Das treats Stroke, Parkinson's Disease, Epilepsy, Multiple Sclerosis, Migraine & Headaches, Peripheral Neuropathies, Alzheimer's Disease, and all brain and nerve conditions at her Cuttack clinic.",
  },
  {
    q: 'What are the consultation hours at Sai Shree Polyclinic, Cuttack?',
    a: 'Sai Shree Polyclinic is open Monday to Saturday, 9:00 AM to 7:00 PM. Please call ahead to confirm availability for same-day appointments.',
  },
  {
    q: 'Is Dr. Manasi Das available for stroke emergencies in Cuttack?',
    a: 'For neurological emergencies such as stroke, call 9692579904 immediately. Dr. Das provides rapid assessment and expert guidance. For life-threatening emergencies, proceed to the nearest emergency department while the clinic is contacted in parallel.',
  },
]

const cuttackSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalClinic',
      '@id': 'https://drmanasidas.com/doctor-in-cuttack#clinic',
      name: 'Sai Shree Polyclinic — Dr. Manasi Das, Neurologist in Cuttack',
      description:
        "Expert neurology clinic in Cuttack offering comprehensive care for Stroke, Epilepsy, Parkinson's, Migraine and all neurological conditions.",
      url: 'https://drmanasidas.com/doctor-in-cuttack',
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
      mainEntity: CUTTACK_FAQS.map((f) => ({
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
          name: 'Neurologist in Cuttack',
          item: 'https://drmanasidas.com/doctor-in-cuttack',
        },
      ],
    },
  ],
}

export default function DoctorInCuttackPage() {
  const whatsappUrl =
    'https://wa.me/919692579904?text=Hello%20Dr.%20Manasi%20Das%2C%20I%20would%20like%20to%20book%20a%20neurology%20appointment%20in%20Cuttack.'

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cuttackSchema) }} />

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
              <span className="text-neutral-700 font-medium">Neurologist in Cuttack</span>
            </nav>

            <div className="max-w-3xl">
              <span className="badge mb-5 inline-flex">
                <MapPin className="w-3.5 h-3.5" />
                Cuttack, Odisha
              </span>
              <h1 className="heading-xl text-neutral-900 mb-5">
                Best{' '}
                <span className="gradient-text">Neurologist in Cuttack</span>
                <br />— Dr. Manasi Das
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-2xl font-outfit">
                MD (Medicine) · DM (Neurology) — Trusted by <strong>5000+ patients across Odisha</strong> for
                expert neurological care at <strong>Sai Shree Polyclinic, Cuttack</strong>. Specialising in
                Stroke, Epilepsy, Parkinson&apos;s, Migraine &amp; all brain and nerve conditions.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  href="/contact"
                  className="btn-primary text-base px-8 py-4"
                  aria-label="Book an appointment with Dr. Manasi Das in Cuttack"
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
                  aria-label="Chat with Dr. Manasi Das on WhatsApp to book an appointment"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base font-outfit text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
              <div className="flex flex-wrap gap-5">
                {[
                  { icon: Shield, text: 'Evidence-Based Neurology' },
                  { icon: Users, text: '5000+ Patients Treated' },
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

      {/* ── ABOUT IN CUTTACK ── */}
      <AnimatedSection>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="badge mb-4 inline-flex">
                  <Award className="w-3.5 h-3.5" /> About the Doctor
                </span>
                <h2 className="heading-md text-neutral-900 mb-4">
                  Your Trusted Neurologist in
                  <br />
                  <span className="gradient-text">Cuttack, Odisha</span>
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-4 font-outfit">
                  Dr. Manasi Das is one of the most sought-after neurologists in Cuttack, combining
                  academic expertise with compassionate clinical care. Holding MD (Medicine) and DM
                  (Neurology), she brings a rare depth of knowledge to her private practice at Sai Shree
                  Polyclinic.
                </p>
                <p className="text-neutral-600 leading-relaxed mb-6 font-outfit">
                  As an Assistant Professor at IMS &amp; SUM Hospital, Bhubaneswar, Dr. Das stays at the
                  forefront of neurological research — ensuring her Cuttack patients receive world-class,
                  evidence-based care without needing to travel to a metro city.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    '10+ Years Experience',
                    '5000+ Patients Treated',
                    'MD (Medicine) Qualified',
                    'DM (Neurology) Qualified',
                    'Academic Excellence',
                    'Same-Day Consultation',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-neutral-700 font-outfit">
                      <CheckCircle className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <Link href="/about" className="btn-primary" aria-label="Learn more about Dr. Manasi Das">
                  Learn More About Dr. Das
                </Link>
              </div>

              <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-2xl p-8">
                <h3 className="text-lg font-bold text-neutral-900 mb-5 font-outfit">Clinic Information</h3>
                <ul className="space-y-4">
                  {[
                    {
                      icon: MapPin,
                      label: 'Address',
                      value: 'Sai Shree Polyclinic, Kathagola, Ring Rd, near Shree Maa, Cuttack — 753110',
                    },
                    { icon: Phone, label: 'Phone', value: '+91 9692579904 / +91 7008512773' },
                    { icon: Clock, label: 'Hours', value: 'Monday – Saturday · 9:00 AM – 7:00 PM' },
                    { icon: Star, label: 'Rating', value: '4.9 / 5 · Trusted by 5000+ patients' },
                  ].map(({ icon: Icon, label, value }) => (
                    <li key={label} className="flex gap-3">
                      <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                        <Icon className="w-4 h-4 text-[#0EA5E9]" />
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500 font-outfit">{label}</p>
                        <p className="text-sm font-medium text-neutral-800 font-outfit">{value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── SERVICES IN CUTTACK ── */}
      <AnimatedSection>
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="badge mb-4 inline-flex">Our Services</span>
              <h2 className="heading-md text-neutral-900 mb-3">
                Neurological Services Available in{' '}
                <span className="gradient-text">Cuttack</span>
              </h2>
              <p className="text-neutral-600 max-w-xl mx-auto font-outfit">
                Comprehensive brain and nerve care — all available at Sai Shree Polyclinic, Cuttack, Odisha.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  aria-label={`Learn about ${service.title} treatment in Cuttack, Odisha`}
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
              <Link
                href="/services"
                className="btn-secondary"
                aria-label="View all neurology services offered in Cuttack"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── GOOGLE MAP ── */}
      <AnimatedSection>
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <span className="badge mb-4 inline-flex">
                <MapPin className="w-3.5 h-3.5" /> Find Us in Cuttack
              </span>
              <h2 className="heading-md text-neutral-900 mb-2">
                Sai Shree Polyclinic —{' '}
                <span className="gradient-text">Cuttack, Odisha</span>
              </h2>
              <p className="text-neutral-600 font-outfit">
                At- Kathagola, Ring Rd, near Shree Maa, Cuttack, Odisha 753110
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
                title="Sai Shree Polyclinic location map, Cuttack, Odisha — Dr. Manasi Das Neurologist"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href={`tel:${SITE_CONFIG.phone[0]}`}
                className="btn-primary"
                aria-label={`Call Sai Shree Polyclinic at +91 ${SITE_CONFIG.phone[0]}`}
              >
                <Phone className="w-4 h-4" />
                Call {SITE_CONFIG.phone[0]}
              </a>
              <Link
                href="/contact"
                className="btn-secondary"
                aria-label="Book an appointment at Sai Shree Polyclinic Cuttack"
              >
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
                <span className="gradient-text">Cuttack Neurology</span>
              </h2>
              <p className="text-neutral-600 font-outfit">
                Common questions from patients seeking neurological care in Cuttack, Odisha.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {CUTTACK_FAQS.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-neutral-100 shadow-sm">
                  <h3 className="font-semibold text-neutral-900 mb-2 font-outfit">{faq.q}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed font-outfit">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/patient-corner"
                className="btn-secondary"
                aria-label="View more patient FAQs and neurology resources"
              >
                More Patient Resources
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
