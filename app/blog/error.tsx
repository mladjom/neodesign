'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function BlogError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Blog error:', error);
  }, [error]);

  return (
    <div className="container px-4 py-20 max-w-6xl mx-auto">
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <AlertCircle className="w-20 h-20 text-red-500 mx-auto" />
        <h1 className="text-4xl font-bold">Something went wrong</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We encountered an error while loading the blog content.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Button onClick={reset}>
            Try again
          </Button>
          <Button variant="outline" onClick={() => window.location.href = '/blog'}>
            Go to Blog Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
}