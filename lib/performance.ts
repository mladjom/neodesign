declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackPageLoad() {
    if (typeof window === 'undefined') return;
    
    // Track initial page load
    if (window.performance) {
      const pageNavigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (pageNavigation) {
        const pageLoadTime = pageNavigation.loadEventEnd - pageNavigation.startTime;
        // Send to analytics or log
        console.info(`Page load time: ${pageLoadTime.toFixed(2)}ms`);
        
        // You could send this to your analytics platform
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'page_performance', {
            'page_load_time': pageLoadTime,
            'page_path': window.location.pathname,
          });
        }
      }
    }
    
    // Track Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.info(`Largest Contentful Paint: ${lastEntry.startTime.toFixed(2)}ms`);
      
      // Report to analytics if available
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'web_vitals', {
          'metric_name': 'LCP',
          'metric_value': lastEntry.startTime,
          'page_path': window.location.pathname,
        });
      }
    });
    
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  }