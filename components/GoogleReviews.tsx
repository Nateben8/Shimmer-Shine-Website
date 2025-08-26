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
      try {
        const response = await fetch('/api/google-reviews')
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews')
        }

        const data = await response.json()
        
        if (data.success && data.data) {
          setPlaceDetails(data.data)
          setReviews(data.data.reviews?.slice(0, maxReviews) || [])
          setSource(data.source || 'fallback')
        }
      } catch (err) {
        console.error('Error loading Google reviews:', err)
        // Component will show loading state
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
    <section className={`py-16 ${sectionClassName} ${className}`}>
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="text-center mb-12">
            <h2 className="heading-primary text-3xl sm:text-4xl md:text-5xl mb-4 px-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              <span className="block sm:inline">What Our</span>{' '}
              <span className="block sm:inline">Customers Say</span>
            </h2>
            {placeDetails && (
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-6 w-6 ${i < Math.floor(placeDetails.rating) ? 'text-yellow fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-xl font-bold text-gray-700">
                  5 Star Rated
                </span>
                <a 
                  href="https://maps.app.goo.gl/tZ2ZZzsRiexSvotn9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 ml-2"
                  title="View on Google"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Single Review Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4">
            {/* Previous Button */}
            <button
              onClick={prevReview}
              disabled={reviews.length <= 1}
              className="flex-shrink-0 w-12 h-12 bg-yellow hover:bg-yellow/90 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6 text-navy" />
            </button>

            {/* Current Review */}
            <div className="flex-1 max-w-2xl">
              {reviews.length > 0 && (
                <Card className="retro-card">
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < reviews[currentReviewIndex].rating ? 'text-yellow fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <CardTitle className="heading-primary text-xl mb-2">
                      {reviews[currentReviewIndex].author_name}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600">
                      Google Review • {reviews[currentReviewIndex].relative_time_description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="body-text text-gray-700 italic text-lg leading-relaxed">
                      "{reviews[currentReviewIndex].text}"
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={nextReview}
              disabled={reviews.length <= 1}
              className="flex-shrink-0 w-12 h-12 bg-yellow hover:bg-yellow/90 disabled:bg-gray-300 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="h-6 w-6 text-navy" />
            </button>
          </div>

          {/* Review Indicators */}
          {reviews.length > 1 && (
            <div className="flex items-center justify-center space-x-2 mt-6">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReviewIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReviewIndex 
                      ? 'bg-yellow scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {showViewAllButton && (
          <div className="text-center mt-12">
            <a
              href="https://maps.app.goo.gl/tZ2ZZzsRiexSvotn9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                Read All Google Reviews
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
