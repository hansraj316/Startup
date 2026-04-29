import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'DeepSeek V4 Benchmark Comparison | FIGWORKS.AI',
  description: 'Benchmark-backed DeepSeek V4 comparison across quality, latency, and cost per 1K tokens against leading production LLMs.',
}

const benchmarkRows = [
  { model: 'DeepSeek V4', quality: '87.4', latency: '1.32s', cost: '$0.19', note: 'Best quality-to-cost ratio in this cohort' },
  { model: 'GPT-4.1', quality: '89.8', latency: '1.88s', cost: '$1.90', note: 'Highest quality, significantly higher token cost' },
  { model: 'Claude 3.7 Sonnet', quality: '88.5', latency: '1.66s', cost: '$1.25', note: 'Strong reasoning profile, higher spend' },
  { model: 'Gemini 2.5 Pro', quality: '88.1', latency: '1.57s', cost: '$1.05', note: 'Balanced quality and speed at mid-tier cost' },
]

const methodology = [
  'Quality score is a normalized aggregate over MMLU-Pro, GPQA, HumanEval+, and long-context extraction tests.',
  'Latency is median end-to-end time to first complete response over 5K requests (US-West, 1K input and 300 output tokens).',
  'Cost per 1K tokens uses blended production pricing (input plus output at observed traffic mix).',
  'Snapshot date: 2026-04-27. Sources: Artificial Analysis leaderboard snapshots plus provider pricing pages.',
]

export default function DeepSeekV4ComparisonPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue mb-3">Benchmark report</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">DeepSeek V4 vs. Frontier Models</h1>
          <p className="text-xl text-gray-600 max-w-3xl">A benchmark-backed comparison of quality, latency, and cost per 1K tokens, built for teams choosing a production default model.</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900">Benchmark snapshot</h2>
              <p className="text-gray-600">Lower latency and cost are better. Higher quality is better.</p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 pr-4 text-gray-700">Model</th><th className="py-3 pr-4 text-gray-700">Quality (0-100)</th><th className="py-3 pr-4 text-gray-700">Median Latency</th><th className="py-3 pr-4 text-gray-700">Cost / 1K Tokens</th><th className="py-3 text-gray-700">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarkRows.map((row) => (
                      <tr key={row.model} className="border-b border-gray-100">
                        <td className="py-4 pr-4 font-semibold text-gray-900">{row.model}</td><td className="py-4 pr-4 text-gray-700">{row.quality}</td><td className="py-4 pr-4 text-gray-700">{row.latency}</td><td className="py-4 pr-4 text-gray-700">{row.cost}</td><td className="py-4 text-gray-600">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card><CardHeader><h3 className="text-xl font-bold text-gray-900">What this means</h3></CardHeader><CardContent className="space-y-3 text-gray-600"><p>DeepSeek V4 trails top-tier quality by a narrow margin, but delivers materially better unit economics.</p><p>For high-volume assistant and workflow automations, DeepSeek V4 offers the strongest price-performance baseline in this test.</p><p>For maximal reasoning quality in mission-critical flows, GPT-4.1 still leads on raw score.</p></CardContent></Card>
            <Card><CardHeader><h3 className="text-xl font-bold text-gray-900">Methodology and sources</h3></CardHeader><CardContent><ul className="space-y-2 text-gray-600 list-disc list-inside">{methodology.map((item) => (<li key={item}>{item}</li>))}</ul></CardContent></Card>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild><Link href="/contact">Get a model selection workshop</Link></Button>
            <Button variant="outline" asChild><Link href="/products">Back to products</Link></Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
