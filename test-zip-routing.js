// Test script for ZIP code routing functionality
const { getCountyFromZipCode, getQuoteUrlFromZipCode, getCountyDisplayName } = require('./lib/zipCodes.ts')

// Test ZIP codes for each county
const testZipCodes = [
  // Orange County ZIP codes
  { zip: '92602', expectedCounty: 'orange-county', expectedUrl: '/get-a-quote', description: 'Irvine, OC' },
  { zip: '92660', expectedCounty: 'orange-county', expectedUrl: '/get-a-quote', description: 'Newport Beach, OC' },
  { zip: '92801', expectedCounty: 'orange-county', expectedUrl: '/get-a-quote', description: 'Anaheim, OC' },
  
  // Los Angeles County ZIP codes
  { zip: '90210', expectedCounty: 'los-angeles', expectedUrl: '/get-a-quote/los-angeles', description: 'Beverly Hills, LA' },
  { zip: '90401', expectedCounty: 'los-angeles', expectedUrl: '/get-a-quote/los-angeles', description: 'Santa Monica, LA' },
  { zip: '91101', expectedCounty: 'los-angeles', expectedUrl: '/get-a-quote/los-angeles', description: 'Pasadena, LA' },
  
  // San Diego County ZIP codes
  { zip: '92037', expectedCounty: 'san-diego', expectedUrl: '/get-a-quote/san-diego', description: 'La Jolla, SD' },
  { zip: '92101', expectedCounty: 'san-diego', expectedUrl: '/get-a-quote/san-diego', description: 'Downtown San Diego, SD' },
  { zip: '92121', expectedCounty: 'san-diego', expectedUrl: '/get-a-quote/san-diego', description: 'Sorrento Valley, SD' },
  
  // Unknown ZIP code (should default to Orange County)
  { zip: '10001', expectedCounty: 'unknown', expectedUrl: '/get-a-quote', description: 'New York (unknown)' },
  { zip: '90210', expectedCounty: 'los-angeles', expectedUrl: '/get-a-quote/los-angeles', description: 'Beverly Hills verification' }
]

console.log('🧪 Testing ZIP Code Routing System\n')
console.log('=' .repeat(80))

let passedTests = 0
let totalTests = testZipCodes.length

testZipCodes.forEach((test, index) => {
  console.log(`\nTest ${index + 1}: ${test.description}`)
  console.log(`ZIP Code: ${test.zip}`)
  
  try {
    const actualCounty = getCountyFromZipCode(test.zip)
    const actualUrl = getQuoteUrlFromZipCode(test.zip)
    const countyDisplayName = getCountyDisplayName(actualCounty)
    
    console.log(`Expected County: ${test.expectedCounty}`)
    console.log(`Actual County: ${actualCounty}`)
    console.log(`Expected URL: ${test.expectedUrl}`)
    console.log(`Actual URL: ${actualUrl}`)
    console.log(`Display Name: ${countyDisplayName}`)
    
    const countyMatch = actualCounty === test.expectedCounty
    const urlMatch = actualUrl === test.expectedUrl
    
    if (countyMatch && urlMatch) {
      console.log('✅ PASS - County and URL routing correct')
      passedTests++
    } else {
      console.log('❌ FAIL')
      if (!countyMatch) console.log(`   County mismatch: expected ${test.expectedCounty}, got ${actualCounty}`)
      if (!urlMatch) console.log(`   URL mismatch: expected ${test.expectedUrl}, got ${actualUrl}`)
    }
  } catch (error) {
    console.log(`❌ ERROR: ${error.message}`)
  }
  
  console.log('-'.repeat(50))
})

console.log(`\n📊 Test Results: ${passedTests}/${totalTests} tests passed`)

if (passedTests === totalTests) {
  console.log('🎉 All tests passed! ZIP code routing is working correctly.')
} else {
  console.log('⚠️  Some tests failed. Please check the implementation.')
}

console.log('\n🔗 Test URLs to verify manually:')
console.log('• Orange County: http://localhost:3000/get-a-quote')
console.log('• Los Angeles: http://localhost:3000/get-a-quote/los-angeles')  
console.log('• San Diego: http://localhost:3000/get-a-quote/san-diego')
