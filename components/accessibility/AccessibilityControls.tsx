'use client';

import { useAccessibility } from './AccessibilityContext';
import { Button } from '@/components/ui/button';
import { 
  ZoomIn, 
  ZoomOut, 
  Eye, 
  Monitor, 
  X 
} from 'lucide-react';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import React from 'react';

export function AccessibilityControls() {
  const { 
    reducedMotion, 
    highContrast, 
    fontSize, 
    toggleReducedMotion, 
    toggleHighContrast,
    setFontSize
  } = useAccessibility();
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed bottom-4 left-4 z-50" aria-label="Accessibility options">
          <Eye className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Accessibility Settings</SheetTitle>
        </SheetHeader>
        <div className="py-4 space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Motion</h3>
            <div className="flex items-center">
              <Button 
                variant={reducedMotion ? "default" : "outline"} 
                onClick={toggleReducedMotion}
                aria-pressed={reducedMotion}
                className="w-full"
              >
                {reducedMotion ? "Reduced Motion: ON" : "Reduced Motion: OFF"}
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Contrast</h3>
            <div className="flex items-center">
              <Button 
                variant={highContrast ? "default" : "outline"} 
                onClick={toggleHighContrast}
                aria-pressed={highContrast}
                className="w-full"
              >
                {highContrast ? "High Contrast: ON" : "High Contrast: OFF"}
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Text Size</h3>
            <div className="flex items-center space-x-2">
              <Button 
                variant={fontSize === 'default' ? "default" : "outline"} 
                onClick={() => setFontSize('default')}
                aria-pressed={fontSize === 'default'}
                className="flex-1"
              >
                Default
              </Button>
              <Button 
                variant={fontSize === 'large' ? "default" : "outline"} 
                onClick={() => setFontSize('large')}
                aria-pressed={fontSize === 'large'}
                className="flex-1"
              >
                Large
              </Button>
              <Button 
                variant={fontSize === 'x-large' ? "default" : "outline"} 
                onClick={() => setFontSize('x-large')}
                aria-pressed={fontSize === 'x-large'}
                className="flex-1"
              >
                X-Large
              </Button>
            </div>
          </div>
        </div>
        <SheetClose asChild>
          <Button variant="outline" className="mt-4 w-full">
            Close
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}