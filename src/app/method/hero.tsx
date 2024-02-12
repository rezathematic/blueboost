import Section from "@/app/components/section";
import Col2 from "@/app/components/col-2";
import Button from "@/app/components/buttons";
import Image from "next/image";
import ganttRoadmap from "../../../public/img/gantt-roadmaps.png";

const MethodHero = () => {
  return (
    <Section>
      <Col2
        leftColumn={
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h1 className="text-base font-semibold leading-7 text-blue-600 uppercase">
              Immediate Impact. Dependable Results.
            </h1>
            <h2 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Increase your brand&apos;s visibility.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              SEO is a truly underutilized marketing channel capable of driving
              high-conversion organic traffic and long-term ROI — We are here to
              help you capitalize on that potential.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button href={"/"}>Get started</Button>
            </div>
          </div>
        }
        rightColumn={
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
        }
      />
    </Section>
  );
};

export default MethodHero;
