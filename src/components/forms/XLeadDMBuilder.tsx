'use client'

import { useMemo, useState } from 'react'

type Signal = {
  trigger: string
  product: string
  challenge: string
}

const starterSignals: Signal[] = [
  {
    trigger: 'Hiring Founding AE + SDR in same week',
    product: 'B2B SaaS',
    challenge: 'Pipeline pressure and unqualified inbound'
  },
  {
    trigger: 'Tweet about low demo-to-close rates',
    product: 'Vertical SaaS',
    challenge: 'Lead quality mismatch'
  },
  {
    trigger: 'Raised seed and asking for growth operators',
    product: 'Developer tools',
    challenge: 'Need repeatable outbound quickly'
  }
]

export default function XLeadDMBuilder() {
  const [signal, setSignal] = useState(starterSignals[0])
  const [prospectName, setProspectName] = useState('Arjun')

  const draft = useMemo(() => {
    return `Hey ${prospectName}, noticed ${signal.trigger.toLowerCase()} at your ${signal.product} team.\n\nUsually this shows up as ${signal.challenge.toLowerCase()}. We built a signal-to-lead flow that turns live X activity into qualified outbound ideas plus ready-to-send DM drafts.\n\nWant me to send 3 sample leads from your niche this week?`
  }, [prospectName, signal])

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-gray-200 p-5 bg-white">
        <h3 className="text-lg font-semibold mb-4">Signal Input</h3>
        <label className="block text-sm font-medium text-gray-700 mb-2">Prospect first name</label>
        <input
          value={prospectName}
          onChange={(e) => setProspectName(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 mb-4"
        />

        <label className="block text-sm font-medium text-gray-700 mb-2">Detected trigger</label>
        <select
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          onChange={(e) => setSignal(starterSignals[Number(e.target.value)])}
        >
          {starterSignals.map((s, i) => (
            <option value={i} key={s.trigger}>{s.trigger}</option>
          ))}
        </select>
      </div>

      <div className="rounded-xl border border-brand-blue/20 bg-blue-50 p-5">
        <h3 className="text-lg font-semibold mb-4">Auto-DM Draft</h3>
        <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">{draft}</pre>
      </div>
    </div>
  )
}
