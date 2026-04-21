'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Calendar, ChevronDown, Award, Users, Clock, Shield, MapPin } from 'lucide-react'
import { SITE_CONFIG, DOCTOR } from '@/lib/constants'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/animations'

export default function Hero() {
  const [isActive, setIsActive] = useState(false)

  return (
    <section
      className="relative flex items-center overflow-hidden bg-hero-gradient"
      style={{ minHeight: '100dvh', paddingTop: 'var(--navbar-height)' }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-[#0EA5E9]/5 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#0369A1]/5 blur-3xl" />
        <div className="absolute inset-0 dot-pattern opacity-20" />
      </div>

      <div className="container-custom relative z-10 pt-6 pb-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">

          {/* Left content — always left-aligned */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex mb-6">
              <span className="badge">
                <Award className="w-3.5 h-3.5" />
                Asst. Professor · IMS &amp; SUM Hospital
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="heading-xl text-neutral-900 mb-5"
            >
              Expert{' '}
              <span className="gradient-text">Neurology Care</span>
              <br />
              by Dr. Manasi Das
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-lg font-outfit"
            >
              MD (Medicine) · DM (Neurology) — Trusted by 5000+ patients across Odisha for Stroke,
              Epilepsy, Parkinson&apos;s, Migraine, and all brain &amp; nerve conditions.
            </motion.p>

            {/* CTAs — left-aligned row */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="btn-primary text-base px-8 py-4"
                aria-label="Book an appointment with Dr. Manasi Das"
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
            </motion.div>

            {/* Trust signals */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
              {[
                { icon: Shield, text: 'Evidence-Based Care' },
                { icon: Users, text: '5000+ Patients Treated' },
                { icon: Clock, text: 'Same Day Consultation' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-1.5 text-sm text-neutral-500 font-outfit">
                  <Icon className="w-4 h-4 text-[#0EA5E9]" />
                  {text}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — premium editorial doctor card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <div 
              className="relative w-full max-w-[420px] h-[520px] rounded-2xl overflow-hidden shadow-glow-lg group transform transition-all duration-500 ease-out lg:hover:-translate-y-1 hover:shadow-2xl cursor-pointer lg:cursor-default"
              onClick={() => setIsActive(!isActive)}
              data-active={isActive}
            >
              
              {/* Background Image */}
              <Image 
                src="/images/doctor/Dr-image-2.webp" 
                alt="Dr. Manasi Das — Expert Neurologist in Cuttack and Bhubaneswar, Odisha, specialising in Stroke, Epilepsy and Parkinson's Disease treatment"
                fill
                className="object-cover object-top transition-transform duration-700 ease-out lg:group-hover:scale-105 data-[active=true]:scale-[1.02]"
                priority
              />

              {/* Base gradient for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:from-black/40 lg:via-black/10 lg:to-transparent lg:group-hover:from-black/90 lg:group-hover:via-black/50 lg:group-hover:to-black/20 data-[active=true]:from-black/90 data-[active=true]:via-black/50 data-[active=true]:to-black/20 transition-all duration-500 pointer-events-none" />

              {/* Extra darkening + glass blur on hover (Desktop) or active (Mobile) */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 lg:group-hover:opacity-100 data-[active=true]:opacity-100 transition-opacity duration-500 ease-out pointer-events-none" />

              {/* Fixed Top Badge (Always visible) */}
              <div className="absolute top-4 left-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 font-outfit pointer-events-none">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                Accepting New Patients
              </div>

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20 pointer-events-none">
                <div className="flex flex-col transform transition-all duration-500 ease-out translate-y-8 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 data-[active=true]:translate-y-0 data-[active=true]:opacity-100 pointer-events-auto">
                  
                  {/* Doctor Info */}
                  <div className="space-y-4 mb-8">
                    <div>
                      <h2 className="text-3xl font-extrabold text-white font-outfit leading-tight mb-1.5">
                        Dr. Manasi Das
                      </h2>
                      <p className="text-[#38BDF8] font-semibold text-sm md:text-base font-outfit">
                        MD (Medicine) · DM (Neurology)
                      </p>
                    </div>
                    
                    <p className="text-gray-200 text-sm md:text-base font-outfit leading-relaxed">
                      Assistant Professor at IMS &amp; SUM Hospital. Over a decade of expertise in treating complex neurological disorders across Odisha.
                    </p>
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3 w-full">
                    <Link
                      href="/contact"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-[15px] font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors relative overflow-hidden group/btn shadow-[0_4px_15px_rgba(14,165,233,0.3)] hover:shadow-[0_4px_20px_rgba(14,165,233,0.5)]"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 ease-out skew-x-12" />
                      <Calendar className="w-5 h-5" />
                      Book Now
                    </Link>
                    <a
                      href={`tel:${SITE_CONFIG.phone[0]}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 text-[15px] font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Call
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}
