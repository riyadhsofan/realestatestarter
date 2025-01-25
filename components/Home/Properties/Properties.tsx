import SectionHeading from "@/components/Helper/SectionHeading";
import { properties } from "@/data/data";
import React from "react";
import PropertyCard from "./PropertyCard";

const Properties: React.FC = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div className="w-[80%]  mx-auto">
        <SectionHeading heading="Discover Our Properties" />
        <div className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center ">
          {properties.map((property) => {
            return (
              <div
                key={property.id}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <PropertyCard property={property} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Properties;
