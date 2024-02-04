import Link from "next/link";
import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

type LinkProp = {
  name: string;
  href: string;
  current: boolean;
};

type BreadcrumbsProps = {
  links: LinkProp[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links }) => {
  return (
    <div className="mx-auto container max-w-7xl px-6 lg:px-8 pt-6 sm:pt-8">
      <nav className="flex" aria-label="Breadcrumb">
        <ol role="list" className="flex flex-wrap items-center space-x-2">
          <li>
            <div className="flex items-center">
              <Link
                href="/"
                className="text-sm leading-none font-medium text-gray-500 hover:text-gray-700"
              >
                Home
              </Link>
            </div>
          </li>
          {links.map((link) => (
            <li key={link.name}>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <Link
                  href={link.href}
                  className={clsx(
                    "ml-2 text-sm leading-none font-medium text-gray-500 hover:text-gray-700 hover:underline",
                    link.current ? "text-gray-700 hover:text-gray-900" : ""
                  )}
                  aria-current={link.current ? "page" : undefined}
                >
                  {link.name}
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
