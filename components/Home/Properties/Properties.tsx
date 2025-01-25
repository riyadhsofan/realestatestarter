import SectionHeading from "@/components/Helper/SectionHeading";
import { properties } from "@/data/data";
import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
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
                {/* <Image
                  src={property.imageUrl}
                  alt={property.propertyName}
                  className="w-full h-[300px] object-cover object-center"
                  width={400}
                  height={300}
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold text-gray-800">
                    {property.bedrooms}
                  </h1>
                  <p className="text-sm text-gray-600 mt-2">
                    {property.location}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <h1 className="text-lg font-semibold text-gray-800">
                      ${property.price}
                    </h1>
                    <button className="px-4 py-2 bg-yellow-300 text-white font-semibold rounded-lg">
                      View
                    </button>
                  </div>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Properties;
