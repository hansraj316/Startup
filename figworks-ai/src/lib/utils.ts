
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function validateEmail(email: string): boolean {
  // More robust email validation regex that follows RFC 5322 standards
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  
  // Additional checks for edge cases
  if (!email || email.length > 254) {
    return false
  }
  
  // Check for consecutive dots
  if (email.includes('..')) {
    return false
  }
  
  // Check if starts or ends with dot
  if (email.startsWith('.') || email.endsWith('.')) {
    return false
  }
  
  return emailRegex.test(email.trim().toLowerCase())
}

export function sanitizeInput(input: string): string {
  // Remove potentially dangerous characters and HTML tags
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets to prevent basic HTML injection
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
    .replace(/&lt;script/gi, '') // Remove encoded script tags
    .replace(/&gt;/gi, '') // Remove encoded greater than
    .slice(0, 1000) // Limit length to prevent DoS
}

export function validatePhoneNumber(phone: string): boolean {
  // Allow international phone formats
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
  const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '')
  return phoneRegex.test(cleanPhone) && cleanPhone.length >= 7 && cleanPhone.length <= 15
}
