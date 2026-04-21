'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, ArrowRight, Calendar, Tag } from 'lucide-react'
import { BLOGS } from '@/lib/constants'
import { fadeInUp, staggerContainer, scaleIn } from '@/animations'

export default function BlogsContent() {
  const [featured, second, ...rest] = BLOGS

  return (
    <section className="section-padding bg-white">
      <div className="container-custom space-y-8">

        {/* Featured post — large editorial split */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Link
            href={`/blogs/${featured.slug}`}
            className="group block"
            aria-label={`Read article: ${featured.title}`}
          >
            <div className="card-base overflow-hidden grid lg:grid-cols-[1.1fr_0.9fr] hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-72 lg:h-auto bg-neutral-100 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 55vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
                {/* Featured label overlay */}
                <div className="absolute top-5 left-5">
                  <span className="badge bg-white/90 backdrop-blur-sm text-[#0369A1] border-white/50">
                    Featured Article
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="badge mb-4">{featured.category}</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 group-hover:text-[#0369A1] transition-colors font-outfit leading-tight tracking-tight">
                  {featured.title}
                </h2>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-outfit">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-neutral-400 mb-6 font-outfit">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0EA5E9] group-hover:gap-3 transition-all font-outfit">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary + rest — asymmetric layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-[1.3fr_1fr] gap-6"
        >
          {/* Second article — slightly more prominent */}
          {second && (
            <motion.div variants={scaleIn}>
              <Link
                href={`/blogs/${second.slug}`}
                className="group block h-full"
                aria-label={`Read article: ${second.title}`}
              >
                <div className="card-base overflow-hidden h-full hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-56 bg-neutral-100 overflow-hidden">
                    <Image
                      src={second.image}
                      alt={second.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="badge mb-3">{second.category}</span>
                    <h3 className="font-bold text-neutral-900 mb-3 group-hover:text-[#0369A1] transition-colors text-lg leading-snug font-outfit tracking-tight">
                      {second.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-4 font-outfit">{second.excerpt.slice(0, 120)}...</p>
                    <div className="flex items-center justify-between text-xs text-neutral-400 pt-4 border-t border-neutral-100 font-outfit">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{second.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" />{second.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Remaining articles — stacked on right */}
          <div className="flex flex-col gap-4">
            {rest.slice(0, 2).map((blog) => (
              <motion.div key={blog.slug} variants={scaleIn}>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group flex gap-4 card-base p-4 hover:-translate-y-0.5 transition-all duration-200"
                  aria-label={`Read article: ${blog.title}`}
                >
                  <div className="relative w-24 h-20 bg-neutral-100 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="badge mb-2 text-[10px]">{blog.category}</span>
                    <h3 className="font-bold text-neutral-900 text-sm group-hover:text-[#0369A1] transition-colors font-outfit leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-neutral-400 mt-2 font-outfit">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{blog.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
