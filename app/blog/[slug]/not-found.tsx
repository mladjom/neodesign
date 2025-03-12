'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileQuestion } from 'lucide-react';

export default function BlogNotFound() {
  return (
    <div className="container px-4 py-20 max-w-6xl mx-auto">
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <FileQuestion className="w-20 h-20 text-muted-foreground mx-auto" />
        <h1 className="text-4xl font-bold">Article Not Found</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The blog post you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button asChild>
            <Link href="/blog">
              Browse All Articles
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              Go Home
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}