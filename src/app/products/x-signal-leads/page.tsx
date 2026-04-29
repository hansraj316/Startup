import XLeadDMBuilder from '@/components/forms/XLeadDMBuilder'

const plans = [
  {
    name: 'Starter',
    price: '$29/mo',
    items: ['25 trend signals / month', '100 DM drafts', 'CSV export']
  },
  {
    name: 'Growth',
    price: '$59/mo',
    items: ['150 trend signals / month', 'Unlimited DM drafts', 'Slack alerts + CRM webhook']
  },
  {
    name: 'Pro',
    price: '$99/mo',
    items: ['500 trend signals / month', 'Team workspace', 'Priority support']
  }
]

export default function XSignalLeadsPage() {
  return (
    <main className="container py-12 space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Micro-SaaS MVP</p>
        <h1 className="text-4xl font-bold text-gray-900">X Signal to Lead</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Detect buying signals from X posts, classify lead intent, and auto-generate outbound DM drafts in under 60 seconds.
        </p>
      </section>

      <section>
        <XLeadDMBuilder />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Pricing test assets</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-xl border border-gray-200 p-5 bg-white">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-2xl font-bold mt-2">{plan.price}</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 list-disc list-inside">
                {plan.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <button className="mt-4 w-full bg-brand-blue text-white rounded-md py-2">Join waitlist</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
