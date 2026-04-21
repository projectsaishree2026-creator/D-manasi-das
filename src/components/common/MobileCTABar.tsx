'use client'
import Link from 'next/link'
import { Phone, MessageCircle, Calendar } from 'lucide-react'

const PHONE = '9692579904'
const WHATSAPP_URL =
  'https://wa.me/919692579904?text=Hello%20Dr.%20Manasi%20Das%2C%20I%20would%20like%20to%20book%20a%20neurology%20appointment.'

export default function MobileCTABar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 bg-white border-t border-neutral-200 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <a
          href={`tel:${PHONE}`}
          aria-label={`Call Dr. Manasi Das at +91 ${PHONE}`}
          className="flex flex-col items-center justify-center py-3 gap-0.5 text-[#0369A1] hover:bg-sky-50 active:bg-sky-100 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-semibold font-outfit tracking-wide">Call Now</span>
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Dr. Manasi Das on WhatsApp"
          className="flex flex-col items-center justify-center py-3 gap-0.5 transition-colors"
          style={{ color: '#128C7E' }}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-semibold font-outfit tracking-wide">WhatsApp</span>
        </a>

        <Link
          href="/contact"
          aria-label="Book an appointment with Dr. Manasi Das"
          className="flex flex-col items-center justify-center py-3 gap-0.5 bg-[#0EA5E9] text-white hover:bg-[#0284C7] active:bg-[#0369A1] transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] font-semibold font-outfit tracking-wide">Book Now</span>
        </Link>
      </div>
    </div>
  )
}
