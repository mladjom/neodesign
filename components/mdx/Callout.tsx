"use client";

import React from 'react';
import { AlertCircle, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type CalloutType = 'info' | 'warning' | 'success' | 'error';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const icons = {
    info: <Info className="h-5 w-5 text-blue-500 dark:text-blue-400 flex-shrink-0" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-500 dark:text-amber-400 flex-shrink-0" />,
    success: <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 flex-shrink-0" />,
    error: <AlertCircle className="h-5 w-5 text-red-500 dark:text-red-400 flex-shrink-0" />,
  };

  const bgColors = {
    info: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
    warning: 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800',
    success: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800',
    error: 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800',
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

export default Callout;