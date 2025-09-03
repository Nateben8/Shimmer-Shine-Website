'use client'

import { useEffect } from 'react'
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'

// Core Web Vitals monitoring component
export default function WebVitals() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Function to send metrics to analytics
    function sendToAnalytics(metric: any) {
      // Send to Google Analytics 4 if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        })
      }

      // Log to console in development for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log('Web Vital:', metric.name, metric.value, metric.rating)
      }

      // You can also send to other analytics services here
      // Example: send to your own analytics endpoint
      /*
      fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metric)
      }).catch(console.error)
      */
    }

    // Measure Core Web Vitals
    onCLS(sendToAnalytics)  // Cumulative Layout Shift
    onINP(sendToAnalytics)  // Interaction to Next Paint (replaces FID)
    onFCP(sendToAnalytics)  // First Contentful Paint
    onLCP(sendToAnalytics)  // Largest Contentful Paint
    onTTFB(sendToAnalytics) // Time to First Byte
  }, [])

  return null // This component doesn't render anything
}

// Performance observer for additional metrics
export function usePerformanceObserver() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

    // Observe long tasks (> 50ms)
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          console.warn('Long task detected:', entry.duration + 'ms')
        }
      }
    })

    // Observe layout shifts
    const layoutShiftObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          console.log('Layout shift:', (entry as any).value)
        }
      }
    })

    try {
      longTaskObserver.observe({ entryTypes: ['longtask'] })
      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] })
    } catch (e) {
      // Some browsers might not support all entry types
      console.warn('Performance observer not fully supported')
    }

    return () => {
      longTaskObserver.disconnect()
      layoutShiftObserver.disconnect()
    }
  }, [])
}
