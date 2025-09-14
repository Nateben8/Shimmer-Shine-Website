import type { Metadata } from "next"
// import { Inter } from "next/font/google"
import "./globals.css"
// Force redeploy for image cache refresh
import { generateSEO, getPageSEO } from "@/lib/seo"
import { getLocalBusinessSchema, getWebsiteSchema, getOrganizationSchema } from "@/lib/schema"
import { SITE_CONFIG, BUSINESS_INFO } from "@/lib/constants"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import WebVitals from "@/components/WebVitals"
import PerformanceOptimizer from "@/components/PerformanceOptimizer"
import PerformanceMonitor from "@/components/PerformanceMonitor"
import LocalBusinessSchema from "@/components/LocalBusinessSchema"
// import { ZipCodeProvider } from "@/components/ZipCodeProvider"

// Optimized font loading with display swap for better performance
// const inter = Inter({ 
//   subsets: ["latin"],
//   display: 'swap',
//   preload: true,
//   fallback: ['system-ui', 'arial'],
//   adjustFontFallback: true,
//   variable: '--font-inter'
// })

export const metadata: Metadata = getPageSEO('home')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = getLocalBusinessSchema()
  const websiteSchema = getWebsiteSchema()
  const organizationSchema = getOrganizationSchema()

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Critical viewport meta tag for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/NewFavicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/NewFavicon.png" />
        <link rel="apple-touch-icon" href="/NewFavicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Enhanced Jobber form performance optimization */}
        {/* DNS prefetch for instant connection */}
        <link rel="dns-prefetch" href="https://d3ey4dbjkt2f6s.cloudfront.net" />
        <link rel="dns-prefetch" href="https://clienthub.getjobber.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Preconnect for critical resources with crossorigin */}
        <link rel="preconnect" href="https://d3ey4dbjkt2f6s.cloudfront.net" crossOrigin="" />
        <link rel="preconnect" href="https://clienthub.getjobber.com" crossOrigin="" />
        
        {/* Aggressive preload of Jobber resources */}
        <link 
          rel="preload" 
          href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css" 
          as="style"
          fetchPriority="high"
        />
        <link 
          rel="preload" 
          href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" 
          as="script"
          fetchPriority="high"
        />
        
        {/* Preload the form endpoint for faster form loading */}
        <link 
          rel="preload" 
          href="https://clienthub.getjobber.com/client_hubs/c6041d28-0ae8-4628-a9c4-14a29c7ff3e8/public/work_request/embedded_work_request_form"
          as="fetch"
          crossOrigin=""
        />
        
        {/* Additional performance hints */}
        <link rel="dns-prefetch" href="https://api.getjobber.com" />
        <link rel="dns-prefetch" href="https://assets.getjobber.com" />
        
        {/* Preload critical CSS for faster rendering */}
        <link rel="preload" href="/globals.css" as="style" />
        
        {/* Preload critical images */}
        <link rel="preload" href="/mascot.png" as="image" type="image/png" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans">
        <WebVitals />
        <PerformanceOptimizer />
        <PerformanceMonitor />
        <LocalBusinessSchema />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
