
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'AI Products & Solutions - FIGWORKS.AI',
  description: 'Explore FIGWORKS.AI\'s comprehensive suite of AI products and solutions designed to transform your business operations.',
}

export default function Products() {
  const products = [
    {
      id: '1',
      slug: 'ai-automation-platform',
      name: 'AI Automation Platform',
      description: 'Comprehensive automation solution that streamlines workflows and reduces manual tasks through intelligent process optimization.',
      category: 'ai-platform',
      features: [
        'Workflow automation and optimization',
        'Intelligent task scheduling',
        'Process mining and analysis',
        'Integration with 100+ business tools',
        'Real-time monitoring and alerts',
      ],
      pricing: 'Starting at $99/month',
      icon: '🤖',
    },
    {
      id: '2',
      slug: 'ml-analytics-suite',
      name: 'ML Analytics Suite',
      description: 'Advanced machine learning tools for data analysis, predictive modeling, and business intelligence insights.',
      category: 'analytics',
      features: [
        'Predictive analytics and forecasting',
        'Advanced data visualization',
        'Custom ML model training',
        'Statistical analysis tools',
        'Automated report generation',
      ],
      pricing: 'Starting at $199/month',
      icon: '📊',
    },
    {
      id: '3',
      slug: 'intelligent-chatbot',
      name: 'Intelligent Chatbot Engine',
      description: 'Natural language processing powered chatbot for customer service, support, and internal communications.',
      category: 'ai-platform',
      features: [
        'Natural language understanding',
        'Multi-language support',
        'Integration with knowledge bases',
        'Sentiment analysis',
        'Voice and text interactions',
      ],
      pricing: 'Starting at $149/month',
      icon: '💬',
    },
    {
      id: '4',
      slug: 'computer-vision-api',
      name: 'Computer Vision API',
      description: 'Powerful image and video analysis capabilities for object detection, facial recognition, and visual inspection.',
      category: 'ml-tools',
      features: [
        'Object detection and classification',
        'Facial recognition and analysis',
        'Optical character recognition (OCR)',
        'Quality inspection automation',
        'Real-time video processing',
      ],
      pricing: 'Pay-per-use from $0.01/image',
      icon: '👁️',
    },
    {
      id: '5',
      slug: 'predictive-maintenance',
      name: 'Predictive Maintenance AI',
      description: 'IoT-powered predictive maintenance solution that prevents equipment failures and optimizes maintenance schedules.',
      category: 'automation',
      features: [
        'Equipment health monitoring',
        'Failure prediction algorithms',
        'Maintenance schedule optimization',
        'Cost reduction analytics',
        'IoT sensor integration',
      ],
      pricing: 'Custom enterprise pricing',
      icon: '🔧',
    },
    {
      id: '6',
      slug: 'fraud-detection-system',
      name: 'Fraud Detection System',
      description: 'Real-time fraud detection and prevention using advanced machine learning algorithms and behavioral analysis.',
      category: 'analytics',
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Risk scoring and alerts',
        'False positive reduction',
        'Compliance reporting',
      ],
      pricing: 'Starting at $299/month',
      icon: '🛡️',
    },
  ]

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'ai-platform', name: 'AI Platform', count: products.filter(p => p.category === 'ai-platform').length },
    { id: 'analytics', name: 'Analytics', count: products.filter(p => p.category === 'analytics').length },
    { id: 'ml-tools', name: 'ML Tools', count: products.filter(p => p.category === 'ml-tools').length },
    { id: 'automation', name: 'Automation', count: products.filter(p => p.category === 'automation').length },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Products & Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our comprehensive suite of AI-powered products designed to transform your business operations and drive growth.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{product.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-sm text-brand-blue capitalize">
                        {product.category.replace('-', ' ')}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <p className="font-semibold text-brand-blue">{product.pricing}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/products/${product.slug}`}>Learn More</Link>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our team to discuss which AI solutions are right for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
