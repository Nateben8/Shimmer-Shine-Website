"use client"

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and when performance API is available
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined' || !window.performance) {
      return
    }

    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ('PerformanceObserver' in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          console.log('LCP:', lastEntry.startTime)
          
          // Report to analytics if needed
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              name: 'LCP',
              value: Math.round(lastEntry.startTime),
              event_category: 'Performance'
            })
          }
        })
        
        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch (e) {
          console.warn('LCP observer not supported')
        }

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            console.log('FID:', entry.processingStart - entry.startTime)
            
            if (typeof gtag !== 'undefined') {
              gtag('event', 'web_vitals', {
                name: 'FID',
                value: Math.round(entry.processingStart - entry.startTime),
                event_category: 'Performance'
              })
            }
          })
        })
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] })
        } catch (e) {
          console.warn('FID observer not supported')
        }

        // Cumulative Layout Shift (CLS)
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          console.log('CLS:', clsValue)
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              name: 'CLS',
              value: Math.round(clsValue * 1000),
              event_category: 'Performance'
            })
          }
        })
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] })
        } catch (e) {
          console.warn('CLS observer not supported')
        }
      }
    }

    // Monitor resource loading times
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource')
      const slowResources = resources.filter(resource => resource.duration > 1000)
      
      if (slowResources.length > 0) {
        console.warn('Slow loading resources:', slowResources.map(r => ({
          name: r.name,
          duration: Math.round(r.duration),
          size: r.transferSize
        })))
      }
    }

    // Run monitoring
    observeWebVitals()
    
    // Monitor resources after page load
    setTimeout(monitorResources, 2000)

    // Cleanup
    return () => {
      // Observers will be automatically cleaned up when component unmounts
    }
  }, [])

  return null // This component doesn't render anything
}
