'use client'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'
import { fadeInUp, staggerContainer, scaleIn } from '@/animations'

export default function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        {/* Left-aligned header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <motion.span variants={fadeInUp} className="badge">
            Patient Stories
          </motion.span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-4">
            <motion.h2 variants={fadeInUp} className="section-title max-w-lg">
              What Our Patients{' '}
              <span className="gradient-text">Say About Us</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-neutral-500 text-sm max-w-xs font-outfit lg:pb-1">
              Real experiences from patients who found hope and healing through expert neurological care.
            </motion.p>
          </div>
        </motion.div>

        {/* Asymmetric layout: featured top + supporting below */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-5"
        >
          {/* Featured testimonial — full-width prominent */}
          <motion.div variants={fadeInUp}>
            <div className="card-base p-8 lg:p-10 relative overflow-hidden">
              {/* Decorative quote watermark */}
              <div className="absolute top-6 right-6 text-[8rem] leading-none font-outfit font-black text-[#0EA5E9]/5 select-none pointer-events-none">
                &ldquo;
              </div>

              <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start relative z-10">
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: featured.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-neutral-700 text-lg leading-relaxed mb-5 font-outfit">
                    &ldquo;{featured.text}&rdquo;
                  </p>

                  <span className="inline-block text-xs font-semibold text-[#0369A1] bg-[#E0F2FE] px-3 py-1 rounded-full border border-[#BAE6FD] mb-5 font-outfit">
                    {featured.condition}
                  </span>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm font-outfit">{featured.initials}</span>
                    </div>
                    <div>
                      <p className="text-neutral-900 font-semibold text-sm font-outfit">{featured.name}</p>
                      <p className="text-neutral-400 text-xs font-outfit">{featured.location}</p>
                    </div>
                  </div>
                </div>

                {/* Featured badge */}
                <div className="flex-shrink-0 hidden lg:flex flex-col items-center gap-3 bg-[#F0F9FF] rounded-2xl px-6 py-5 border border-[#BAE6FD]/50">
                  <Quote className="w-8 h-8 text-[#0EA5E9]" />
                  <p className="text-[#0369A1] font-bold text-2xl font-outfit">5.0</p>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-neutral-500 text-xs text-center font-outfit">Verified Patient<br />Review</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Supporting testimonials — 2-col asymmetric */}
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-5">
            {rest.slice(0, 2).map((t, i) => (
              <motion.div key={t.id} variants={scaleIn}>
                <div className="card-base p-6 relative h-full">
                  {/* Quote icon */}
                  <div className="absolute top-5 right-5 w-8 h-8 bg-[#F0F9FF] rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-[#0EA5E9]" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-neutral-700 text-sm leading-relaxed mb-4 italic font-outfit pr-8">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <span className="inline-block text-xs font-semibold text-[#0369A1] bg-[#E0F2FE] px-2.5 py-0.5 rounded-full border border-[#BAE6FD] mb-4 font-outfit">
                    {t.condition}
                  </span>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xs font-outfit">{t.initials}</span>
                    </div>
                    <div>
                      <p className="text-neutral-900 font-semibold text-sm font-outfit">{t.name}</p>
                      <p className="text-neutral-400 text-xs font-outfit">{t.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust row — left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <div className="inline-flex items-center gap-4 bg-[#F0F9FF] rounded-2xl px-6 py-4 border border-[#BAE6FD]/50">
            <div className="flex -space-x-2">
              {['PM', 'RK', 'SP', 'AR'].map((init) => (
                <div key={init} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold font-outfit">{init[0]}</span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-[#0369A1] text-sm font-medium mt-0.5 font-outfit">5000+ patients trust Dr. Manasi Das</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
