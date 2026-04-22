type ContactEvent =
  | 'contact_form_view'
  | 'contact_form_submit'
  | 'contact_form_success'
  | 'contact_form_error'

export function trackContactEvent(event: ContactEvent, metadata?: Record<string, unknown>) {
  if (process.env.NEXT_PUBLIC_CONTACT_ANALYTICS_ENABLED !== 'true') return

  // Placeholder for Segment/GA/Vercel event wiring.
  console.info('[contact-event]', event, metadata ?? {})
}

