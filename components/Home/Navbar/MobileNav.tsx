"use client";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* OverLay */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-90 w-full h-screen`}
      >
        {/* navLink */}
        <div
          className={`text-white ${navOpen}  transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#c1205e] space-y-6 z-[10000]`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-white text-sm sm:text-base md:text-lg"
            >
              <p className="text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px]  font-medium hover:text-yellow-300 ">
                {" "}
                {link.label}{" "}
              </p>
            </Link>
          ))}
          {/* button close */}
          <CgClose
            onClick={closeNav}
            className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white  "
          />
        </div>
      </div>
      {/* Mobile Nav */}
    </div>
  );
};

export default MobileNav;
