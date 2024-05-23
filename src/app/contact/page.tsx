import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Contact Us
              </h1>
              <p className="mt-4 leading-7 text-gray-600">
                Get in touch with us to learn more about our services.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Free SEO Strategy
                </h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Online Appointment</dt>
                    <dd>
                      <Link
                        className="font-semibold text-blue-600"
                        href="https://calendly.com/rezabb/seofix"
                      >
                        Get an SEO strategy call
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Bangalore
                </h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                  <p>Prestige Atlanta</p>
                  <p>Koramangala</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
