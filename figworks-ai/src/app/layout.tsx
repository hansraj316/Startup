
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FIGWORKS.AI - Leading AI Technology Solutions',
  description: 'FIGWORKS.AI delivers cutting-edge AI products and services for modern businesses. Transform your operations with our innovative artificial intelligence solutions.',
  keywords: 'AI, artificial intelligence, machine learning, technology solutions, automation',
  authors: [{ name: 'FIGWORKS.AI' }],
  creator: 'FIGWORKS.AI',
  openGraph: {
    title: 'FIGWORKS.AI - Leading AI Technology Solutions',
    description: 'Transform your business with cutting-edge AI solutions',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIGWORKS.AI - Leading AI Technology Solutions',
    description: 'Transform your business with cutting-edge AI solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
