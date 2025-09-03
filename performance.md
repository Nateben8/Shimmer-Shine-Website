# Performance Optimization Guide

## Environment Variables for Performance

Add these to your `.env.local` file:

```env
# Performance and Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
GOOGLE_VERIFICATION_ID=your_google_verification_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://www.shimmershinepropertydetailing.com

# Bundle Analysis (set to true to analyze bundle size)
ANALYZE=false

# Performance Monitoring
NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING=true
```

## Bundle Analysis

To analyze your bundle size and identify optimization opportunities:

```bash
# Analyze bundle size
ANALYZE=true npm run build

# This will open a visual representation of your bundle
# Look for:
# - Large dependencies that can be replaced
# - Unused code that can be removed
# - Opportunities for code splitting
```

## Performance Monitoring

The WebVitals component automatically tracks:
- **LCP (Largest Contentful Paint)** - Should be < 2.5s
- **FID (First Input Delay)** - Should be < 100ms
- **CLS (Cumulative Layout Shift)** - Should be < 0.1
- **FCP (First Contentful Paint)** - Should be < 1.8s
- **TTFB (Time to First Byte)** - Should be < 600ms

## Image Optimization Checklist

- ✅ Next.js Image component with AVIF/WebP formats
- ✅ Proper sizing with responsive images
- ✅ Lazy loading for non-critical images
- ✅ Priority loading for above-the-fold images
- ✅ Blur placeholders for better UX
- ✅ Aggressive caching headers (1 year)

## Font Optimization

- ✅ Google Fonts with `display: swap`
- ✅ Font preloading for critical fonts
- ✅ Fallback fonts to prevent layout shift
- ✅ Font subsetting for Latin characters only

## Caching Strategy

- **Static Assets**: 1 year cache with immutable flag
- **Images**: 1 year cache with Vary: Accept header
- **API Routes**: 5 minutes cache
- **HTML Pages**: Handled by Next.js automatically

## Core Web Vitals Optimization Tips

### Improve LCP (Largest Contentful Paint)
- Optimize hero images with priority loading
- Use CDN for faster asset delivery
- Minimize server response times
- Remove unused CSS/JS

### Improve FID (First Input Delay)
- Minimize JavaScript execution time
- Use code splitting to reduce bundle size
- Defer non-critical JavaScript
- Use web workers for heavy computations

### Improve CLS (Cumulative Layout Shift)
- Set explicit dimensions for images and videos
- Reserve space for dynamic content
- Use CSS aspect-ratio for responsive media
- Avoid inserting content above existing content

## Monitoring and Testing

1. **Lighthouse**: Built into Chrome DevTools
2. **PageSpeed Insights**: https://pagespeed.web.dev/
3. **WebPageTest**: https://www.webpagetest.org/
4. **Real User Monitoring**: Implemented via WebVitals component

## Performance Budget

Target metrics for this website:
- **Performance Score**: > 90
- **LCP**: < 2.0s
- **FID**: < 50ms
- **CLS**: < 0.05
- **Bundle Size**: < 500KB (gzipped)
- **Image Sizes**: Optimized for each breakpoint
