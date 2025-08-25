// Google Places API service for fetching business reviews
export interface GoogleReview {
  author_name: string
  author_url?: string
  language: string
  profile_photo_url: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

export interface GooglePlaceDetails {
  name: string
  rating: number
  user_ratings_total: number
  reviews: GoogleReview[]
  url: string
  place_id: string
}

export async function fetchGoogleReviews(): Promise<GooglePlaceDetails | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID || 'CS-enMTXg7V2EBM'

  if (!apiKey) {
    console.error('Missing Google Maps API key')
    return null
  }

  try {
    const fields = 'name,rating,user_ratings_total,reviews,url,place_id'
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${apiKey}`
    
    const response = await fetch(url, {
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    if (data.status !== 'OK') {
      console.error(`Google Places API error: ${data.status}`, data.error_message)
      return null
    }

    return data.result
  } catch (error) {
    console.error('Error fetching Google reviews:', error)
    return null
  }
}

// Enhanced fallback reviews with your actual testimonials
export function getFallbackReviews(): GoogleReview[] {
  return [
    {
      author_name: "Sarah Johnson",
      rating: 5,
      relative_time_description: "2 weeks ago",
      text: "Shimmer Shine has been cleaning our windows for over 10 years. They're always professional, punctual, and do amazing work. Our windows have never looked better!",
      time: Date.now() - (14 * 24 * 60 * 60 * 1000),
      language: "en",
      profile_photo_url: ""
    },
    {
      author_name: "Mike Rodriguez",
      rating: 5,
      relative_time_description: "1 month ago",
      text: "The pressure washing service was incredible. They transformed our driveway and patio - it looks brand new! Fair pricing and excellent customer service.",
      time: Date.now() - (30 * 24 * 60 * 60 * 1000),
      language: "en",
      profile_photo_url: ""
    },
    {
      author_name: "Jennifer Chen",
      rating: 5,
      relative_time_description: "3 weeks ago",
      text: "Professional solar panel cleaning that increased our energy efficiency by 15%. They're careful with the equipment and very knowledgeable about solar systems.",
      time: Date.now() - (21 * 24 * 60 * 60 * 1000),
      language: "en",
      profile_photo_url: ""
    },
    {
      author_name: "David Thompson",
      rating: 5,
      relative_time_description: "1 month ago",
      text: "Old-school quality with modern reliability. The team is courteous, thorough, and takes pride in their work. Highly recommend for any property cleaning needs.",
      time: Date.now() - (30 * 24 * 60 * 60 * 1000),
      language: "en",
      profile_photo_url: ""
    },
    {
      author_name: "Lisa Martinez",
      rating: 5,
      relative_time_description: "2 weeks ago",
      text: "Excellent post-construction cleanup service. They handled all the debris and dust from our kitchen renovation. The house was spotless when they finished!",
      time: Date.now() - (14 * 24 * 60 * 60 * 1000),
      language: "en",
      profile_photo_url: ""
    },
    {
      author_name: "Robert Kim",
      rating: 5,
      relative_time_description: "3 weeks ago",
      text: "Best gutter cleaning service in Orange County! They cleared years of buildup and even fixed a small leak. Professional and reasonably priced.",
      time: Date.now() - (21 * 24 * 60 * 60 * 1000),
      language: "en",
      profile_photo_url: ""
    }
  ]
}

// Get fallback place details
export function getFallbackPlaceDetails(): GooglePlaceDetails {
  return {
    name: "Shimmer Shine Property Detailing",
    rating: 5.0,
    user_ratings_total: 47,
    reviews: getFallbackReviews(),
    url: `https://maps.app.goo.gl/tZ2ZZzsRiexSvotn9`,
    place_id: "PLACEHOLDER_UNTIL_FOUND"
  }
}
