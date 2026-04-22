import { NextResponse } from 'next/server'

type ContactPayload = {
  name: string
  email: string
  company?: string
  phone?: string
  service?: string
  message: string
  website?: string
}

const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email)

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    if (body.website) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      )
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL

    if (!webhookUrl) {
      console.warn('CONTACT_WEBHOOK_URL is not configured. Contact lead not forwarded.')
      return NextResponse.json(
        {
          success: false,
          error: 'Contact service is not configured yet. Please email hello@figworks.ai directly.',
        },
        { status: 503 }
      )
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)

    const payload = {
      ...body,
      source: 'figworks-ai-contact-form',
      submittedAt: new Date().toISOString(),
    }

    const forwardResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
      cache: 'no-store',
    })

    clearTimeout(timeout)

    if (!forwardResponse.ok) {
      return NextResponse.json(
        { success: false, error: 'Unable to submit inquiry right now' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Contact submission failed:', error)
    return NextResponse.json(
      { success: false, error: 'Unexpected error while submitting inquiry' },
      { status: 500 }
    )
  }
}
