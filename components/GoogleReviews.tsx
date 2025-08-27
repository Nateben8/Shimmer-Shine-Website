"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, User, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { GoogleReview, GooglePlaceDetails } from "@/lib/googleReviews"

interface GoogleReviewsProps {
  maxReviews?: number
  showHeader?: boolean
  className?: string
  compact?: boolean
  sectionClassName?: string
  headerTitle?: string
  showViewAllButton?: boolean
}

export default function GoogleReviews({ 
  maxReviews = 3, 
  showHeader = true, 
  className = "",
  compact = false,
  sectionClassName = "",
  headerTitle = "What Our Customers Say",
  showViewAllButton = true
}: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<GoogleReview[]>([])
  const [placeDetails, setPlaceDetails] = useState<GooglePlaceDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [source, setSource] = useState<'google' | 'fallback'>('fallback')
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  useEffect(() => {
    async function loadReviews() {
      // Check cache first for instant loading
      if (typeof window !== 'undefined') {
        const cached = localStorage.getItem('google-reviews-cache')
        if (cached) {
          try {
            const { data, timestamp, ttl } = JSON.parse(cached)
            if (Date.now() - timestamp < ttl) {
              setPlaceDetails(data)
              setReviews(data.reviews?.slice(0, maxReviews) || [])
              setSource(data.source || 'fallback')
              setLoading(false)
              console.log('Loaded reviews from cache instantly')
              return
            }
          } catch (cacheErr) {
            console.error('Cache parse error:', cacheErr)
          }
        }
      }

      try {
        // Performance optimization: Add cache control headers
        const response = await fetch('/api/google-reviews', {
          headers: {
            'Cache-Control': 'public, s-maxage=900, stale-while-revalidate=1800'
          }
        })
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews')
        }

        const data = await response.json()
        
        if (data.success && data.data) {
          setPlaceDetails(data.data)
          setReviews(data.data.reviews?.slice(0, maxReviews) || [])
          setSource(data.source || 'fallback')
          
          // Cache in localStorage for instant subsequent loads
          if (typeof window !== 'undefined') {
            localStorage.setItem('google-reviews-cache', JSON.stringify({
              data: data.data,
              timestamp: Date.now(),
              ttl: 900000 // 15 minutes
            }))
          }
        }
      } catch (err) {
        console.error('Error loading Google reviews:', err)
        
        // Try to load from localStorage cache on error
        if (typeof window !== 'undefined') {
          const cached = localStorage.getItem('google-reviews-cache')
          if (cached) {
            try {
              const { data, timestamp, ttl } = JSON.parse(cached)
              // Use stale cache on error (up to 1 hour old)
              if (Date.now() - timestamp < 3600000) {
                setPlaceDetails(data)
                setReviews(data.reviews?.slice(0, maxReviews) || [])
                setSource(data.source || 'fallback')
                console.log('Loaded stale reviews from cache due to error')
              }
            } catch (cacheErr) {
              console.error('Cache parse error:', cacheErr)
            }
          }
        }
      } finally {
        setLoading(false)
      }
    }

    loadReviews()
  }, [maxReviews])

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  if (loading) {
    return (
      <section className={`py-16 ${sectionClassName}`}>
        <div className="container mx-auto px-4">
          {showHeader && (
            <div className="text-center mb-12">
              <div className="h-12 bg-gray-200 rounded w-80 mx-auto mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
            </div>
          )}
          <div className={`grid gap-8 ${compact ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
            {[...Array(compact ? 2 : 3)].map((_, i) => (
              <Card key={i} className="retro-card animate-pulse">
                <CardHeader>
                  <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                  <div className="h-5 bg-gray-200 rounded w-32 mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded w-40"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (reviews.length === 0) {
    return (
      <section className={`py-16 ${sectionClassName}`}>
        <div className="container mx-auto px-4">
          <div className="text-center py-8">
            <p className="text-gray-600">Reviews temporarily unavailable</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`py-8 sm:py-12 ${sectionClassName} ${className} relative overflow-hidden bg-gradient-to-br from-gray-50 to-white`}>
      {/* Brand-themed Background Overlays */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Cleaning Bucket SVG */}
        <div className="absolute top-10 left-10 w-32 h-32 text-navy">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <path d="M20 30 L80 30 L75 80 L25 80 Z" />
            <ellipse cx="50" cy="30" rx="30" ry="8" />
            <path d="M15 25 Q50 15 85 25" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="35" cy="50" r="3" opacity="0.6" />
            <circle cx="65" cy="60" r="2" opacity="0.4" />
          </svg>
        </div>
        
        {/* Squeegee SVG */}
        <div className="absolute bottom-20 right-16 w-24 h-24 text-yellow rotate-45">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <rect x="10" y="40" width="80" height="8" rx="4" />
            <rect x="45" y="48" width="10" height="40" rx="2" />
            <rect x="8" y="38" width="84" height="3" opacity="0.6" />
          </svg>
        </div>

        {/* Window Cleaning Tool */}
        <div className="absolute top-1/3 right-10 w-20 h-20 text-navy opacity-30 -rotate-12">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <rect x="20" y="10" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="3" />
            <rect x="42" y="50" width="16" height="30" rx="8" />
            <line x1="25" y1="15" x2="75" y2="15" stroke="currentColor" strokeWidth="1" />
            <line x1="25" y1="25" x2="75" y2="25" stroke="currentColor" strokeWidth="1" />
            <line x1="25" y1="35" x2="75" y2="35" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Spray Bottle */}
        <div className="absolute bottom-32 left-20 w-16 h-16 text-yellow opacity-40 rotate-12">
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
            <rect x="30" y="40" width="25" height="45" rx="5" />
            <rect x="35" y="20" width="15" height="25" rx="3" />
            <circle cx="42.5" cy="15" r="3" />
            <path d="M55 30 L70 25 L68 35 Z" />
          </svg>
        </div>

        {/* Sparkle Effects */}
        <div className="absolute top-20 left-1/3 w-4 h-4 text-yellow animate-pulse">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
          </svg>
        </div>
        <div className="absolute bottom-40 right-1/4 w-3 h-3 text-navy animate-bounce delay-300">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
            <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {showHeader && (
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl mb-4 px-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              <span className="block sm:inline">What Our</span>{' '}
              <span className="block sm:inline">Customers Say</span>
            </h2>
            {placeDetails && (
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 sm:h-6 sm:w-6 ${i < Math.floor(placeDetails.rating) ? 'text-yellow fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-lg sm:text-xl font-bold text-navy">
                  5 Star Rated Service
                </span>
                <a 
                  href="https://maps.app.goo.gl/tZ2ZZzsRiexSvotn9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-navy hover:text-yellow transition-colors"
                  title="View on Google"
                >
                  <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Optimized Review Display */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows - Much Larger on Mobile */}
          <button
            onClick={prevReview}
            disabled={reviews.length <= 1}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-20 h-20 sm:w-12 sm:h-12 bg-white hover:bg-gray-50 disabled:bg-gray-200 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl border-3 border-yellow"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-12 w-12 sm:h-6 sm:w-6 text-navy" />
          </button>

          <button
            onClick={nextReview}
            disabled={reviews.length <= 1}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-20 h-20 sm:w-12 sm:h-12 bg-white hover:bg-gray-50 disabled:bg-gray-200 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl border-3 border-yellow"
            aria-label="Next review"
          >
            <ChevronRight className="h-12 w-12 sm:h-6 sm:w-6 text-navy" />
          </button>

          {/* Current Review - Compact */}
          <div className="mx-24 sm:mx-16">
            {reviews.length > 0 && (
              <div className="bg-white rounded-xl shadow-xl border-2 border-yellow/20 p-4 sm:p-6 md:p-8 relative overflow-hidden">
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 bg-yellow/10 rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 bg-navy/10 rounded-tl-full"></div>
                
                {/* Quote Icon */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 text-yellow/30">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                  </svg>
                </div>

                <div className="text-center space-y-3 sm:space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 sm:h-6 sm:w-6 ${i < reviews[currentReviewIndex].rating ? 'text-yellow fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-base sm:text-lg md:text-xl text-navy leading-relaxed font-medium italic max-w-3xl mx-auto">
                    "{reviews[currentReviewIndex].text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="pt-3 sm:pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-navy rounded-full flex items-center justify-center">
                        <User className="h-4 w-4 sm:h-5 sm:w-5 text-yellow" />
                      </div>
                      <div className="text-left">
                        <h4 className="heading-primary text-sm sm:text-base md:text-lg font-bold text-navy">
                          {reviews[currentReviewIndex].author_name}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Google Review • {reviews[currentReviewIndex].relative_time_description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Review Indicators - Hidden on Mobile */}
          {reviews.length > 1 && (
            <div className="hidden sm:flex items-center justify-center space-x-2 mt-4 sm:mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    index === currentReviewIndex 
                      ? 'bg-yellow scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {showViewAllButton && (
          <div className="text-center mt-6 sm:mt-8">
            <a
              href="https://maps.app.goo.gl/tZ2ZZzsRiexSvotn9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="default"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold"
              >
                Read All Google Reviews
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
