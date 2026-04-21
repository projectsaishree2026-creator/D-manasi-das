import Link from 'next/link'
import { Phone, MapPin, Mail, Brain, Instagram, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS, SERVICES } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Top CTA strip — split layout */}
      <div className="bg-gradient-to-r from-[#0369A1] to-[#0EA5E9]">
        <div className="container-custom py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white font-outfit">
              Ready to consult Dr. Manasi Das?
            </h3>
            <p className="text-[#BAE6FD] text-sm mt-1 font-outfit">Expert neurological care in Cuttack. Same-day appointments available.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phone[0]}`}
              className="btn-outline-white"
              aria-label={`Call Dr. Manasi Das at +91 ${SITE_CONFIG.phone[0]}`}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0369A1] font-semibold rounded-full hover:bg-[#E0F2FE] transition-all duration-200 text-sm font-outfit"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-white text-sm font-outfit">Dr. Manasi Das</p>
                <p className="text-[#0EA5E9] text-xs font-medium font-outfit">MD · DM (Neurology)</p>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-outfit">
              Expert neurological care at Sai Shree Polyclinic, Cuttack. Compassionate, evidence-based treatment for all neurological conditions.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: Facebook, href: SITE_CONFIG.social.facebook, label: 'Facebook' },
                { icon: Instagram, href: SITE_CONFIG.social.instagram, label: 'Instagram' },
                { icon: Twitter, href: SITE_CONFIG.social.twitter, label: 'Twitter' },
                { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Follow Dr. Manasi Das on ${label}`}
                  className="w-9 h-9 rounded-full bg-neutral-800 hover:bg-[#0EA5E9] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4 text-neutral-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider font-outfit">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-[#0EA5E9] text-sm transition-colors flex items-center gap-1.5 group font-outfit">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider font-outfit">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-neutral-400 hover:text-[#0EA5E9] text-sm transition-colors flex items-center gap-1.5 group font-outfit">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider font-outfit">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium font-outfit">{SITE_CONFIG.clinic.name}</p>
                  <p className="text-neutral-400 text-xs mt-0.5 font-outfit">{SITE_CONFIG.clinic.address}</p>
                </div>
              </li>
              {SITE_CONFIG.phone.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p}`}
                    className="flex items-center gap-3 text-neutral-400 hover:text-[#0EA5E9] transition-colors text-sm font-outfit"
                    aria-label={`Call clinic at +91 ${p}`}
                  >
                    <Phone className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                    +91 {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-neutral-400 hover:text-[#0EA5E9] transition-colors text-sm font-outfit"
                  aria-label={`Email Dr. Manasi Das at ${SITE_CONFIG.email}`}
                >
                  <Mail className="w-4 h-4 text-[#0EA5E9] flex-shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-neutral-500 text-xs font-outfit">
            © {year} Dr. Manasi Das. All rights reserved.
          </p>
          <p className="text-neutral-600 text-xs font-outfit">
            Asst. Professor, IMS &amp; SUM Hospital · Sai Shree Polyclinic, Cuttack
          </p>
        </div>
      </div>
    </footer>
  )
}
