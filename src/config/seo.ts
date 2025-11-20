import { Metadata } from 'next';

export const siteConfig = {
  name: 'Title',
  description: 'Description',
  url: 'http://localhost:3000',
  ogImage: '/og.png',
  links: {
    twitter: 'https://twitter.com/yourhandle',
    github: 'https://github.com/yourusername',
  },
  userNames: {
    twitter: 'yourhandle',
    github: 'yourusername',
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url),
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js'],
  authors: [
    {
      name: 'Your Name',
      url: siteConfig.url,
    },
  ],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.userNames.twitter,
    site: siteConfig.userNames.twitter,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};
