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

// Simplified and more reliable Jobber form component
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
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Simplified Jobber form loading
  useEffect(() => {
    if (!isVisible) return

    console.log('Loading Jobber form...')
    
    // Clean up any existing scripts/styles first
    const existingScript = document.querySelector('script[src*="work_request_embed_snippet.js"]')
    if (existingScript) {
      existingScript.remove()
    }
    
    // Load CSS
    const cssLink = document.createElement('link')
    cssLink.rel = 'stylesheet'
    cssLink.href = JOBBER_CSS_URL
    cssLink.media = 'all'
    document.head.appendChild(cssLink)

    // Load and execute script
    const script = document.createElement('script')
    script.src = JOBBER_JS_URL
    script.setAttribute('clienthub_id', CLIENT_HUB_ID)
    script.setAttribute('form_url', FORM_URL)
    script.async = true
    
    script.onload = () => {
      console.log('Jobber script loaded successfully')
      
      // Simple form ready check
      const checkForm = () => {
        const formElement = document.getElementById(CLIENT_HUB_ID)
        if (formElement) {
          console.log('Form element found')
          setIsLoaded(true)
        } else {
          console.log('Form element not found, retrying...')
          setTimeout(checkForm, 100)
        }
      }
      
      // Start checking after a brief delay
      setTimeout(checkForm, 200)
    }
    
    script.onerror = (e) => {
      console.error('Jobber script failed to load:', e)
      setError('Form temporarily unavailable. Please call us directly at (714) 497-0035.')
    }
    
    document.head.appendChild(script)

    // Fallback timer
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback timer triggered')
      setIsLoaded(true)
    }, 3000)

    return () => {
      clearTimeout(fallbackTimer)
    }
  }, [isVisible])

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-800 mb-4">{error}</p>
        <div className="space-y-4">
          <a 
            href="tel:(714) 497-0035" 
            className="retro-button inline-block mr-4"
          >
            📞 Call (714) 497-0035
          </a>
          <a 
            href="mailto:support@shimmershinepropertydetailing.com?subject=Free Quote Request&body=Hi! I'd like to request a free quote for window cleaning services. Please contact me at your earliest convenience."
            className="retro-button-navy inline-block"
          >
            ✉️ Email for Quote
          </a>
        </div>
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
      
      {/* Manual refresh option if form doesn't load */}
      {isVisible && !isLoaded && !error && (
        <div className="absolute bottom-4 right-4 z-30">
          <button
            onClick={() => window.location.reload()}
            className="bg-yellow text-navy px-3 py-1 rounded text-xs font-medium hover:bg-yellow-400 transition-colors"
          >
            Refresh Form
          </button>
        </div>
      )}
    </div>
  )
}

// Main exported component with enhanced styling
export default function JobberForm() {
  return (
    <div className="jobber-form-container w-full">
      {/* Enhanced Form Header */}
      <div className="form-section-header">
        <div className="bg-yellow text-navy px-4 py-2 rounded-full font-bold text-sm mb-3 inline-block animate-pulse">
          🚨 URGENT: Only 12 Spots Left This Month!
        </div>
        <h3 className="heading-primary text-2xl mb-2">Get Your FREE Quote + 10% OFF</h3>
        <p className="body-text text-gray-600 mb-2">Only 4 fields required • Takes 30 seconds • Guaranteed 2-hour response!</p>
        <p className="text-sm text-green-600 font-medium">💰 Save $50-200 on your first service</p>
      </div>
      
      {/* Enhanced Trust Indicators */}
      <div className="trust-indicator">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>SSL Secured</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>No Spam Ever</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>100% Free Quote</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>2-Hour Response</span>
        </div>
      </div>
      
      {/* Enhanced Conversion Booster */}
      <div className="conversion-booster">
        <div className="bg-gradient-to-r from-red-50 to-yellow-50 border-2 border-yellow rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center animate-pulse">
              <span className="text-navy font-bold text-sm">🔥</span>
            </div>
            <div>
              <p className="font-bold text-navy text-sm">🚨 LAST CHANCE: 10% Off + FREE Quote Expires Soon!</p>
              <p className="text-xs text-gray-600">Join 47 customers who saved $50-200 this week</p>
            </div>
          </div>
        </div>
      </div>
      
      <Suspense fallback={<JobberFormSkeleton />}>
        <JobberFormContent />
      </Suspense>
    </div>
  )
}
