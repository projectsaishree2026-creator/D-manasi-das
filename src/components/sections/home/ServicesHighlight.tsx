'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { fadeInUp, staggerContainer, scaleIn } from '@/animations'
import { getServiceColor } from '@/utils/helpers'

export default function ServicesHighlight() {
  const [featured, ...rest] = SERVICES.slice(0, 6)
  const featuredColors = getServiceColor(featured.color)

  return (
    <section className="section-padding bg-neutral-50">
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
            Our Specialisations
          </motion.span>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-4">
            <motion.h2 variants={fadeInUp} className="section-title max-w-lg">
              Conditions We{' '}
              <span className="gradient-text">Expertly Treat</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-neutral-500 text-sm max-w-sm font-outfit lg:pb-1">
              Comprehensive neurological care across 8 specialisations — from emergency stroke management
              to chronic condition support.
            </motion.p>
          </div>
        </motion.div>

        {/* Asymmetric layout: featured large + supporting grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid lg:grid-cols-[1.4fr_1fr] gap-5 items-start"
        >
          {/* Featured service — large card */}
          <motion.div variants={scaleIn} className="row-span-2">
            <Link
              href={`/services/${featured.slug}`}
              className="group block h-full"
              aria-label={`Learn about ${featured.title} treatment`}
            >
              <div
                className="card-base p-8 h-full hover:scale-[1.01] transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{ minHeight: '320px' }}
              >
                {/* Decorative background blob */}
                <div className={`absolute top-0 right-0 w-48 h-48 ${featuredColors.bg} rounded-full blur-3xl opacity-30 -translate-y-12 translate-x-12 pointer-events-none`} />

                {/* Icon — larger for featured */}
                <div className={`w-20 h-20 ${featuredColors.bg} rounded-2xl flex items-center justify-center mb-6 text-4xl group-hover:scale-110 transition-transform duration-300`}>
                  {featured.icon}
                </div>

                <span className={`inline-block text-xs font-semibold ${featuredColors.text} ${featuredColors.bg} px-3 py-1 rounded-full mb-4 border ${featuredColors.border} font-outfit`}>
                  {featured.category}
                </span>

                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#0369A1] transition-colors font-outfit leading-tight">
                  {featured.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-outfit">
                  {featured.shortDesc}
                </p>

                <div className={`inline-flex items-center gap-2 text-sm font-semibold ${featuredColors.text} group-hover:gap-3 transition-all font-outfit`}>
                  Learn more
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Supporting cards — 2-col on the right */}
          <div className="grid sm:grid-cols-2 gap-5">
            {rest.map((service) => {
              const colors = getServiceColor(service.color)
              return (
                <motion.div key={service.slug} variants={scaleIn}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block"
                    aria-label={`Learn about ${service.title} treatment`}
                  >
                    <div className="card-base p-5 h-full hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 cursor-pointer">
                      {/* Icon */}
                      <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 text-xl group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>

                      <span className={`inline-block text-xs font-semibold ${colors.text} ${colors.bg} px-2.5 py-0.5 rounded-full mb-2.5 border ${colors.border} font-outfit`}>
                        {service.category}
                      </span>

                      <h3 className="text-sm font-bold text-neutral-900 mb-1.5 group-hover:text-[#0369A1] transition-colors font-outfit leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-neutral-400 text-xs leading-relaxed font-outfit line-clamp-2">
                        {service.shortDesc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* CTA — left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/services"
            className="btn-primary"
            aria-label="View all neurological services offered by Dr. Manasi Das"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
