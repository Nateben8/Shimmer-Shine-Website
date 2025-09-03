"use client"

import { useState, useRef } from "react"
import Hero from "@/components/Hero"
import { SERVICES, BUSINESS_INFO, FAQ_DATA } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import OptimizedImage from "@/components/OptimizedImage"
import { Star, ArrowRight, CheckCircle, Award, Shield, Clock, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import BubbleReviews from "@/components/BubbleReviews"
import ExpandableServiceCard from "@/components/ExpandableServiceCard"
// import RelatedContent from "@/components/RelatedContent"
import { ScrollAnimation, WaterDroplets, BeforeAfterSlider } from "@/components/ScrollAnimations"
import { getFAQSchema, getFallSpecialEventSchema, getServiceBundleSchema } from "@/lib/schema"
import GetQuoteButton from "@/components/GetQuoteButton"

export default function HomePage() {
  const featuredServices = SERVICES.slice(0, 4)
  const faqSchema = getFAQSchema(FAQ_DATA)
  const fallSpecialSchema = getFallSpecialEventSchema()
  const serviceBundleSchema = getServiceBundleSchema()
  
  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  
  const images = [
    {
      src: "/window-cleaning-before-after.png",
      alt: "Window Cleaning Before and After in Newport Beach, CA - Professional residential window cleaning service showing dramatic improvement from dirty to crystal clear windows by Shimmer Shine Property Detailing",
      title: "Newport Beach Window Cleaning Results | Shimmer Shine Property Detailing",
      caption: "Window Cleaning - Newport Beach, CA",
      description: "Professional before & after results"
    },
    {
      src: "/pressure-washing-before-after.png", 
      alt: "Concrete Pressure Washing Before and After in Anaheim Hills, CA - Professional driveway and concrete cleaning service showing transformation from stained to spotless concrete by Shimmer Shine Property Detailing",
      title: "Anaheim Hills Pressure Washing Results | Shimmer Shine Property Detailing",
      caption: "Pressure Washing - Anaheim Hills, CA",
      description: "Concrete restoration results"
    },
    {
      src: "/Post construction cleanup.jpg",
      alt: "Post-Construction Cleanup Before and After in Orange County, CA - Professional construction site cleaning service showing transformation from construction debris to spotless property by Shimmer Shine Property Detailing", 
      title: "Orange County Post-Construction Cleanup Results | Shimmer Shine Property Detailing",
      caption: "Post-Construction Cleanup - Orange County, CA",
      description: "Professional construction site cleaning"
    }
  ]
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)
  }

  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      {/* Fall Special Event Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fallSpecialSchema),
        }}
      />
      
      {/* Service Bundle Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceBundleSchema),
        }}
      />
      <Hero />
      
      {/* Section Divider */}
      <div className="relative py-8 bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="mx-6 flex items-center space-x-2">
              {/* Sparkle Icon */}
              <div className="w-4 h-4 text-yellow opacity-80">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                </svg>
              </div>
              {/* Center Diamond */}
              <div className="w-3 h-3 bg-yellow transform rotate-45 opacity-90"></div>
              {/* Sparkle Icon */}
              <div className="w-4 h-4 text-yellow opacity-80">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                </svg>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
        {/* Water Droplets Animation */}
        <WaterDroplets count={6} />
        
        {/* Enhanced Background Sparkles - Mobile Safe */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-20 left-4 sm:left-10 w-6 h-6 text-yellow sparkle-enhanced">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-32 right-4 sm:right-16 w-4 h-4 text-yellow sparkle-enhanced delay-1000">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-20 left-1/4 w-8 h-8 text-yellow sparkle-enhanced delay-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-xl">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-40 right-1/3 w-5 h-5 text-yellow sparkle-enhanced delay-700">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-lg">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-60 left-1/2 w-3 h-3 text-yellow sparkle-enhanced delay-300">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-md">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Mobile-Only Mascot Display */}
          <div className="block sm:hidden text-center mb-8 relative">
            <div className="relative inline-block">
              {/* Animated Background Circle */}
              <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-br from-yellow/20 to-yellow/10 rounded-full animate-pulse"></div>
              
              {/* Enhanced Sparkle Effects - Mobile Safe */}
              <div className="absolute top-2 left-2 sm:-top-2 sm:-left-2 w-6 h-6 text-yellow opacity-90 animate-bounce drop-shadow-lg">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                </svg>
              </div>
              <div className="absolute top-3 right-2 sm:-top-1 sm:-right-3 w-5 h-5 text-yellow opacity-80 animate-bounce delay-300 drop-shadow-md">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                </svg>
              </div>
              <div className="absolute bottom-2 left-2 sm:-bottom-2 sm:-left-3 w-4 h-4 text-yellow opacity-75 animate-bounce delay-500 drop-shadow-md">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                </svg>
              </div>
              <div className="absolute bottom-3 right-2 sm:-bottom-1 sm:-right-2 w-3 h-3 text-yellow opacity-85 animate-bounce delay-700 drop-shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                </svg>
              </div>
              <div className="absolute top-8 left-8 w-4 h-4 text-yellow opacity-70 animate-pulse delay-200 drop-shadow-md">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                </svg>
              </div>
              
              {/* Main Mascot */}
              <div className="relative z-10 p-4">
                <OptimizedImage
                  src="/mascot.png"
                  alt="Shimmer Shine Property Detailing mascot - Professional window cleaning and pressure washing company logo Orange County California"
                  width={120}
                  height={120}
                  className="w-24 h-24 mx-auto drop-shadow-lg hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  quality={90}
                />
              </div>
              
              {/* Decorative Border */}
              <div className="absolute inset-0 w-32 h-32 mx-auto border-2 border-yellow/30 rounded-full animate-spin-slow"></div>
            </div>
            
            {/* Mobile Tagline */}
            <div className="mt-4">
              <p className="text-sm text-gray-600 font-medium">
                ✨ Your Trusted Cleaning Partner ✨
              </p>
            </div>
          </div>
          
          <ScrollAnimation animation="fade-in-up" className="text-center mb-8 sm:mb-12">
            <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 px-2" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              Why Southern California Trusts Shimmer Shine
            </h2>
            <p className="body-text text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
              We believe every property has the potential to truly shine. At Shimmer Shine, we don't just clean – we restore that pride-of-ownership feeling. Whether it's crystal-clear windows, pressure-washed walkways, or spotless solar panels, we treat your property like our own. Licensed, insured, and dedicated to bringing out the best in every surface we touch.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredServices.map((service, index) => (
              <ScrollAnimation 
                key={service.id} 
                animation="fade-in-up" 
                delay={index * 100}
                className="hover-lift-subtle"
              >
                <ExpandableServiceCard service={service} />
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="retro" size="lg">
                View All Southern California Cleaning Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="hidden sm:block py-12 sm:py-16 relative overflow-hidden">
        {/* Enhanced Floating Sparkles */}
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute top-16 left-8 w-6 h-6 text-yellow animate-bounce drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-24 right-12 w-4 h-4 text-yellow animate-pulse delay-300 drop-shadow-md">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-16 left-1/3 w-7 h-7 text-yellow animate-bounce delay-700 drop-shadow-xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-8 right-1/4 w-3 h-3 text-yellow animate-pulse delay-500 drop-shadow-sm">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-8 right-16 w-5 h-5 text-yellow animate-bounce delay-1000 drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="heading-primary text-3xl sm:text-4xl md:text-5xl mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              See The Difference
            </h2>
            <p className="body-text text-lg sm:text-xl text-gray-600">
              Real results from our professional cleaning services
            </p>
          </div>

          {/* Mobile: Simple horizontal carousel */}
          <div className="block sm:hidden relative px-4">
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/95 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border-2 border-gray-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-7 w-7 text-navy" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/95 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 border-2 border-gray-200"
              aria-label="Next image"
            >
              <ChevronRight className="h-7 w-7 text-navy" />
            </button>

            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-lg">
              <div 
                ref={carouselRef}
                className="flex transition-transform duration-300 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentImageIndex * 100}%)`,
                  width: `${images.length * 100}%`
                }}
              >
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className="polaroid-frame w-full flex-shrink-0"
                    style={{ width: `${100 / images.length}%` }}
                  >
                    <div className="relative h-64 rounded-lg overflow-hidden mx-2">
                <Image
                        src={image.src}
                        alt={image.alt}
                        title={image.title}
                  fill
                  className="object-cover"
                        sizes="100vw"
                        priority={index === 0}
                  quality={90}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                        <p className="font-bold text-center text-sm">{image.caption}</p>
                        <p className="text-xs text-center opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
                ))}
              </div>
            </div>
            
            {/* Interactive indicator dots */}
            <div className="flex justify-center space-x-3 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'bg-yellow scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop: Interactive Before/After Sliders */}
          <div className="hidden sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            <ScrollAnimation animation="fade-in-left" delay={100}>
              <BeforeAfterSlider
                beforeImage="/Before and After images/House siding & window wash.jpg"
                afterImage="/window-cleaning-before-after.png"
                beforeAlt="Dirty windows and stained house siding before professional window cleaning and pressure washing service in Orange County"
                afterAlt="Crystal clear windows and spotless clean siding after professional cleaning by Shimmer Shine Property Detailing Orange County"
                className="h-64 sm:h-80 hover-lift-subtle"
              />
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <BeforeAfterSlider
                beforeImage="/Before and After images/concrete driveway pressure wash 6.jpg"
                afterImage="/pressure-washing-before-after.png"
                beforeAlt="Heavily stained and dirty concrete driveway before professional pressure washing service in Orange County"
                afterAlt="Completely restored and spotless concrete driveway after professional pressure washing by Shimmer Shine Property Detailing"
                className="h-64 sm:h-80 hover-lift-subtle"
              />
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-right" delay={300} className="lg:col-span-2 xl:col-span-1">
              <BeforeAfterSlider
                beforeImage="/Post Construction Cleanup2.jpeg"
                afterImage="/Post construction cleanup.jpg"
                beforeAlt="Construction site with debris, dust, and mess before professional post-construction cleanup service in Orange County"
                afterAlt="Completely clean and spotless property ready for occupancy after professional post-construction cleanup by Shimmer Shine"
                className="h-64 sm:h-80 hover-lift-subtle"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* High-Intent Keywords Section */}
      <section className="hidden sm:block py-8 sm:py-12 lg:py-16 bg-white relative overflow-hidden">
        {/* Enhanced Corner Sparkles */}
        <div className="absolute inset-0 opacity-45 pointer-events-none">
          <div className="absolute top-8 right-8 w-5 h-5 text-yellow animate-pulse drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-12 left-12 w-6 h-6 text-yellow animate-bounce delay-1000 drop-shadow-xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-1/2 left-8 w-4 h-4 text-yellow animate-pulse delay-500 drop-shadow-md">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
        </div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="heading-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              <span className="block sm:inline">Professional Business</span>{' '}
              <span className="block sm:inline">Cleaning Solutions</span>
            </h2>
            <p className="body-text text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2">
              Elevate your business with our professional commercial cleaning services across Southern California. We deliver customized cleaning solutions for offices, medical facilities, restaurants, and retail spaces with the same old-school craftsmanship and modern reliability that sets us apart. Our flexible B2B contracts feature recurring maintenance, deep cleaning, and specialized janitorial services tailored to your specific needs. From daily office maintenance to medical facility sanitization, we help Southern California businesses maintain pristine, healthy work environments that reflect their professional standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md group relative overflow-hidden">
              <div className="absolute top-2 right-2 w-2 h-2 text-yellow opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                </svg>
              </div>
              <h3 className="heading-primary text-lg mb-2">B2B Contracts</h3>
              <p className="body-text text-sm">Commercial cleaning contracts Southern California with recurring service</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md group relative overflow-hidden">
              <div className="absolute top-2 right-2 w-2 h-2 text-yellow opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                </svg>
              </div>
              <h3 className="heading-primary text-lg mb-2">After Hours Service</h3>
              <p className="body-text text-sm">After hours commercial cleaning Southern California available</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md group relative overflow-hidden">
              <div className="absolute top-2 right-2 w-2 h-2 text-yellow opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                </svg>
              </div>
              <h3 className="heading-primary text-lg mb-2">Free Estimates</h3>
              <p className="body-text text-sm">Commercial cleaning estimate Southern California in 24 hours</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md group relative overflow-hidden">
              <div className="absolute top-2 right-2 w-2 h-2 text-yellow opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
                </svg>
              </div>
              <h3 className="heading-primary text-lg mb-2">Licensed & Insured</h3>
              <p className="body-text text-sm">Licensed commercial cleaning Southern California with full B2B coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-navy via-navy-700 to-navy text-white relative overflow-hidden water-wave">
        {/* Water Droplets */}
        <WaterDroplets count={4} />
        
        {/* Enhanced Sparkle Overlay - Left Side */}
        <div className="absolute top-8 left-4 sm:top-12 sm:left-8 lg:top-16 lg:left-12 opacity-60 pointer-events-none">
          <div className="relative">
            {/* Large Sparkle */}
            <div className="absolute w-10 h-10 text-yellow opacity-90 sparkle-enhanced drop-shadow-xl">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
              </svg>
            </div>
            {/* Medium Sparkle */}
            <div className="absolute w-7 h-7 text-yellow opacity-80 top-8 left-12 sparkle-enhanced delay-300 drop-shadow-lg">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
              </svg>
            </div>
            {/* Small Sparkle */}
            <div className="absolute w-5 h-5 text-yellow opacity-85 top-2 left-8 sparkle-enhanced delay-500 drop-shadow-md">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
              </svg>
            </div>
            {/* Tiny Sparkle */}
            <div className="absolute w-4 h-4 text-yellow opacity-75 top-12 left-4 sparkle-enhanced delay-700 drop-shadow-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
              </svg>
            </div>
            {/* Additional Small Sparkle */}
            <div className="absolute w-6 h-6 text-yellow opacity-70 top-16 left-10 sparkle-enhanced delay-200 drop-shadow-lg">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
              </svg>
            </div>
            {/* Extra Sparkles for More Visibility */}
            <div className="absolute w-3 h-3 text-yellow opacity-80 top-20 left-16 sparkle-enhanced delay-1000 drop-shadow-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
              </svg>
            </div>
            <div className="absolute w-4 h-4 text-yellow opacity-65 top-4 left-16 sparkle-enhanced delay-800 drop-shadow-md">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Mascot Overlay */}
        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-12 lg:right-12 opacity-20 pointer-events-none">
          <Image
            src="/mascot.png2.png"
            alt="Shimmer Shine Property Detailing mascot logo - Trusted window cleaning and pressure washing services Orange County since 2021"
            width={150}
            height={150}
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40"
            loading="lazy"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-8 sm:mb-12">
            <h2 className="heading-decorative text-3xl sm:text-4xl md:text-5xl text-yellow mb-4 float-animation" style={{textShadow: '6px 6px 12px rgba(0,0,0,1), 3px 3px 6px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.9)'}}>
              Why Southern California Trusts Shimmer Shine
            </h2>
            <p className="body-text text-lg sm:text-xl text-gray-100">
              Best window cleaners in Southern California with three decades of experience
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <ScrollAnimation animation="fade-in-left" delay={100} className="text-center space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
              <div className="glass-card-strong p-6 rounded-xl hover-lift-subtle">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-navy" />
              </div>
              <h3 className="heading-primary text-lg sm:text-xl text-white">Professional Excellence</h3>
              <p className="body-text text-sm sm:text-base text-gray-200">
                Three decades of window cleaning expertise with old-school values and modern techniques.
              </p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-up" delay={200} className="text-center space-y-3 sm:space-y-4">
              <div className="glass-card-strong p-6 rounded-xl hover-lift-subtle">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4 float-animation-reverse">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-navy" />
              </div>
              <h3 className="heading-primary text-lg sm:text-xl text-white">Licensed & Insured</h3>
              <p className="body-text text-sm sm:text-base text-gray-200">
                Fully licensed, bonded, and insured for your complete peace of mind and protection.
              </p>
            </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-in-right" delay={300} className="text-center space-y-3 sm:space-y-4">
              <div className="glass-card-strong p-6 rounded-xl hover-lift-subtle">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4 float-animation">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-navy" />
              </div>
              <h3 className="heading-primary text-lg sm:text-xl text-white">Reliable Service</h3>
              <p className="body-text text-sm sm:text-base text-gray-200">
                On-time arrivals, consistent quality, and same-day service available when you need it most.
              </p>
            </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <BubbleReviews />



      {/* Local SEO Keywords Section */}
      <section className="hidden lg:block py-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="heading-decorative text-3xl md:text-4xl text-yellow mb-4" style={{textShadow: '2px 2px 0px #000000, 3px 3px 0px #333333, 4px 4px 0px #666666'}}>
              Complete Property Cleaning Services
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              From window cleaning in Costa Mesa to pressure washing in Beverly Hills, we serve over 139 cities with same-day availability and guaranteed results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <h3 className="font-bold text-yellow mb-3">Window Cleaning</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Window cleaning Costa Mesa</li>
                <li>• Window cleaning Newport Beach</li>
                <li>• Window cleaning Beverly Hills</li>
                <li>• Window cleaning La Jolla</li>
                <li>• Residential window cleaning</li>
                <li>• Commercial window cleaning</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-yellow mb-3">Pressure Washing</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Pressure washing Los Angeles</li>
                <li>• Driveway cleaning Southern California</li>
                <li>• Patio cleaning San Diego</li>
                <li>• House washing services</li>
                <li>• Concrete cleaning</li>
                <li>• Deck cleaning services</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-yellow mb-3">Gutter Cleaning</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Gutter cleaning San Diego</li>
                <li>• Gutter cleaning Irvine</li>
                <li>• Gutter cleaning Pasadena</li>
                <li>• Gutter repair services</li>
                <li>• Downspout cleaning</li>
                <li>• Gutter maintenance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-yellow mb-3">Solar Panel Cleaning</h3>
              <ul className="space-y-1 text-gray-300">
                <li>• Solar cleaning Southern California</li>
                <li>• Solar cleaning Los Angeles</li>
                <li>• Solar panel maintenance</li>
                <li>• Solar efficiency optimization</li>
                <li>• Residential solar cleaning</li>
                <li>• Commercial solar cleaning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

                {/* Related Content */}
          {/* <RelatedContent currentPage="home" /> */}

      {/* CTA Section */}
      <section className="hidden sm:block py-16 bg-yellow relative overflow-hidden">
        {/* Enhanced Decorative Sparkles */}
        <div className="absolute inset-0 opacity-55 pointer-events-none">
          <div className="absolute top-8 left-8 w-7 h-7 text-navy animate-pulse drop-shadow-xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-12 right-12 w-5 h-5 text-navy animate-bounce delay-500 drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-16 left-16 w-8 h-8 text-navy animate-pulse delay-1000 drop-shadow-2xl">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute bottom-8 right-8 w-6 h-6 text-navy animate-bounce delay-300 drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-1/2 left-1/4 w-4 h-4 text-navy animate-pulse delay-700 drop-shadow-md">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/3 w-5 h-5 text-navy animate-bounce delay-200 drop-shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
          <div className="absolute top-20 left-1/3 w-3 h-3 text-navy animate-pulse delay-800 drop-shadow-sm">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 0L14.09 8.26L22 6L14.09 15.74L12 24L9.91 15.74L2 18L9.91 8.26L12 0Z"/>
            </svg>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="heading-decorative text-4xl md:text-5xl text-navy mb-4" style={{textShadow: '2px 2px 0px #FFFFFF, 3px 3px 0px #F5F5F5, 4px 4px 0px #E0E0E0'}}>
            Get Your Free Quote Today
          </h2>
          <p className="body-text text-xl text-navy-700 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers across Orange County, Los Angeles, and San Diego. Get your free quote today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GetQuoteButton variant="retro-navy" size="lg" className="text-lg px-8 py-4">
              Get Free Quote
            </GetQuoteButton>
            <Link href={`tel:${BUSINESS_INFO.phone}`}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-2 border-navy text-navy hover:bg-navy hover:text-white">
                Call {BUSINESS_INFO.phone}
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-sm text-navy-600">
              <strong>Limited Time:</strong> 15% off your first service when you book this month!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
