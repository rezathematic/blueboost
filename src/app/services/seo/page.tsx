import TopServicesOverview from "@/app/components/top-services-overview";
import AlgoCta from "@/app/components/algo-cta";
import ServicesOverview from "@/app/components/services-overview";
import StrategyCTA from "@/app/components/strategy-cta";
import StrategyFrameworkTimeline from "@/app/components/strategic-framework-timeline";
import CtaPanel from "@/app/components/cta-panel";
import AdditionalSEOServices from "@/app/components/additional-seo-services";
import Hero from "@/app/components/hero";
import LogoGrid from "@/app/components/logo-grid";
import { logos } from "@/app/lib/logo";
import Breadcrumbs from "@/app/components/breadcrumbs";

// Lib imports
import { topServices, servicesOverview } from "@/app/lib/services";
import FAQ from "@/app/components/faq";

const faqs = [
  {
    question: "What does a SEO Service company actually do?",
    answer: (
      <p>
        A good digital marketing agency takes the time to deeply understand your
        business. They analyze the current traffic on your website and determine
        the most suitable online marketing platforms for investment. A crucial
        aspect of their strategy involves ongoing evaluation to ensure that you
        strike the right balance between your marketing expenditure and the
        results you achieve.
        <br /> <br />
        At Blue Boost, we go above and beyond the standard agency approach.
        While we certainly prioritize achieving that perfect balance, our
        ultimate objective is to dominate your competition. We strive to convert
        website visitors into loyal customers, maximizing your Return on
        Investment (ROI) through the utilization of highly effective marketing
        strategies.
      </p>
    ),
  },
  {
    question: "Will I get a return on my investment?",
    answer: (
      <p>
        Absolutely! We are so confident in our ability to deliver results that
        we offer <strong>Massive guarantees</strong>. If we fail to deliver, we
        will refund your money.
      </p>
    ),
  },
  {
    question: "Do you work with small or big companies?",
    answer: (
      <p>
        If you are committed to scaling your operations and achieving market
        dominance, we are here to collaborate with you.
        <br />
        <br />
        If you are you seeking a dedicated team of digital strategists,
        designers, and developers who will assist you in surpassing your growth
        objectives? We are ready to work with you.
        <br />
        <br />
        Do you recognize the value of investing $1 to earn 5x? We are the right
        partners for you.
        <br />
        <br />
        We cater to clients of all sizes and industries whether you are a small
        local business with a team of five, or a large company with hundreds of
        employees.
      </p>
    ),
  },
  {
    question: "Can you guarantee results?",
    answer: (
      <p>
        We stand by the quality of our traffic sources with solid guarantees.
        Whether it&apos;s Google Ads, Facebook marketing, or SEO, we back our
        claims with action. If we fail to achieve the mutually agreed-upon
        targets, we won&apos;t ask for payment.
      </p>
    ),
  },
];

export default function SEOPage() {
  return (
    <>
      {/* Todo: Breadcrumbs */}
      <Hero
        preTitle="Award-Winning SEO Strategies"
        heading="Impactful SEO Services with Lasting Success"
        description="Discover how our comprehensive SEO services, from keyword research and competitive analysis to site architecture and conversion optimization, can take your business from unseen to unbeatable."
        hasButton={true}
        order="reverse"
      />
      <LogoGrid logos={logos} />
      <hr className="border-gray-200" />
      <AlgoCta />
      <hr className="border-gray-200" />
      <AdditionalSEOServices />
      <hr className="border-gray-200" />
      <TopServicesOverview services={topServices} />
      <hr className="border-gray-200" />
      <CtaPanel ctaText="Get a custom quote" />
      {/* TODO: Case Study Carousel: Image left, Two metrics, Title, Link */}
      <hr className="border-gray-200" />
      <StrategyFrameworkTimeline />
      <FAQ faqs={faqs} heading="Your SEO services questions, answered here." />
      {/* TODO: Testimonial videos carousel, message, name */}
      <hr className="border-gray-200" />
      <ServicesOverview services={servicesOverview} />
      <StrategyCTA />
    </>
  );
}
