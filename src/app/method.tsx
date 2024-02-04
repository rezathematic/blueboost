import Image from "next/image";
import Button from "@/app/components/buttons";
import ganttRoadmap from "../../public/img/gantt-roadmaps.png";

const Method = () => {
  return (
    <section className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto container max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600 uppercase">
                A search engine optimization company that delivers results you
                can trust.
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Adaptable, end-to-end services to turn your organic traffic into
                real returns.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our tried-and-true methods give us the space to build a real
                connection with you. Think of our SEO marketing company as part
                of your crew, diving deep into your field to turn our SEO
                expertise into a strategy that is just for your business.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button href={"/"}>Get started</Button>
              </div>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-blue-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  src={ganttRoadmap}
                  alt="Gannt Roadmap"
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
export default Method;
