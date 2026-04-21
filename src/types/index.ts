export interface Service {
  slug: string
  title: string
  icon: string
  color: string
  shortDesc: string
  description: string
  symptoms: string[]
  benefits: string[]
  category: string
}

export interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  condition: string
  initials: string
}

export interface Blog {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  image: string
  content: string
}

export interface NavLink {
  label: string
  href: string
}

export interface ContactFormData {
  name: string
  phone: string
  email: string
  condition: string
  message: string
}

export interface FAQ {
  q: string
  a: string
}
