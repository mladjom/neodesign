'use client';

import NextLink from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string;
  className?: string;
  showExternalIcon?: boolean;
}

export function CustomLink({
  href = '',
  children,
  className,
  showExternalIcon = true,
  ...props
}: CustomLinkProps) {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    if (isAnchorLink) {
      // Handle anchor links within the page
      return (
        
        <a  href={href}
          className={cn("no-underline", className)}
          {...props}
        >
          {children}
        </a>
      );
    }
    
    // Handle internal links to other pages
    return (
      <NextLink 
        href={href}
        className={cn("font-medium underline underline-offset-4 decoration-primary/50 hover:decoration-primary", className)} 
        {...props}
      >
        {children}
      </NextLink>
    );
  }

  // Handle external links
  return (
    
    <a  href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("font-medium underline underline-offset-4 decoration-primary/50 hover:decoration-primary inline-flex items-center", className)}
      {...props}
    >
      {children}
      {showExternalIcon && (
        <ExternalLink className="ml-1 h-3 w-3 inline" />
      )}
    </a>
  );
}