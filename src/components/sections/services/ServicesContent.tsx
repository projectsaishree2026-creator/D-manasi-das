'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { fadeInUp, staggerContainer, scaleIn } from '@/animations'
import { getServiceColor } from '@/utils/helpers'

export default function ServicesContent() {
  const [featuredService, ...rest] = SERVICES

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Featured service — full-width editorial card */}
          {(() => {
            const colors = getServiceColor(featuredService.color)
            return (
              <motion.div variants={fadeInUp}>
                <div 
                  className={`card-base card-service p-8 lg:p-10 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300`}
                  style={{ backgroundImage: `url('/images/services/${featuredService.slug}.webp')` }}
                >
                  {/* Decorative background blob */}
                  <div className={`card-bg-blob absolute top-0 right-0 w-64 h-64 ${colors.bg} rounded-full blur-3xl opacity-25 -translate-y-16 translate-x-16 pointer-events-none`} />

                  <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-start relative z-10">
                    <div className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {featuredService.icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`inline-block text-xs font-semibold ${colors.text} ${colors.bg} px-3 py-1 rounded-full border ${colors.border} font-outfit`}>
                          {featuredService.category}
                        </span>
                        <span className="text-xs text-neutral-400 font-outfit uppercase tracking-widest">Featured Specialisation</span>
                      </div>
                      <h2 className="text-2xl font-bold text-neutral-900 mb-3 font-outfit">{featuredService.title}</h2>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-6 max-w-2xl font-outfit">{featuredService.description}</p>

                      {/* Two-col sub-grid */}
                      <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3 font-outfit">Common Symptoms</p>
                          <ul className="space-y-1.5">
                            {featuredService.symptoms.slice(0, 4).map((s) => (
                              <li key={s} className="flex items-start gap-2 text-xs text-neutral-600 font-outfit">
                                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.light} flex-shrink-0`} />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3 font-outfit">What We Offer</p>
                          <ul className="space-y-1.5">
                            {featuredService.benefits.slice(0, 4).map((b) => (
                              <li key={b} className="flex items-start gap-2 text-xs text-neutral-600 font-outfit">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Link
                        href={`/services/${featuredService.slug}`}
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text} hover:gap-3 transition-all font-outfit`}
                        aria-label={`Learn more about ${featuredService.title} treatment`}
                      >
                        Learn more <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })()}

          {/* Rest — asymmetric 2-col grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {rest.map((service, i) => {
              const colors = getServiceColor(service.color)
              return (
                <motion.div key={service.slug} variants={scaleIn}>
                  <div 
                    className={`card-base card-service p-7 group hover:-translate-y-1 transition-all duration-300 h-full`}
                    style={{ backgroundImage: `url('/images/services/${service.slug}.webp')` }}
                  >
                    {/* Top row */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <span className={`inline-block text-xs font-semibold ${colors.text} ${colors.bg} px-2.5 py-0.5 rounded-full border ${colors.border} mb-2 font-outfit`}>
                          {service.category}
                        </span>
                        <h2 className="text-lg font-bold text-neutral-900 font-outfit">{service.title}</h2>
                      </div>
                    </div>

                    <p className="text-neutral-600 text-sm leading-relaxed mb-5 font-outfit">{service.description}</p>

                    {/* Two columns: symptoms + benefits */}
                    <div className="grid grid-cols-2 gap-4 mb-5">
                      <div>
                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3 font-outfit">Symptoms</p>
                        <ul className="space-y-1.5">
                          {service.symptoms.slice(0, 3).map((s) => (
                            <li key={s} className="flex items-start gap-2 text-xs text-neutral-600 font-outfit">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.light} flex-shrink-0`} />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3 font-outfit">We Offer</p>
                        <ul className="space-y-1.5">
                          {service.benefits.slice(0, 3).map((b) => (
                            <li key={b} className="flex items-start gap-2 text-xs text-neutral-600 font-outfit">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${colors.text} hover:gap-2.5 transition-all font-outfit`}
                      aria-label={`Learn more about ${service.title} treatment`}
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
