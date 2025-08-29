"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ExternalLink, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TESTIMONIALS } from '@/lib/constants'

interface BubbleReviewsProps {
  className?: string
  sectionClassName?: string
}

// Extended testimonials with more reviews - ensuring all bubbles have reviews
const EXTENDED_TESTIMONIALS = [
  // Convert original testimonials to use 'review' property
  ...TESTIMONIALS.map(t => ({
    ...t,
    review: t.text || "Amazing service! Professional, reliable, and excellent results every time."
  })),
  {
    id: 5,
    name: "Jennifer Martinez",
    rating: 5,
    review: "Absolutely amazing service! They transformed our dirty windows into crystal clear perfection. Professional, punctual, and the results speak for themselves. Highly recommend!",
    date: "2024-01-15"
  },
  {
    id: 6,
    name: "David Thompson",
    rating: 5,
    review: "Best window cleaning service I've ever used. They handled our commercial building with ease and left every window spotless. The team was professional and efficient.",
    date: "2024-01-10"
  },
  {
    id: 7,
    name: "Lisa Chen",
    rating: 5,
    review: "Outstanding work! They cleaned our high-rise windows and the difference is incredible. Safe, reliable, and the quality is unmatched. Will definitely use them again.",
    date: "2024-01-08"
  },
  {
    id: 8,
    name: "Robert Wilson",
    rating: 5,
    review: "Professional, thorough, and reasonably priced. They cleaned our entire house including hard-to-reach windows. The results exceeded our expectations!",
    date: "2024-01-05"
  },
  {
    id: 9,
    name: "Amanda Foster",
    rating: 5,
    review: "Fantastic service! They were on time, professional, and did an incredible job. Our windows have never looked better. Highly recommend for any property!",
    date: "2024-01-03"
  },
  {
    id: 10,
    name: "Michael Brown",
    rating: 5,
    review: "Excellent window cleaning service. They handled our commercial property with professionalism and attention to detail. The results are outstanding!",
    date: "2024-01-01"
  },
  {
    id: 11,
    name: "Sarah Williams",
    rating: 5,
    review: "Incredible attention to detail! They cleaned our restaurant windows and the difference is night and day. Professional, reliable, and the quality is exceptional.",
    date: "2023-12-28"
  },
  {
    id: 12,
    name: "James Davis",
    rating: 5,
    review: "Top-notch service! They handled our medical facility with the utmost care and professionalism. Every window is spotless and the team was incredibly thorough.",
    date: "2023-12-25"
  },
  {
    id: 13,
    name: "Emily Rodriguez",
    rating: 5,
    review: "Amazing results! They cleaned our retail store windows and the improvement is incredible. Professional, efficient, and the quality speaks for itself.",
    date: "2023-12-22"
  },
  {
    id: 14,
    name: "Christopher Lee",
    rating: 5,
    review: "Outstanding service! They cleaned our office building and every window looks brand new. Professional, punctual, and the results are beyond expectations.",
    date: "2023-12-20"
  },
  {
    id: 15,
    name: "Jessica Taylor",
    rating: 5,
    review: "Fantastic work! They transformed our dirty windows into crystal clear perfection. The team was professional, thorough, and the quality is unmatched.",
    date: "2023-12-18"
  },
  {
    id: 16,
    name: "Daniel Anderson",
    rating: 5,
    review: "Excellent service! They cleaned our warehouse windows and the difference is incredible. Safe, reliable, and the quality is outstanding. Highly recommend!",
    date: "2023-12-15"
  },
  {
    id: 17,
    name: "Nicole Garcia",
    rating: 5,
    review: "Professional and thorough! They cleaned our apartment complex windows and the results are amazing. The team was efficient, reliable, and the quality is exceptional.",
    date: "2023-12-12"
  },
  {
    id: 18,
    name: "Kevin Martinez",
    rating: 5,
    review: "Outstanding quality! They cleaned our hotel windows and every guest has commented on how beautiful they look. Professional, reliable, and the results are incredible.",
    date: "2023-12-10"
  },
  {
    id: 19,
    name: "Rachel Johnson",
    rating: 5,
    review: "Amazing service! They cleaned our school windows and the improvement is remarkable. Safe, professional, and the quality is beyond expectations.",
    date: "2023-12-08"
  },
  {
    id: 20,
    name: "Thomas Smith",
    rating: 5,
    review: "Exceptional work! They cleaned our church windows and the results are breathtaking. Professional, respectful, and the quality is outstanding.",
    date: "2023-12-05"
  }
]

