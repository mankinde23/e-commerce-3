"use client";
import React from "react";
import Logo from "../logo/logo";

import { IoMdCart } from "react-icons/io";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  return (
    <div className="h-[5rem] bg-bodyColor top-0 sticky z-50 p-[3rem]">
      <div className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        <div className=" w-[40rem] bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
          <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
        {/* login */}
        {!session && (
          <div
            onClick={() => signIn()}
            className=" bg-bgLight text-gray-500 flex items-center justify-center p-1.5 rounded-full  hover:bg-white border-[2px] duration-500 cursor-pointer"
          >
            <AiOutlineUser className="text-2xl" />
            <p className="text-sm font-semibold">Login/Register</p>
          </div>
        )}
        {/* cart */}
        <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
          <IoMdCart className="text-xl" />
          <p className="text-sm font-semibold">$0.00</p>
          <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black">
            0
          </span>
        </div>
        {/* user Image */}
        {session && (
          <Image
            src={session?.user?.image}
            alt="user image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        )}
        {/* logout */}
        {session && (
          <div
            onClick={signOut()}
            className=" bg-bgLight text-gray-500 flex items-center justify-center p-1.5 rounded-full  hover:bg-white border-[2px] duration-500 cursor-pointer"
          >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">Log out</p>
          </div>
        )}
      </div>
    </div>
  );
}
