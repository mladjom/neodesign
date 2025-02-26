"use client";

import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface CustomLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  children: React.ReactNode;
}

export function CustomLink({ href, children, ...rest }: CustomLinkProps) {
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

export default CustomLink;