import { Suspense } from 'react';
import { ProgressBar } from '@/components/blog/ProgressBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Blog',
    template: '%s | Our Blog',
  },
  description: 'Discover our latest articles, tutorials, and insights',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
}
