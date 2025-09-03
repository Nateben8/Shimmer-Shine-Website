"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, MapPin, CheckCircle, AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

// Southern California ZIP codes by county
const ZIP_CODES = {
  "Orange County": [
    "90620", "90621", "90623", "90630", "90631", "90638", "90680", "90716", "90720", "90740", 
    "90742", "90743", "92530", "92602", "92603", "92604", "92606", "92610", "92612", "92614",
    "92617", "92618", "92620", "92624", "92625", "92626", "92627", "92629", "92630", "92637", 
    "92646", "92647", "92648", "92649", "92651", "92653", "92655", "92656", "92657", "92660",
    "92661", "92662", "92663", "92672", "92673", "92675", "92676", "92677", "92678", "92679", 
    "92683", "92688", "92691", "92692", "92694", "92697", "92701", "92703", "92704", "92705",
    "92706", "92707", "92708", "92780", "92782", "92801", "92802", "92804", "92805", "92806", 
    "92807", "92808", "92821", "92823", "92831", "92832", "92833", "92835", "92840", "92841",
    "92843", "92844", "92845", "92861", "92865", "92866", "92867", "92868", "92869", "92870", 
    "92886", "92887"
  ],
  "Los Angeles County": [
    "90001", "90002", "90003", "90004", "90005", "90006", "90007", "90008", "90010", "90011", 
    "90012", "90013", "90014", "90015", "90016", "90017", "90018", "90019", "90020", "90021",
    "90022", "90023", "90024", "90025", "90026", "90027", "90028", "90029", "90031", "90032", 
    "90033", "90034", "90035", "90036", "90037", "90038", "90039", "90040", "90041", "90042",
    "90043", "90044", "90045", "90046", "90047", "90048", "90049", "90052", "90056", "90057", 
    "90058", "90059", "90061", "90062", "90063", "90064", "90065", "90066", "90067", "90068",
    "90069", "90071", "90073", "90077", "90079", "90089", "90094", "90095", "90201", "90210", 
    "90211", "90212", "90220", "90221", "90222", "90230", "90232", "90240", "90241", "90242",
    "90245", "90247", "90248", "90249", "90250", "90254", "90255", "90260", "90262", "90263", 
    "90265", "90266", "90270", "90272", "90274", "90275", "90277", "90278", "90280", "90290",
    "90291", "90292", "90293", "90301", "90302", "90303", "90304", "90305", "90401", "90402", 
    "90403", "90404", "90405", "90501", "90502", "90503", "90504", "90505", "90506", "90601",
    "90602", "90603", "90604", "90605", "90606", "90623", "90630", "90631", "90638", "90639", 
    "90640", "90650", "90660", "90670", "90701", "90703", "90704", "90706", "90710", "90712",
    "90713", "90715", "90716", "90717", "90723", "90731", "90732", "90740", "90744", "90745", 
    "90746", "90747", "90755", "90802", "90803", "90804", "90805", "90806", "90807", "90808",
    "90810", "90813", "90814", "90815", "90822", "90831", "90840", "91001", "91006", "91007", 
    "91008", "91010", "91011", "91016", "91020", "91024", "91030", "91040", "91042", "91046",
    "91101", "91103", "91104", "91105", "91106", "91107", "91108", "91125", "91201", "91202", 
    "91203", "91204", "91205", "91206", "91207", "91208", "91210", "91214", "91301", "91302",
    "91303", "91304", "91306", "91307", "91311", "91316", "91321", "91324", "91325", "91326", 
    "91330", "91331", "91335", "91340", "91342", "91343", "91344", "91345", "91350", "91351",
    "91352", "91354", "91355", "91356", "91361", "91362", "91364", "91367", "91371", "91381", 
    "91384", "91387", "91390", "91401", "91402", "91403", "91405", "91406", "91411", "91423",
    "91436", "91501", "91502", "91504", "91505", "91506", "91601", "91602", "91604", "91605", 
    "91606", "91607", "91608", "91702", "91706", "91709", "91711", "91722", "91723", "91724",
    "91731", "91732", "91733", "91740", "91741", "91744", "91745", "91746", "91748", "91750", 
    "91754", "91755", "91759", "91765", "91766", "91767", "91768", "91770", "91773", "91775",
    "91776", "91780", "91789", "91790", "91791", "91792", "91801", "91803", "92397", "93243", 
    "93510", "93532", "93534", "93535", "93536", "93543", "93544", "93550", "93551", "93552",
    "93553", "93560", "93563", "93591"
  ],
  "San Diego County": [
    "91901", "91902", "91905", "91906", "91910", "91911", "91913", "91914", "91915", "91916", 
    "91917", "91931", "91932", "91934", "91935", "91941", "91942", "91945", "91948", "91950",
    "91962", "91963", "91977", "91978", "91980", "92003", "92004", "92007", "92008", "92009", 
    "92010", "92011", "92014", "92019", "92020", "92021", "92024", "92025", "92026", "92027",
    "92028", "92029", "92036", "92037", "92040", "92054", "92055", "92056", "92057", "92058", 
    "92059", "92060", "92061", "92064", "92065", "92066", "92067", "92069", "92070", "92071",
    "92075", "92078", "92081", "92082", "92083", "92084", "92086", "92091", "92092", "92093", 
    "92096", "92101", "92102", "92103", "92104", "92105", "92106", "92107", "92108", "92109",
    "92110", "92111", "92113", "92114", "92115", "92116", "92117", "92118", "92119", "92120", 
    "92121", "92122", "92123", "92124", "92126", "92127", "92128", "92129", "92130", "92131",
    "92132", "92134", "92135", "92136", "92139", "92140", "92145", "92147", "92154", "92155", 
    "92161", "92173", "92179", "92182", "92562", "92672"
  ]
}

