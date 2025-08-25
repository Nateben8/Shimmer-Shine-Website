import { Metadata } from 'next'
import Link from 'next/link'
import { BUSINESS_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy | Shimmer Shine Property Detailing',
  description: 'Privacy Policy for Shimmer Shine Property Detailing. Learn how we collect, use, and protect your personal information when you use our services.',
  robots: 'index, follow',
  openGraph: {
    title: 'Privacy Policy | Shimmer Shine Property Detailing',
    description: 'Privacy Policy for Shimmer Shine Property Detailing. Learn how we collect, use, and protect your personal information when you use our services.',
    url: 'https://shimmershinepd.com/privacy-policy',
    siteName: 'Shimmer Shine Property Detailing',
    locale: 'en_US',
    type: 'website',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-primary text-4xl md:text-5xl mb-4">Privacy Policy</h1>
            <p className="body-text text-xl text-gray-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="mt-6 text-sm text-gray-300">
              <p>Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Introduction</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                Shimmer Shine Property Detailing ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our website <Link href="/" className="text-navy hover:text-yellow">shimmershinepd.com</Link> 
                or use our services.
              </p>
              <p className="body-text text-gray-700 leading-relaxed">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
                please do not access or use our website or services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Information We Collect</h2>
              
              <h3 className="heading-primary text-xl text-gray-800 mb-4">Personal Information</h3>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Request a quote or estimate for our services</li>
                <li>Contact us through our website, phone, or email</li>
                <li>Schedule an appointment</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Leave a review or testimonial</li>
              </ul>
              
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Property address and service location</li>
                <li>Service preferences and requirements</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="heading-primary text-xl text-gray-800 mb-4">Automatically Collected Information</h3>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device and usage, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website or source</li>
                <li>Device information and screen resolution</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">How We Use Your Information</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>To provide, maintain, and improve our cleaning and property detailing services</li>
                <li>To process service requests and communicate with you about appointments</li>
                <li>To send you quotes, estimates, and service confirmations</li>
                <li>To process payments and manage billing</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To improve our website and user experience</li>
                <li>To comply with legal obligations and protect our rights</li>
                <li>To prevent fraud and ensure the security of our services</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">How We Share Your Information</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              
              <h3 className="heading-primary text-xl text-gray-800 mb-4">Service Providers</h3>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                We may share your information with trusted third-party service providers who assist us in operating our business, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Payment processors (for secure payment handling)</li>
                <li>Scheduling and booking platforms (such as Jobber)</li>
                <li>Email marketing services</li>
                <li>Website hosting and analytics providers</li>
                <li>Customer relationship management (CRM) systems</li>
              </ul>

              <h3 className="heading-primary text-xl text-gray-800 mb-4">Legal Requirements</h3>
              <p className="body-text text-gray-700 leading-relaxed mb-6">
                We may disclose your information if required by law, court order, or government regulation, or to protect our rights, property, or safety, or that of others.
              </p>

              <h3 className="heading-primary text-xl text-gray-800 mb-4">Business Transfers</h3>
              <p className="body-text text-gray-700 leading-relaxed mb-6">
                In the event of a merger, acquisition, or sale of our business, your information may be transferred to the new owner.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Data Security</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and employee training</li>
                <li>Secure data storage and backup systems</li>
              </ul>
              <p className="body-text text-gray-700 leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Cookies and Tracking Technologies</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p className="body-text text-gray-700 leading-relaxed">
                You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Your Privacy Rights</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your information to another service provider</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Restriction:</strong> Request limitation of how we process your information</li>
              </ul>
              <p className="body-text text-gray-700 leading-relaxed">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Third-Party Links</h2>
              <p className="body-text text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites, including social media platforms, review sites, and service providers. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Children's Privacy</h2>
              <p className="body-text text-gray-700 leading-relaxed">
                Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
              </p>
            </div>

            {/* California Privacy Rights */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">California Privacy Rights (CCPA)</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Right to know what personal information we collect and how it's used</li>
                <li>Right to delete personal information we have collected</li>
                <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="body-text text-gray-700 leading-relaxed">
                To exercise these rights, please contact us at <a href={`mailto:${BUSINESS_INFO.email}`} className="text-navy hover:text-yellow">{BUSINESS_INFO.email}</a> or call <a href={`tel:${BUSINESS_INFO.phone}`} className="text-navy hover:text-yellow">{BUSINESS_INFO.phone}</a>.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Changes to This Privacy Policy</h2>
              <p className="body-text text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="heading-primary text-3xl text-navy mb-6">Contact Us</h2>
              <p className="body-text text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="heading-primary text-lg text-navy mb-4">Shimmer Shine Property Detailing</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> <a href={`mailto:${BUSINESS_INFO.email}`} className="text-navy hover:text-yellow">{BUSINESS_INFO.email}</a></p>
                  <p><strong>Phone:</strong> <a href={`tel:${BUSINESS_INFO.phone}`} className="text-navy hover:text-yellow">{BUSINESS_INFO.phone}</a></p>
                  <p><strong>Address:</strong> {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zipCode}</p>
                  <p><strong>Service Areas:</strong> {BUSINESS_INFO.serviceAreas.join(', ')}</p>
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
