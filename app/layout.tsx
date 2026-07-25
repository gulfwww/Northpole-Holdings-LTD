import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.northpole.holdings'), // Replace with your actual domain

  title: {
    default: 'North Pole Holdings Limited',
    template: '%s | North Pole Holdings Limited',
  },

  description:
    'North Pole Holdings Limited is a leading B2B international business support and project management consultancy specializing in strategic sourcing, procurement, and de-risking capital-intensive projects across real estate, construction, infrastructure, oil & gas, power, energy, mining, and logistics.',

  keywords: [
    'North Pole Holdings',
    'Strategic Sourcing',
    'Project Management',
    'Procurement',
    'Supply Chain',
    'Construction',
    'Infrastructure',
    'Oil and Gas',
    'Power',
    'Energy',
    'Mining',
    'Logistics',
    'International Trade',
    'Business Consultancy',
    'Capital Projects',
  ],

  authors: [
    {
      name: 'Mohamed Gumaa',
      url: 'https://mgumaa.com',
    },
  ],

  creator: 'Mohamed Gumaa',
  publisher: 'North Pole Holdings Limited',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },

  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.northpole.holdings',
    siteName: 'North Pole Holdings Limited',
    title: 'North Pole Holdings Limited',
    description:
      'Strategic sourcing, procurement, and project management consultancy delivering international business solutions for capital-intensive industries.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'North Pole Holdings Limited',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'North Pole Holdings Limited',
    description:
      'Strategic sourcing, procurement, and project management consultancy.',
    images: ['/og-image.jpg'],
  },

  category: 'Business',

  generator: 'Next.js',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
