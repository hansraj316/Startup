
export interface Product {
  id: string
  slug: string
  name: string
  description: string
  features: string[]
  pricing?: string
  image?: string
  category: 'ai-platform' | 'ml-tools' | 'automation' | 'analytics'
}

export interface Service {
  id: string
  name: string
  description: string
  features: string[]
  process: string[]
  pricing?: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  linkedin?: string
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  message: string
  service?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image?: string
}
