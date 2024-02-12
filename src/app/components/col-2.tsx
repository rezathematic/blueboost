import React from "react";

interface Col2Props {
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
}

const Col2: React.FC<Col2Props> = ({ leftColumn, rightColumn }) => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
      <div className="px-6 lg:px-0 lg:pr-4">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
          {leftColumn}
        </div>
      </div>
      <div className="px-6 lg:px-0">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
          {rightColumn}
        </div>
      </div>
    </div>
  );
};

export default Col2;
