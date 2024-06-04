import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { sharedDescription, sharedTitle } from '@/app/shared-metadata'
import cn from '@/utils/cn'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('antialiased', inter.className)}>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    template: `%s — ${sharedTitle}`,
    default: sharedTitle,
  },
  description: sharedDescription,
  openGraph: {
    title: {
      template: `%s — ${sharedTitle}`,
      default: sharedTitle,
    },
    description: sharedDescription,
    images: [
      {
        url: 'image-url',
        width: 1200,
        height: 630,
        alt: 'Description of the image',
      },
    ],
    type: 'website',
    url: '/',
    siteName: sharedTitle,
    locale: 'en_US',
  },
}

export const viewport = {
  themeColor: 'white',
  colorScheme: 'only light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}
