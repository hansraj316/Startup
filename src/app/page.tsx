import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  const signalSources = [
    {
      title: 'X (Twitter) Signals',
      description: 'Track founder and operator conversations, launch posts, and momentum spikes before they become mainstream.',
      icon: '𝕏',
    },
    {
      title: 'Product Hunt Signals',
      description: 'Capture top launches, category shifts, and comment sentiment to spot what is gaining real traction.',
      icon: '🚀',
    },
    {
      title: 'GitHub Signals',
      description: 'Monitor stars, forks, release cadence, and repo velocity to catch products with execution strength.',
      icon: '🐙',
    },
  ]

  const digestFlow = [
    { step: '01', title: 'Signal Collection', detail: 'Collect public signals from X, Product Hunt, and GitHub into one focused pipeline.' },
    { step: '02', title: 'Noise Filtering', detail: 'Rank by novelty, momentum, and relevance so founders see only high-signal opportunities.' },
    { step: '03', title: 'Weekly Paid Brief', detail: 'Deliver a concise paid weekly founder brief with what matters and clear next actions.' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <p className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
              Signal-Only Founder Digest (MVP)
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop doomscrolling,
              <span className="text-brand-blue block">get the signals that matter</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              We scan X, Product Hunt, and GitHub, filter out the noise, and deliver a paid weekly founder brief you can act on in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Join the Weekly Brief</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signalSources.map((source, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="text-4xl mb-3">{source.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900">{source.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{source.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How the MVP works</h2>
            <p className="text-lg text-gray-600">Built for founders who want decision-grade inputs, not information overload.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {digestFlow.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-brand-blue font-bold text-sm mb-2">STEP {item.step}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-blue">
        <div className="container text-center text-white max-w-4xl">
          <h2 className="text-4xl font-bold mb-4">Paid weekly brief for serious founders</h2>
          <p className="text-xl opacity-90 mb-8">
            One sharp update each week: emerging products, winning distribution moves, and open opportunities worth your time.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">Get Early Access</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
