import Image from "next/image";
import Button from "@/app/components/buttons";
import homeHeroImage from "../../public/img/home-hero-dashboard.png";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto container max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Search-centric strategies with transformative results
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover how our SEO agency can boost your brand’s online
                visibility and make every click count.
              </p>

              <div className="mt-10 flex items-center gap-x-6">
                <Button href={"/"}>Start Ranking Today</Button>
              </div>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative aspect-square isolate overflow-hidden bg-blue-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  src={homeHeroImage}
                  alt="Product screenshot"
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
  );
};
export default Hero;
