'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // Calculate how far the user has scrolled
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setProgress(scrollPercent * 100);
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateProgress);

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
      <motion.div
        className="h-full bg-primary"
        style={{ width: `${progress}%` }}
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
    </div>
  );
}
