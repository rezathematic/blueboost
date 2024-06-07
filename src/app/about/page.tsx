import Hero from '@/app/components/hero'
import TopServicesOverview from '@/app/components/top-services-overview'
import AlgoCta from '@/app/components/algo-cta'
import ServicesOverview from '@/app/components/services-overview'
import StrategyCTA from '@/app/components/strategy-cta'
import StrategyFrameworkTimeline from '@/app/components/strategic-framework-timeline'
import CtaPanel from '@/app/components/cta-panel'
import AdditionalSEOServices from '@/app/components/additional-seo-services'
import Team from '@/app/components/team'
import aboutImage from '../../../public/img/about-blue-boost-office.jpeg'

// Lib imports
import { topServices, servicesOverview } from '@/app/lib/services'

export default function AboutPage() {
  return (
    <>
      <Hero
        preTitle="The decisive factor behind your success"
        heading="An SEO Agency That Guarantees Results Or They Don't Get Paid."
        description="If you're wondering, we're perfectly sane and serious about this proposition. Blue Boost is a data-driven SEO agency dedicated to empowering our customers with search-first marketing services."
        hasButton={true}
        image={aboutImage}
        imageAlt="Blue Boost office"
      />
      <hr className="border-gray-200" />
      <Team />
      <AlgoCta />
      <hr className="border-gray-200" />
      {/* TODO: Case Study Carousel: Image left, Two metrics, Title, Link */}
      <AdditionalSEOServices />
      <CtaPanel ctaText="Get a custom quote" />
      <hr className="border-gray-200" />
      <TopServicesOverview services={topServices} />
      {/* TODO: Testimonial videos carousel, message, name */}
      <hr className="border-gray-200" />
      <ServicesOverview services={servicesOverview} />
      <StrategyCTA />
    </>
  )
}
