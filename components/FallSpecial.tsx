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
    <div className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-3 px-4 relative overflow-hidden shadow-md">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-2 left-4 animate-bounce text-base">🍂</div>
        <div className="absolute top-2 right-4 animate-pulse text-base">🍁</div>
        <div className="absolute bottom-2 left-1/3 animate-bounce delay-300 text-sm">🍂</div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Balanced single line layout */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* Main content */}
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <span className="text-lg animate-bounce">🍂</span>
            <div className="flex items-center space-x-2">
              <h3 className="text-base sm:text-lg font-bold text-yellow-200">
                FALL SPECIAL OFFER:
              </h3>
              <div className="bg-yellow-400 text-orange-900 px-3 py-1.5 rounded-full font-black text-base sm:text-lg">
                20% OFF
              </div>
            </div>
            <span className="text-sm sm:text-base font-semibold">Bundle 2+ Services!</span>
          </div>

          {/* Countdown timer */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-yellow-200 font-medium hidden sm:inline">Ends in:</span>
            <div className="flex items-center space-x-2">
              <div className="bg-white/25 backdrop-blur-sm rounded-lg px-2 py-1.5 text-center min-w-[36px] border border-white/20">
                <div className="text-base font-bold">{timeLeft.days}</div>
                <div className="text-xs text-yellow-200">Days</div>
              </div>
              <div className="text-white/60">:</div>
              <div className="bg-white/25 backdrop-blur-sm rounded-lg px-2 py-1.5 text-center min-w-[36px] border border-white/20">
                <div className="text-base font-bold">{timeLeft.hours}</div>
                <div className="text-xs text-yellow-200">Hrs</div>
              </div>
              <div className="text-white/60">:</div>
              <div className="bg-white/25 backdrop-blur-sm rounded-lg px-2 py-1.5 text-center min-w-[36px] border border-white/20">
                <div className="text-base font-bold">{timeLeft.minutes}</div>
                <div className="text-xs text-yellow-200">Min</div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center space-x-3">
            <Link href="/get-a-quote">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold py-2 px-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg text-sm border border-yellow-300">
                🍂 CLAIM OFFER
              </button>
            </Link>
            <Link href="tel:(714) 497-0035">
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-2 px-4 rounded-full transition-all duration-200 hover:scale-105 border border-white/30 text-sm">
                📞 Call Now
              </button>
            </Link>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 text-white/70 hover:text-white text-lg font-bold w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-200"
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
