import React from "react";
import clsx from "clsx";

interface SectionProps {
  children: React.ReactNode;
  isWhite?: boolean | true;
}

const Section: React.FC<SectionProps> = ({ children, isWhite }) => {
  return (
    <section
      className={clsx(
        isWhite ? "bg-white" : "bg-gray-100",
        "overflow-hidden py-24 sm:py-32"
      )}
    >
      <div className="mx-auto container max-w-7xl md:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
