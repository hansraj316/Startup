import { ContactPayload } from '@/lib/contact'

export interface LeadResult {
  ok: boolean
  leadId?: string
  error?: string
}

export async function persistLead(payload: ContactPayload): Promise<LeadResult> {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL

  if (!webhookUrl) {
    return {
      ok: false,
      error: 'Lead sink is not configured',
    }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...payload,
        source: 'figworks-ai-contact-form',
        submittedAt: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      return {
        ok: false,
        error: `Lead sink rejected request (${response.status})`,
      }
    }

    return {
      ok: true,
      leadId: crypto.randomUUID(),
    }
  } catch {
    return {
      ok: false,
      error: 'Unable to send lead to sink',
    }
  }
}

