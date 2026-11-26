import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Clock, Phone } from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import { BLOGS, SERVICES, SITE_CONFIG } from '@/lib/constants'
import { BLOG_ARTICLES } from '@/lib/blogContent'
import { pageMetadata } from '@/seo/metadata'
import { getBlogPostingStructuredData, getFAQStructuredData, jsonLd } from '@/seo/structuredData'

/** Trim to a search-snippet length at a word boundary. */
function clip(text: string, max = 158) {
  if (text.length <= max) return text
  return text.slice(0, text.lastIndexOf(' ', max - 1)).replace(/[,;:—-]\s*$/, '') + '…'
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = BLOGS.find((b) => b.slug === params.slug)
  if (!blog) return { title: 'Article Not Found' }
  return pageMetadata({
    title: blog.title,
    // Titles that already name the doctor skip the " | Dr. Manasi Das" suffix.
    absolute: blog.title.includes('Manasi Das'),
    description: clip(blog.excerpt),
    path: `/blogs/${blog.slug}`,
    ogType: 'article',
  })
}

export default function BlogDetailPage({ params }: Props) {
  const blog = BLOGS.find((b) => b.slug === params.slug)
  if (!blog) notFound()
  const article = BLOG_ARTICLES[blog.slug]
  // Prefer related reading in the same category, then fill with the rest.
  const others = [
    ...BLOGS.filter((b) => b.slug !== blog.slug && b.category === blog.category),
    ...BLOGS.filter((b) => b.slug !== blog.slug && b.category !== blog.category),
  ].slice(0, 3)
  const related = (article?.relatedServices ?? [])
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(getBlogPostingStructuredData(blog)) }}
      />
      {article && article.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(getFAQStructuredData(article.faqs)) }}
        />
      )}
      <div style={{ marginTop: 'var(--navbar-height)' }} className="relative page-bg">
        <div className="page-bg-overlay py-16 md:py-24">
          <div className="container-custom">
            <span className="badge bg-white/20 text-white border-white/30 mb-5">{blog.category}</span>
            <h1 className="heading-lg text-white max-w-3xl leading-tight mb-5 font-outfit">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#BAE6FD] text-sm font-outfit">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{blog.date}</span>
              {blog.updated && <span>Updated {blog.updated}</span>}
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
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  priority
                />
              </div>

              <div className="font-outfit">
                <p className="text-neutral-700 leading-relaxed text-lg mb-8">{article?.intro ?? blog.excerpt}</p>

                {article?.sections.map((section) => (
                  <section key={section.heading} className="mb-8">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-3 tracking-tight">{section.heading}</h2>
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="text-neutral-600 leading-relaxed text-base mb-3">{p}</p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-2 space-y-2">
                        {section.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5 text-neutral-600 leading-relaxed text-base">
                            <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}

                {article && article.faqs.length > 0 && (
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-4 tracking-tight">Frequently asked questions</h2>
                    <div className="space-y-4">
                      {article.faqs.map((f) => (
                        <div key={f.q} className="rounded-xl border border-neutral-200 p-5">
                          <h3 className="font-semibold text-neutral-900 mb-1.5">{f.q}</h3>
                          <p className="text-neutral-600 text-sm leading-relaxed">{f.a}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {related.length > 0 && (
                  <section className="mb-8 rounded-2xl bg-sky-50 border border-sky-100 p-6">
                    <h2 className="text-lg font-bold text-neutral-900 mb-3">Related treatment</h2>
                    <div className="flex flex-wrap gap-3">
                      {related.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-white border border-sky-200 px-4 py-2 text-sm font-medium text-sky-700 hover:bg-sky-100 transition-colors"
                        >
                          {s.title} care in Cuttack <ArrowRight className="w-4 h-4" />
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                <p className="text-xs text-neutral-400 leading-relaxed border-t border-neutral-100 pt-4">
                  This article is general health information and is not a substitute for a medical
                  consultation. In an emergency such as a suspected stroke or a seizure lasting more than
                  5 minutes, call 108 and go to the nearest hospital emergency department.
                </p>
              </div>

              {/* Author card */}
              <div className="mt-10 p-6 bg-sky-50 rounded-2xl border border-sky-100 flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white font-outfit">M</span>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 text-sm font-outfit">
                    <Link href="/about" className="hover:text-sky-700">Dr. Manasi Das</Link>
                  </p>
                  <p className="text-[#0EA5E9] text-xs font-medium mb-2 font-outfit">MD (Medicine) · DM (Neurology)</p>
                  <p className="text-neutral-500 text-xs font-outfit">Asst. Professor at IMS &amp; SUM Hospital · Consulting Neurologist, Sai Shree Polyclinic, Cuttack</p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-gradient-to-br from-[#0369A1] to-[#0EA5E9] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-2 font-outfit">Have Questions?</h3>
                <p className="text-sky-100 text-sm mb-4">
                  Book a consultation with Dr. Manasi Das at Sai Shree Polyclinic, Cuttack (Mon–Sat, 9 AM–7 PM).
                </p>
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
