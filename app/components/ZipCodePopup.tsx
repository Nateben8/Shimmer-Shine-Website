'use client'

import { useState, useEffect } from 'react'

interface ZipCodePopupProps {
  onClose: () => void
  onSubmit: (zipCode: string) => void
}

export default function ZipCodePopup({ onClose, onSubmit }: ZipCodePopupProps) {
  const [zipCode, setZipCode] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (zipCode.length === 5) {
      onSubmit(zipCode)
      onClose()
    }
  }

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white rounded-lg p-8 max-w-md w-full mx-4 transform transition-transform duration-300 ${isVisible ? 'scale-100' : 'scale-95'}`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Enter Your Zip Code
          </h2>
          <p className="text-gray-600 mb-6">
            Get a personalized quote for your area
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
              placeholder="Enter 5-digit zip code"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={5}
              autoFocus
            />
            
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Skip
              </button>
              <button
                type="submit"
                disabled={zipCode.length !== 5}
                className="flex-1 px-4 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Get Quote
              </button>
            </div>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            We serve Orange County, Los Angeles County, and San Diego County
          </p>
        </div>
      </div>
    </div>
  )
}
