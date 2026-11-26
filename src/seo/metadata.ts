import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

/** The single canonical origin. Vercel serves www (apex redirects to it). */
export const SITE_URL = SITE_CONFIG.url

export const OG_IMAGE = {
  url: '/images/doctor/Dr-image-20.webp',
  width: 2048,
  height: 2048,
  alt: 'Dr. Manasi Das — Neurologist in Cuttack, Odisha',
}

/** Absolute URL for a site path ('/about' -> 'https://www.drmanasidas.com/about'). */
export function absoluteUrl(path = '/') {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`
}

interface PageMetaInput {
  /** Page title. The root template appends " | Dr. Manasi Das" unless `absolute` is set. */
  title: string
  description: string
  /** Site path, e.g. '/about'. Used for the canonical and og:url. */
  path: string
  /** Use the title exactly as given (no brand suffix). */
  absolute?: boolean
  ogTitle?: string
  ogDescription?: string
  ogType?: 'website' | 'article'
  keywords?: string[]
}

/**
 * Per-page metadata with a self-referencing canonical and a full OpenGraph/Twitter
 * block. Next.js replaces (not merges) `openGraph` per page, so the image must be
 * repeated here or pages lose their share preview.
 */
export function pageMetadata({
  title,
  description,
  path,
  absolute,
  ogTitle,
  ogDescription,
  ogType = 'website',
  keywords,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path)
  const shareTitle = ogTitle ?? (absolute ? title : `${title} | ${SITE_CONFIG.name}`)
  const shareDescription = ogDescription ?? description
  return {
    title: absolute ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title: shareTitle,
      description: shareDescription,
      url,
      siteName: 'Dr. Manasi Das — Neurologist',
      type: ogType,
      locale: 'en_IN',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description: shareDescription,
      images: [OG_IMAGE.url],
    },
  }
}
