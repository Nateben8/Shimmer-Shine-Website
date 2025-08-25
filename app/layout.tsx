import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { generateSEO, getPageSEO } from "@/lib/seo"
import { getLocalBusinessSchema, getWebsiteSchema, getOrganizationSchema } from "@/lib/schema"
import { SITE_CONFIG, BUSINESS_INFO } from "@/lib/constants"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MobileCTA from "@/components/MobileCTA"

const inter = Inter({ subsets: ["latin"] })

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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/NewFavicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/NewFavicon.png" />
        <link rel="apple-touch-icon" href="/NewFavicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Preload Jobber form resources */}
        {/* DNS prefetch for faster connection */}
        <link rel="dns-prefetch" href="https://d3ey4dbjkt2f6s.cloudfront.net" />
        <link rel="dns-prefetch" href="https://clienthub.getjobber.com" />
        
        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://d3ey4dbjkt2f6s.cloudfront.net" crossOrigin="" />
        <link rel="preconnect" href="https://clienthub.getjobber.com" crossOrigin="" />
        
        {/* Preload Jobber resources with high priority */}
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
        
        {/* Prefetch the form endpoint */}
        <link 
          rel="prefetch" 
          href="https://clienthub.getjobber.com/client_hubs/c6041d28-0ae8-4628-a9c4-14a29c7ff3e8/public/work_request/embedded_work_request_form"
        />
        
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
      <body className={`${inter.className} font-roboto-condensed`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <MobileCTA />
        </div>
      </body>
    </html>
  )
}
