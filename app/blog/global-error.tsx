'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center p-4">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold">Critical Error</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A critical error occurred while loading the blog.
            </p>
            {error.digest && (
              <p className="text-sm text-muted-foreground">
                Error ID: {error.digest}
              </p>
            )}
            <div className="flex justify-center gap-4 pt-4">
              <Button onClick={reset}>
                Try again
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/'}>
                Go to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </body>
    </html>
  );
}