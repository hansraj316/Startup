
import type { Metadata } from 'next'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import ContactForm from '@/components/forms/ContactForm'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Contact Us - FIGWORKS.AI',
  description: 'Get in touch with FIGWORKS.AI for AI consulting, product demos, and enterprise solutions. We\'re here to help transform your business.',
}

export default function Contact() {
  const contactInfo = [
    {
      title: 'General Inquiries',
      email: 'info@figworks.ai',
      phone: '+1 (555) 123-4567',
      icon: '📧',
    },
    {
      title: 'Sales & Partnerships',
      email: 'sales@figworks.ai',
      phone: '+1 (555) 123-4568',
      icon: '🤝',
    },
    {
      title: 'Technical Support',
      email: 'support@figworks.ai',
      phone: '+1 (555) 123-4569',
      icon: '🛠️',
    },
  ]

  const offices = [
    {
      city: 'San Francisco (HQ)',
      address: '123 Innovation Drive, Suite 400',
      address2: 'San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      icon: '🌉',
    },
    {
      city: 'New York',
      address: '456 Tech Avenue, Floor 15',
      address2: 'New York, NY 10001',
      phone: '+1 (555) 987-6543',
      icon: '🗽',
    },
    {
      city: 'London',
      address: '789 AI Street',
      address2: 'London, UK EC2A 4NE',
      phone: '+44 20 1234 5678',
      icon: '🇬🇧',
    },
  ]

  const faqs = [
    {
      question: 'How quickly can you implement an AI solution?',
      answer: 'Implementation timelines vary based on complexity, but most projects range from 6-24 weeks. We\'ll provide a detailed timeline during our initial consultation.',
    },
    {
      question: 'Do you work with companies of all sizes?',
      answer: 'Yes, we work with startups, mid-size companies, and Fortune 500 enterprises. Our solutions are scalable and can be tailored to your specific needs and budget.',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve all industries including healthcare, finance, manufacturing, retail, technology, and more. Our AI solutions are adaptable to various business sectors.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Absolutely. We offer comprehensive support packages including 24/7 monitoring, maintenance, updates, and optimization services to ensure your AI systems perform optimally.',
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Send us a message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Contact Information
                  </h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-2xl mr-3">{info.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">
                          <a href={`mailto:${info.email}`} className="text-brand-blue hover:underline">
                            {info.email}
                          </a>
                        </p>
                        <p className="text-sm text-gray-600">
                          <a href={`tel:${info.phone}`} className="text-brand-blue hover:underline">
                            {info.phone}
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Response Times
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">General Inquiries:</span>
                      <span className="font-medium">24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sales Inquiries:</span>
                      <span className="font-medium">4 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Technical Support:</span>
                      <span className="font-medium">2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Urgent Issues:</span>
                      <span className="font-medium">30 minutes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at one of our global locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">{office.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {office.city}
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <p>{office.address}</p>
                    <p>{office.address2}</p>
                    <p className="font-medium">
                      <a href={`tel:${office.phone}`} className="text-brand-blue hover:underline">
                        {office.phone}
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
