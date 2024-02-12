import TimelineVertical from "@/app/components/timeline-vertical";
import Section from "@/app/components/section";

const descriptionData = {
  onboarding: (
    <ul className="list-inside list-disc">
      <li>Competitive Analysis</li>
      <li>Keyword Strategy</li>
      <li>Technical SEO Audit</li>
      <li>Primary Keyword Topics</li>
      <li>Metadata Optimizations</li>
      <li>Supporting Keyword Topics</li>
      <li>Keyword Opportunities</li>
      <li>Page Optimizations</li>
      <li>Primary Keyword Site Audit</li>
      <li>External Anchor Text Analysis</li>
      <li>Google Analytics Audit</li>
    </ul>
  ),
  monthly: (
    <ul className="list-inside list-disc">
      <li>Link Building</li>
      <li>Technical Site Sweep</li>
    </ul>
  ),
  semiAnnual: (
    <ul className="list-inside list-disc">
      <li>Competitive Analysis</li>
      <li>Keyword Strategy Review</li>
      <li>Featured Snippet Optimization</li>
      <li>Page Optimizations</li>
      <li>Keyword Cannibalization Audit</li>
    </ul>
  ),
  annual: (
    <ul className="list-inside list-disc">
      <li>Internal Link Audit</li>
      <li>SERP Features and Schema Optimization</li>
      <li>E-E-A-T Optimization</li>
    </ul>
  ),
};

const timelineData = [
  {
    name: "Pinpoint Growth Obstacles and Define Success Metrics",
    description: descriptionData.onboarding,
    date: "Onboarding",
  },
  {
    name: "Build and Grow Your Site Authority.",
    description: descriptionData.monthly,
    date: "Monthly",
  },
  {
    name: "Eliminate Barriers for Consistent Growth",
    description: descriptionData.semiAnnual,
    date: "Semi-Annual",
  },
  {
    name: "Capitalize on the Momentum of Foundational SEO Success.",
    description: descriptionData.annual,
    date: "Annual",
  },
];

const StrategyFrameworkTimeline = ({ isWhite }: { isWhite?: boolean }) => {
  return (
    <Section isWhite={isWhite ? isWhite : false}>
      <div className="mx-auto px-6 lg:px-8 max-w-2xl lg:text-center">
        <p className="mb-4 text-center text-sm inline-block bg-blue-300 px-4 align-middle leading-none rounded-full py-2 uppercase font-bold tracking-wider text-blue-800">
          The most effectrive SEO framework
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Achieve dependable outcomes you can trust.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Leverage organic search to your advantage with our proven,
          battle-tested framework, guiding your target audience directly to what
          they need with precision and reliability.
        </p>
      </div>
      <TimelineVertical items={timelineData} />
    </Section>
  );
};

export default StrategyFrameworkTimeline;
