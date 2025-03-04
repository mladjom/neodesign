'use client';

import { forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';
import { trackEvent } from '@/lib/analytics';

interface AnalyticsLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
}

export const AnalyticsLink = forwardRef<HTMLAnchorElement, AnalyticsLinkProps>(
  function AnalyticsLink(
    { 
      children, 
      className, 
      category = 'navigation', 
      action = 'click', 
      label, 
      value,
      ...props 
    }, 
    ref
  ) {
    // Handle click with tracking
    const handleClick = () => {
      trackEvent(
        category,
        action,
        label || (typeof props.href === 'string' ? props.href : undefined),
        value
      );
    };

    return (
      <Link
        {...props}
        ref={ref}
        className={className}
        onClick={handleClick}
      >
        {children}
      </Link>
    );
  }
);