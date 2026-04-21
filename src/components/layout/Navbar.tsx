'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Brain, ChevronRight } from 'lucide-react'
import { useScroll } from '@/hooks/useScroll'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'
import { cn } from '@/utils/helpers'

export default function Navbar() {
  const { scrolled } = useScroll(60)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  // Strict active state logic to prevent multiple highlights
  const isActiveLink = (path: string) => {
    if (path === '/') return pathname === '/'
    if (path === '/services' || path === '/blogs') {
      return pathname === path || pathname.startsWith(`${path}/`)
    }
    return pathname === path
  }

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  // Close mobile menu on resize to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.06)] border-b border-neutral-100/80'
            : 'bg-transparent'
        )}
        style={{ height: 'var(--navbar-height)' }}
      >
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-[#0EA5E9] to-[#0369A1] rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <p className={cn('font-bold text-sm leading-none transition-colors font-outfit', scrolled ? 'text-neutral-900' : 'text-neutral-900')}>
                Dr. Manasi Das
              </p>
              <p className="text-xs text-[#0EA5E9] font-medium leading-none mt-0.5 font-outfit">MD · DM (Neurology)</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const active = isActiveLink(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-all duration-200 font-outfit rounded-lg',
                    active
                      ? 'text-[#0369A1]'
                      : 'text-neutral-600 hover:text-[#0369A1] hover:bg-[#E0F2FE]/50'
                  )}
                >
                  {link.label}
                  {/* Subtle active indicator */}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#0EA5E9] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.phone[0]}`}
              aria-label={`Call Dr. Manasi Das at +91 ${SITE_CONFIG.phone[0]}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0EA5E9] text-white text-sm font-semibold rounded-full hover:bg-[#0369A1] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 font-outfit"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-x-0 top-[var(--navbar-height)] z-40 bg-white/98 backdrop-blur-2xl border-b border-neutral-100 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)] lg:hidden"
          >
            <nav className="container-custom py-5 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => {
                const active = isActiveLink(link.href)
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all font-outfit border-l-2',
                        active
                          ? 'bg-[#E0F2FE]/80 text-[#0369A1] border-[#0EA5E9]'
                          : 'border-transparent text-neutral-700 hover:bg-neutral-50'
                      )}
                    >
                      {link.label}
                      <ChevronRight className={cn('w-4 h-4 transition-colors', active ? 'text-[#0EA5E9]' : 'opacity-30')} />
                    </Link>
                  </motion.div>
                )
              })}

              <div className="pt-4 flex gap-3">
                <a
                  href={`tel:${SITE_CONFIG.phone[0]}`}
                  className="flex-1 btn-primary justify-center"
                  onClick={() => setMenuOpen(false)}
                  aria-label={`Call Dr. Manasi Das at +91 ${SITE_CONFIG.phone[0]}`}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <Link
                  href="/contact"
                  className="flex-1 btn-secondary justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
