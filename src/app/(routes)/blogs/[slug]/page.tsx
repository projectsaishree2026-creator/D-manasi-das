import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Tag, Phone } from 'lucide-react'
import PageHeader from '@/components/common/PageHeader'
import CTA from '@/components/sections/home/CTA'
import { BLOGS, SITE_CONFIG } from '@/lib/constants'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = BLOGS.find((b) => b.slug === params.slug)
  if (!blog) return { title: 'Article Not Found' }
  return {
    title: `${blog.title} — Dr. Manasi Das`,
    description: blog.excerpt,
  }
}

export default function BlogDetailPage({ params }: Props) {
  const blog = BLOGS.find((b) => b.slug === params.slug)
  if (!blog) notFound()
  const others = BLOGS.filter((b) => b.slug !== params.slug).slice(0, 2)

  return (
    <>
      <div style={{ marginTop: 'var(--navbar-height)' }} className="relative page-bg">
        <div className="page-bg-overlay py-16 md:py-24">
          <div className="container-custom">
            <span className="badge bg-white/20 text-white border-white/30 mb-5">{blog.category}</span>
            <h1 className="heading-lg text-white max-w-3xl leading-tight mb-5 font-outfit">
              {blog.title}
            </h1>
            <div className="flex items-center gap-6 text-[#BAE6FD] text-sm font-outfit">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{blog.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              <Link href="/blogs" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-[#0EA5E9] mb-8 transition-colors font-outfit">
                <ArrowLeft className="w-4 h-4" /> Back to Blogs
              </Link>

              <div className="relative h-72 rounded-2xl overflow-hidden mb-8 bg-neutral-100">
                <Image src={blog.image} alt={blog.title} fill className="object-cover" sizes="100vw" />
              </div>

              <div className="prose prose-lg prose-neutral max-w-none">
                <p className="text-neutral-600 leading-relaxed text-base">{blog.excerpt}</p>
                <p className="text-neutral-600 leading-relaxed text-base mt-4">{blog.content}</p>
                <p className="text-neutral-600 leading-relaxed text-base mt-4">
                  For personalised advice about your neurological health, consult Dr. Manasi Das at
                  Sai Shree Polyclinic, Cuttack. Early diagnosis and prompt treatment significantly
                  improve outcomes for most neurological conditions.
                </p>
              </div>

              {/* Author card */}
              <div className="mt-10 p-6 bg-sky-50 rounded-2xl border border-sky-100 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white font-outfit">M</span>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 text-sm font-outfit">Dr. Manasi Das</p>
                  <p className="text-[#0EA5E9] text-xs font-medium mb-2 font-outfit">MD (Medicine) · DM (Neurology)</p>
                  <p className="text-neutral-500 text-xs font-outfit">Asst. Professor at IMS &amp; SUM Hospital · Consulting Neurologist, Sai Shree Polyclinic, Cuttack</p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-gradient-to-br from-[#0369A1] to-[#0EA5E9] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-2 font-outfit">Have Questions?</h3>
                <p className="text-sky-100 text-sm mb-4">Consult Dr. Manasi Das for expert guidance.</p>
                <a href={`tel:${SITE_CONFIG.phone[0]}`} className="flex items-center justify-center gap-2 w-full py-3 bg-white text-sky-700 rounded-full font-semibold text-sm">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>

              {others.length > 0 && (
                <div className="card-base p-5">
                  <h4 className="font-bold text-neutral-900 text-sm mb-4">More Articles</h4>
                  <div className="space-y-4">
                    {others.map((b) => (
                      <Link key={b.slug} href={`/blogs/${b.slug}`} className="flex gap-3 group">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-100">
                          <Image src={b.image} alt={b.title} fill className="object-cover" sizes="64px" />
                        </div>
                        <div>
                          <p className="text-xs text-sky-600 font-medium mb-1">{b.category}</p>
                          <p className="text-sm text-neutral-700 font-medium group-hover:text-sky-700 leading-snug">{b.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
