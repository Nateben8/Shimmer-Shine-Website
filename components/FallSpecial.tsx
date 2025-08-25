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
    <div className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-2 px-3 relative overflow-hidden">
      {/* Animated background elements - reduced */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1 left-2 animate-bounce text-sm">🍂</div>
        <div className="absolute top-1 right-2 animate-pulse text-sm">🍁</div>
      </div>

      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between relative z-10 gap-3">
        {/* Main content - more compact */}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-1 mb-1">
            <span className="text-lg animate-bounce">🍂</span>
            <h3 className="text-lg sm:text-xl font-bold text-yellow-200">
              FALL SPECIAL
            </h3>
            <span className="text-lg animate-bounce delay-300">🍁</span>
          </div>
          
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <span className="bg-yellow-400 text-orange-900 px-2 py-1 rounded-full font-black text-lg">
              20% OFF
            </span>
            <span className="text-sm font-semibold">Bundle 2+ Services!</span>
          </div>
        </div>

        {/* Compact Countdown Timer */}
        <div className="flex items-center space-x-2">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px]">
              <div className="text-lg font-bold">{timeLeft.days}</div>
              <div className="text-xs">Days</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px]">
              <div className="text-lg font-bold">{timeLeft.hours}</div>
              <div className="text-xs">Hrs</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded px-2 py-1 min-w-[40px]">
              <div className="text-lg font-bold">{timeLeft.minutes}</div>
              <div className="text-xs">Min</div>
            </div>
          </div>
        </div>

        {/* Compact CTA Buttons */}
        <div className="flex space-x-2">
          <Link href="/get-a-quote">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold py-2 px-4 rounded-full transition-all duration-200 hover:scale-105 shadow-lg text-sm">
              🍂 CLAIM OFFER
            </button>
          </Link>
          <Link href="tel:(714) 497-0035">
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-2 px-4 rounded-full transition-all duration-200 hover:scale-105 border border-white/30 text-sm">
              📞 Call
            </button>
          </Link>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-1 text-white/70 hover:text-white text-lg font-bold w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-200"
          aria-label="Close fall special offer"
        >
          ×
        </button>
      </div>

      {/* Thinner decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
    </div>
  )
}
