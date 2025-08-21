"use client"

import { Suspense, useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

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

// Main Jobber form component
function JobberFormContent() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadJobberForm = async () => {
      try {
        // Preload the CSS
        const cssLink = document.createElement('link')
        cssLink.rel = 'stylesheet'
        cssLink.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css'
        cssLink.media = 'screen'
        document.head.appendChild(cssLink)

        // Wait a bit for CSS to load
        await new Promise(resolve => setTimeout(resolve, 100))

        // Load the script dynamically
        const script = document.createElement('script')
        script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js'
        script.setAttribute('clienthub_id', 'c6041d28-0ae8-4628-a9c4-14a29c7ff3e8')
        script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/c6041d28-0ae8-4628-a9c4-14a29c7ff3e8/public/work_request/embedded_work_request_form')
        
        script.onload = () => {
          setIsLoaded(true)
        }
        
        script.onerror = () => {
          setError('Failed to load quote form. Please try refreshing the page.')
        }

        document.body.appendChild(script)

        // Cleanup function
        return () => {
          document.body.removeChild(script)
          document.head.removeChild(cssLink)
        }
      } catch (err) {
        setError('Failed to load quote form. Please try refreshing the page.')
      }
    }

    loadJobberForm()
  }, [])

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-800 mb-4">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="retro-button-navy"
        >
          Refresh Page
        </button>
      </div>
    )
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-white rounded-lg">
          <JobberFormSkeleton />
        </div>
      )}
      
      {/* Jobber form container */}
      <div 
        id="c6041d28-0ae8-4628-a9c4-14a29c7ff3e8"
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ minHeight: '400px' }}
      />
      
      {/* Loading indicator */}
      {!isLoaded && !error && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="flex items-center space-x-2 text-navy">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span className="font-medium">Loading quote form...</span>
          </div>
        </div>
      )}
    </div>
  )
}

// Main exported component with Suspense
export default function JobberForm() {
  return (
    <div className="retro-card">
      <Suspense fallback={<JobberFormSkeleton />}>
        <JobberFormContent />
      </Suspense>
    </div>
  )
}
