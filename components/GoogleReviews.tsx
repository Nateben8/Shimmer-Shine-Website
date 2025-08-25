"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, User } from "lucide-react"
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
            <h2 className="heading-primary text-4xl md:text-5xl mb-4">
              {headerTitle}
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

        <div className={`grid gap-8 ${compact ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}>
          {reviews.map((review, index) => (
            <Card key={index} className="retro-card">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < review.rating ? 'text-yellow fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <CardTitle className="heading-primary text-lg">
                  {review.author_name}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  Google Review • {review.relative_time_description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="body-text text-gray-700 italic">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
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
