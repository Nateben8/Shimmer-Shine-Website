"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
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

interface ServicePageCardProps {
  service: Service
}

export default function ServicePageCard({ service }: ServicePageCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group h-full flex flex-col overflow-hidden">
      {/* Service Image/Icon - Pink's Windows Style */}
      <div className="relative h-48 bg-gray-100 flex items-center justify-center">
        {service.iconType === "image" ? (
          <Image
            src={service.icon}
            alt={`Professional ${service.name} Orange County`}
            title={`${service.name} Services Orange County`}
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
            sizes="80px"
            loading="lazy"
          />
        ) : (
          <div className="text-6xl text-navy">{service.icon}</div>
        )}
      </div>
      
      <div className="flex flex-col flex-1">
        <CardHeader className="text-center p-6 pb-4 flex-1">
          <CardTitle className="heading-primary text-xl mb-3 text-navy leading-tight">
            {service.name}
          </CardTitle>
          <CardDescription className="body-text text-sm text-gray-600 leading-relaxed mb-4">
            {service.shortDescription}
          </CardDescription>
          
          <div className="text-xs text-yellow bg-navy px-3 py-1 rounded-full inline-block font-semibold mb-4">
            Estimate within 1 day
          </div>
          
          {/* Expandable Details Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg p-3 transition-all duration-300 mb-4"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-sm font-medium text-navy">
                {isExpanded ? 'Hide Details' : 'View Details'}
              </span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-navy" />
              ) : (
                <ChevronDown className="h-4 w-4 text-navy" />
              )}
            </div>
          </button>
          
          {/* Expandable Content */}
          {isExpanded && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-in slide-in-from-top-2 duration-300">
              <div className="space-y-3">
                <p className="body-text text-sm text-gray-700 leading-relaxed text-left">
                  {service.description}
                </p>
                
                {service.features && service.features.length > 0 && (
                  <div className="border-t border-gray-200 pt-3">
                    <h4 className="font-semibold text-navy text-sm mb-2 text-left">What's Included:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-yellow rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-gray-700 text-left">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex items-center space-x-2 bg-yellow/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full"></div>
                      <span className="text-xs font-medium text-navy">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-yellow/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full"></div>
                      <span className="text-xs font-medium text-navy">Same Day Service Available</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-yellow/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full"></div>
                      <span className="text-xs font-medium text-navy">Free Estimates</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardHeader>
        
        <CardContent className="p-6 pt-0 mt-auto">
          <div className="space-y-3">
            <GetQuoteButton className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg">Get Free Quote
              </GetQuoteButton>
            <Link href={`/services/${service.id}`}>
              <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                <span>Learn More</span>
                <ExternalLink className="h-3 w-3 ml-2 flex-shrink-0" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}