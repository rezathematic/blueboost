import React from 'react'

import Image, { StaticImageData } from 'next/image'
import Button from '@/app/components/buttons'
import homeHeroImage from '../../../public/img/home-hero-dashboard.png'
import clsx from 'clsx'

interface HeroProps {
  preTitle?: string
  heading: string
  description?: string
  hasButton?: boolean | false
  buttonText?: string
  buttonLink?: string
  image?: string | StaticImageData
  imageAlt?: string
  order?: 'default' | 'reverse'
}

const Hero: React.FC<HeroProps> = ({
  preTitle,
  heading,
  description,
  hasButton,
  buttonText,
  buttonLink,
  image,
  imageAlt,
  order
}) => {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div
            className={clsx(
              order === 'reverse' ? 'lg:order-last lg:ml-8' : '',
              'px-6 lg:px-0 lg:pr-4 lg:pt-4'
            )}
          >
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              {preTitle && (
                <p className="mb-2 text-base font-semibold uppercase leading-7 text-blue-600">
                  {preTitle}
                </p>
              )}
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {heading}
              </h1>
              {description && (
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {description}
                </p>
              )}
              {hasButton && (
                <div className="mt-10 flex items-center gap-x-6">
                  <Button
                    href={
                      buttonLink
                        ? buttonLink
                        : 'https://calendly.com/rezabb/seofix'
                    }
                  >
                    {buttonText ? buttonText : 'Start Ranking Today'}
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate aspect-square overflow-hidden bg-blue-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  src={image ? image : homeHeroImage}
                  alt={imageAlt ? imageAlt : heading}
                  placeholder="blur"
                  width={2432}
                  height={1442}
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
