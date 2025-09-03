'use client'

import { useEffect } from 'react'

// Performance optimization utilities
export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical images
      const criticalImages = [
        '/mascot.png',
        '/logo.png',
        '/window-cleaning-before-after.png'
      ]

      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })

      // Preload critical fonts (if not already preloaded)
      const criticalFonts = [
        'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2'
      ]

      criticalFonts.forEach(href => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'font'
        link.type = 'font/woff2'
        link.crossOrigin = 'anonymous'
        link.href = href
        document.head.appendChild(link)
      })
    }

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Delay non-critical third-party scripts
      const delayedScripts = document.querySelectorAll('script[data-delay]')
      
      const loadDelayedScripts = () => {
        delayedScripts.forEach(script => {
          const newScript = document.createElement('script')
          Array.from(script.attributes).forEach(attr => {
            if (attr.name !== 'data-delay') {
              newScript.setAttribute(attr.name, attr.value)
            }
          })
          newScript.innerHTML = script.innerHTML
          script.parentNode?.replaceChild(newScript, script)
        })
      }

      // Load delayed scripts after user interaction or 3 seconds
      const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
      let loaded = false

      const loadScripts = () => {
        if (!loaded) {
          loaded = true
          setTimeout(loadDelayedScripts, 100)
          events.forEach(event => {
            window.removeEventListener(event, loadScripts)
          })
        }
      }

      events.forEach(event => {
        window.addEventListener(event, loadScripts, { passive: true })
      })

      // Fallback: load after 3 seconds
      setTimeout(loadScripts, 3000)
    }

    // Implement resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'd3ey4dbjkt2f6s.cloudfront.net',
        'clienthub.getjobber.com'
      ]

      domains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'dns-prefetch'
        link.href = `//${domain}`
        document.head.appendChild(link)
      })

      // Preconnect to critical domains
      const criticalDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com'
      ]

      criticalDomains.forEach(domain => {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = `https://${domain}`
        link.crossOrigin = 'anonymous'
        document.head.appendChild(link)
      })
    }

    // Optimize images with Intersection Observer
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]')
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              img.src = img.dataset.src!
              img.classList.remove('lazy')
              imageObserver.unobserve(img)
            }
          })
        }, {
          rootMargin: '50px 0px'
        })

        images.forEach(img => imageObserver.observe(img))
      } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
          const image = img as HTMLImageElement
          image.src = image.dataset.src!
        })
      }
    }

    // Run optimizations
    preloadCriticalResources()
    optimizeThirdPartyScripts()
    addResourceHints()
    optimizeImages()

    // Cleanup function
    return () => {
      // Remove any event listeners or observers if needed
    }
  }, [])

  return null
}

// Hook for performance monitoring
export function usePerformanceMonitoring() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log long tasks (> 50ms)
          if (entry.duration > 50) {
            console.warn(`Long task detected: ${entry.duration}ms`)
          }
        }
      })

      try {
        observer.observe({ entryTypes: ['longtask'] })
      } catch (e) {
        console.warn('Long task monitoring not supported')
      }

      return () => observer.disconnect()
    }
  }, [])
}

// Utility function to defer non-critical CSS
export function deferNonCriticalCSS() {
  if (typeof window !== 'undefined') {
    const deferredStyles = document.querySelectorAll('link[data-defer]')
    
    deferredStyles.forEach(link => {
      const newLink = document.createElement('link')
      newLink.rel = 'stylesheet'
      newLink.href = (link as HTMLLinkElement).dataset.defer!
      newLink.media = 'print'
      newLink.onload = function() {
        newLink.media = 'all'
      }
      document.head.appendChild(newLink)
      link.remove()
    })
  }
}
