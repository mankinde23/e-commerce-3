import React from "react";
import Logo from "../logo/logo";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="h-[5rem] bg-bodyColor top-0 sticky z-50">
      <div className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        <div className=" w-[27rem] bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
          <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
      </div>
    </div>
  );
}
