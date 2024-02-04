import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { ServiceOverview } from "@/app/lib/types";

type ServicesGridProps = {
  services: ServiceOverview[];
};

const ServicesOverview: React.FC<ServicesGridProps> = ({ services }) => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h3 className="mb-4 text-center text-sm inline-block bg-blue-300 px-4 align-middle leading-none rounded-full py-2 uppercase font-bold tracking-wider text-blue-800">
            Built To Scale
          </h3>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Learn how our SEO agency can help you dominate your market.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help businesses across different sectors and sizes in
            transforming organic searches into opportunities where your target
            audience discovers precisely what they need.
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={clsx(
                index === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                index === 1 ? "sm:rounded-tr-lg" : "",
                index === services.length - 2 ? "sm:rounded-bl-lg" : "",
                index === services.length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "group relative bg-white hover:bg-gray-100 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500"
              )}
            >
              <div>
                <span
                  className={clsx(
                    service.iconBgColor,
                    service.iconTextColor,
                    "inline-flex rounded-lg p-3 ring-4 ring-white"
                  )}
                >
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  <Link href={service.href} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
