import React from "react";

interface TimelineItem {
  preTitle?: string;
  name: string;
  description: React.ReactNode;
  date: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const TimelineVertical: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="w-full mx-auto">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {items.map((item) => (
              <div key={item.name}>
                <div className="flex mt-6 md:mt-0 items-center font-semibold leading-6 text-blue-600">
                  <svg
                    viewBox="0 0 4 4"
                    className="mr-4 h-2 w-2 flex-none"
                    aria-hidden="true"
                  >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-6 mb-4 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  {item.name}
                </p>
                <div className="mt-1 leading-7 text-gray-600">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineVertical;
