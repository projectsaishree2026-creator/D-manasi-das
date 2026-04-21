'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Download, FileText, Phone, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FAQS, PATIENT_RESOURCES, SITE_CONFIG } from '@/lib/constants'
import { fadeInUp, staggerContainer, scaleIn } from '@/animations'

export default function PatientContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [featured, ...restResources] = PATIENT_RESOURCES

  return (
    <>
      {/* Resources — asymmetric featured + supporting grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">

          {/* Left-aligned header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.span variants={fadeInUp} className="badge">Health Resources</motion.span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mt-4">
              <motion.h2 variants={fadeInUp} className="section-title max-w-md">
                Patient Guides &amp;{' '}
                <span className="gradient-text">Resources</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-neutral-500 text-sm max-w-xs font-outfit lg:pb-1">
                Curated guides for patients and caregivers managing neurological conditions.
              </motion.p>
            </div>
          </motion.div>

          {/* Asymmetric layout: 1 featured + smaller grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-[1.4fr_1fr] gap-6 items-start"
          >
            {/* Featured resource — large */}
            <motion.div variants={scaleIn} className="row-span-2">
              <div className="card-base p-8 h-full group hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-20 h-20 bg-[#E0F2FE] rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {featured.icon}
                  </div>
                  <div>
                    <span className="badge mb-2">{featured.type}</span>
                    <h3 className="font-bold text-neutral-900 text-lg font-outfit leading-tight">{featured.title}</h3>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-outfit">{featured.desc}</p>
                <button
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EA5E9] hover:text-[#0369A1] transition-colors hover:gap-3 font-outfit"
                  aria-label={`Download ${featured.title} guide`}
                >
                  <Download className="w-4 h-4" />
                  Download Guide
                </button>
              </div>
            </motion.div>

            {/* Supporting resources — 2-col compact */}
            <div className="grid sm:grid-cols-2 gap-4">
              {restResources.map((r) => (
                <motion.div key={r.title} variants={scaleIn}>
                  <div className="card-base p-5 h-full hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#E0F2FE] rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
                      {r.icon}
                    </div>
                    <span className="badge mb-2 text-[10px]">{r.type}</span>
                    <h3 className="font-bold text-neutral-900 text-sm font-outfit mb-2">{r.title}</h3>
                    <p className="text-neutral-400 text-xs leading-relaxed mb-3 font-outfit line-clamp-2">{r.desc}</p>
                    <button
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0EA5E9] hover:text-[#0369A1] transition-colors font-outfit"
                      aria-label={`Download ${r.title} guide`}
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prepare for visit */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* What to bring */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className="badge">Before You Visit</motion.span>
              <motion.h2 variants={fadeInUp} className="section-title mt-4 mb-8">
                Preparing for Your{' '}
                <span className="gradient-text">Consultation</span>
              </motion.h2>

              {[
                {
                  title: 'Medical Records',
                  items: ['Previous consultation reports', 'Blood test results', 'Brain/spine MRI or CT scans', 'Discharge summaries'],
                },
                {
                  title: 'Medication List',
                  items: ['Current medications with doses', 'Supplements and vitamins', 'Any allergies', 'Previous medications tried'],
                },
                {
                  title: 'Symptom History',
                  items: ['When symptoms started', 'How symptoms have progressed', 'What makes them better/worse', 'Family history of neurological conditions'],
                },
              ].map((block, i) => (
                <motion.div key={block.title} variants={fadeInUp} className="card-base p-5 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#0EA5E9] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 font-outfit">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-neutral-900 text-sm font-outfit">{block.title}</h3>
                  </div>
                  <ul className="space-y-2 pl-11">
                    {block.items.map((item) => (
                      <li key={item} className="text-sm text-neutral-600 flex items-start gap-2 font-outfit">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0EA5E9] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            {/* FAQs — with active state indicator */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className="badge">FAQs</motion.span>
              <motion.h2 variants={fadeInUp} className="section-title mt-4 mb-8">
                Frequently Asked{' '}
                <span className="gradient-text">Questions</span>
              </motion.h2>

              <div className="space-y-3">
                {FAQS.map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className={`card-base overflow-hidden transition-all duration-200 ${
                      openFaq === i ? 'ring-1 ring-[#0EA5E9]/30' : ''
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className={`w-full flex items-start justify-between gap-4 p-5 text-left transition-colors ${
                        openFaq === i ? 'bg-[#F0F9FF]' : 'hover:bg-neutral-50'
                      }`}
                      aria-expanded={openFaq === i}
                    >
                      <div className="flex items-start gap-3">
                        {/* Active indicator */}
                        <span
                          className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full transition-colors ${
                            openFaq === i ? 'bg-[#0EA5E9]' : 'bg-neutral-300'
                          }`}
                        />
                        <span className={`font-semibold text-sm leading-snug font-outfit ${openFaq === i ? 'text-[#0369A1]' : 'text-neutral-900'}`}>
                          {faq.q}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: openFaq === i ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 mt-0.5"
                      >
                        <ChevronDown className={`w-5 h-5 transition-colors ${openFaq === i ? 'text-[#0EA5E9]' : 'text-neutral-400'}`} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed border-t border-[#BAE6FD]/40 pt-4 pl-[3.25rem] font-outfit">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick contact strip — left-aligned CTA */}
      <section className="py-12 bg-[#F0F9FF] border-y border-[#BAE6FD]/50">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-neutral-900 font-semibold text-lg font-outfit">Have more questions?</p>
              <p className="text-neutral-500 text-sm font-outfit mt-0.5">Our team is happy to help with any concerns.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href={`tel:${SITE_CONFIG.phone[0]}`}
                className="btn-primary"
                aria-label={`Call Dr. Manasi Das at +91 ${SITE_CONFIG.phone[0]}`}
              >
                <Phone className="w-4 h-4" />
                Call +91 {SITE_CONFIG.phone[0]}
              </a>
              <Link href="/contact" className="btn-secondary">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
