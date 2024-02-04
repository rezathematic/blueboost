import Image from "next/image";
import semrushDashoard from "../../../public/img/semrush-dashboard.jpg";

import {
  AcademicCapIcon,
  CheckBadgeIcon,
  TrophyIcon,
} from "@heroicons/react/20/solid";

const algoFeatures = [
  {
    name: "SEO Experts",
    description:
      "Every person you meet at our firm is an expert in SEO, ready to help you.",
    icon: TrophyIcon,
  },
  {
    name: "Transparent",
    description:
      "We will tell you what is happening at each step so you understand how we are reaching your goals.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Education-first",
    description:
      "We do more than just SEO services; we are here to help you learn more about SEO too.",
    icon: AcademicCapIcon,
  },
];

const AlgoCta = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto container max-w-7xl px-6 lg:px-8">
        <div className="mx-auto sm:text-left">
          <h2 className="text-base font-semibold leading-7 text-blue-600 tracking-wide uppercase">
            GROW 10X FASTER, BETTER, STRONGER.
          </h2>
          <p className="mt-2 text-xl sm:leading-relaxed text-gray-900 sm:text-3xl">
            While folks out there are all worked up, declaring &apos;SEO&apos;s
            done for&apos; and &apos;Google&apos;s algorithms are
            unpredictable&apos; we&apos;re just kicking back. Yes, Algorithms
            change, but our core principles keep you ahead of the game. Our SEO
            agency prioritizes lasting results built on a solid foundation of
            SEO expertise, transparency, and collaboration.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src={semrushDashoard}
            alt="Semrush Dashboard"
            placeholder="blur"
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
  );
};

export default AlgoCta;
