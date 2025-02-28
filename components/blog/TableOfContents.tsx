'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { TableOfContentsItem } from '@/types/blog';
import { motion } from 'framer-motion';

interface TableOfContentsProps {
  toc: TableOfContentsItem[];
}

export function TableOfContents({ toc }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h2, h3, h4'));
    
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };
    
    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px 0px -80% 0px',
    });
    
    headings.forEach(heading => observer.observe(heading));
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="space-y-2">
      <p className="font-medium text-sm mb-3">Table of Contents</p>
      <ul className="space-y-2 text-sm">
        {toc.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block py-1 hover:text-primary transition-colors",
                activeId === item.id ? "text-primary font-medium" : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
            {item.children && item.children.length > 0 && (
              <ul className="pl-4 space-y-1 mt-1">
                {item.children.map(child => (
                  <li key={child.id}>
                    <a
                      href={`#${child.id}`}
                      className={cn(
                        "block py-1 hover:text-primary transition-colors",
                        activeId === child.id ? "text-primary font-medium" : "text-muted-foreground"
                      )}
                    >
                      {child.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}