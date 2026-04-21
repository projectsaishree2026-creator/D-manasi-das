'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import type { ContactFormData } from '@/types'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    const text = `Hello Dr. Manasi Das,

I would like to book an appointment.

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email || "Not provided"}
🩺 Concern: ${data.condition || "Not specified"}
📝 Message: ${data.message || "N/A"}
`;
    const encodedText = encodeURIComponent(text);
    const whatsappURL = `https://wa.me/917008512773?text=${encodedText}`;
    window.open(whatsappURL, "_blank");
    reset();
  }

  if (status === 'success') {
    return (
      <div className="card-base p-10 text-center">
        <div className="w-16 h-16 bg-[#E0F2FE] rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-[#0EA5E9]" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2 font-outfit">
          Message Sent!
        </h3>
        <p className="text-neutral-500 text-sm font-outfit">
          Thank you for reaching out. Dr. Das&apos;s team will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="card-base p-8">
      <h3 className="text-xl font-bold text-neutral-900 mb-1 font-outfit">
        Send a Message
      </h3>
      <p className="text-neutral-500 text-sm mb-6 font-outfit">Fill in the form and we&apos;ll get back to you shortly.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5 font-outfit">Full Name *</label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="input-field"
            placeholder="Your full name"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-outfit">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5 font-outfit">Phone Number *</label>
          <input
            {...register('phone', {
              required: 'Phone number is required',
              pattern: { value: /^[6-9]\d{9}$/, message: 'Enter a valid 10-digit phone number' },
            })}
            className="input-field"
            placeholder="10-digit mobile number"
            type="tel"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1 font-outfit">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5 font-outfit">Email Address</label>
          <input
            {...register('email', {
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
            })}
            className="input-field"
            placeholder="your@email.com"
            type="email"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-outfit">{errors.email.message}</p>}
        </div>

        {/* Condition */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5 font-outfit">Condition / Concern</label>
          <select {...register('condition')} className="input-field appearance-none">
            <option value="">Select a condition (optional)</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="General Consultation">General Consultation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5 font-outfit">Message</label>
          <textarea
            {...register('message')}
            rows={4}
            className="input-field resize-none"
            placeholder="Briefly describe your symptoms or query..."
          />
        </div>

        <div className="space-y-3">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
          
          <p className="text-center text-xs text-neutral-500 font-outfit">
            You'll be redirected to WhatsApp to confirm your appointment
          </p>
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-xl font-outfit">
            <AlertCircle className="w-4 h-4" />
            Something went wrong. Please try again or call us directly.
          </div>
        )}
      </form>
    </div>
  )
}
