import { NextResponse } from 'next/server'
import { fetchGoogleReviews, getFallbackPlaceDetails } from '@/lib/googleReviews'

// Performance optimization: Cache for 30 minutes, revalidate every 15 minutes
export const revalidate = 900 // 15 minutes
export const dynamic = 'force-static' // Enable static generation with revalidation
export async function GET() {
  try {
    // Try to fetch real Google reviews
    const reviews = await fetchGoogleReviews()
    
    if (reviews) {
      const response = NextResponse.json({
        success: true,
        data: reviews,
        source: 'google',
        cached_at: new Date().toISOString()
      })
      
      // Add aggressive caching headers
      response.headers.set('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=3600')
      response.headers.set('CDN-Cache-Control', 'public, s-maxage=1800')
      response.headers.set('Vercel-CDN-Cache-Control', 'public, s-maxage=1800')
      
      return response
    } else {
      // Return fallback reviews if Google API fails
      const fallbackData = getFallbackPlaceDetails()
      const response = NextResponse.json({
        success: true,
        data: fallbackData,
        source: 'fallback',
        cached_at: new Date().toISOString()
      })
      
      // Cache fallback data for shorter time
      response.headers.set('Cache-Control', 'public, s-maxage=900, stale-while-revalidate=1800')
      
      return response
    }
  } catch (error) {
    console.error('API Error:', error)
    
    // Always return fallback data on error
    const fallbackData = getFallbackPlaceDetails()
    const response = NextResponse.json({
      success: true,
      data: fallbackData,
      source: 'fallback',
      error: 'API temporarily unavailable',
      cached_at: new Date().toISOString()
    })
    
    // Short cache for error responses
    response.headers.set('Cache-Control', 'public, s-maxage=300, stale-while-revalidate=600')
    
    return response
  }
}
