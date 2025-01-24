import Image from "next/image";
import React from "react";

type Props = {
  type: {
    id: number;
    icon: string;
    type: string;
    number: number;
  };
};

const ApartmentTypeCard = ({ type }: Props) => {
  return (
    <div className="rounded-lg shadow-lg p-6 hover:scale-110 transition-all duration-300">
      <Image src={type.icon} alt={type.type} width={100} height={100} />
      <div className="mt-10">
        <h1 className="text-lg font-bold">{type.type}</h1>
        <p className="mt-2 text-sm text-gray-700 ">{type.number} Properties</p>
      </div>
    </div>
  );
};

export default ApartmentTypeCard;
