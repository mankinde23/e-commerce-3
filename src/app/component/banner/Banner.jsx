"use client";
import React from "react";
import Slider from "react-slick";
import banner1 from "../../../../public/wipers.jpg";
import banner2 from "../../../../public/oil-filter.jpg";
import banner3 from "../../../../public/fire-extinguisher.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
export default function Banner() {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className=" relative">
          <Image src={banner1} alt="bannerone" className=" relative" priority />
          {/* <BannerText title="Outware Picks" /> */}
        </div>
        <div className=" relative">
          <Image src={banner2} alt="bannertwo" className="relative" />
          {/* <BannerText title="Seasonal Offers" /> */}
        </div>
        <div className="relative">
          <Image src={banner3} alt="bannerthree" className=" relative" />
          {/* <BannerText title="Best for men" /> */}
        </div>
      </Slider>
      {/* <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" /> */}
    </div>
  );
}
