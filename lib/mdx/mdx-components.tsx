"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Copy, Check, AlertCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Code Block with Copy Button
function CodeBlock({ children, className }: { children: string, className?: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (typeof window === 'undefined') return;
    
    navigator.clipboard.writeText(children);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative group">
      <pre className={cn("rounded-lg", className)}>
        {children}
      </pre>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={copyToClipboard}
        className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
}

// Enhanced Callout component with icons
export function Callout({ 
  children, 
  type = 'info',
  title
}: { 
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'success' | 'error';
  title?: string;
}) {
  const bgColors = {
    info: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
    warning: 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800',
    success: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800',
    error: 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800',
  };

  const icons = {
    info: <Info className="h-5 w-5 text-blue-500 dark:text-blue-400 flex-shrink-0" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-500 dark:text-amber-400 flex-shrink-0" />,
    success: <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0" />,
    error: <AlertCircle className="h-5 w-5 text-red-500 dark:text-red-400 flex-shrink-0" />,
  };

  return (
    <div className={cn(
      'p-4 my-6 border-l-4 rounded-r-lg flex gap-3',
      bgColors[type]
    )}>
      {icons[type]}
      <div>
        {title && <p className="font-medium mb-1">{title}</p>}
        <div>{children}</div>
      </div>
    </div>
  );
}

// Image with caption
function ImageWithCaption({ 
  src, 
  alt, 
  caption 
}: { 
  src: string; 
  alt: string; 
  caption?: string;
}) {
  return (
    <figure className="my-8">
      <div className="relative rounded-lg overflow-hidden aspect-video">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// Custom link component
function CustomLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href, children, ...rest } = props;
  const isExternal = href?.startsWith('http');

  if (isExternal) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-primary hover:underline inline-flex items-center gap-1"
        {...rest}
      >
        {children}
        <ExternalLink className="h-3 w-3" />
      </a>
    );
  }

  return (
    <Link 
      href={href || '/'} 
      className="text-primary hover:underline"
      {...rest}
    >
      {children}
    </Link>
  );
}

export const components = {
  // HTML overrides
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold tracking-tight mt-10 mb-4 scroll-m-20">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold tracking-tight mt-10 mb-4 scroll-m-20">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold tracking-tight mt-8 mb-4 scroll-m-20">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg font-semibold tracking-tight mt-8 mb-4 scroll-m-20">{children}</h4>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mt-2">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  ),
  hr: () => <hr className="my-8 border-t-2" />,
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse border border-border">{children}</table>
    </div>
  ),
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr className="border-b border-border">{children}</tr>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border border-border px-4 py-2 text-left font-semibold">{children}</th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border border-border px-4 py-2">{children}</td>
  ),
  
  // Custom components
  a: CustomLink,
  img: ImageWithCaption,
  pre: CodeBlock,
  Image: ImageWithCaption,
  Callout: Callout,
};