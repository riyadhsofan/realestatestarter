import React from "react";
import { FaSearch } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const SearchBox = () => {
  return (
    <div className="w-full md:w-[80%] max-auto bg-white h-[4rem] sm:h-[5rem] flex px-4  sm:px-8 flex-col justify-center rounded-lg ">
      <div className="flex items-center justify-between h-full ">
        <input
          type="text"
          placeholder="Search Your Dream Home"
          className=" sm:flex-[0.8]  h-[60%]  bg-gray-100 block rounded-lg outline-none border-none px-4 placeholder:text-sm sm:text-base"
        />
        <div className="flex items-center flex-[0.20] ml-8  space-x-6">
          <div className="lg:flex items-center hidden cursor-pointer space-x-2">
            <HiAdjustmentsHorizontal className="w-6 h-6 text-gray-700" />
            <p className="text-gray-700 font-semibold ">Advanced</p>
          </div>
          {/* icon search  */}
          <div className="w-12 h-12   flex items-center justify-center bg-[#c1205e]   rounded-full cursor-pointer hover:bg-rose-800 transition-all duration-150 text-white">
            <FaSearch className=" w-6 h-6  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
