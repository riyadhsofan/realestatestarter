import React from "react";
import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";
type Props = {
  review: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
  };
};
const ReviewCard = ({ review }: Props) => {
  return (
    <div className="bg-white rounded-lg m-3 p-6 relative">
      <FaQuoteRight className=" w-8 h-8 absolute  text-4xl text-red-600 opacity-20  top-4 right-4" />
      <div className="mt-6 flex items-center">
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
        <FaStar className="w-4 h-4 text-yellow-600" />
      </div>
      <p className="mt-6 text-base text-gray-600 font-medium">
        {review.review}
      </p>
      <div className="w-full h-[1.2px] bg-gray-600 opacity-10 mt-6 mb-6"></div>

      <div className="flex items-center space-x-4 ">
        <Image
          src={review.userImage}
          alt={review.name}
          className="rounded-full "
          width={50}
          height={50}
        />
        <div>
          <h1 className="text-lg font-bold text-gray-800">{review.name}</h1>
          <p className="text-gray-500 text-sm ">{review.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
