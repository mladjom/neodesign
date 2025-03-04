import { Metadata } from 'next';

// Base site information
export const siteConfig = {
  name: 'NeoDesign',
  description: 'Professional web design and development services for modern businesses',
  url: 'https://neodesign.agency',
  ogImage: 'https://neodesign.agency/og.jpg',
}

// Base metadata for all pages
export const baseMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['web design', 'web development', 'UI/UX design', 'digital agency'],
  authors: [
    {
      name: 'NeoDesign Team',
      url: siteConfig.url,
    },
  ],
  creator: 'NeoDesign',
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
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@neodesign',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL(siteConfig.url),
}

// Helper function to generate page-specific metadata
export function createMetadata({
  title,
  description,
  keywords = [],
  image,
  type = 'website',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}): Metadata {
  return {
    ...(title && { 
      title: title 
    }),
    ...(description && { 
      description: description 
    }),
    ...(keywords.length > 0 && {
      keywords: [...baseMetadata.keywords || [], ...keywords],
    }),
    openGraph: {
      ...baseMetadata.openGraph,
      ...(title && { title: title }),
      ...(description && { description: description }),
      ...(type && { type: type }),
      ...(image && {
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title || siteConfig.name,
          },
        ],
      }),
    },
    twitter: {
      ...baseMetadata.twitter,
      ...(title && { title: title }),
      ...(description && { description: description }),
      ...(image && { images: [image] }),
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}