import Button from "@/app/components/buttons";
import Image from "next/image";
import Link from "next/link";
import seoPlaybook from "../../../public/img/ultimate-seo-secrets-playbook.png";

const StrategyCTA = () => {
  return (
    <section className="overflow-hidden bg-gray-100 py-24 sm:py-32">
      <div className="mx-auto container max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase">
                Grow 10x Faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Improve your SEO strategy to see substantial returns
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover how organic search visibility and a specialized SEO
                agency partnership can benefit your business scale in a long
                run.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button href="#">Get your SEO strategy</Button>
              </div>
            </div>
          </div>
          <div className="lg:order-first w-full">
            <Link href="/" className="flex items-start justify-center">
              <Image
                src={seoPlaybook}
                alt="The Ultimate SEO Secrets Playbook"
                placeholder="blur"
                className="shadow-xl ring-1 ring-gray-400/10 sm:w-2/3"
                width={2432}
                height={1442}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategyCTA;
