'use client'
import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '919692579904'
const WHATSAPP_MESSAGE =
  'Hello%20Dr.%20Manasi%20Das%2C%20I%20would%20like%20to%20book%20a%20neurology%20appointment.'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(t)
  }, [])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dr. Manasi Das on WhatsApp to book an appointment"
      className={[
        'fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl',
        'transition-all duration-500 ease-out lg:bottom-8 lg:right-6',
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none',
      ].join(' ')}
      style={{ backgroundColor: '#25D366' }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ backgroundColor: '#25D366', opacity: 0.35 }}
      />
      <MessageCircle className="w-7 h-7 text-white relative z-10" fill="white" />
    </a>
  )
}
