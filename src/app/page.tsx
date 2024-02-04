import Hero from "./hero";
import Method from "./method";
import LogoGrid from "@/app/components/logo-grid";
import TopServicesOverview from "@/app/components/top-services-overview";
import AlgoCta from "@/app/components/algo-cta";
import ServicesOverview from "@/app/components/services-overview";
import StrategyCTA from "@/app/components/strategy-cta";
import { TopPostsGrid } from "@/app/components/posts-grid";

// Lib imports
import { logos } from "@/app/lib/logo";
import { getFeaturedBlogPosts } from "@/app/lib/blog";
import { topServices, servicesOverview } from "@/app/lib/services";

export default function Home() {
  let featuredPosts = getFeaturedBlogPosts(3);

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
  );
}
