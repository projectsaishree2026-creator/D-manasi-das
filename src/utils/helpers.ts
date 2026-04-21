import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{5})(\d{5})/, '$1 $2')
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export function getServiceColor(color: string) {
  const map: Record<string, { bg: string; text: string; border: string; light: string }> = {
    red:    { bg: 'bg-red-50',    text: 'text-red-600',    border: 'border-red-100',    light: 'bg-red-100'    },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', light: 'bg-purple-100' },
    yellow: { bg: 'bg-amber-50',  text: 'text-amber-600',  border: 'border-amber-100',  light: 'bg-amber-100'  },
    blue:   { bg: 'bg-blue-50',   text: 'text-blue-600',   border: 'border-blue-100',   light: 'bg-blue-100'   },
    green:  { bg: 'bg-sky-50',  text: 'text-sky-600',  border: 'border-sky-100',  light: 'bg-sky-100'  },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', light: 'bg-orange-100' },
    teal:   { bg: 'bg-sky-50',   text: 'text-sky-600',   border: 'border-sky-100',   light: 'bg-sky-100'   },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', light: 'bg-indigo-100' },
  }
  return map[color] || map.teal
}
