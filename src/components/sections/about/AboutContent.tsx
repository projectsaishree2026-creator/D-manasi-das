'use client'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Stethoscope, Users, CheckCircle2, Building2, BookOpen, Target, Heart } from 'lucide-react'
import { DOCTOR, STATS } from '@/lib/constants'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, scaleIn } from '@/animations'

const credentials = [
  { icon: GraduationCap, label: 'MD (Medicine)', sub: 'Post-Graduate Medical Degree', color: 'bg-[#EDE9FE] text-purple-600' },
  { icon: GraduationCap, label: 'DM (Neurology)', sub: 'Super-Speciality Neurology Degree', color: 'bg-[#E0F2FE] text-[#0EA5E9]' },
  { icon: Building2, label: 'IMS & SUM Hospital', sub: 'Asst. Professor, Dept. of Neurology', color: 'bg-[#DBEAFE] text-blue-600' },
  { icon: Stethoscope, label: 'Sai Shree Polyclinic', sub: 'Senior Consulting Neurologist, Cuttack', color: 'bg-[#E0F2FE] text-[#0369A1]' },
]

const timeline = [
  { year: 'MBBS', title: 'Medical Graduation', desc: 'Completed MBBS with distinction, building a strong foundation in clinical medicine.' },
  { year: 'MD', title: 'MD in Medicine', desc: 'Advanced post-graduate training in internal medicine with specialised clinical rotations.' },
  { year: 'DM', title: 'DM in Neurology', desc: 'Super-speciality neurology training covering stroke, epilepsy, movement disorders, and neuro-immunology.' },
  { year: 'Now', title: 'Asst. Professor & Clinician', desc: 'Serving patients at IMS & SUM Hospital, Bhubaneswar and Sai Shree Polyclinic, Cuttack.' },
]

const values = [
  { icon: Heart, title: 'Patient-First Care', desc: 'Every decision is driven by patient welfare and best clinical outcomes.' },
  { icon: BookOpen, title: 'Evidence-Based Medicine', desc: 'Treatment grounded in the latest research and clinical guidelines.' },
  { icon: Target, title: 'Precision Diagnosis', desc: 'Thorough investigation to identify the exact cause before treatment.' },
  { icon: Users, title: 'Family Involvement', desc: 'Empowering families with knowledge to support long-term patient care.' },
]

export default function AboutContent() {
  return (
    <>
      {/* Bio Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">

            {/* Left — story + achievements */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span variants={fadeInUp} className="badge">Her Story</motion.span>
              <motion.h2 variants={fadeInUp} className="section-title mt-4 mb-6">
                Committed to Neurological{' '}
                <span className="gradient-text">Excellence</span>
              </motion.h2>

              {DOCTOR.bio.split('\n\n').map((para, i) => (
                <motion.p key={i} variants={fadeInUp} className="text-neutral-600 leading-relaxed mb-4 text-base font-outfit">
                  {para}
                </motion.p>
              ))}

              {/* Achievements */}
              <motion.div variants={staggerContainer} className="mt-8 space-y-3">
                {DOCTOR.achievements.map((item) => (
                  <motion.div key={item} variants={fadeInUp} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-[#E0F2FE] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#0EA5E9] transition-colors duration-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0EA5E9] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-neutral-700 text-sm font-outfit">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right — Stats + Credentials */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {/* Stats — asymmetric 2-col */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    variants={scaleIn}
                    className={`card-base p-6 ${i === 0 ? 'col-span-2 sm:col-span-1' : ''}`}
                  >
                    <p className="text-3xl font-extrabold gradient-text mb-1 font-outfit leading-none">{stat.value}</p>
                    <p className="text-neutral-500 text-sm font-outfit">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Credentials */}
              {credentials.map((c) => (
                <motion.div
                  key={c.label}
                  variants={fadeInUp}
                  className="card-base p-5 flex items-center gap-4 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.color} flex-shrink-0`}>
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 text-sm font-outfit">{c.label}</p>
                    <p className="text-neutral-500 text-xs mt-0.5 font-outfit">{c.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline — left-aligned header */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.span variants={fadeInUp} className="badge">Career Journey</motion.span>
            <motion.h2 variants={fadeInUp} className="section-title mt-4 max-w-lg">
              The Path to <span className="gradient-text">Expertise</span>
            </motion.h2>
          </motion.div>

          <div className="max-w-3xl">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#BAE6FD] via-[#0EA5E9] to-[#BAE6FD]" />

              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                  className={`relative flex gap-6 md:gap-0 mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 bg-[#0EA5E9] rounded-full border-4 border-white shadow-md flex items-center justify-center z-10 flex-shrink-0">
                    <span className="text-white text-xs font-bold font-outfit">✓</span>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card-base p-5">
                      <span className="badge mb-3">{item.year}</span>
                      <h3 className="font-bold text-neutral-900 mb-1 font-outfit">{item.title}</h3>
                      <p className="text-neutral-500 text-sm font-outfit">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values — asymmetric 2×2 layout */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.span variants={fadeInUp} className="badge">Core Values</motion.span>
            <motion.h2 variants={fadeInUp} className="section-title mt-4 max-w-lg">
              How We Approach <span className="gradient-text">Patient Care</span>
            </motion.h2>
          </motion.div>

          {/* 2×2 grid — left pair full height, right pair stacked */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr] gap-5"
          >
            {/* First value — featured, taller */}
            <motion.div variants={scaleIn} className="row-span-2">
              <div className="card-base p-8 h-full hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-[#E0F2FE] rounded-2xl flex items-center justify-center mb-6">
                    {(() => { const Icon = values[0].icon; return <Icon className="w-8 h-8 text-[#0EA5E9]" /> })()}
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-3 text-xl font-outfit">{values[0].title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed font-outfit">{values[0].desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <p className="text-[#0369A1] text-xs uppercase tracking-widest font-semibold font-outfit">Our Commitment</p>
                </div>
              </div>
            </motion.div>

            {/* Remaining 3 values — stacked */}
            {values.slice(1).map((v) => (
              <motion.div key={v.title} variants={scaleIn}>
                <div className="card-base p-6 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E0F2FE] rounded-xl flex items-center justify-center flex-shrink-0">
                      <v.icon className="w-6 h-6 text-[#0EA5E9]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 mb-1.5 text-sm font-outfit">{v.title}</h3>
                      <p className="text-neutral-500 text-sm leading-relaxed font-outfit">{v.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
