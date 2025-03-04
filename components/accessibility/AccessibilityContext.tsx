'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface AccessibilityContextType {
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: 'default' | 'large' | 'x-large';
  toggleReducedMotion: () => void;
  toggleHighContrast: () => void;
  setFontSize: (size: 'default' | 'large' | 'x-large') => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<'default' | 'large' | 'x-large'>('default');

  // Initialize from localStorage on client side
  useEffect(() => {
    // Get settings from localStorage if available
    const storedReducedMotion = localStorage.getItem('reducedMotion') === 'true';
    const storedHighContrast = localStorage.getItem('highContrast') === 'true';
    const storedFontSize = localStorage.getItem('fontSize') as 'default' | 'large' | 'x-large' || 'default';
    
    setReducedMotion(storedReducedMotion);
    setHighContrast(storedHighContrast);
    setFontSize(storedFontSize);
    
    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && localStorage.getItem('reducedMotion') === null) {
      setReducedMotion(true);
    }
    
    // Apply settings to document
    document.documentElement.classList.toggle('reduce-motion', storedReducedMotion);
    document.documentElement.classList.toggle('high-contrast', storedHighContrast);
    document.documentElement.classList.toggle('font-size-large', storedFontSize === 'large');
    document.documentElement.classList.toggle('font-size-x-large', storedFontSize === 'x-large');
  }, []);

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem('reducedMotion', String(newValue));
    document.documentElement.classList.toggle('reduce-motion', newValue);
  };

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem('highContrast', String(newValue));
    document.documentElement.classList.toggle('high-contrast', newValue);
  };

  const handleSetFontSize = (size: 'default' | 'large' | 'x-large') => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
    
    // Remove all font size classes first
    document.documentElement.classList.remove('font-size-large', 'font-size-x-large');
    
    // Add appropriate class if needed
    if (size === 'large') {
      document.documentElement.classList.add('font-size-large');
    } else if (size === 'x-large') {
      document.documentElement.classList.add('font-size-x-large');
    }
  };

  return (
    <AccessibilityContext.Provider
      value={{
        reducedMotion,
        highContrast,
        fontSize,
        toggleReducedMotion,
        toggleHighContrast,
        setFontSize: handleSetFontSize,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
}