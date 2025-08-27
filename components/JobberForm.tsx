"use client"

import { Suspense, useEffect, useState, useCallback, useRef } from "react"
import { Loader2 } from "lucide-react"

// Performance constants
const JOBBER_CSS_URL = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css'
const JOBBER_JS_URL = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js'
const CLIENT_HUB_ID = 'c6041d28-0ae8-4628-a9c4-14a29c7ff3e8'
const FORM_URL = 'https://clienthub.getjobber.com/client_hubs/c6041d28-0ae8-4628-a9c4-14a29c7ff3e8/public/work_request/embedded_work_request_form'

// Enhanced loading form indicator with professional animations
function JobberFormSkeleton() {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl border-2 border-navy/20 p-6 shadow-2xl relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow/10 to-transparent animate-pulse"></div>
      
      {/* Loading Header with Enhanced Animation */}
      <div className="text-center mb-8 relative z-10">
        <div className="flex items-center justify-center space-x-3 mb-4">
          {/* Animated Sparkles */}
          <div className="w-5 h-5 text-yellow animate-bounce">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="heading-primary text-xl text-navy">Loading Your Quote Form</div>
          <div className="w-5 h-5 text-yellow animate-bounce delay-300">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
        </div>
        
        {/* Animated Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-yellow to-navy rounded-full progress-bar-fill"></div>
        </div>
        
        <div className="body-text text-gray-600 mb-2">Preparing your personalized quote form...</div>
        <div className="text-xs text-navy font-medium">🔒 SSL Secured • 100% Free • 2-Hour Response Guaranteed</div>
      </div>

      {/* Enhanced Form Field Skeletons with Staggered Animation */}
      <div className="space-y-6 relative z-10">
        {/* Name Field */}
        <div className="stagger-fade" style={{animationDelay: '0.1s'}}>
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-20 mb-2 shimmer-effect"></div>
          <div className="h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border-2 border-gray-200 shimmer-effect"></div>
        </div>
        
        {/* Email Field */}
        <div className="stagger-fade" style={{animationDelay: '0.2s'}}>
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-24 mb-2 shimmer-effect"></div>
          <div className="h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border-2 border-gray-200 shimmer-effect"></div>
        </div>
        
        {/* Phone Field */}
        <div className="stagger-fade" style={{animationDelay: '0.3s'}}>
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-28 mb-2 shimmer-effect"></div>
          <div className="h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border-2 border-gray-200 shimmer-effect"></div>
        </div>
        
        {/* Service Selection */}
        <div className="stagger-fade" style={{animationDelay: '0.4s'}}>
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-32 mb-2 shimmer-effect"></div>
          <div className="h-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border-2 border-gray-200 shimmer-effect"></div>
        </div>
        
        {/* Message Field */}
        <div className="stagger-fade" style={{animationDelay: '0.5s'}}>
          <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-36 mb-2 shimmer-effect"></div>
          <div className="h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border-2 border-gray-200 shimmer-effect"></div>
        </div>
        
        {/* Enhanced Submit Button */}
        <div className="pt-4" style={{animationDelay: '0.6s'}}>
          <div className="h-14 bg-gradient-to-r from-yellow to-yellow/90 rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden border-2 border-navy">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <span className="heading-primary text-navy">Preparing Your Form</span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-navy rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-navy rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-navy rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Trust Indicators */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 relative z-10">
        <div className="flex flex-col items-center space-y-1 bg-white/50 rounded-lg p-3 animate-pulse">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
          <span className="text-xs font-medium text-gray-600">SSL Secured</span>
        </div>
        <div className="flex flex-col items-center space-y-1 bg-white/50 rounded-lg p-3 animate-pulse" style={{animationDelay: '0.1s'}}>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce delay-100"></div>
          <span className="text-xs font-medium text-gray-600">100% Free</span>
        </div>
        <div className="flex flex-col items-center space-y-1 bg-white/50 rounded-lg p-3 animate-pulse" style={{animationDelay: '0.2s'}}>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce delay-200"></div>
          <span className="text-xs font-medium text-gray-600">2-Hour Response</span>
        </div>
        <div className="flex flex-col items-center space-y-1 bg-white/50 rounded-lg p-3 animate-pulse" style={{animationDelay: '0.3s'}}>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce delay-300"></div>
          <span className="text-xs font-medium text-gray-600">No Spam</span>
        </div>
      </div>
      
      {/* Loading Tips */}
      <div className="mt-6 text-center relative z-10">
        <div className="bg-navy/10 rounded-lg p-4 border border-navy/20">
          <div className="text-sm text-navy font-medium mb-2">💡 While you wait...</div>
          <div className="text-xs text-gray-600">
            Our form is being customized with your local pricing and available time slots!
          </div>
        </div>
      </div>
    </div>
  )
}