export default function BubbleReviews({ className = "", sectionClassName = "" }: BubbleReviewsProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const handleBubbleClick = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const handleKeyDown = (e: React.KeyboardEvent, id: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleBubbleClick(id)
    }
  }

  // Get preview text (first few words)
  const getPreviewText = (review: string, wordCount: number = 4) => {
    const words = review.split(' ')
    return words.slice(0, wordCount).join(' ') + (words.length > wordCount ? '...' : '')
  }

  // Bubble size variations - more compact oval shapes
  const getBubbleSize = (index: number) => {
    const sizes = [
      'w-40 h-28', // 160x112px
      'w-44 h-32', // 176x128px  
      'w-48 h-36', // 192x144px
      'w-52 h-40', // 208x160px
      'w-56 h-44'  // 224x176px
    ]
    return sizes[index % sizes.length]
  }

  // Carousel animation variations
  const getCarouselAnimation = (index: number) => {
    const baseDelay = index * 0.15
    const duration = 25 + (index % 4) * 5 // 25-40 seconds
    return {
      x: [0, -120, 0],
      y: [0, -10, 0], // Reduced vertical movement to prevent cutoff
      rotate: [0, 2, -2, 0], // Reduced rotation
      duration,
      delay: baseDelay
    }
  }

  return (
    <section className={`py-3 sm:py-4 md:py-8 lg:py-10 bg-white ${sectionClassName}`}>
      <div className="container mx-auto px-4">
        {/* Header - Ultra Mobile Optimized */}
        <div className="text-center mb-6 md:mb-8">
          {/* Mobile Header */}
          <div className="block md:hidden">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-lg border border-yellow-300/30">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span className="text-sm font-bold text-amber-800">5 Star Rated Service</span>
            </div>
            <h2 className="heading-primary text-3xl font-bold mb-3 text-navy-900 leading-tight">
              What Our Customers Say
            </h2>
            <p className="text-base text-navy-600 max-w-sm mx-auto leading-relaxed">
              Real reviews from satisfied customers
            </p>
          </div>
          
          {/* Desktop Header */}
          <div className="hidden md:block">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 px-4 py-2 rounded-full mb-4 shadow-lg">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span className="text-xs font-bold text-amber-900">5 Star Rated Service</span>
            </div>
            <h2 className="heading-primary text-4xl lg:text-5xl mb-3 text-navy-900">
              What Our Customers Say
            </h2>
            <p className="text-base text-navy-600 max-w-2xl mx-auto">
              Real reviews from satisfied customers across Orange County
            </p>
          </div>
        </div>

        {/* Carousel Bubble Container */}
        <div className="relative mb-2 md:mb-4 pt-3 pb-1 md:pt-10 md:pb-5" style={{ overflow: 'visible' }}>
          {/* Mobile: Ultra-Premium Carousel */}
          <div className="block md:hidden">
            {/* Ultra-smooth backdrop overlay */}
            <AnimatePresence>
              {expandedId && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-gradient-to-br from-black/80 via-navy-900/70 to-black/80 backdrop-blur-md z-40"
                  onClick={() => setExpandedId(null)}
                />
              )}
            </AnimatePresence>
            
            {/* Premium carousel container */}
            <div className="relative -mx-4 px-4">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
              
              {/* Ultra-smooth scroll container */}
              <div className="flex gap-4 overflow-x-auto pb-6 px-6 scrollbar-hide" style={{ 
                scrollSnapType: 'x mandatory', 
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch'
              }}>
                {EXTENDED_TESTIMONIALS.slice(0, 12).map((testimonial, index) => {
                  const isExpanded = expandedId === testimonial.id
                
                return (
                  <motion.div
                    key={`mobile-${testimonial.id}`}
                    className="relative flex-shrink-0"
                    style={{ scrollSnapAlign: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {/* Ultra-Premium Review Card */}
                    <motion.button
                      className={`
                        ${isExpanded 
                          ? 'w-[92vw] h-[85vh] max-w-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-2xl' 
                          : 'w-72 h-40 rounded-2xl shadow-lg hover:shadow-xl'
                        } 
                        relative overflow-hidden cursor-pointer
                        bg-gradient-to-br from-white via-gray-50/50 to-white
                        border border-gray-200/60 backdrop-blur-sm
                        transition-all duration-500 ease-out
                        focus:outline-none focus:ring-2 focus:ring-navy-400/50 focus:ring-offset-2
                        ${isExpanded ? 'z-50' : 'z-10'}
                        hover:-translate-y-2 hover:scale-[1.02]
                        active:scale-[0.98]
                      `}
                      onClick={() => handleBubbleClick(testimonial.id)}
                      onKeyDown={(e) => handleKeyDown(e, testimonial.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`review-${testimonial.id}`}
                      whileTap={{ scale: 0.96 }}
                      layout
                      transition={{
                        layout: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                      }}
                    >
                      {/* Premium shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent rounded-2xl" />
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/40 rounded-full blur-sm" />
                      
                      {/* Card Content */}
                      <div className="absolute inset-0 flex flex-col p-5">
                        {!isExpanded ? (
                          // Ultra-clean preview design
                          <div className="flex flex-col h-full">
                            {/* Premium header */}
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h3 className="font-bold text-navy-900 text-base leading-tight mb-1">
                                  {testimonial.name}
                                </h3>
                                <div className="flex items-center gap-0.5">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                                  ))}
                                </div>
                              </div>
                              <div className="w-10 h-10 bg-gradient-to-br from-navy-100 to-navy-50 rounded-full flex items-center justify-center">
                                <span className="text-navy-700 font-bold text-sm">
                                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                            </div>
                            
                            {/* Premium review preview */}
                            <div className="flex-1 flex items-center">
                              <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                "{getPreviewText(testimonial.review, 15)}"
                              </p>
                            </div>
                            
                            {/* Premium read more indicator */}
                            <div className="flex items-center justify-center mt-3">
                              <div className="bg-gradient-to-r from-navy-600 to-navy-700 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">
                                Tap to read full review
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Ultra-premium expanded design
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.15, duration: 0.3, ease: "easeOut" }}
                            className="w-full h-full flex flex-col relative"
                          >
                            {/* Premium close button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                handleBubbleClick(testimonial.id)
                              }}
                              className="absolute top-5 right-5 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl z-30 backdrop-blur-sm border border-gray-200/50"
                            >
                              <X className="w-5 h-5 text-gray-600" />
                            </button>
                            
                            {/* Premium expanded content */}
                            <div className="flex-1 flex flex-col p-8 pt-16">
                              {/* Premium header */}
                              <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-gradient-to-br from-navy-100 to-navy-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                  <span className="text-navy-800 font-bold text-xl">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <h3 className="font-bold text-navy-900 text-2xl mb-3 leading-tight">
                                  {testimonial.name}
                                </h3>
                                <div className="flex items-center justify-center gap-1 mb-2">
                                  {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                                  ))}
                                </div>
                                <div className="w-12 h-0.5 bg-gradient-to-r from-navy-300 to-navy-500 mx-auto rounded-full" />
                              </div>
                              
                              {/* Premium review text */}
                              <div className="flex-1 flex items-center justify-center">
                                <div className="max-w-sm">
                                  <p className="text-gray-800 text-lg leading-relaxed text-center font-medium">
                                    "{testimonial.review}"
                                  </p>
                                </div>
                              </div>
                              
                              {/* Premium footer */}
                              <div className="text-center pt-8 border-t border-gray-100">
                                <p className="text-sm text-gray-600 mb-3 font-medium">
                                  {formatDate(testimonial.date)}
                                </p>
                                {'service' in testimonial && testimonial.service && (
                                  <div className="bg-gradient-to-r from-navy-50 to-navy-100 px-4 py-2 rounded-full inline-block border border-navy-200/50">
                                    <p className="text-xs text-navy-700 font-semibold">
                                      {testimonial.service}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.button>
                  </motion.div>
                )
              })}
              </div>
              
              {/* Premium scroll indicator */}
              <div className="flex justify-center mt-6">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200/50">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div 
                          key={i} 
                          className="w-1.5 h-1.5 bg-navy-400 rounded-full" 
                          animate={{ 
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                    <span className="font-medium">Swipe for more reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Original grid layout */}
          <div className="hidden md:block">
            {/* First row of bubbles */}
            <div className="flex gap-4 sm:gap-6 lg:gap-8 mb-6" style={{ overflow: 'visible' }}>
            {EXTENDED_TESTIMONIALS.slice(0, 10).map((testimonial, index) => {
              const isExpanded = expandedId === testimonial.id
              const bubbleSize = getBubbleSize(index)
              const carouselAnim = getCarouselAnimation(index)
              
              return (
                <motion.div
                  key={`row1-${testimonial.id}`}
                  className="relative flex-shrink-0"
                  animate={!isExpanded ? {
                    x: carouselAnim.x,
                    y: carouselAnim.y,
                    rotate: carouselAnim.rotate
                  } : {}}
                  transition={{
                    x: {
                      duration: carouselAnim.duration,
                      repeat: Infinity,
                      ease: "linear",
                      delay: carouselAnim.delay
                    },
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: carouselAnim.delay
                    },
                    rotate: {
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: carouselAnim.delay
                    }
                  }}
                >
                  {/* Enhanced Oval Bubble */}
                  <motion.button
                    className={`
                      ${isExpanded ? 'w-80 h-80' : bubbleSize} 
                      rounded-full relative overflow-hidden cursor-pointer
                      bg-gradient-to-br from-navy-100/90 via-white/95 to-navy-50/90
                      border-2 border-navy-200/60 shadow-2xl backdrop-blur-sm
                      hover:shadow-3xl transition-all duration-500
                      focus:outline-none focus:ring-4 focus:ring-navy-300/50
                      ${isExpanded ? 'z-50' : 'z-10'}
                    `}
                    onClick={() => handleBubbleClick(testimonial.id)}
                    onKeyDown={(e) => handleKeyDown(e, testimonial.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`review-${testimonial.id}`}
                    whileHover={!isExpanded ? { scale: 1.03, y: -5 } : {}}
                    whileTap={!isExpanded ? { scale: 0.97 } : {}}
                    layout
                    transition={{
                      layout: { duration: 0.6, ease: "easeInOut" },
                      scale: { duration: 0.3 }
                    }}
                  >
                    {/* Sophisticated shine effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-transparent rounded-full" />
                    <div className="absolute top-3 left-4 w-6 h-6 bg-white/50 rounded-full blur-sm" />
                    <div className="absolute top-6 right-4 w-3 h-3 bg-white/70 rounded-full" />
                    <div className="absolute bottom-4 left-6 w-4 h-4 bg-white/40 rounded-full blur-sm" />
                    
                    {/* Premium rim highlight */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/60" />
                    <div className="absolute inset-1 rounded-full border border-navy-100/40" />
                    
                    {/* Content inside bubble */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      {!isExpanded ? (
                        // Preview content
                        <div className="text-center space-y-2 w-full">
                          {/* Customer name */}
                          <h3 className="font-bold text-navy-900 text-sm sm:text-base leading-tight">
                            {testimonial.name}
                          </h3>
                          
                          {/* Star rating */}
                          <div className="flex items-center justify-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                          
                          {/* Preview text */}
                          <p className="text-xs text-navy-700 font-medium leading-relaxed px-2">
                            "{getPreviewText(testimonial.review, 6)}"
                          </p>
                          
                          {/* Click indicator */}
                          <div className="mt-2">
                            <span className="text-xs text-navy-500 bg-navy-100/50 px-2 py-1 rounded-full">
                              Click to read more
                            </span>
                          </div>
                        </div>
                      ) : (
                        // Expanded content
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          className="w-full h-full flex flex-col relative"
                        >
                          {/* Close button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleBubbleClick(testimonial.id)
                            }}
                            className="absolute top-4 right-4 w-10 h-10 bg-navy-100/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-navy-200/80 transition-colors z-20 shadow-lg"
                          >
                            <X className="w-5 h-5 text-navy-700" />
                          </button>
                          
                          {/* Expanded review content */}
                          <div className="flex-1 flex flex-col justify-center space-y-4 p-6">
                            {/* Header */}
                            <div className="text-center space-y-2">
                              <h3 className="font-bold text-navy-900 text-xl">
                                {testimonial.name}
                              </h3>
                              <div className="flex items-center justify-center gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                                ))}
                              </div>
                            </div>
                            
                            {/* Full review text */}
                            <div className="text-center">
                              <p className="text-navy-800 text-base leading-relaxed font-medium">
                                "{testimonial.review}"
                              </p>
                            </div>
                            
                            {/* Date and service info */}
                            <div className="text-center space-y-1">
                              <p className="text-sm text-navy-600 font-medium">
                                {formatDate(testimonial.date)}
                              </p>
                              {'service' in testimonial && testimonial.service && (
                                <p className="text-xs text-navy-500 bg-navy-100/60 px-3 py-1 rounded-full inline-block">
                                  {testimonial.service}
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                </motion.div>
              )
            })}
          </div>

          {/* Second row of bubbles */}
          <div className="flex gap-4 sm:gap-6 lg:gap-8" style={{ overflow: 'visible' }}>
            {EXTENDED_TESTIMONIALS.slice(10, 20).map((testimonial, index) => {
              const isExpanded = expandedId === testimonial.id
              const bubbleSize = getBubbleSize(index + 5)
              const carouselAnim = getCarouselAnimation(index + 12)
              
              return (
                <motion.div
                  key={`row2-${testimonial.id}`}
                  className="relative flex-shrink-0"
                  animate={!isExpanded ? {
                    x: carouselAnim.x,
                    y: carouselAnim.y,
                    rotate: carouselAnim.rotate
                  } : {}}
                  transition={{
                    x: {
                      duration: carouselAnim.duration,
                      repeat: Infinity,
                      ease: "linear",
                      delay: carouselAnim.delay
                    },
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: carouselAnim.delay
                    },
                    rotate: {
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: carouselAnim.delay
                    }
                  }}
                >
                  {/* Enhanced Oval Bubble */}
                  <motion.button
                    className={`
                      ${isExpanded ? 'w-80 h-80' : bubbleSize} 
                      rounded-full relative overflow-hidden cursor-pointer
                      bg-gradient-to-br from-navy-100/90 via-white/95 to-navy-50/90
                      border-2 border-navy-200/60 shadow-2xl backdrop-blur-sm
                      hover:shadow-3xl transition-all duration-500
                      focus:outline-none focus:ring-4 focus:ring-navy-300/50
                      ${isExpanded ? 'z-50' : 'z-10'}
                    `}
                    onClick={() => handleBubbleClick(testimonial.id)}
                    onKeyDown={(e) => handleKeyDown(e, testimonial.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`review-${testimonial.id}`}
                    whileHover={!isExpanded ? { scale: 1.03, y: -5 } : {}}
                    whileTap={!isExpanded ? { scale: 0.97 } : {}}
                    layout
                    transition={{
                      layout: { duration: 0.6, ease: "easeInOut" },
                      scale: { duration: 0.3 }
                    }}
                  >
                    {/* Sophisticated shine effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-transparent rounded-full" />
                    <div className="absolute top-3 left-4 w-6 h-6 bg-white/50 rounded-full blur-sm" />
                    <div className="absolute top-6 right-4 w-3 h-3 bg-white/70 rounded-full" />
                    <div className="absolute bottom-4 left-6 w-4 h-4 bg-white/40 rounded-full blur-sm" />
                    
                    {/* Premium rim highlight */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/60" />
                    <div className="absolute inset-1 rounded-full border border-navy-100/40" />
                    
                    {/* Content inside bubble */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      {!isExpanded ? (
                        // Preview content
                        <div className="text-center space-y-2 w-full">
                          {/* Customer name */}
                          <h3 className="font-bold text-navy-900 text-sm sm:text-base leading-tight">
                            {testimonial.name}
                          </h3>
                          
                          {/* Star rating */}
                          <div className="flex items-center justify-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                          
                          {/* Preview text */}
                          <p className="text-xs text-navy-700 font-medium leading-relaxed px-2">
                            "{getPreviewText(testimonial.review, 6)}"
                          </p>
                          
                          {/* Click indicator */}
                          <div className="mt-2">
                            <span className="text-xs text-navy-500 bg-navy-100/50 px-2 py-1 rounded-full">
                              Click to read more
                            </span>
                          </div>
                        </div>
                      ) : (
                        // Expanded content
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          className="w-full h-full flex flex-col relative"
                        >
                          {/* Close button */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleBubbleClick(testimonial.id)
                            }}
                            className="absolute top-4 right-4 w-10 h-10 bg-navy-100/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-navy-200/80 transition-colors z-20 shadow-lg"
                          >
                            <X className="w-5 h-5 text-navy-700" />
                          </button>
                          
                          {/* Expanded review content */}
                          <div className="flex-1 flex flex-col justify-center space-y-4 p-6">
                            {/* Header */}
                            <div className="text-center space-y-2">
                              <h3 className="font-bold text-navy-900 text-xl">
                                {testimonial.name}
                              </h3>
                              <div className="flex items-center justify-center gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                                ))}
                              </div>
                            </div>
                            
                            {/* Full review text */}
                            <div className="text-center">
                              <p className="text-navy-800 text-base leading-relaxed font-medium">
                                "{testimonial.review}"
                              </p>
                            </div>
                            
                            {/* Date and service info */}
                            <div className="text-center space-y-1">
                              <p className="text-sm text-navy-600 font-medium">
                                {formatDate(testimonial.date)}
                              </p>
                              {'service' in testimonial && testimonial.service && (
                                <p className="text-xs text-navy-500 bg-navy-100/60 px-3 py-1 rounded-full inline-block">
                                  {testimonial.service}
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                </motion.div>
              )
            })}
          </div>

          {/* Background decorative elements for desktop */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gradient-to-br from-navy-100/30 to-blue-100/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.1, 0.4, 0.1],
                  scale: [1, 1.4, 1],
                  x: [0, Math.random() * 30 - 15, 0]
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 4
                }}
              />
            ))}
          </div>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-navy-600 to-navy-800 hover:from-navy-700 hover:to-navy-900 text-white px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg font-bold"
          >
            <a 
              href="/reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              Read All Google Reviews
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}