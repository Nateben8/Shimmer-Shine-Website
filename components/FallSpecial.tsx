'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function FallSpecial() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Calculate time until end of fall (December 21st)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const currentYear = now.getFullYear()
      const fallEnd = new Date(currentYear, 11, 21) // December 21st
      
      // If we're past December 21st, use next year
      if (now > fallEnd) {
        fallEnd.setFullYear(currentYear + 1)
      }

      const difference = fallEnd.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="hidden lg:block bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-3 px-4 relative overflow-hidden shadow-md">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">

      </div>

      <div className="container mx-auto relative z-10 px-2 sm:px-4">
        {/* Desktop-optimized layout with proper spacing */}
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:items-center sm:justify-center sm:gap-6 pr-8 sm:pr-10">
          
          {/* Centered main content */}
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-3 text-center">
            <div className="flex items-center justify-center space-x-2">

              <h3 className="text-sm sm:text-base md:text-lg font-bold text-yellow-200">
                FALL SPECIAL:
              </h3>
              <div className="bg-yellow-400 text-orange-900 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full font-black text-sm sm:text-base">
                20% OFF
              </div>
            </div>
            <span className="text-xs sm:text-sm md:text-base font-semibold">Bundle 2+ Services!</span>
          </div>

          {/* Mobile: Timer and buttons row */}
          <div className="flex items-center justify-between sm:justify-center space-x-2 sm:space-x-6">
            {/* Compact countdown timer */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <span className="text-xs text-yellow-200 font-medium hidden sm:inline">Ends:</span>
              <div className="flex items-center space-x-1">
                <div className="bg-white/25 backdrop-blur-sm rounded px-1.5 py-1 sm:px-2 sm:py-1.5 text-center min-w-[28px] sm:min-w-[36px] border border-white/20">
                  <div className="text-sm sm:text-base font-bold">{timeLeft.days}</div>
                  <div className="text-xs text-yellow-200 leading-none">d</div>
                </div>
                <div className="text-white/60 text-xs">:</div>
                <div className="bg-white/25 backdrop-blur-sm rounded px-1.5 py-1 sm:px-2 sm:py-1.5 text-center min-w-[28px] sm:min-w-[36px] border border-white/20">
                  <div className="text-sm sm:text-base font-bold">{timeLeft.hours}</div>
                  <div className="text-xs text-yellow-200 leading-none">h</div>
                </div>
                <div className="text-white/60 text-xs">:</div>
                <div className="bg-white/25 backdrop-blur-sm rounded px-1.5 py-1 sm:px-2 sm:py-1.5 text-center min-w-[28px] sm:min-w-[36px] border border-white/20">
                  <div className="text-sm sm:text-base font-bold">{timeLeft.minutes}</div>
                  <div className="text-xs text-yellow-200 leading-none">m</div>
                </div>
              </div>
            </div>

            {/* Compact CTA buttons with better spacing */}
            <div className="flex items-center space-x-3">
              <Link href="/get-a-quote">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg text-xs sm:text-sm border border-yellow-300">
                  CLAIM
                </button>
              </Link>
              <Link href="tel:(714) 497-0035">
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-1.5 px-3 sm:py-2 sm:px-4 rounded-full transition-all duration-200 hover:scale-105 border border-white/30 text-xs sm:text-sm">
                  Call
                </button>
              </Link>
            </div>
          </div>

          {/* Close button - positioned with more space */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-1 right-1 sm:top-2 sm:right-2 text-white/70 hover:text-white text-base sm:text-lg font-bold w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-200 z-10"
            aria-label="Close fall special offer"
          >
            ×
          </button>
        </div>
      </div>

      {/* Decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
    </div>
  )
}