// All ZIP codes flattened for quick lookup
const ALL_ZIP_CODES = Object.values(ZIP_CODES).flat()

// Function to get county by ZIP code
const getCountyByZip = (zipCode: string): string | null => {
  for (const [county, zips] of Object.entries(ZIP_CODES)) {
    if (zips.includes(zipCode)) {
      return county
    }
  }
  return null
}

interface ZipCodePopupProps {
  isOpen: boolean
  onClose: () => void
  onZipCodeSubmit: (zipCode: string, county: string) => void
}

export default function ZipCodePopup({ isOpen, onClose, onZipCodeSubmit }: ZipCodePopupProps) {
  const [zipCode, setZipCode] = useState("")
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [county, setCounty] = useState<string | null>(null)
  const router = useRouter()

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Validate ZIP code as user types
  useEffect(() => {
    if (zipCode.length === 5) {
      const foundCounty = getCountyByZip(zipCode)
      if (foundCounty) {
        setIsValid(true)
        setCounty(foundCounty)
      } else {
        setIsValid(false)
        setCounty(null)
      }
    } else {
      setIsValid(null)
      setCounty(null)
    }
  }, [zipCode])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isValid && county) {
      onZipCodeSubmit(zipCode, county)
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" style={{ margin: 0 }}>
      <Card className="w-full max-w-md bg-white shadow-2xl border-2 border-navy/20 relative" style={{ position: 'relative', top: 0, left: 0, transform: 'none' }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <CardHeader className="text-center pb-4">
          <CardTitle className="heading-primary text-xl text-navy flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-yellow" />
            Enter Your ZIP Code
          </CardTitle>
          <p className="text-sm text-gray-600 mt-2">
            We serve Orange County, Los Angeles County, and San Diego County
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* ZIP Code Input Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Enter 5-digit ZIP code"
                value={zipCode}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '').slice(0, 5)
                  setZipCode(value)
                }}
                className={`text-center text-lg font-bold pr-10 ${
                  isValid === true 
                    ? 'border-green-500 bg-green-50' 
                    : isValid === false 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-gray-300'
                }`}
                maxLength={5}
                autoFocus
              />
              
              {/* Validation Icon */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {isValid === true && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {isValid === false && (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            </div>

            {/* Error Message */}
            {isValid === false && zipCode.length === 5 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                <p className="text-sm text-red-700">
                  <strong>Sorry, we don't service this area yet.</strong>
                </p>
                <p className="text-xs text-red-600 mt-1">
                  We currently serve Orange County, LA County, and San Diego County
                </p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!isValid}
              className="w-full bg-yellow hover:bg-yellow/90 text-navy font-bold py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isValid ? 'Get My Free Quote!' : 'Enter ZIP Code'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
