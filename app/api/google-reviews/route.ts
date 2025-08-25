import { NextResponse } from 'next/server'
import { fetchGoogleReviews, getFallbackPlaceDetails } from '@/lib/googleReviews'

export async function GET() {
  try {
    // Try to fetch real Google reviews
    const reviews = await fetchGoogleReviews()
    
    if (reviews) {
      return NextResponse.json({
        success: true,
        data: reviews,
        source: 'google'
      })
    } else {
      // Return fallback reviews if Google API fails
      const fallbackData = getFallbackPlaceDetails()
      return NextResponse.json({
        success: true,
        data: fallbackData,
        source: 'fallback'
      })
    }
  } catch (error) {
    console.error('API Error:', error)
    
    // Always return fallback data on error
    const fallbackData = getFallbackPlaceDetails()
    return NextResponse.json({
      success: true,
      data: fallbackData,
      source: 'fallback',
      error: 'API temporarily unavailable'
    })
  }
}

export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour
