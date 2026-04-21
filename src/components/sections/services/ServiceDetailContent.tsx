'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, ArrowLeft, ArrowRight, Phone, Calendar } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import { getServiceColor } from '@/utils/helpers'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '@/animations'
import type { Service } from '@/types'

interface Props {
  service: Service
  prev?: Service
  next?: Service
}

export default function ServiceDetailContent({ service, prev, next }: Props) {
  const colors = getServiceColor(service.color)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Back */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="mb-8">
          <Link href="/services" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[#0EA5E9] transition-colors font-outfit">
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible">
              {/* Icon + title */}
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                <div className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center text-4xl flex-shrink-0`}>
                  {service.icon}
                </div>
                <div>
                  <span className={`badge mb-2 ${colors.text} ${colors.bg} border-0`}>{service.category}</span>
                  <h1 className="text-3xl font-extrabold text-neutral-900 font-outfit">
                    {service.title}
                  </h1>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div variants={fadeInUp} className="prose prose-neutral max-w-none mb-8">
                <p className="text-neutral-600 leading-relaxed text-base">{service.description}</p>
              </motion.div>

              {/* Symptoms */}
              <motion.div variants={fadeInUp} className="card-base p-6 mb-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <h2 className="font-bold text-neutral-900 text-lg font-outfit">
                    Common Symptoms
                  </h2>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <span className={`mt-1.5 w-2 h-2 rounded-full ${colors.bg} border-2 ${colors.border} flex-shrink-0`} />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div variants={fadeInUp} className="card-base p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-sky-500" />
                  </div>
                  <h2 className="font-bold text-neutral-900 text-lg font-outfit">
                    Our Approach & Treatment
                  </h2>
                </div>
                <ul className="space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div variants={fadeInRight} initial="hidden" animate="visible" className="space-y-5">
            {/* Appointment card */}
            <div className="bg-gradient-to-br from-sky-600 to-sky-800 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2 font-outfit">
                Book a Consultation
              </h3>
              <p className="text-sky-100 text-sm mb-5">Get expert advice from Dr. Manasi Das today.</p>
              <div className="space-y-3">
                <a href={`tel:${SITE_CONFIG.phone[0]}`} className="flex items-center justify-center gap-2 w-full py-3 bg-white text-sky-700 rounded-full font-semibold text-sm hover:bg-sky-50 transition-colors">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3 bg-white/15 text-white rounded-full font-semibold text-sm hover:bg-white/25 border border-white/25 transition-colors">
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
              </div>
            </div>

            {/* Clinic info */}
            <div className="card-base p-5">
              <h4 className="font-bold text-neutral-900 text-sm mb-3 font-outfit">Clinic Location</h4>
              <p className="text-neutral-700 text-sm font-medium">Sai Shree Polyclinic</p>
              <p className="text-neutral-500 text-xs mt-0.5">Near Shreema Hospital, Cuttack</p>
              <div className="mt-3 pt-3 border-t border-neutral-100 flex flex-col gap-1">
                {SITE_CONFIG.phone.map((p) => (
                  <a key={p} href={`tel:${p}`} className="text-sky-600 text-sm hover:text-sky-700 font-medium">+91 {p}</a>
                ))}
              </div>
            </div>

            {/* All services quick nav */}
            <div className="card-base p-5">
              <h4 className="font-bold text-neutral-900 text-sm mb-4 font-outfit">Other Services</h4>
              <div className="space-y-2">
                {[prev, next].filter(Boolean).map((s) => s && (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-neutral-50 transition-colors group">
                    <span className="text-sm text-neutral-700 group-hover:text-sky-700">{s.icon} {s.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-sky-500" />
                  </Link>
                ))}
                <Link href="/services" className="flex items-center gap-2 text-sm text-sky-600 font-medium mt-2 px-3 py-1 hover:text-sky-700">
                  View all services →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
