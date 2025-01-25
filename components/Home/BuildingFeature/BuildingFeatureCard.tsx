import Image from "next/image";
import React from "react";

type Props = {
  building: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
};

const BuildingFeatureCard = ({ building }: Props) => {
  return (
    <div className="rounded-lg shadow-lg p-6 hover:scale-110 transition-all duration-300">
      <Image
        src={building.image}
        alt={building.title}
        width={100}
        height={100}
      />
      <div className="mt-10">
        <h1 className="text-lg font-bold">{building.title}</h1>
        <p className="mt-2 text-sm text-gray-700 ">
          {building.description} Properties
        </p>
      </div>
    </div>
  );
};

export default BuildingFeatureCard;
