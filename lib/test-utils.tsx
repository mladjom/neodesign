import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { AccessibilityProvider } from '@/components/accessibility/AccessibilityContext';

// Custom render function that includes providers
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <AccessibilityProvider>
          {children}
        </AccessibilityProvider>
      </ThemeProvider>
    ),
    ...options,
  });
}

// Re-export everything from testing-library
export * from '@testing-library/react';
export { customRender as render };