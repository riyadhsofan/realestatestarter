import React from "react";
import Image from "next/image";
type Props = {
  city: {
    id: number;
    image: string;
    cityName: string;
    numberOfProperties: number;
  };
};

const CityCard = ({ city }: Props) => {
  return (
    <div className="relative rounded-lg overflow-hidden m-2">
      <Image
        src={city.image}
        alt="Image"
        className="rounded-lg w-full h-[450px] object-cover"
        width={700}
        height={700}
      />
      <div className="absolute inset-0 bg-black opacity-40 ">
        <div className="absolute p-4 top-4 ">
          <h1 className="text-lg font-semibold text-white">{city.cityName}</h1>
          <p className="text-gray-200 text-base ">
            {city.numberOfProperties} Properties
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
