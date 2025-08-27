"use client"

import { useEffect, useRef } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'fade-in'
  delay?: number
  threshold?: number
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in')
            }, delay)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [delay, threshold])

  return (
    <div 
      ref={elementRef} 
      className={`${animation} ${className}`}
    >
      {children}
    </div>
  )
}

// Water droplet component
export function WaterDroplets({ count = 5 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="water-droplet"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  )
}

// Before/After slider component
interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  className?: string
}

export function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeAlt, 
  afterAlt,
  className = '' 
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const afterImageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const slider = sliderRef.current
    const afterImg = afterImageRef.current
    
    if (!container || !slider || !afterImg) return

    let isDragging = false

    const updateSlider = (clientX: number) => {
      const rect = container.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      
      slider.style.left = `${percentage}%`
      afterImg.style.clipPath = `polygon(${percentage}% 0%, 100% 0%, 100% 100%, ${percentage}% 100%)`
    }

    const handleMouseDown = () => {
      isDragging = true
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      updateSlider(e.clientX)
    }

    const handleMouseUp = () => {
      isDragging = false
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      e.preventDefault()
      updateSlider(e.touches[0].clientX)
    }

    // Mouse events
    slider.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    // Touch events
    slider.addEventListener('touchstart', handleMouseDown)
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleMouseUp)

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      slider.removeEventListener('touchstart', handleMouseDown)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleMouseUp)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`before-after-container ${className}`}
    >
      <img 
        src={beforeImage} 
        alt={beforeAlt}
        className="before-image"
      />
      <img 
        ref={afterImageRef}
        src={afterImage} 
        alt={afterAlt}
        className="after-image"
      />
      <div 
        ref={sliderRef}
        className="before-after-slider"
      />
      
      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
        AFTER
      </div>
    </div>
  )
}
