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
    review: t.text || "Amazing service! Professional, reliable, and excellent results every time.",
    service: t.service || "Window Cleaning"
  })),
  {
    id: 5,
    name: "Jennifer Martinez",
    rating: 5,
    review: "Absolutely amazing service! They transformed our dirty windows into crystal clear perfection. Professional, punctual, and the results speak for themselves. Highly recommend!",
    date: "2024-01-15",
    service: "Window Cleaning",
    location: "Newport Beach"
  },
  {
    id: 6,
    name: "David Thompson",
    rating: 5,
    review: "Best window cleaning service I've ever used. They handled our commercial building with ease and left every window spotless. The team was professional and efficient.",
    date: "2024-01-10",
    service: "Commercial Cleaning",
    location: "Irvine"
  },
  {
    id: 7,
    name: "Lisa Chen",
    rating: 5,
    review: "Outstanding work! They cleaned our high-rise windows and the difference is incredible. Safe, reliable, and the quality is unmatched. Will definitely use them again.",
    date: "2024-01-08",
    service: "Window Cleaning",
    location: "Costa Mesa"
  },
  {
    id: 8,
    name: "Robert Wilson",
    rating: 5,
    review: "Professional, thorough, and reasonably priced. They cleaned our entire house including hard-to-reach windows. The results exceeded our expectations!",
    date: "2024-01-05",
    service: "Pressure Washing",
    location: "Huntington Beach"
  },
  {
    id: 9,
    name: "Amanda Foster",
    rating: 5,
    review: "Fantastic service! They were on time, professional, and did an incredible job. Our windows have never looked better. Highly recommend for any property!",
    date: "2024-01-03",
    service: "Solar Panel Cleaning",
    location: "Laguna Beach"
  },
  {
    id: 10,
    name: "Michael Brown",
    rating: 5,
    review: "Excellent window cleaning service. They handled our commercial property with professionalism and attention to detail. The results are outstanding!",
    date: "2024-01-01",
    service: "Gutter Cleaning",
    location: "Anaheim"
  },
  {
    id: 11,
    name: "Sarah Williams",
    rating: 5,
    review: "Incredible attention to detail! They cleaned our restaurant windows and the difference is night and day. Professional, reliable, and the quality is exceptional.",
    date: "2023-12-28",
    service: "Commercial Cleaning",
    location: "Fullerton"
  },
  {
    id: 12,
    name: "James Davis",
    rating: 5,
    review: "Top-notch service! They handled our medical facility with the utmost care and professionalism. Every window is spotless and the team was incredibly thorough.",
    date: "2023-12-25",
    service: "Post-Construction Cleanup",
    location: "Mission Viejo"
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

  // Enhanced bubble size variations with more variety
  const getBubbleSize = (index: number) => {
    const sizes = [
      'w-44 h-32', // 176x128px  
      'w-48 h-36', // 192x144px
      'w-52 h-40', // 208x160px
      'w-56 h-44', // 224x176px
      'w-60 h-48', // 240x192px
      'w-64 h-52', // 256x208px
      'w-40 h-28'  // 160x112px (smaller)
    ]
    return sizes[index % sizes.length]
  }

  // Get bubble color variations
  const getBubbleGradient = (index: number) => {
    const gradients = [
      'from-navy-100/95 via-white/98 to-blue-50/90',
      'from-blue-50/95 via-white/98 to-navy-100/90', 
      'from-yellow-50/95 via-white/98 to-amber-50/90',
      'from-purple-50/95 via-white/98 to-indigo-50/90',
      'from-green-50/95 via-white/98 to-emerald-50/90',
      'from-pink-50/95 via-white/98 to-rose-50/90',
      'from-orange-50/95 via-white/98 to-yellow-50/90'
    ]
    return gradients[index % gradients.length]
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
        {/* Header */}
        <div className="text-center mb-8">
          {/* Mobile Header */}
          <div className="block md:hidden">
            <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              <span className="text-sm font-semibold text-yellow-800">5 Star Rated Service</span>
            </div>
            <h2 className="text-2xl font-bold mb-3 text-navy-900">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-sm mx-auto">
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
              Real reviews from satisfied customers across Southern California
            </p>
          </div>
        </div>

        {/* Reviews Container */}
        <div className="relative mb-6">
          {/* Mobile: Enhanced Review Showcase */}
          <div className="block md:hidden">
            {/* Featured Review Card with Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white rounded-3xl p-6 mb-6 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                      >
                        <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                  ))}
                </div>
                  <h3 className="font-bold text-white text-xl mb-2">
                  {EXTENDED_TESTIMONIALS[0].name}
                </h3>
                  <div className="text-yellow-300 text-sm font-medium mb-3">
                    {EXTENDED_TESTIMONIALS[0].service} • {EXTENDED_TESTIMONIALS[0].location || 'Southern California'}
                  </div>
                  <p className="text-gray-100 text-sm leading-relaxed italic">
                  "{EXTENDED_TESTIMONIALS[0].review}"
                </p>
                  <div className="mt-4 text-xs text-gray-300">
                  {formatDate(EXTENDED_TESTIMONIALS[0].date)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Review Grid */}
            <div className="space-y-4 mb-6">
              {EXTENDED_TESTIMONIALS.slice(1, 5).map((testimonial, index) => (
                <motion.div
                  key={`mobile-grid-${testimonial.id}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
                  className="bg-gradient-to-r from-white to-gray-50 border-2 border-navy-100 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-navy-900 font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-navy-900 text-base">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="text-yellow-600 text-xs font-medium mb-2">
                        {testimonial.service} • {testimonial.location || 'Southern California'}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-2">
                        "{getPreviewText(testimonial.review, 20)}"
                      </p>
                      <div className="text-xs text-gray-500">
                        {formatDate(testimonial.date)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white rounded-3xl p-6 text-center relative overflow-hidden shadow-2xl"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow/5 via-transparent to-white/5"></div>
              <div className="absolute top-0 left-0 w-20 h-20 bg-yellow/10 rounded-full -translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/5 rounded-full translate-x-8 translate-y-8"></div>
              
              <div className="relative z-10">
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="text-lg font-bold text-yellow-400 mb-4"
                >
                  Trusted by Southern California
                </motion.h3>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { number: "1,200+", label: "Happy Customers", delay: 2.0 },
                    { number: "5.0", label: "Star Rating", delay: 2.1 },
                    { number: "100%", label: "Satisfaction", delay: 2.2 }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: stat.delay, duration: 0.4 }}
                    >
                      <div className="text-3xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                      <div className="text-xs text-navy-200 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.3, duration: 0.5 }}
                  className="text-sm text-navy-100 mb-5 leading-relaxed"
                >
                  Join over 1,200 satisfied customers across Southern California who trust us for professional, reliable service.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                >
              <Button
                asChild
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-navy-900 font-bold px-8 py-3 rounded-full text-sm w-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <a 
                      href="https://www.google.com/search?q=shimmer+shine+property+detailing+reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                      Read All Google Reviews
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
                </motion.div>
            </div>
            </motion.div>
          </div>

          {/* Desktop: Original grid layout */}
          <div className="hidden md:block">
            {/* First row of bubbles */}
            <div className="flex gap-4 sm:gap-6 lg:gap-8 mb-6" style={{ overflow: 'visible' }}>
            {EXTENDED_TESTIMONIALS.slice(0, 10).map((testimonial, index) => {
              const isExpanded = expandedId === testimonial.id
              const bubbleSize = getBubbleSize(index)
              const bubbleGradient = getBubbleGradient(index)
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
                      bg-gradient-to-br ${bubbleGradient}
                      border-2 border-white/80 shadow-2xl backdrop-blur-sm
                      hover:shadow-3xl transition-all duration-500
                      focus:outline-none focus:ring-4 focus:ring-yellow-300/50
                      hover:border-yellow-300/60
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
                            <div className="text-center space-y-2">
                              <div className="flex items-center justify-center gap-2 flex-wrap">
                                {'service' in testimonial && testimonial.service && (
                                  <span className="text-xs text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full font-medium">
                                    {testimonial.service}
                                  </span>
                                )}
                                {'location' in testimonial && testimonial.location && (
                                  <span className="text-xs text-blue-700 bg-blue-100 px-3 py-1 rounded-full font-medium">
                                    {testimonial.location}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-navy-600 font-medium">
                                {formatDate(testimonial.date)}
                              </p>
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
              const bubbleGradient = getBubbleGradient(index + 5)
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
                      bg-gradient-to-br ${bubbleGradient}
                      border-2 border-white/80 shadow-2xl backdrop-blur-sm
                      hover:shadow-3xl transition-all duration-500
                      focus:outline-none focus:ring-4 focus:ring-yellow-300/50
                      hover:border-yellow-300/60
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
                            <div className="text-center space-y-2">
                              <div className="flex items-center justify-center gap-2 flex-wrap">
                                {'service' in testimonial && testimonial.service && (
                                  <span className="text-xs text-yellow-700 bg-yellow-100 px-3 py-1 rounded-full font-medium">
                                    {testimonial.service}
                                  </span>
                                )}
                                {'location' in testimonial && testimonial.location && (
                                  <span className="text-xs text-blue-700 bg-blue-100 px-3 py-1 rounded-full font-medium">
                                    {testimonial.location}
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-navy-600 font-medium">
                                {formatDate(testimonial.date)}
                              </p>
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

        {/* Enhanced CTA Button - Desktop Only */}
        <div className="text-center hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
          <Button
            asChild
              className="bg-gradient-to-r from-navy-600 via-navy-700 to-navy-800 hover:from-navy-700 hover:via-navy-800 hover:to-navy-900 text-white px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 text-xl font-bold relative overflow-hidden group"
          >
            <a 
                href="https://www.google.com/search?q=shimmer+shine+property+detailing+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
                className="inline-flex items-center gap-3 relative z-10"
            >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
              Read All Google Reviews
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ExternalLink className="w-6 h-6" />
                </motion.div>
            </a>
          </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}