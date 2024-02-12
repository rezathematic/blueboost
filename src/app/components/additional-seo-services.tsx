import {
  PencilSquareIcon,
  CommandLineIcon,
  CursorArrowRippleIcon,
  DocumentArrowUpIcon,
} from "@heroicons/react/20/solid";

const descriptionData = {
  keywordResearch: (
    <ul className="list-inside list-disc marker:text-blue-500">
      <li>Competitive Analysis</li>
      <li>Search Intent Optimization</li>
      <li>Keyword Strategy Refresh</li>
      <li>Supporting Keyword Themes</li>
      <li>Keyword Opportunities</li>
    </ul>
  ),
  technicalSEO: (
    <ul className="list-inside list-disc marker:text-blue-500">
      <li>Google Analytics Audit</li>
      <li>301 Redirect Mapping</li>
      <li>International SEO Audit</li>
      <li>GA Implementation</li>
      <li>GSC Integration</li>
    </ul>
  ),
  onpageSEO: (
    <ul className="list-inside list-disc marker:text-blue-500">
      <li>Internal Link Audit</li>
      <li>Page Optimization</li>
      <li>Keyword Cannibalization</li>
      <li>SERP Feature and Schema Optimization</li>
      <li>Featured Snippet Optimization</li>
      <li>Content Audit</li>
      <li>Site Architecture Audit</li>
      <li>Conversion Rate Optimization</li>
    </ul>
  ),
  offpageSEO: (
    <ul className="list-inside list-disc marker:text-blue-500">
      <li>Link Building</li>
      <li>Backlink Audit With Manual Disavow</li>
      <li>App Store Optimization</li>
      <li>Google Store Optimization</li>
      <li>Pinterest Optimization</li>
      <li>YouTube Optimization</li>
      <li>Google Business Profile Optimization</li>
      <li>Local Citation Audit</li>
      <li>Local Citation Building</li>
    </ul>
  ),
};

const services = [
  {
    name: "Keyword Research",
    description: descriptionData.keywordResearch,
    href: "/services/seo",
    icon: PencilSquareIcon,
  },
  {
    name: "Technical SEO",
    description: descriptionData.technicalSEO,
    href: "/services/seo",
    icon: CommandLineIcon,
  },
  {
    name: "On-Page SEO",
    description: descriptionData.onpageSEO,
    href: "/services/seo",
    icon: CursorArrowRippleIcon,
  },
  {
    name: "Off-Page SEO",
    description: descriptionData.offpageSEO,
    href: "/services/seo",
    icon: DocumentArrowUpIcon,
  },
];

const AdditionalSEOServices = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Additonal SEO Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Enhance your SEO with added services for peak performance and
            ranking boost.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <h3 className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <service.icon
                    className="h-5 w-5 flex-none text-blue-600"
                    aria-hidden="true"
                  />
                  {service.name}
                </h3>
                <div className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  {service.description}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default AdditionalSEOServices;
