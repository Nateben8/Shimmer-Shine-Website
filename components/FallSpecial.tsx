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
    <div className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-2 left-4 animate-bounce">🍂</div>
        <div className="absolute top-6 right-8 animate-pulse">🍁</div>
        <div className="absolute bottom-3 left-1/4 animate-bounce delay-300">🍂</div>
        <div className="absolute bottom-2 right-1/3 animate-pulse delay-500">🍁</div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
            <span className="text-2xl animate-bounce">🍂</span>
            <h3 className="text-xl md:text-2xl font-bold text-yellow-200">
              FALL SPECIAL OFFER!
            </h3>
            <span className="text-2xl animate-bounce delay-300">🍁</span>
          </div>
          
          <p className="text-lg md:text-xl font-semibold mb-2">
            <span className="bg-yellow-400 text-orange-900 px-3 py-1 rounded-full font-black text-xl md:text-2xl animate-pulse">
              20% OFF
            </span>
            <span className="ml-2">when you bundle 2+ services!</span>
          </p>
          
          <p className="text-sm md:text-base text-orange-100">
            Perfect for fall property maintenance: Window Cleaning + Pressure Washing + Gutter Cleaning
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-xs uppercase">Days</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs uppercase">Hours</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs uppercase">Min</div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px]">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs uppercase">Sec</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <Link href="/get-a-quote">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold py-3 px-6 rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl animate-pulse">
              🍂 CLAIM FALL SPECIAL
            </button>
          </Link>
          <Link href="tel:(714) 497-0035">
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold py-3 px-6 rounded-full transition-all duration-200 hover:scale-105 border border-white/30">
              📞 Call Now
            </button>
          </Link>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white/70 hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-all duration-200"
          aria-label="Close fall special offer"
        >
          ×
        </button>
      </div>

      {/* Decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
    </div>
  )
}
