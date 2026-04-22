import { NextRequest, NextResponse } from 'next/server'
import { validateContactPayload, type ContactPayload } from '@/lib/contact'
import { persistLead } from '@/lib/lead'

const rateLimitWindowMs = 10 * 60 * 1000
const maxRequestsPerWindow = 5
const ipRequestLog = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const existing = ipRequestLog.get(ip) ?? []
  const recent = existing.filter((ts) => now - ts < rateLimitWindowMs)

  if (recent.length >= maxRequestsPerWindow) {
    ipRequestLog.set(ip, recent)
    return true
  }

  recent.push(now)
  ipRequestLog.set(ip, recent)
  return false
}

export async function POST(req: NextRequest) {
  let payload: ContactPayload

  try {
    payload = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests, please try again later' }, { status: 429 })
  }

  const validation = validateContactPayload(payload)
  if (!validation.ok) {
    return NextResponse.json({ error: validation.errors.join(', ') }, { status: 400 })
  }

  const leadResult = await persistLead(payload)
  if (!leadResult.ok) {
    return NextResponse.json(
      { error: leadResult.error ?? 'Unable to submit contact request right now' },
      { status: 503 },
    )
  }

  return NextResponse.json({ ok: true, leadId: leadResult.leadId }, { status: 200 })
}

