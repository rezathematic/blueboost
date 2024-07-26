import Hero from '@/app/hero'
import Method from '@/app/method'
import LogoGrid from '@/app/components/logo-grid'
import TopServicesOverview from '@/app/components/top-services-overview'
import AlgoCta from '@/app/components/algo-cta'
import ServicesOverview from '@/app/components/services-overview'
import StrategyCTA from '@/app/components/strategy-cta'
import { TopPostsGrid } from '@/app/components/posts-grid'
import { Metadata } from 'next'

// Lib imports
import { logos } from '@/app/lib/logo'
import { getFeaturedBlogPosts } from '@/app/lib/blog'
import { topServices, servicesOverview } from '@/app/lib/services'

export const metadata: Metadata = {
  title: {
    default: 'The Only SEO Agency You Will Ever Need | Blue Boost',
    template: '%s | Blue Boost'
  },
  description:
    'Looking for the top SEO agency? We can help improve your search engine optimization with our custom services. ✓ Get started!'
}

export default function Home() {
  let featuredPosts = getFeaturedBlogPosts(3)

  return (
    <>
      <Hero />
      <LogoGrid logos={logos} />
      <Method />
      {/* TODO: Case Study Carousel: Image left, Two metrics, Title, Link */}
      <hr className="border-gray-200" />
      <TopServicesOverview services={topServices} />
      <hr className="border-gray-200" />
      <AlgoCta />
      {/* TODO: Testimonial videos carousel, message, name */}
      <hr className="border-gray-200" />
      <ServicesOverview services={servicesOverview} />
      <StrategyCTA />
      <TopPostsGrid posts={featuredPosts} />
    </>
  )
}
