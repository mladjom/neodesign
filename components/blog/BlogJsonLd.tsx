// components/blog/BlogJsonLd.tsx
import React from 'react';
import { BlogPost } from '@/types/blog';

interface BlogJsonLdProps {
  post: BlogPost;
  siteUrl: string;
}

export function BlogJsonLd({ post, siteUrl }: BlogJsonLdProps) {
  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage.startsWith('http') ? post.coverImage : `${siteUrl}${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.lastUpdated || post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: `${siteUrl}/blog/author/${post.author.name.toLowerCase().replace(/\s+/g, '-')}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NeoDesign',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
}