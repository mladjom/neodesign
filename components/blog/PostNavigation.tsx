'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { BlogPost } from '@/types/blog';

interface PostNavigationProps {
  prevPost?: BlogPost | null;
  nextPost?: BlogPost | null;
}

export function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-between items-center py-8 border-t"
    >
      {prevPost ? (
        <div className="flex flex-col items-start">
          <span className="text-xs text-muted-foreground mb-1">Previous</span>
          <Link href={`/blog/${prevPost.slug}`}>
            <Button variant="link" className="p-0 h-auto flex items-center gap-1">
              <ChevronLeft className="h-4 w-4" />
              <span className="line-clamp-1">{prevPost.title}</span>
            </Button>
          </Link>
        </div>
      ) : (
        <div />
      )}
      
      {nextPost ? (
        <div className="flex flex-col items-end">
          <span className="text-xs text-muted-foreground mb-1">Next</span>
          <Link href={`/blog/${nextPost.slug}`}>
            <Button variant="link" className="p-0 h-auto flex items-center gap-1">
              <span className="line-clamp-1">{nextPost.title}</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      ) : (
        <div />
      )}
    </motion.div>
  );
}