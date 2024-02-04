import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  RezaIcon,
  XIcon,
} from "@/app/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavLink {
  name: string;
  href: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface FooterNav {
  solutions: NavLink[];
  support: NavLink[];
  company: NavLink[];
  legal: NavLink[];
  social: (NavLink & { icon: React.FC<React.SVGProps<SVGSVGElement>> })[];
}

const footerNav: FooterNav = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "/legal/privacy-policy" },
    { name: "Terms", href: "/legal/terms-and-conditions" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/blueboostco",
      icon: FacebookIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/blueboost.co/",
      icon: InstagramIcon,
    },
    {
      name: "X",
      href: "https://twitter.com/BlueBoostCo",
      icon: XIcon,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/blue-boost/",
      icon: LinkedInIcon,
    },
    {
      name: "GitHub",
      href: "https://github.com/rezathematic",
      icon: GitHubIcon,
    },
    {
      name: "Reza",
      href: "https://rezabaharvand.dev",
      icon: RezaIcon,
    },
    // {
    //   name: 'YouTube',
    //   href: '#',
    //   icon: YouTubeIcon
    // }
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/">
              <Image
                className="w-12 h-12"
                width={100}
                height={100}
                alt="Blue Boost logo"
                src="/logo-dark.png"
              />
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Business growth in a blue vial.
            </p>
            <div className="flex space-x-6">
              {footerNav.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNav.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} <Link href="/">Blue Boost</Link>.
            All rights reserved.{" "}
            <Link href="https://thestylecatalyst.com">
              Powered by The Style Catalyst
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
