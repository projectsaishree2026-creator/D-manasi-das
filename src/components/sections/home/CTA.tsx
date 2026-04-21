'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Calendar, MapPin, Clock, Users, Award, Activity } from 'lucide-react'
import { SITE_CONFIG, STATS } from '@/lib/constants'
import { fadeInUp, staggerContainer } from '@/animations'

export default function CTA() {
  const trustStats = [
    { icon: Users, value: '5000+', label: 'Patients Treated' },
    { icon: Award, value: '8+', label: 'Conditions Treated' },
    { icon: Activity, value: '10+', label: 'Years Experience' },
    { icon: Clock, value: 'Same Day', label: 'Consultations' },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-[#0369A1] via-[#0EA5E9] to-[#0369A1] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0369A1]/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      <div className="container-custom relative z-10">
        {/* Split layout: left message + right stats */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-center">

          {/* Left — message + CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 text-white text-xs font-semibold rounded-full border border-white/25 mb-6 uppercase tracking-wider font-outfit"
            >
              <Clock className="w-3.5 h-3.5" />
              Same-Day Consultations Available
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="heading-lg text-white mb-6"
            >
              Don&apos;t Wait — Expert<br />
              Neurological Help is<br />
              <span className="text-[#BAE6FD]">One Call Away</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-[#BAE6FD] text-base leading-relaxed mb-8 max-w-md font-outfit">
              Reach out to Dr. Manasi Das at Sai Shree Polyclinic, Cuttack for trusted neurological
              care. Early consultation leads to better outcomes.
            </motion.p>

            {/* Action buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0369A1] font-bold rounded-full hover:bg-[#E0F2FE] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm font-outfit"
                aria-label="Book an appointment with Dr. Manasi Das"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone[0]}`}
                className="btn-outline-white text-sm px-8 py-4"
                aria-label={`Call Dr. Manasi Das at +91 ${SITE_CONFIG.phone[0]}`}
              >
                <Phone className="w-5 h-5" />
                +91 {SITE_CONFIG.phone[0]}
              </a>
            </motion.div>

            {/* Location + hours strip */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 text-[#BAE6FD] text-sm font-outfit">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white/60" />
                <span>{SITE_CONFIG.clinic.name}, Cuttack</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white/60" />
                <span>Mon – Sat: 9am – 7pm</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — trust stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {trustStats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.25 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/20 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-2xl font-extrabold text-white font-outfit leading-none">{value}</p>
                <p className="text-[#BAE6FD] text-xs mt-1.5 font-outfit">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
