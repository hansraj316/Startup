
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'AI Services & Consulting - FIGWORKS.AI',
  description: 'Professional AI consulting and implementation services to help you successfully deploy and scale AI solutions in your organization.',
}

export default function Services() {
  const services = [
    {
      id: '1',
      name: 'AI Strategy Consulting',
      description: 'Comprehensive AI strategy development tailored to your business objectives and industry requirements.',
      features: [
        'AI readiness assessment',
        'Strategic roadmap development',
        'ROI analysis and projections',
        'Technology stack recommendations',
        'Change management planning',
      ],
      process: [
        'Discovery and assessment phase',
        'Strategy formulation',
        'Roadmap creation',
        'Implementation planning',
      ],
      pricing: 'Starting at $25,000',
      icon: '🎯',
      duration: '4-8 weeks',
    },
    {
      id: '2',
      name: 'Custom AI Development',
      description: 'End-to-end development of bespoke AI solutions designed specifically for your unique business challenges.',
      features: [
        'Custom model development',
        'Data pipeline creation',
        'Integration with existing systems',
        'Performance optimization',
        'Ongoing support and maintenance',
      ],
      process: [
        'Requirements gathering',
        'Solution design',
        'Development and testing',
        'Deployment and integration',
      ],
      pricing: 'Custom pricing based on scope',
      icon: '⚙️',
      duration: '12-24 weeks',
    },
    {
      id: '3',
      name: 'AI Implementation & Deployment',
      description: 'Professional implementation services to ensure smooth deployment and adoption of AI solutions.',
      features: [
        'System integration',
        'Data migration and setup',
        'User training and onboarding',
        'Performance monitoring',
        'Post-deployment optimization',
      ],
      process: [
        'Pre-deployment planning',
        'System configuration',
        'User training',
        'Go-live support',
      ],
      pricing: 'Starting at $15,000',
      icon: '🚀',
      duration: '6-12 weeks',
    },
    {
      id: '4',
      name: 'Data Science & Analytics',
      description: 'Advanced data science services to unlock insights and create predictive models from your data.',
      features: [
        'Data analysis and exploration',
        'Predictive model development',
        'Statistical analysis',
        'Visualization and reporting',
        'Model validation and testing',
      ],
      process: [
        'Data assessment',
        'Model development',
        'Validation and testing',
        'Deployment and monitoring',
      ],
      pricing: 'Starting at $20,000',
      icon: '📊',
      duration: '8-16 weeks',
    },
    {
      id: '5',
      name: 'AI Training & Education',
      description: 'Comprehensive training programs to upskill your team and ensure successful AI adoption.',
      features: [
        'Executive AI awareness sessions',
        'Technical team training',
        'Hands-on workshops',
        'Best practices guidance',
        'Certification programs',
      ],
      process: [
        'Skills assessment',
        'Curriculum development',
        'Training delivery',
        'Certification and follow-up',
      ],
      pricing: 'Starting at $5,000',
      icon: '🎓',
      duration: '2-6 weeks',
    },
    {
      id: '6',
      name: 'AI Support & Maintenance',
      description: 'Ongoing support and maintenance services to ensure your AI systems continue to perform optimally.',
      features: [
        '24/7 system monitoring',
        'Performance optimization',
        'Model retraining and updates',
        'Bug fixes and patches',
        'Capacity planning',
      ],
      process: [
        'System health checks',
        'Performance monitoring',
        'Proactive maintenance',
        'Issue resolution',
      ],
      pricing: 'Starting at $2,500/month',
      icon: '🛠️',
      duration: 'Ongoing',
    },
  ]

  const caseStudies = [
    {
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Reduce equipment downtime and maintenance costs',
      solution: 'Implemented predictive maintenance AI system',
      results: '45% reduction in unplanned downtime, $2M annual savings',
      icon: '🏭',
    },
    {
      company: 'FinTech Solutions Inc',
      industry: 'Financial Services',
      challenge: 'Improve fraud detection and reduce false positives',
      solution: 'Developed custom fraud detection ML models',
      results: '60% improvement in fraud detection, 30% fewer false positives',
      icon: '🏦',
    },
    {
      company: 'Healthcare Partners',
      industry: 'Healthcare',
      challenge: 'Automate patient data analysis and diagnosis support',
      solution: 'Created AI-powered diagnostic assistance platform',
      results: '50% faster diagnosis, 95% accuracy rate improvement',
      icon: '🏥',
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Services & Consulting
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional AI consulting and implementation services to help you successfully deploy and scale AI solutions in your organization.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Offerings
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end AI services from strategy to implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.name}
                      </h3>
                      <p className="text-sm text-brand-blue">
                        Duration: {service.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Process:</h4>
                    <ol className="space-y-1">
                      {service.process.map((step, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          {index + 1}. {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="mb-6">
                    <p className="font-semibold text-brand-blue">{service.pricing}</p>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              How we've helped businesses transform with AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{study.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {study.company}
                      </h3>
                      <p className="text-sm text-brand-blue">{study.industry}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Challenge:</h4>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Results:</h4>
                      <p className="text-sm text-green-600 font-medium">{study.results}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Methodology
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach to AI implementation success
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Discovery', desc: 'Understand your business needs and objectives' },
                { step: '2', title: 'Strategy', desc: 'Develop comprehensive AI strategy and roadmap' },
                { step: '3', title: 'Implementation', desc: 'Build, test, and deploy AI solutions' },
                { step: '4', title: 'Optimization', desc: 'Monitor, improve, and scale your AI systems' },
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.desc}</p>
                </div>
              ))}
            </div>
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
              Let's discuss how our AI services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/contact">Start Your AI Journey</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue" asChild>
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
