'use client';

import { useEffect } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export function ProjectErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Project page error:', error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center p-4">
      <Alert variant="destructive" className="max-w-2xl">
        <AlertTitle>Something went wrong!</AlertTitle>
        <AlertDescription className="mt-4 space-y-4">
          <p>
            {error.message || 'An error occurred while loading the project.'}
            {error.digest && (
              <span className="block text-sm mt-2">
                Error ID: {error.digest}
              </span>
            )}
          </p>
          <div className="flex justify-end">
            <Button onClick={reset} variant="outline" className="gap-2">
              <RefreshCcw className="h-4 w-4" />
              Try again
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}