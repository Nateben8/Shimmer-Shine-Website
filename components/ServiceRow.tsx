"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import GetQuoteButton from "@/components/GetQuoteButton"

interface Service {
  id: string
  name: string
  shortDescription: string
  description: string
  icon: string
  iconType?: string
  features?: string[]
}

interface ServiceRowProps {
  service: Service
  index: number
}

export default function ServiceRow({ service, index }: ServiceRowProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`w-full ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200`}>
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Service Icon/Image */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-full flex items-center justify-center">
              {service.iconType === "image" ? (
                <Image
                  src={service.icon}
                  alt={`Professional ${service.name} Orange County`}
                  title={`${service.name} Services Orange County`}
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  sizes="(max-width: 640px) 64px, 80px"
                  loading="lazy"
                />
              ) : (
                <div className="text-4xl sm:text-5xl text-navy">{service.icon}</div>
              )}
            </div>
          </div>

          {/* Service Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="heading-primary text-2xl sm:text-3xl md:text-4xl text-navy mb-4" style={{textShadow: '1px 1px 0px #FFC107, 2px 2px 0px #FFD54F'}}>
              {service.name}
            </h3>
            <p className="body-text text-base sm:text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl">
              {service.shortDescription}
            </p>
            
            <div className="text-xs text-yellow bg-navy px-4 py-2 rounded-full inline-block font-semibold mb-6">
              Estimate within 1 day
            </div>

            {/* Expandable Details Button */}
            <div className="mb-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center justify-center mx-auto lg:mx-0 space-x-3 py-3 px-6 transition-all duration-300 hover:bg-yellow/10 rounded-lg"
              >
                <span className="text-sm font-semibold text-navy group-hover:text-yellow transition-colors">
                  {isExpanded ? 'Show Less' : 'Show More Details'}
                </span>
                <div className="flex items-center justify-center w-8 h-8 bg-yellow rounded-full group-hover:bg-navy transition-all duration-300 group-hover:scale-110">
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-navy group-hover:text-yellow transition-colors" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-navy group-hover:text-yellow transition-colors animate-bounce" />
                  )}
                </div>
              </button>
            </div>

            {/* Expandable Content */}
            {isExpanded && (
              <div className="mb-6 p-6 bg-white rounded-xl border-2 border-yellow/20 shadow-inner animate-in slide-in-from-top-2 duration-300 max-w-4xl mx-auto lg:mx-0">
                <div className="space-y-4">
                  <p className="body-text text-sm text-gray-700 leading-relaxed text-left">
                    {service.description}
                  </p>
                  
                  {service.features && service.features.length > 0 && (
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-semibold text-navy text-sm mb-3 text-left">What's Included:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-yellow rounded-full flex-shrink-0"></div>
                            <span className="text-xs text-gray-700 text-left">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="flex items-center space-x-2 bg-yellow/10 rounded-lg p-3">
                        <div className="w-1.5 h-1.5 bg-yellow rounded-full"></div>
                        <span className="text-xs font-medium text-navy">Licensed & Insured</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-yellow/10 rounded-lg p-3">
                        <div className="w-1.5 h-1.5 bg-yellow rounded-full"></div>
                        <span className="text-xs font-medium text-navy">Same Day Service Available</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-yellow/10 rounded-lg p-3">
                        <div className="w-1.5 h-1.5 bg-yellow rounded-full"></div>
                        <span className="text-xs font-medium text-navy">Free Estimates</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto lg:w-48">
            <GetQuoteButton className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg">Get Free Quote
              </GetQuoteButton>
            <Link href={`/services/${service.id}`} className="w-full">
              <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                <span>Learn More</span>
                <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
