import Hero from "@/app/method/hero";
import TopServicesOverview from "@/app/components/top-services-overview";
import AlgoCta from "@/app/components/algo-cta";
import ServicesOverview from "@/app/components/services-overview";
import StrategyCTA from "@/app/components/strategy-cta";
import StrategyFrameworkTimeline from "@/app/components/strategic-framework-timeline";
import CtaPanel from "@/app/components/cta-panel";
import AdditionalSEOServices from "@/app/components/additional-seo-services";

// Lib imports
import { topServices, servicesOverview } from "@/app/lib/services";

export default function MethodPage() {
  return (
    <>
      <Hero />
      <hr className="border-gray-200" />
      <StrategyFrameworkTimeline isWhite={true} />
      <hr className="border-gray-200" />
      <AdditionalSEOServices />
      <CtaPanel ctaText="Get a custom quote" />
      <hr className="border-gray-200" />
      <AlgoCta />
      {/* TODO: Case Study Carousel: Image left, Two metrics, Title, Link */}
      <hr className="border-gray-200" />
      <TopServicesOverview services={topServices} />
      {/* TODO: Testimonial videos carousel, message, name */}
      <hr className="border-gray-200" />
      <ServicesOverview services={servicesOverview} />
      <StrategyCTA />
    </>
  );
}
