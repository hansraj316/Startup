
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function Home() {
  const features = [
    {
      title: 'AI-Powered Automation',
      description: 'Streamline your workflows with intelligent automation that learns and adapts to your business processes.',
      icon: '🤖',
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain deep insights from your data with our cutting-edge machine learning algorithms and visualization tools.',
      icon: '📊',
    },
    {
      title: 'Scalable Solutions',
      description: 'Our platform grows with your business, handling everything from startup needs to enterprise scale.',
      icon: '🚀',
    },
    {
      title: 'Real-time Processing',
      description: 'Process and analyze data in real-time, enabling instant decision-making and response capabilities.',
      icon: '⚡',
    },
    {
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with full compliance to industry standards and data protection regulations.',
      icon: '🔒',
    },
    {
      title: '24/7 Support',
      description: 'Our expert team is available around the clock to ensure your AI solutions run smoothly.',
      icon: '💬',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO',
      company: 'TechCorp Industries',
      content: 'FIGWORKS.AI transformed our data processing capabilities. We now process 10x more data with 50% fewer resources.',
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Operations',
      company: 'Global Manufacturing',
      content: 'The automation solutions have revolutionized our production line. Efficiency increased by 300% in just 6 months.',
      avatar: '👨‍💼',
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Research Director',
      company: 'BioTech Labs',
      content: 'Their AI models helped us accelerate our research timeline by 2 years. Incredible accuracy and reliability.',
      avatar: '👩‍🔬',
    },
  ]

  const stats = [
    { label: 'Clients Served', value: '500+' },
    { label: 'Data Points Processed', value: '50B+' },
    { label: 'Automation Hours Saved', value: '2M+' },
    { label: 'Countries Deployed', value: '25+' },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-brand-blue block">Intelligent AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              FIGWORKS.AI delivers cutting-edge artificial intelligence products and services that revolutionize how businesses operate, automate, and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FIGWORKS.AI?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver AI solutions that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by leading companies worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-brand-blue">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of companies already using FIGWORKS.AI to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
