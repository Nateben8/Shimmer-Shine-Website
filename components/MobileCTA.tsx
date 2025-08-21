"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, X } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/constants"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 100px
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white border-t border-gray-200 shadow-lg overflow-hidden"
              >
                <div className="p-4 space-y-3">
                  <Link href="/contact" onClick={() => setIsExpanded(false)}>
                    <Button variant="retro" className="w-full">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Get Free Quote
                    </Button>
                  </Link>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Link href="/services" onClick={() => setIsExpanded(false)}>
                      <Button variant="outline" size="sm" className="w-full">
                        Services
                      </Button>
                    </Link>
                    <Link href="/about" onClick={() => setIsExpanded(false)}>
                      <Button variant="outline" size="sm" className="w-full">
                        About Us
                      </Button>
                    </Link>
                  </div>

                  <div className="text-center pt-2 border-t border-gray-200">
                    <div className="flex justify-center space-x-2">
                      <div className="retro-badge text-xs">
                        Licensed & Insured
                      </div>
                      <div className="retro-badge text-xs">
                        500+ Reviews
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main CTA Bar */}
          <div className="bg-navy text-white shadow-lg">
            <div className="flex items-center">
              {/* Call Button */}
              <Link 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="flex-1 flex items-center justify-center py-4 hover:bg-navy-600 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="font-bold text-sm">Call Now</div>
                  <div className="text-xs text-gray-300">{BUSINESS_INFO.phone}</div>
                </div>
              </Link>

              {/* Divider */}
              <div className="w-px bg-navy-400 h-12"></div>

              {/* Quote Button */}
              <Link 
                href="/contact" 
                className="flex-1 flex items-center justify-center py-4 bg-yellow text-navy hover:bg-yellow-400 transition-colors"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                <div className="text-left">
                  <div className="font-bold text-sm">Free Quote</div>
                  <div className="text-xs opacity-75">60 Seconds</div>
                </div>
              </Link>

              {/* Expand/Collapse Button */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-4 py-4 hover:bg-navy-600 transition-colors"
                aria-label={isExpanded ? "Collapse menu" : "Expand menu"}
              >
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isExpanded ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <div className="flex flex-col space-y-1">
                      <div className="w-4 h-0.5 bg-white rounded"></div>
                      <div className="w-4 h-0.5 bg-white rounded"></div>
                      <div className="w-4 h-0.5 bg-white rounded"></div>
                    </div>
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
