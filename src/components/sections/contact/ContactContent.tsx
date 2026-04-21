'use client'
import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Clock, Building2, GraduationCap } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'
import { SITE_CONFIG } from '@/lib/constants'
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, scaleIn } from '@/animations'

const contactCards = [
  {
    icon: Phone,
    title: 'Phone',
    lines: [`+91 ${SITE_CONFIG.phone[0]}`, `+91 ${SITE_CONFIG.phone[1]}`],
    action: { label: 'Call Now', href: `tel:${SITE_CONFIG.phone[0]}` },
    color: 'bg-[#E0F2FE] text-[#0EA5E9]',
  },
  {
    icon: MapPin,
    title: 'Clinic Address',
    lines: [SITE_CONFIG.clinic.name, SITE_CONFIG.clinic.address],
    action: { label: 'Get Directions', href: 'https://maps.google.com/?q=Sai+Shree+Polyclinic,+Cuttack' },
    color: 'bg-[#DBEAFE] text-blue-600',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [SITE_CONFIG.email],
    action: { label: 'Send Email', href: `mailto:${SITE_CONFIG.email}` },
    color: 'bg-[#EDE9FE] text-purple-600',
  },
  {
    icon: Clock,
    title: 'Clinic Hours',
    lines: ['Mon – Sat: 9:00 AM – 7:00 PM', 'Sunday: By Appointment'],
    action: null,
    color: 'bg-amber-50 text-amber-600',
  },
]

export default function ContactContent() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        {/* Contact cards — structured 2×2 grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-5 mb-14"
        >
          {contactCards.map((card) => (
            <motion.div
              key={card.title}
              variants={scaleIn}
              className="card-base p-6 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
            >
              {/* Icon left-aligned with text */}
              <div className={`w-12 h-12 ${card.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <card.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 text-sm mb-1.5 font-outfit">{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="text-neutral-500 text-sm font-outfit">{line}</p>
                ))}
                {card.action && (
                  <a
                    href={card.action.href}
                    className="inline-flex items-center gap-1 mt-3 text-[#0EA5E9] text-sm font-semibold hover:text-[#0369A1] transition-colors font-outfit"
                    aria-label={card.action.label}
                  >
                    {card.action.label} →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Form + Map — 2-col split */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Form — left */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="badge">Send a Message</span>
              <h2 className="section-title mt-4">
                Let&apos;s Talk About{' '}
                <span className="gradient-text">Your Health</span>
              </h2>
              <p className="text-neutral-500 text-sm mt-3 font-outfit">
                Fill the form and Dr. Das&apos;s team will reach out within 24 hours.
              </p>
            </div>
            <ContactForm />
          </motion.div>

          {/* Map + clinic info — right */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden h-72 bg-neutral-100" style={{ boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)' }}>
              <iframe
                src={SITE_CONFIG.clinic.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SAI SHREE POLYCLINIC Location"
              />
            </div>

            {/* Clinic info card */}
            <div className="card-base p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#E0F2FE] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-[#0EA5E9]" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-base mb-1 font-outfit">{SITE_CONFIG.clinic.name}</h3>
                  <p className="text-neutral-500 text-sm mb-3 font-outfit">{SITE_CONFIG.clinic.address}</p>
                  <div className="flex flex-wrap gap-3">
                    {SITE_CONFIG.phone.map((p) => (
                      <a
                        key={p}
                        href={`tel:${p}`}
                        className="inline-flex items-center gap-1.5 text-sm text-[#0EA5E9] font-semibold hover:text-[#0369A1] font-outfit"
                        aria-label={`Call clinic at +91 ${p}`}
                      >
                        <Phone className="w-3.5 h-3.5" /> +91 {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hospital info card */}
            <div className="card-base p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#EDE9FE] rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-base mb-1 font-outfit">{SITE_CONFIG.hospital.name}</h3>
                  <p className="text-neutral-500 text-sm font-outfit">{SITE_CONFIG.hospital.role}</p>
                  <p className="text-neutral-400 text-xs mt-1 font-outfit">Bhubaneswar, Odisha</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
