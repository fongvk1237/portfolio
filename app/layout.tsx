import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { profile } from '@/lib/data'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
const title = `${profile.name} | AI Platform & DevSecOps Engineer`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${profile.name}` },
  description: profile.summary,
  openGraph: { title, description: profile.summary, url: '/', siteName: profile.name, type: 'website' },
  twitter: { card: 'summary_large_image', title, description: profile.summary },
  alternates: { canonical: '/' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#0d0e11' }

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: 'DevSecOps Engineer',
  email: `mailto:${profile.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Bangkok', addressCountry: 'TH' },
  alumniOf: "King Mongkut's Institute of Technology Ladkrabang",
  worksFor: { '@type': 'Organization', name: 'NETBAY Public Company Limited' },
  sameAs: [profile.linkedin, profile.github].filter(Boolean),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  )
}
