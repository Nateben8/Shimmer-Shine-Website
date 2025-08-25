"use client"

import { Suspense, useEffect, useState, useCallback, useRef } from "react"
import { Loader2 } from "lucide-react"

// Performance constants
const JOBBER_CSS_URL = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css'
const JOBBER_JS_URL = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js'
const CLIENT_HUB_ID = 'c6041d28-0ae8-4628-a9c4-14a29c7ff3e8'
const FORM_URL = 'https://clienthub.getjobber.com/client_hubs/c6041d28-0ae8-4628-a9c4-14a29c7ff3e8/public/work_request/embedded_work_request_form'

// Skeleton loader component
function JobberFormSkeleton() {
  return (
    <div className="jobber-skeleton p-6 space-y-4">
      <div className="jobber-skeleton-field"></div>
      <div className="jobber-skeleton-field"></div>
      <div className="jobber-skeleton-field"></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="jobber-skeleton-field"></div>
        <div className="jobber-skeleton-field"></div>
      </div>
      <div className="jobber-skeleton-field h-24"></div>
      <div className="jobber-skeleton-button"></div>
    </div>
  )
}

// Optimized Jobber form component - faster loading
function JobberFormContent() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Load Jobber form when visible
  useEffect(() => {
    if (!isVisible) return

    console.log('Loading Jobber form...')
    
    // Preload CSS with higher priority
    const cssLink = document.createElement('link')
    cssLink.rel = 'preload'
    cssLink.as = 'style'
    cssLink.href = JOBBER_CSS_URL
    cssLink.onload = () => {
      cssLink.rel = 'stylesheet'
    }
    
    if (!document.querySelector('link[href*="work_request_embed.css"]')) {
      document.head.appendChild(cssLink)
    }

    // Load script with optimizations
    if (!document.querySelector('script[src*="work_request_embed_snippet.js"]')) {
      const script = document.createElement('script')
      script.src = JOBBER_JS_URL
      script.setAttribute('clienthub_id', CLIENT_HUB_ID)
      script.setAttribute('form_url', FORM_URL)
      script.async = true // Use async for better performance
      script.defer = true // Defer execution
      
      script.onload = () => {
        console.log('Jobber script loaded')
        // Small delay to ensure form is rendered
        setTimeout(() => setIsLoaded(true), 100)
      }
      
      script.onerror = () => {
        console.error('Jobber script failed')
        setError('Form failed to load')
      }
      
      document.head.appendChild(script)
    } else {
      // Script already exists, check if form is ready
      const checkFormReady = () => {
        const formElement = document.getElementById(CLIENT_HUB_ID)
        if (formElement && formElement.children.length > 0) {
          setIsLoaded(true)
        } else {
          setTimeout(checkFormReady, 100)
        }
      }
      checkFormReady()
    }

    // Reduced fallback timer - show form after 1 second
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback timer - showing form')
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(fallbackTimer)
  }, [isVisible])

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-800 mb-4">{error}</p>
        <a 
          href="tel:(714) 497-0035" 
          className="retro-button inline-block"
        >
          Call (714) 497-0035
        </a>
      </div>
    )
  }

  return (
    <div className="relative" ref={containerRef}>
      {/* Show skeleton while loading */}
      {(!isLoaded || !isVisible) && (
        <div className="absolute inset-0 z-10 bg-white rounded-lg">
          <JobberFormSkeleton />
        </div>
      )}
      
      {/* Jobber form container - matches the div from your embed code */}
      <div 
        id={CLIENT_HUB_ID}
        className={`w-full transition-opacity duration-300 ${isLoaded && isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ minHeight: '400px' }}
      />
      
      {/* Optimized loading indicator */}
      {!isLoaded && isVisible && !error && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="flex flex-col items-center space-y-2 text-navy">
            <Loader2 className="h-6 w-6 animate-spin text-yellow" />
            <div className="text-sm font-medium">Loading form...</div>
          </div>
        </div>
      )}
      
      {/* Lazy loading placeholder */}
      {!isVisible && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="flex flex-col items-center space-y-2 text-navy">
            <div className="text-sm font-medium">Form ready to load...</div>
          </div>
        </div>
      )}
    </div>
  )
}

// Main exported component with enhanced styling
export default function JobberForm() {
  return (
    <div className="jobber-form-container w-full">
      {/* Form Header */}
      <div className="form-section-header">
        <h3 className="heading-primary text-2xl mb-2">Get Your Free Quote</h3>
        <p className="body-text text-gray-600">Fill out the form below - we'll respond within 2 hours!</p>
      </div>
      
      {/* Trust Indicators */}
      <div className="trust-indicator">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>SSL Secured</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>No Spam</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Free Quote</span>
        </div>
      </div>
      
      {/* Conversion Booster */}
      <div className="conversion-booster">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
            <span className="text-navy font-bold text-sm">⚡</span>
          </div>
          <div>
            <p className="font-bold text-navy text-sm">Limited Time: 10% Off First Service!</p>
            <p className="text-xs text-gray-600">Book this month and save on your first cleaning</p>
          </div>
        </div>
      </div>
      
      <Suspense fallback={<JobberFormSkeleton />}>
        <JobberFormContent />
      </Suspense>
    </div>
  )
}
