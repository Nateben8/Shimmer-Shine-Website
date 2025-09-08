export const metadata = {
  title: "Free Orange County Cleaning Quote – Shimmer Shine Property Detailing",
  description: "Get a free quote for professional window cleaning, pressure washing, and property detailing services in Orange County. Same day service available with 15% discount for new customers.",
}

export default function OrangeCountyQuotePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Shimmer & Shine</h1>
          <div className="space-x-6">
            <a href="/" className="hover:text-blue-200">Home</a>
            <a href="/about" className="hover:text-blue-200">About</a>
            <a href="/services" className="hover:text-blue-200">Services</a>
            <a href="/counties" className="hover:text-blue-200">Areas</a>
            <a href="/gallery" className="hover:text-blue-200">Gallery</a>
            <a href="/blog" className="hover:text-blue-200">Blog</a>
            <a href="/get-a-quote" className="bg-yellow-500 text-blue-900 px-4 py-2 rounded font-semibold hover:bg-yellow-400">
              Get Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
            Free Orange County Cleaning Quote
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6">
            Professional Service in 60 Seconds
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professional window cleaning, pressure washing, and property detailing across Orange County. 
            Family-owned since 2021 with 5-star rated service.
          </p>
          
          <a href="tel:(714) 497-0035" className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors">
            Call (714) 497-0035 Now
          </a>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Your Free Orange County Quote Below
              </h2>
              <p className="text-gray-600 text-lg">
                Join 500+ satisfied Orange County customers who trust us with their property cleaning needs.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">Get Your Free Quote Today!</h3>
              <p className="text-lg mb-6">Call us now for immediate service and a free estimate</p>
              <a href="tel:(714) 497-0035" className="bg-blue-900 text-white py-4 px-8 rounded-lg font-bold text-xl hover:bg-blue-800 transition-colors">
                Call (714) 497-0035
              </a>
              <p className="mt-4 text-gray-600">Available 7 days a week • Same day service available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Orange County Customers Choose Us</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="font-bold text-lg mb-2">100% Satisfaction Guarantee</h4>
              <p className="text-gray-600">Not happy? We'll make it right or refund you</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-bold text-lg mb-2">Lightning Fast Response</h4>
              <p className="text-gray-600">Quote delivered within 2 hours, guaranteed</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-bold text-lg mb-2">Fully Licensed & Insured</h4>
              <p className="text-gray-600">$2M liability coverage for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Orange County Areas We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow">Irvine</div>
            <div className="bg-white p-4 rounded-lg shadow">Newport Beach</div>
            <div className="bg-white p-4 rounded-lg shadow">Anaheim</div>
            <div className="bg-white p-4 rounded-lg shadow">Huntington Beach</div>
            <div className="bg-white p-4 rounded-lg shadow">Costa Mesa</div>
          </div>
          <p className="mt-6 text-gray-600">Free on-site estimates throughout Orange County</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-blue-900 mb-4">Ready to Get Started Today?</h3>
          <p className="text-xl text-blue-800 mb-8">
            Join 500+ satisfied Orange County customers. Get your FREE quote + 15% OFF!
          </p>
          <a href="tel:(714) 497-0035" className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors">
            Call (714) 497-0035 Now
          </a>
        </div>
      </section>
    </div>
  )
}
