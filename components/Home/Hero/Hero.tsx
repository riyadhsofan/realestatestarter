import SearchBox from "@/components/Helper/SearchBox";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh]  md:pt-[10vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url('/images/hero.jpg')] bg-cover bg-center">
      {/* block OverLay */}
      <div className="absolute inset-0 bg-black opacity-70 "></div>
      {/* Hero content */}
      <div className="  flex justify-center items-center flex-col w-[95%] sm:w-[100%] h-full pt-40  relative  z-10">
        <h1 className="text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium ">
          The Best Way To
        </h1>
        <h1 className="text-white sm:text-5xl md:text-2xl text-center font-semibold text-3xl mt-4">
          Find Your Dream Home
        </h1>
        <p className="mt-4  text-center text-sm sm:text-base text-gray-200">
          {" "}
          We’ve more than 745,000 apartments, place & plot.
        </p>
        <div className=" mt-12 w-full h-full flex justify-center items-center">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
