
import type { Metadata } from 'next'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'About Us - FIGWORKS.AI',
  description: 'Learn about FIGWORKS.AI\'s mission, vision, and the team behind our cutting-edge AI solutions.',
}

export default function About() {
  const team = [
    {
      name: 'Dr. Alex Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former AI researcher at Google with 15+ years in machine learning and enterprise software.',
      avatar: '👨‍💼',
    },
    {
      name: 'Sarah Williams',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Tesla engineer specializing in scalable AI systems and autonomous technologies.',
      avatar: '👩‍💻',
    },
    {
      name: 'Michael Zhang',
      role: 'Head of Product',
      bio: 'Product leader with expertise in AI/ML platforms, previously at Microsoft and Amazon.',
      avatar: '👨‍💻',
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of Research',
      bio: 'PhD in Computer Science from Stanford, published researcher in deep learning and NLP.',
      avatar: '👩‍🔬',
    },
    {
      name: 'David Kumar',
      role: 'VP of Engineering',
      bio: 'Engineering leader with 12+ years building distributed systems at scale.',
      avatar: '👨‍🔧',
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Sales',
      bio: 'Enterprise sales expert with deep understanding of AI adoption in Fortune 500 companies.',
      avatar: '👩‍💼',
    },
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI, constantly exploring new frontiers.',
      icon: '💡',
    },
    {
      title: 'Customer Success',
      description: 'Our clients\' success is our success. We\'re committed to delivering measurable results.',
      icon: '🎯',
    },
    {
      title: 'Ethical AI',
      description: 'We develop responsible AI that respects privacy, fairness, and human values.',
      icon: '⚖️',
    },
    {
      title: 'Transparency',
      description: 'We believe in open communication and building trust through transparency.',
      icon: '🔍',
    },
  ]

  const milestones = [
    { year: '2020', event: 'FIGWORKS.AI founded by AI researchers from top tech companies' },
    { year: '2021', event: 'Launched first AI automation platform, secured $5M seed funding' },
    { year: '2022', event: 'Reached 100+ enterprise clients, expanded to international markets' },
    { year: '2023', event: 'Introduced advanced ML tools, processed 10B+ data points' },
    { year: '2024', event: 'Launched real-time analytics platform, achieved 500+ client milestone' },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About FIGWORKS.AI
            </h1>
            <p className="text-xl text-gray-600">
              We're a team of AI pioneers dedicated to transforming businesses through intelligent automation and cutting-edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize artificial intelligence by making advanced AI tools accessible, practical, and transformative for businesses of all sizes.
              </p>
              <p className="text-gray-600">
                We believe that AI should enhance human capabilities, not replace them. Our solutions are designed to empower teams, streamline operations, and unlock new possibilities for growth and innovation.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the global leader in ethical AI solutions, creating a future where intelligent technology seamlessly integrates with human creativity and business objectives.
              </p>
              <p className="text-gray-600">
                We envision a world where AI-powered insights drive better decisions, automation frees humans for creative work, and technology serves as a force for positive change across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth story
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <span className="text-lg font-bold text-brand-blue">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-brand-blue rounded-full mt-2 mr-8"></div>
                <div className="flex-1">
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The brilliant minds behind FIGWORKS.AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <div className="text-6xl mb-4">{member.avatar}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-blue font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.bio}</p>
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
