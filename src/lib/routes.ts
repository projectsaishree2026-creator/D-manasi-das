export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  service: (slug: string) => `/services/${slug}`,
  blogs: '/blogs',
  blog: (slug: string) => `/blogs/${slug}`,
  patientCorner: '/patient-corner',
  contact: '/contact',
} as const
