import Link from 'next/link'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-hero-gradient" style={{ paddingTop: 'var(--navbar-height)' }}>
      <div className="text-center max-w-lg px-6">
        <div className="text-8xl font-extrabold gradient-text mb-4 font-outfit">404</div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-3 font-outfit">
          Page Not Found
        </h1>
        <p className="text-neutral-500 text-base mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <Link href="/services" className="btn-secondary">
            <Search className="w-4 h-4" /> View Services
          </Link>
        </div>
      </div>
    </div>
  )
}
