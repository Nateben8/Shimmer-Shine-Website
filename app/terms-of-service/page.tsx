import { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service | Shimmer Shine Property Detailing',
  description: 'Terms of Service for Shimmer Shine Property Detailing. Read our terms and conditions for using our professional cleaning and property detailing services.',
  robots: 'index, follow',
  openGraph: {
    title: 'Terms of Service | Shimmer Shine Property Detailing',
    description: 'Terms of Service for Shimmer Shine Property Detailing. Read our terms and conditions for using our professional cleaning and property detailing services.',
    url: 'https://shimmershinepd.com/terms-of-service',
    siteName: 'Shimmer Shine Property Detailing',
    locale: 'en_US',
    type: 'website',
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary text-4xl md:text-5xl mb-4">Terms of Service</h1>
            <p className="body-text text-xl text-gray-100">
              Please read these terms and conditions carefully before using our services.
            </p>
            <div className="mt-6 text-sm text-gray-300">
              <p>Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Agreement to Terms</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of the website located at{' '}
                <Link href="/" className="text-navy hover:text-yellow">shimmershinepd.com</Link>{' '}
                (the "Service") operated by Shimmer Shine Property Detailing ("us", "we", or "our").
              </p>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                with any part of these terms, then you may not access the Service.
              </p>
              <p className="body-text text-gray-700 leading-relaxed">
                These Terms apply to all visitors, users, and others who access or use the Service, 
                including customers who engage our professional cleaning and property detailing services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Our Services</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                Shimmer Shine Property Detailing provides professional cleaning and property maintenance services, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Residential and commercial window cleaning</li>
                <li>Pressure washing for driveways, patios, and building exteriors</li>
                <li>Solar panel cleaning and maintenance</li>
                <li>Gutter cleaning, repair, and installation</li>
                <li>Post-construction cleanup services</li>
                <li>Commercial property maintenance</li>
                <li>Related cleaning and property detailing services</li>
              </ul>
              <p className="body-text text-gray-700 leading-relaxed">
                We serve customers throughout Orange County, Los Angeles County, and San Diego County, California.
              </p>
            </div>

            {/* Service Agreements */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Service Agreements</h2>
              
              <h3 className="heading-primary text-xl text-gray-800 mb-4">Quotes and Estimates</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>All quotes and estimates are provided free of charge and are valid for 30 days unless otherwise specified</li>
                <li>Quotes are based on the information provided by the customer and may be subject to change upon inspection</li>
                <li>Final pricing may vary if actual conditions differ significantly from those described during the quote process</li>
                <li>We reserve the right to refuse service or modify pricing based on safety concerns or property conditions</li>
              </ul>

              <h3 className="heading-primary text-xl text-gray-800 mb-4">Scheduling and Appointments</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Service appointments are scheduled based on availability and weather conditions</li>
                <li>We will make reasonable efforts to arrive within the scheduled time window</li>
                <li>Customers must provide reasonable access to the property and work areas</li>
                <li>Cancellations must be made at least 24 hours in advance to avoid potential fees</li>
                <li>We reserve the right to reschedule services due to weather, safety concerns, or other circumstances beyond our control</li>
              </ul>

              <h3 className="heading-primary text-xl text-gray-800 mb-4">Payment Terms</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Payment is due upon completion of services unless other arrangements have been made</li>
                <li>We accept cash, check, credit cards, Venmo, and PayPal</li>
                <li>For recurring services, payment terms will be specified in the service agreement</li>
                <li>Late payments may be subject to a service charge of 1.5% per month or the maximum allowed by law</li>
                <li>Returned checks will incur a $35 processing fee</li>
              </ul>
            </div>

            {/* Customer Responsibilities */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Customer Responsibilities</h2>
              
              <h3 className="heading-primary text-xl text-gray-800 mb-4">Property Access and Preparation</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Customers must provide safe and reasonable access to all areas requiring service</li>
                <li>Remove or secure valuable items, decorations, and fragile objects from work areas</li>
                <li>Ensure pets are secured and will not interfere with service personnel</li>
                <li>Provide access to water and electrical outlets as needed</li>
                <li>Notify us of any hazardous conditions, security systems, or special requirements</li>
              </ul>

              <h3 className="heading-primary text-xl text-gray-800 mb-4">Property Conditions</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Customers are responsible for disclosing any known defects or damage to windows, surfaces, or equipment</li>
                <li>Pre-existing damage should be identified before service begins</li>
                <li>Customers must ensure that all surfaces and equipment to be cleaned are in serviceable condition</li>
                <li>We reserve the right to refuse service on damaged or unsafe surfaces</li>
              </ul>

              <h3 className="heading-primary text-xl text-gray-800 mb-4">Communication</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Provide accurate contact information and respond to scheduling communications promptly</li>
                <li>Notify us immediately of any concerns or issues with completed work</li>
                <li>Inform us of any changes to property access, security codes, or special instructions</li>
              </ul>
            </div>

            {/* Liability and Insurance */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Liability and Insurance</h2>
              
              <h3 className="heading-primary text-xl text-gray-800 mb-4">Our Insurance Coverage</h3>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                Shimmer Shine Property Detailing is fully licensed, bonded, and insured. We carry:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>General liability insurance</li>
                <li>Workers' compensation insurance</li>
                <li>Bonding for employee protection</li>
                <li>Commercial auto insurance for our vehicles and equipment</li>
              </ul>

              <h3 className="heading-primary text-xl text-gray-800 mb-4">Limitation of Liability</h3>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                Our liability is limited to the cost of the specific service provided. We are not liable for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Damage to pre-existing defective or damaged surfaces, windows, or equipment</li>
                <li>Damage caused by customer negligence or failure to follow preparation instructions</li>
                <li>Consequential, indirect, or incidental damages</li>
                <li>Damage to items not properly secured or removed from work areas</li>
                <li>Issues arising from undisclosed property conditions or hazards</li>
                <li>Weather-related delays or cancellations</li>
              </ul>

              <h3 className="heading-primary text-xl text-gray-800 mb-4">Claims Process</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Any damage claims must be reported within 24 hours of service completion</li>
                <li>Claims must be submitted in writing with photographic evidence when applicable</li>
                <li>We will investigate all legitimate claims promptly and fairly</li>
                <li>Resolution may include repair, replacement, or monetary compensation as appropriate</li>
              </ul>
            </div>

            {/* Service Guarantees */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Service Guarantees</h2>
              
              <h3 className="heading-primary text-xl text-gray-800 mb-4">Satisfaction Guarantee</h3>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                We stand behind the quality of our work and offer a satisfaction guarantee on all services:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>If you are not satisfied with our work, contact us within 24 hours</li>
                <li>We will return to address any legitimate quality concerns at no additional charge</li>
                <li>Our guarantee covers workmanship and adherence to agreed-upon service specifications</li>
                <li>The guarantee does not cover damage caused by weather, customer actions, or pre-existing conditions</li>
              </ul>

              <h3 className="heading-primary text-xl text-gray-800 mb-4">Weather Policy</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Services may be rescheduled due to rain, high winds, or other unsafe weather conditions</li>
                <li>We will contact customers as soon as possible to reschedule affected appointments</li>
                <li>No charges apply for weather-related cancellations or rescheduling</li>
                <li>Customers will be given priority scheduling for rescheduled appointments</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Intellectual Property</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive 
                property of Shimmer Shine Property Detailing and its licensors. The Service is protected by copyright, 
                trademark, and other laws. Our trademarks and trade dress may not be used without our prior written consent.
              </p>
              
              <h3 className="heading-primary text-xl text-gray-800 mb-4">Customer Content</h3>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                By providing reviews, testimonials, photos, or other content to us, you grant us a non-exclusive, 
                royalty-free, perpetual license to use, modify, and display such content for marketing and 
                promotional purposes.
              </p>
            </div>

            {/* Privacy and Data */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Privacy and Data Protection</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our{' '}
                <Link href="/privacy-policy" className="text-navy hover:text-yellow">Privacy Policy</Link>, 
                which is incorporated into these Terms by reference.
              </p>
              <p className="body-text text-gray-700 leading-relaxed">
                By using our Service, you consent to the collection and use of information in accordance with our Privacy Policy.
              </p>
            </div>

            {/* Prohibited Uses */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Prohibited Uses</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                You may not use our Service:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To collect or track the personal information of others</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent the security features of the Service</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Termination</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, for any reason 
                whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                Upon termination, your right to use the Service will cease immediately. If you wish to terminate your 
                account, you may simply discontinue using the Service.
              </p>
              <p className="body-text text-gray-700 leading-relaxed">
                For recurring service agreements, either party may terminate with 30 days written notice.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Dispute Resolution</h2>
              
              <h3 className="heading-primary text-xl text-gray-800 mb-4">Informal Resolution</h3>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                We encourage customers to contact us directly to resolve any disputes or concerns. Most issues can be 
                resolved quickly through direct communication.
              </p>

              <h3 className="heading-primary text-xl text-gray-800 mb-4">Governing Law</h3>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                These Terms shall be interpreted and governed by the laws of the State of California, without regard to 
                its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought 
                exclusively in the courts of Orange County, California.
              </p>

              <h3 className="heading-primary text-xl text-gray-800 mb-4">Limitation of Time to File Claims</h3>
              <p className="body-text text-gray-700 leading-relaxed">
                Any cause of action or claim you may have arising out of or relating to these Terms or the Service must 
                be commenced within one (1) year after the cause of action accrues; otherwise, such cause of action or 
                claim is permanently barred.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Disclaimers</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                The information on this Service is provided on an "as is" basis. To the fullest extent permitted by law, 
                this Company:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Excludes all representations and warranties relating to this Service and its contents</li>
                <li>Excludes all liability for damages arising out of or in connection with your use of this Service</li>
                <li>Does not warrant that the Service will be constantly available or available at all</li>
                <li>Reserves the right to modify or discontinue the Service at any time</li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Changes to Terms</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision 
                is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
              <p className="body-text text-gray-700 leading-relaxed">
                By continuing to access or use our Service after those revisions become effective, you agree to be bound 
                by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </div>

            {/* Severability */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Severability</h2>
              <p className="body-text text-gray-700 leading-relaxed">
                If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed 
                and interpreted to accomplish the objectives of such provision to the greatest extent possible under 
                applicable law and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Contact Information</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="heading-primary text-lg text-navy mb-4">Shimmer Shine Property Detailing</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> <a href={`mailto:${BUSINESS_INFO.email}`} className="text-navy hover:text-yellow">{BUSINESS_INFO.email}</a></p>
                  <p><strong>Phone:</strong> <a href={`tel:${BUSINESS_INFO.phone}`} className="text-navy hover:text-yellow">{BUSINESS_INFO.phone}</a></p>
                  <p><strong>Address:</strong> {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zipCode}</p>
                  <p><strong>Service Areas:</strong> {BUSINESS_INFO.serviceAreas.join(', ')}</p>
                  <p><strong>Business Hours:</strong> Mon-Fri 7:00 AM - 6:00 PM, Sat 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center pt-8 border-t border-gray-200">
              <Link 
                href="/" 
                className="inline-flex items-center justify-center px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy-700 transition-colors"
              >
                ← Back to Home
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
