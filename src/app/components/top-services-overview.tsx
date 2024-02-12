import Button from "@/app/components/buttons";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { ServiceOverview } from "@/app/lib/types";

interface ServicesOverviewProps {
  services: ServiceOverview[];
}

const TopServicesOverview: React.FC<ServicesOverviewProps> = ({ services }) => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The most effective system for rapidly growing businesses.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lots of entrepreneurs try to scale their business by trial and
            error, hoping to stumble upon that “one” deal. This method (if you
            like to call it that) is extremely unreliable, stressful and often
            results in failure and later sitting in a psychiatrist chair.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            SEO is a truly untapped marketing channel with the power to unlock
            high-conversion organic traffic and long-term ROI — We will help you
            harness that power.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button href={"/services/seo"}>Explore our services</Button>
          </div>
        </article>
        <div className="mx-auto w-full max-w-2xl  pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div>
            {services.map((service, index) => (
              <div
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
                key={index}
              >
                <div className="rounded-2xl bg-gray-50 p-6 text-sm leading-6 hover:bg-gray-100">
                  <div className="group relative focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
                    <div>
                      <span
                        className={clsx(
                          service.iconBgColor,
                          service.iconTextColor,
                          "inline-flex rounded-lg p-3"
                        )}
                      >
                        <service.icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-lg font-semibold leading-6 text-gray-900">
                        <Link
                          href={service.href}
                          className="focus:outline-none"
                        >
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {service.title}
                        </Link>
                      </h3>
                      <p className="mt-2 mb-6 text-gray-500">
                        {service.description}
                      </p>
                      <p className="text-sm font-semibold leading-6 text-gray-900">
                        View {service.serviceName}{" "}
                        <span aria-hidden="true">→</span>
                      </p>
                    </div>
                    <span
                      className="pointer-events-none absolute right-6 top-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopServicesOverview;
