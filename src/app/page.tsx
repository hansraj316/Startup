import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  const pillars = [
    {
      title: 'Design in Days',
      description: 'We convert rough ideas into polished Figma screens and production-ready UI specs in under a week.',
      icon: '🎨',
    },
    {
      title: 'Build With AI + Engineers',
      description: 'Hybrid delivery model: AI-accelerated implementation with senior engineering review on every milestone.',
      icon: '⚙️',
    },
    {
      title: 'Deploy and Measure',
      description: 'Ship to production fast with analytics, growth hooks, and clear next sprint recommendations.',
      icon: '🚀',
    },
  ]

  const process = [
    { step: '01', title: 'Discovery Call', detail: '45-minute founder call to align outcomes, audience, and scope.' },
    { step: '02', title: 'Prototype Sprint', detail: 'Rapid UX + copy sprint with async feedback and decision checkpoints.' },
    { step: '03', title: 'Launch Sprint', detail: 'Production build, QA, deployment, and handoff docs for your team.' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            <p className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
              Founder Acquisition Studio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              From idea to deployed
              <span className="text-brand-blue block">landing page in 14 days</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              We help early-stage founders validate demand with high-converting landing pages, fast product demos, and a repeatable acquisition narrative.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book a Founder Call</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">See Delivery Scope</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="text-4xl mb-3">{pillar.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900">{pillar.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Design to deploy workflow</h2>
            <p className="text-lg text-gray-600">Built for founders who need speed without sacrificing quality.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((item, index) => (
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
          <h2 className="text-4xl font-bold mb-4">Need a demo thread for investors and users?</h2>
          <p className="text-xl opacity-90 mb-8">
            We include launch-ready copy, social thread scripts, and hero visuals so your first campaign ships with your page.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/contact">Start This Week</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
