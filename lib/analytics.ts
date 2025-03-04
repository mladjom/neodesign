declare global {
  interface Window {
    dataLayer: any[];
  }
}

export function trackSearch(query: string) {
    if (typeof window !== 'undefined') {
      // Track in data layer for Google Analytics
      if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
          event: 'search',
          searchTerm: query
        });
      }
      
      // Track in console for development
      console.info(`Search tracked: "${query}"`);
      
      // You could also track to your own analytics endpoint
      // fetch('/api/analytics/search', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ query })
      // }).catch(err => console.error('Error tracking search:', err));
    }
  }
  
  export function trackPageView(url: string) {
    if (typeof window !== 'undefined') {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
          page_path: url,
        });
      }
      
      // Log for development
      console.info(`Page view tracked: "${url}"`);
    }
  }
  
  export function trackEvent(category: string, action: string, label?: string, value?: number) {
    if (typeof window !== 'undefined') {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }
      
      // Log for development
      console.info(`Event tracked: category="${category}", action="${action}", label="${label || ''}", value=${value || 0}`);
    }
  }