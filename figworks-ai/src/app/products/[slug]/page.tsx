
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Sample product data - in a real app, this would come from a database or CMS
const products = {
  'ai-automation-platform': {
    name: 'AI Automation Platform',
    description: 'Comprehensive automation solution that streamlines workflows and reduces manual tasks through intelligent process optimization.',
    longDescription: 'Our AI Automation Platform revolutionizes how businesses operate by intelligently automating complex workflows, reducing manual intervention, and optimizing processes in real-time. Built with cutting-edge machine learning algorithms, the platform learns from your business patterns and continuously improves efficiency.',
    features: [
      'Workflow automation and optimization',
      'Intelligent task scheduling',
      'Process mining and analysis',
      'Integration with 100+ business tools',
      'Real-time monitoring and alerts',
      'Advanced analytics and reporting',
      'Custom rule engine',
      'API-first architecture'
    ],
    benefits: [
      'Reduce operational costs by up to 60%',
      'Increase productivity by 300%',
      'Eliminate manual errors',
      'Improve customer satisfaction',
      'Scale operations efficiently'
    ],
    pricing: 'Starting at $99/month',
    icon: '🤖',
    category: 'AI Platform',
    integrations: ['Salesforce', 'Microsoft 365', 'Google Workspace', 'Slack', 'Zendesk', 'HubSpot'],
    industries: ['Manufacturing', 'Healthcare', 'Finance', 'Retail', 'Technology'],
  },
  'ml-analytics-suite': {
    name: 'ML Analytics Suite',
    description: 'Advanced machine learning tools for data analysis, predictive modeling, and business intelligence insights.',
    longDescription: 'Transform your data into actionable insights with our comprehensive ML Analytics Suite. Featuring state-of-the-art algorithms for predictive modeling, statistical analysis, and automated report generation.',
    features: [
      'Predictive analytics and forecasting',
      'Advanced data visualization',
      'Custom ML model training',
      'Statistical analysis tools',
      'Automated report generation',
      'Real-time data processing',
      'Interactive dashboards',
      'Data export capabilities'
    ],
    benefits: [
      'Make data-driven decisions faster',
      'Predict trends with 95% accuracy',
      'Reduce analysis time by 80%',
      'Identify opportunities early',
      'Optimize business strategies'
    ],
    pricing: 'Starting at $199/month',
    icon: '📊',
    category: 'Analytics',
    integrations: ['Tableau', 'Power BI', 'Google Analytics', 'AWS', 'Snowflake', 'PostgreSQL'],
    industries: ['E-commerce', 'Finance', 'Marketing', 'Supply Chain', 'Healthcare'],
  },
  // Add more products as needed
}

type ProductSlug = keyof typeof products

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const product = products[params.slug as ProductSlug]
  
  if (!product) {
    return {
      title: 'Product Not Found - FIGWORKS.AI',
    }
  }

  return {
    title: `${product.name} - FIGWORKS.AI`,
    description: product.description,
  }
}

export default function ProductDetail({ params }: any) {
  const product = products[params.slug as ProductSlug]

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">{product.icon}</span>
              <div>
                <div className="text-sm text-brand-blue font-medium mb-2">{product.category}</div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {product.name}
                </h1>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              {product.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Start Free Trial</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-gray-900">Business Benefits</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">★</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Integrations</h2>
            <p className="text-xl text-gray-600">
              Seamlessly connects with your existing tools
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {product.integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-lg px-6 py-3 shadow-sm border">
                <span className="text-gray-700 font-medium">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Trusted across multiple industries
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {product.industries.map((industry, index) => (
              <div key={index} className="bg-brand-blue text-white rounded-full px-4 py-2">
                <span className="font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-brand-blue">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              {product.pricing}
            </p>
            <p className="text-lg mb-8 opacity-90">
              Start your free trial today or schedule a personalized demo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Start Free Trial</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }))
}
