'use client'

import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import Button from '@/app/components/buttons'
import {
  ChevronDownIcon,
  PhoneIcon,
  CalendarDaysIcon,
  PlayCircleIcon
} from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  ShoppingBagIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { usePathname } from 'next/navigation'

const products = [
  {
    name: 'SEO Services',
    description: 'Improve your SEO strategy to see returns',
    href: '/services/seo',
    icon: RocketLaunchIcon
  },
  {
    name: 'Content & Performance Marketing Services',
    description: 'Craft content to rank',
    href: '/services/seo-content',
    icon: PencilSquareIcon
  },
  {
    name: 'Ecommerce Strategy Services',
    description:
      'Develop comprehensive strategies for direct-to-consumer (D2C) success.',
    href: 'https://calendly.com/rezabb/seofix',
    icon: ShoppingBagIcon
  },
  {
    name: 'Web Development Services',
    description: 'Build and scale youridea',
    href: 'https://calendly.com/rezabb/seofix',
    icon: CodeBracketIcon
  },
  {
    name: 'Branding & UI/UX Design',
    description:
      'Create impactful branding and user experiences to captivate your audience.',
    href: 'https://calendly.com/rezabb/seofix',
    icon: SparklesIcon
  }
  // {
  //   name: "Web Development",
  //   description: "Build and scale youridea",
  //   href: "/services/web-development",
  //   icon: CodeBracketIcon,
  // },
  // {
  //   name: "Integrations",
  //   description: "Connect with third-party tools",
  //   href: "#",
  //   icon: SquaresPlusIcon,
  // },
  // {
  //   name: "Automations",
  //   description: "Build strategic funnels that will convert",
  //   href: "#",
  //   icon: ArrowPathIcon,
  // },
]
const callsToAction = [
  {
    name: 'Get a quote',
    href: 'https://calendly.com/rezabb/seofix',
    icon: CalendarDaysIcon
  },
  { name: 'Contact sales', href: '/contact', icon: PhoneIcon }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white">
      <nav
        className="container mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 flex items-center p-1.5">
            <span className="sr-only">Blue Boost</span>
            <Image
              width={100}
              height={100}
              className="h-8 w-auto"
              src="/logo192.png"
              alt="Blue Boost Logo"
            />
            <span className="ml-1 font-semibold tracking-wide text-gray-900">
              Blue Boost
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12" key={pathname}>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map(item => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-blue-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                          replace
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            href="/method"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Method
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button href="https://calendly.com/rezabb/seofix">
            Free SEO Strategy
          </Button>
          {/* <Link
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link> */}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Blue Boost</span>
              <Image
                width={100}
                height={100}
                className="h-8 w-auto"
                src="/logo192.png"
                alt="Blue Boost Logo"
              />
              <span className="ml-1 font-semibold tracking-wide text-gray-900">
                Blue Boost
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={clsx(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map(item => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/method"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Method
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                {/* <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link> */}
                <Button href="https://calendly.com/rezabb/seofix">
                  Free SEO Strategy
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
