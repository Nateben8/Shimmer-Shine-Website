"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

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
    <Card className="retro-card hover:shadow-retro-yellow transition-all duration-300 group h-full flex flex-col">
      <CardHeader className="text-center p-4">
        <div className="mb-3 flex items-center justify-center">
          {service.iconType === "image" ? (
            <Image
              src={service.icon}
              alt={`Professional ${service.name} Orange County - ${service.shortDescription} service icon`}
              title={`${service.name} Services Orange County - Licensed & Insured`}
              width={56}
              height={56}
              className="w-14 h-14"
              sizes="56px"
              loading="lazy"
            />
          ) : (
            <div className="text-4xl">{service.icon}</div>
          )}
        </div>
        <CardTitle className="heading-primary text-lg mb-2 leading-tight">
          {service.name}
        </CardTitle>
        <CardDescription className="body-text text-sm text-gray-600 leading-relaxed">
          {service.shortDescription}
        </CardDescription>
        
        {/* Expandable Content */}
        <div className="mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group w-full bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-navy/30 rounded-xl p-3 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="text-sm font-bold text-navy group-hover:text-navy">
                  {isExpanded ? 'Hide Details' : 'See What\'s Included'}
                </div>
                <div className="text-xs text-gray-500 group-hover:text-gray-600">
                  {isExpanded ? 'Collapse service details' : 'Click to view full service details'}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xs text-white bg-navy px-2 py-1 rounded-full font-semibold group-hover:bg-yellow group-hover:text-navy transition-colors">
                  {isExpanded ? 'Less' : 'More'}
                </div>
                {isExpanded ? (
                  <ChevronUp className="h-4 w-4 text-gray-400 group-hover:text-navy transition-colors" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-navy transition-colors" />
                )}
              </div>
            </div>
          </button>
          
          {isExpanded && (
            <div className="mt-4 p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-yellow/20 shadow-inner animate-in slide-in-from-top-2 duration-300">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-2 h-2 bg-yellow rounded-full"></div>
                  <h4 className="font-bold text-navy text-sm">Service Details</h4>
                </div>
                <p className="body-text text-sm text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                
                {service.features && service.features.length > 0 && (
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-2 h-2 bg-yellow rounded-full"></div>
                      <h4 className="font-bold text-navy text-sm">What's Included</h4>
                    </div>
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-yellow rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2 bg-yellow/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full"></div>
                      <span className="text-xs font-medium text-navy">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-yellow/10 rounded-lg p-2">
                      <div className="w-1.5 h-1.5 bg-yellow rounded-full"></div>
                      <span className="text-xs font-medium text-navy">Same Day Service</span>
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
        </div>
      </CardHeader>
      
      <CardContent className="text-center p-4 pt-0 mt-auto">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <Link href="/get-a-quote">
              <Button className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold py-2 px-2 rounded-lg transition-all duration-300 hover:shadow-lg text-xs">
                Get Quote
              </Button>
            </Link>
            <Link href={`/services/${service.id}`}>
              <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white font-bold py-2 px-2 rounded-lg transition-all duration-300 text-xs">
                <span>Learn More</span>
                <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0" />
              </Button>
            </Link>
          </div>
          <p className="text-xs text-gray-500 leading-tight">
            Expand above for details or Learn More for full info
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
