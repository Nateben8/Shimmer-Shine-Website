// Simple test for ZIP code routing functionality
// This tests the core logic without TypeScript imports

// Simplified ZIP code arrays (sample from each county)
const ORANGE_COUNTY_SAMPLE = ['92602', '92660', '92801', '92704', '92614']
const LOS_ANGELES_SAMPLE = ['90210', '90401', '91101', '90024', '90265']
const SAN_DIEGO_SAMPLE = ['92037', '92101', '92121', '92014', '92109']

// Test function
function testGetCountyFromZipCode(zipCode) {
  if (ORANGE_COUNTY_SAMPLE.includes(zipCode)) {
    return 'orange-county'
  }
  if (LOS_ANGELES_SAMPLE.includes(zipCode)) {
    return 'los-angeles'
  }
  if (SAN_DIEGO_SAMPLE.includes(zipCode)) {
    return 'san-diego'
  }
  return 'unknown'
}

function testGetQuoteUrlFromZipCode(zipCode) {
  const county = testGetCountyFromZipCode(zipCode)
  
  switch (county) {
    case 'orange-county':
      return '/get-a-quote'
    case 'los-angeles':
      return '/get-a-quote/los-angeles'
    case 'san-diego':
      return '/get-a-quote/san-diego'
    default:
      return '/get-a-quote' // Default fallback
  }
}

// Test cases
const testCases = [
  // Orange County
  { zip: '92602', expectedCounty: 'orange-county', expectedUrl: '/get-a-quote', location: 'Irvine, OC' },
  { zip: '92660', expectedCounty: 'orange-county', expectedUrl: '/get-a-quote', location: 'Newport Beach, OC' },
  
  // Los Angeles County  
  { zip: '90210', expectedCounty: 'los-angeles', expectedUrl: '/get-a-quote/los-angeles', location: 'Beverly Hills, LA' },
  { zip: '90401', expectedCounty: 'los-angeles', expectedUrl: '/get-a-quote/los-angeles', location: 'Santa Monica, LA' },
  
  // San Diego County
  { zip: '92037', expectedCounty: 'san-diego', expectedUrl: '/get-a-quote/san-diego', location: 'La Jolla, SD' },
  { zip: '92101', expectedCounty: 'san-diego', expectedUrl: '/get-a-quote/san-diego', location: 'Downtown SD' },
  
  // Unknown ZIP
  { zip: '10001', expectedCounty: 'unknown', expectedUrl: '/get-a-quote', location: 'NYC (unknown)' }
]

console.log('🧪 Testing ZIP Code Routing Logic\n')
console.log('='.repeat(60))

let passed = 0
let total = testCases.length

testCases.forEach((test, i) => {
  console.log(`\nTest ${i + 1}: ${test.location}`)
  console.log(`ZIP: ${test.zip}`)
  
  const actualCounty = testGetCountyFromZipCode(test.zip)
  const actualUrl = testGetQuoteUrlFromZipCode(test.zip)
  
  const countyMatch = actualCounty === test.expectedCounty
  const urlMatch = actualUrl === test.expectedUrl
  
  console.log(`County: ${actualCounty} ${countyMatch ? '✅' : '❌'}`)
  console.log(`URL: ${actualUrl} ${urlMatch ? '✅' : '❌'}`)
  
  if (countyMatch && urlMatch) {
    console.log('✅ PASS')
    passed++
  } else {
    console.log('❌ FAIL')
  }
})

console.log(`\n📊 Results: ${passed}/${total} tests passed`)
console.log(passed === total ? '🎉 All tests passed!' : '⚠️ Some tests failed')

console.log('\n🌐 Manual Testing URLs:')
console.log('• http://localhost:3000 (click Get Quote button)')
console.log('• Test ZIP 92602 → should go to /get-a-quote')
console.log('• Test ZIP 90210 → should go to /get-a-quote/los-angeles')
console.log('• Test ZIP 92037 → should go to /get-a-quote/san-diego')
