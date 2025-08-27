"use client"

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

interface InteractiveMapProps {
  className?: string
}

export default function InteractiveMap({ className = '' }: InteractiveMapProps) {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)

  useEffect(() => {
    // Set a timeout to show fallback if map doesn't load
    const timer = setTimeout(() => {
      if (!mapLoaded) {
        setMapError(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [mapLoaded])

  const handleMapLoad = () => {
    setMapLoaded(true)
    setMapError(false)
  }

  const handleMapError = () => {
    setMapError(true)
    setMapLoaded(false)
  }

  return (
    <div className={`relative h-96 rounded-lg overflow-hidden bg-gray-100 ${className}`}>
      {/* Google Maps Embed */}
      {!mapError && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.8827409715!2d-118.7417!3d33.8358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sOrange%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1703875200000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Shimmer Shine Property Detailing Service Areas - Orange County, Los Angeles, San Diego"
          className="w-full h-full"
          onLoad={handleMapLoad}
          onError={handleMapError}
        />
      )}
      
      {/* Fallback Map Display */}
      {mapError && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center border-4 border-navy shadow-lg">
          <div className="text-center text-navy bg-white/90 p-8 rounded-lg shadow-retro max-w-md">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-2xl font-bold text-navy mb-3">Southern California</p>
            <p className="text-lg text-gray-700 mb-4">Orange County • Los Angeles • San Diego</p>
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow fill-current" />
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-4">Trusted Since 2021</p>
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/?q=Orange+County,+CA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-navy/90 transition-colors"
              >
                🗺️ Open in Google Maps
              </a>
              <button 
                onClick={() => {
                  setMapError(false)
                  setMapLoaded(false)
                }}
                className="block w-full bg-yellow text-navy px-4 py-2 rounded-lg font-bold hover:bg-yellow/90 transition-colors"
              >
                🔄 Retry Map
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Loading State */}
      {!mapLoaded && !mapError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-navy">
            <div className="animate-spin w-8 h-8 border-4 border-navy border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-lg font-bold">Loading Interactive Map...</p>
            <p className="text-sm text-gray-600">Southern California Service Areas</p>
          </div>
        </div>
      )}
      
      {/* Interactive Overlay - Only show when map is loaded */}
      {mapLoaded && !mapError && (
        <>
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border-2 border-yellow max-w-xs">
            <div className="text-center text-navy">
              <div className="text-lg font-bold mb-2">🗺️ Service Areas</div>
              <p className="text-sm text-gray-700 mb-2">Orange • LA • San Diego</p>
              <div className="flex justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-yellow fill-current" />
                ))}
              </div>
              <p className="text-xs text-gray-600">Trusted Since 2021</p>
            </div>
          </div>
          
          {/* Interactive Controls Hint */}
          <div className="absolute bottom-4 right-4 bg-navy/90 text-white px-3 py-2 rounded-lg text-xs">
            <p>🖱️ Click & Drag • 🔍 Zoom</p>
          </div>
        </>
      )}
    </div>
  )
}
