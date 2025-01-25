import SectionHeading from "@/components/Helper/SectionHeading";
import { buildings } from "@/data/data";
import React from "react";
import BuildingFeatureCard from "./BuildingFeatureCard";

const BuildingFeature: React.FC = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div className="w-[80%]  mx-auto">
        <SectionHeading heading="Building Feature" />
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 md:mt-20 gap-8 items-center"> */}
        {/* <div className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center "> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   gap-8 items-center pt-14 ">
          {/* Apartment Type */}
          {buildings.map((building) => {
            return (
              <div key={building.id}>
                <BuildingFeatureCard building={building} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BuildingFeature;
