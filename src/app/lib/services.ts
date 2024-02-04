import {
  AcademicCapIcon as AcademicCapIconSolid,
  ArrowPathIcon,
  CheckBadgeIcon as CheckBadgeIconSolid,
  TrophyIcon,
} from "@heroicons/react/20/solid";
import {
  BuildingOffice2Icon,
  CommandLineIcon,
  RocketLaunchIcon,
  ScaleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { ServiceOverview } from "@/app/lib/types";

export const topServices: ServiceOverview[] = [
  {
    title: "Plan, Optimize, and Rank With SEO Services",
    serviceName: "SEO Services",
    description:
      "Our campaigns are built on reliable and tested SEO tactics that provide steady growth and adapt to your requirements. Regardless of your industry or target audience, we offer strategies designed to help you reach your objectives.",
    href: "#",
    icon: RocketLaunchIcon,
    iconBgColor: "bg-blue-50",
    iconTextColor: "text-blue-700",
  },
  {
    title: "Step Into the Search Spotlight With SEO Content",
    serviceName: "Content Services",
    description:
      "Our SEO content services elevate your brand from hidden to highlighted, increasing search visibility by enhancing your topical expertise, improving rankings, and drawing in more organic traffic.",
    href: "#",
    icon: ArrowPathIcon,
    iconBgColor: "bg-rose-50",
    iconTextColor: "text-rose-700",
  },
];

export const servicesOverview: ServiceOverview[] = [
  {
    title: "Ecommerce",
    description:
      "Boost your online store's visibility and attract more shoppers with tailored SEO strategies.",
    href: "#",
    icon: ShoppingCartIcon,
    iconBgColor: "text-teal-700",
    iconTextColor: "bg-teal-50",
  },
  {
    title: "Fashion",
    description:
      "Elevate your fashion brand's presence and connect with your ideal audience through targeted SEO.",
    href: "#",
    icon: ShoppingBagIcon,
    iconBgColor: "text-purple-700",
    iconTextColor: "bg-purple-50",
  },
  {
    title: "Real Estate",
    description:
      "Maximize exposure for your properties and attract potential buyers or tenants with strategic SEO.",
    href: "#",
    icon: BuildingOffice2Icon,
    iconBgColor: "text-sky-700",
    iconTextColor: "bg-sky-50",
  },
  {
    title: "Law Firm",
    description:
      "Increase your law firm's online visibility and attract more clients through effective SEO practices.",
    href: "#",
    icon: ScaleIcon,
    iconBgColor: "text-blue-700",
    iconTextColor: "bg-blue-50",
  },
  {
    title: "SaaS",
    description:
      "Enhance your software's online presence, reaching more potential customers with specialized SEO techniques.",
    href: "#",
    icon: CommandLineIcon,
    iconBgColor: "text-yellow-700",
    iconTextColor: "bg-yellow-50",
  },
  {
    title: "AI",
    description:
      "Drive awareness and interest in your AI product, targeting the right audience with precise SEO methods.",
    href: "#",
    icon: SparklesIcon,
    iconBgColor: "text-rose-700",
    iconTextColor: "bg-rose-50",
  },
];
