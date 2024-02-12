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
import Image from "next/image";
// Lib imports
import { topServices, servicesOverview } from "@/app/lib/services";
import FAQ from "@/app/components/faq";
import {
  CheckBadgeIcon,
  TrophyIcon,
  SwatchIcon,
} from "@heroicons/react/20/solid";

const algoFeatures = [
  {
    name: "Cohesive Strategy",
    description:
      "We seamlessly integrate with your content marketing efforts, offering strategic advice to enhance your online presence. From conducting thorough research on key topics to aiding in the development of a unified content strategy.",
    icon: TrophyIcon,
  },
  {
    name: "Pure Craftmanship",
    description:
      "With your keyword strategy as our foundation, our team of experts uses their deep knowledge to create content that not only appeals to your audience but also stands out in search engine rankings.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Flexible Work",
    description:
      "Looking for just keywords? We've got it handled. Need detailed outlines for your writing team? We provide those as well. Or perhaps you're after complete blog posts ready to go straight into your CMS? Consider it done.",
    icon: SwatchIcon,
  },
];

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

export default function SEOContentPage() {
  return (
    <>
      {/* Todo: Breadcrumbs */}
      <Hero
        preTitle="SEO Content that connects and converts"
        heading="Boost Your Online Presence with Specialized SEO Content Services."
        description="Leverage your keyword analysis to craft an integrated content strategy designed to enhance your subject matter expertise, elevate your search engine placement, and increase your organic traffic flow."
        hasButton={true}
        order="reverse"
      />
      <LogoGrid logos={logos} />
      <hr className="border-gray-200" />
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto container max-w-7xl px-6 lg:px-8">
          <div className="mx-auto sm:text-left">
            <h2 className="text-base font-semibold leading-7 text-blue-600 tracking-wide uppercase">
              Your Vision, Our Expertise
            </h2>
            <p className="mt-2 text-xl sm:leading-relaxed text-gray-900 sm:text-3xl">
              We create SEO content designed to climb the search rankings,
              connect with audiences, and drive conversions. In the realm of
              digital marketing, if content holds the throne, then SEO is its
              reigning crown. Content that captivates and incorporates targeted
              keywords does not just attract organic traffic—it also encourages
              repeat visits and fosters customer loyalty.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              src={`/img/home-hero-dashboard.png`}
              alt="Semrush Dashboard"
              className="rounded-xl shadow-2xl aspect-video object-cover object-top ring-1 ring-gray-900/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {algoFeatures.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-blue-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="block">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <hr className="border-gray-200" />
      <AdditionalSEOServices />
      <hr className="border-gray-200" />
      {/* <TopServicesOverview services={topServices} /> */}
      {/* <hr className="border-gray-200" /> */}
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
