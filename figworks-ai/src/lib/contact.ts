export interface ContactPayload {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  message: string
  website?: string
}

export interface ValidationResult {
  ok: boolean
  errors: string[]
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactPayload(payload: ContactPayload): ValidationResult {
  const errors: string[] = []

  if (!payload.name?.trim()) errors.push('Name is required')
  if (!payload.email?.trim()) {
    errors.push('Email is required')
  } else if (!EMAIL_REGEX.test(payload.email.trim())) {
    errors.push('Email is invalid')
  }

  const message = payload.message?.trim() || ''
  if (!message) {
    errors.push('Message is required')
  } else if (message.length < 10) {
    errors.push('Message must be at least 10 characters')
  } else if (message.length > 5000) {
    errors.push('Message is too long')
  }

  if (payload.website?.trim()) errors.push('Spam detected')

  return { ok: errors.length === 0, errors }
}

