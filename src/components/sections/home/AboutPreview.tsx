'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2, GraduationCap, ArrowRight, MapPin, Calendar } from 'lucide-react'
import { DOCTOR } from '@/lib/constants'
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '@/animations'

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">

          {/* Left visual */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            {/* Main image card container */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-500 ease-out hover:-translate-y-1 group aspect-[4/5] bg-neutral-100">
              
              {/* Image with parallax-like slight scale */}
              <Image 
                src="/images/doctor/Dr-image-50.webp" 
                alt="Dr. Manasi Das - Neurologist"
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 lg:from-black/70 lg:group-hover:from-black/85 lg:group-hover:via-black/40 transition-colors duration-500 ease-out" />

              {/* 1. Top-left Badge */}
              <div className="absolute top-5 left-5 z-20">
                <div className="bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 font-outfit transform transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#38BDF8]" />
                  DM Neurology
                </div>
              </div>

              {/* 2. Mid Floating Stat Card */}
              <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20 hidden sm:block">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2.5 flex items-center gap-3 shadow-lg transform transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  <div className="w-10 h-10 bg-[#38BDF8]/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#38BDF8]/30">
                    <CheckCircle2 className="w-5 h-5 text-[#38BDF8]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm font-outfit leading-none mb-1">5000+</p>
                    <p className="text-neutral-300 text-[10px] uppercase tracking-wider font-outfit">Patients</p>
                  </div>
                </div>
              </div>

              {/* Content Placement (Bottom Anchored) */}
              <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end">
                {/* Content block */}
                <div className="p-6 pb-5 transform transition-all duration-500 ease-out translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0">
                  <h3 className="text-3xl font-extrabold text-white font-outfit leading-tight mb-1">
                    Dr. Manasi Das
                  </h3>
                  <p className="text-[#38BDF8] font-medium text-sm font-outfit mb-3">
                    MD (Medicine) · DM (Neurology)
                  </p>
                  
                  {/* Desktop reveal block */}
                  <div className="hidden lg:block overflow-hidden transition-all duration-500 ease-out max-h-0 group-hover:max-h-40 opacity-0 group-hover:opacity-100 group-hover:mb-2">
                    <p className="text-gray-200 text-sm font-outfit leading-snug mb-3">
                      <span className="font-semibold text-white">Assistant Professor, IMS &amp; SUM</span><br/>
                      <span className="italic text-gray-300">&quot;Trusted Neurology Care in Odisha&quot;</span>
                    </p>
                    {/* Primary CTA Button */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-[0_4px_15px_rgba(14,165,233,0.3)] hover:shadow-[0_4px_20px_rgba(14,165,233,0.5)] group/btn relative overflow-hidden w-fit"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 ease-out skew-x-12" />
                      <Calendar className="w-4 h-4" />
                      Book Consultation
                    </Link>
                  </div>
                  
                  {/* Mobile always visible */}
                  <div className="lg:hidden mt-3">
                     <p className="text-gray-200 text-sm font-outfit italic opacity-90 mb-4">
                        &quot;Trusted Neurology Care in Odisha&quot;
                     </p>
                     <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 bg-[#0EA5E9] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-[0_4px_15px_rgba(14,165,233,0.3)] w-full relative overflow-hidden"
                      >
                        <Calendar className="w-4 h-4" />
                        Book Consultation
                      </Link>
                  </div>
                </div>

                {/* 3. Bottom Location Bar */}
                <div className="bg-white/10 backdrop-blur-md border-t border-white/10 px-6 py-3 flex items-center gap-3">
                   <MapPin className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
                   <div>
                     <p className="text-white font-semibold text-[13px] font-outfit leading-tight">Sai Shree Polyclinic</p>
                     <p className="text-neutral-300 text-[11px] font-outfit">Cuttack, Odisha</p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right content — left-aligned */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.span variants={fadeInUp} className="badge">
              About Dr. Das
            </motion.span>

            <motion.h2 variants={fadeInUp} className="section-title mt-4 mb-5">
              A Neurologist You Can{' '}
              <span className="gradient-text">Trust &amp; Rely On</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-neutral-600 leading-relaxed mb-4 text-base font-outfit">
              Dr. Manasi Das is a distinguished Neurologist and Assistant Professor at IMS &amp; SUM Hospital —
              one of Odisha&apos;s premier medical institutions. With MD (Medicine) and DM (Neurology), she
              combines academic excellence with compassionate clinical practice.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-neutral-600 leading-relaxed mb-8 text-base font-outfit">
              Her practice at Sai Shree Polyclinic in Cuttack serves patients seeking trusted neurological
              expertise for Stroke, Epilepsy, Parkinson&apos;s Disease, Multiple Sclerosis, and more.
            </motion.p>

            {/* Achievements — staggered */}
            <motion.ul variants={staggerContainer} className="space-y-3 mb-8">
              {DOCTOR.achievements.slice(0, 4).map((item) => (
                <motion.li
                  key={item}
                  variants={fadeInUp}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-5 h-5 rounded-full bg-[#E0F2FE] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0EA5E9] transition-colors duration-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0EA5E9] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-neutral-700 text-sm font-outfit">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp}>
              <Link
                href="/about"
                className="btn-primary"
                aria-label="Read Dr. Manasi Das full profile and credentials"
              >
                Read Full Profile
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