// Simplified and more reliable Jobber form component
function JobberFormContent() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showLoading, setShowLoading] = useState(true)
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

  // Enhanced loading animation with minimum display time
  useEffect(() => {
    // Always show loading for at least 3 seconds for better UX
    const minLoadingTimer = setTimeout(() => {
      setShowLoading(false)
    }, 3000)

    return () => clearTimeout(minLoadingTimer)
  }, [])

  // Simplified Jobber form loading - load immediately
  useEffect(() => {
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
      
      // Set loaded after a reasonable delay to allow form to render
      setTimeout(() => {
        setIsLoaded(true)
        console.log('Form marked as loaded')
      }, 1000)
    }
    
    script.onerror = (e) => {
      console.error('Jobber script failed to load:', e)
      setError('Form temporarily unavailable. Please call us directly at (714) 497-0035.')
      setShowLoading(false)
    }
    
    document.head.appendChild(script)

    // Fallback timer - ensure form shows after maximum wait time
    const fallbackTimer = setTimeout(() => {
      console.log('Fallback timer triggered - forcing form to show')
      setIsLoaded(true)
      setShowLoading(false)
    }, 4000)

    return () => {
      clearTimeout(fallbackTimer)
    }
  }, [])

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-800 mb-4">{error}</p>
        <div className="space-y-4">
          <a 
            href="tel:(714) 497-0035" 
            className="retro-button inline-block mr-4"
          >
            Call (714) 497-0035
          </a>
          <a 
            href="mailto:support@shimmershinepropertydetailing.com?subject=Free Quote Request&body=Hi! I'd like to request a free quote for window cleaning services. Please contact me at your earliest convenience."
            className="retro-button-navy inline-block"
          >
            Email for Quote
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="relative" ref={containerRef}>
      {/* Show loading bar while form is loading */}
      {(showLoading && !isLoaded) ? (
        <div className="w-full">
          <JobberFormSkeleton />
        </div>
      ) : (
        <>
          {/* Jobber form container - matches the div from your embed code */}
          <div 
            id={CLIENT_HUB_ID}
            className="w-full transition-opacity duration-500 opacity-100"
            style={{ minHeight: '400px' }}
          />
          
          {/* Manual refresh option if form doesn't load */}
          {!isLoaded && !error && (
            <div className="absolute bottom-4 right-4 z-30">
              <button
                onClick={() => window.location.reload()}
                className="bg-yellow text-navy px-3 py-1 rounded text-xs font-medium hover:bg-yellow-400 transition-colors"
              >
                Refresh Form
              </button>
            </div>
          )}
        </>
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
        <div className="bg-yellow text-navy px-4 py-2 rounded-full font-bold text-sm mb-3 inline-block">
          Professional Service Since 2021
        </div>
        <h3 className="heading-primary text-2xl mb-2">Get Your FREE Quote + 10% OFF</h3>

        <p className="text-sm text-green-600 font-medium">Save $50-200 on your first service</p>
      </div>
      
      {/* Enhanced Trust Indicators - Always Visible */}
      <div className="trust-indicator mb-6">
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
      
      {/* Form Content Area */}
      <div className="relative">
        <Suspense fallback={<JobberFormSkeleton />}>
          <JobberFormContent />
        </Suspense>
      </div>
    </div>
  )
}
