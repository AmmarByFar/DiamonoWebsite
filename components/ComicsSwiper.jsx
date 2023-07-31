"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Image from "next/image";

import { comics } from "@/constants";
import Link from "next/link";

export const ComicsSwiper = () => {
  const swiperRef = useRef();

  return (
    <>
      <Swiper
        slidesPerView={1.25}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2.3,
            spaceBetween: 25,
          },
          800: {
            slidesPerView: 3.3,
            spaceBetween: 25,
          },
          1160: {
            slidesPerView: 3.8,
            spaceBetween: 35,
          },
          1320: {
            slidesPerView: 4.8,
            spaceBetween: 45,
          },
          2000: {
            slidesPerView: 5.4,
            spaceBetween: 45,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >
        {comics.map((comic, i) => (
          <SwiperSlide key={i}>
            <ComicSlide comic={comic} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 flex justify-center gap-3 pr-16 lg:absolute lg:-top-20 lg:right-14 lg:mt-0 lg:pr-0">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="h-8 w-8 p-2 focus:border focus:border-primary"
        >
          <Image src="/comics/left-arrow.svg" alt="" width={22} height={22} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="h-8 w-8 border p-2 focus:border-primary"
        >
          <Image src="/comics/right-arrow.svg" alt="" width={22} height={22} />
        </button>
      </div>
    </>
  );
};

const ComicSlide = ({ comic }) => {
  const {
    image,
    title,
    borderColor,
    backgroundColor,
    backgroundImage,
    link,
    description,
  } = comic;

  return (
    <div className="">
      <div
        className={`border-4 ${
          borderColor == 1
            ? "border-secondary"
            : borderColor == 2
            ? "border-arcshotsColor"
            : borderColor == 3
            ? "border-blueAccent"
            : borderColor == 4
            ? "border-gornaughtColor"
            : "border-primary"
        }`}
      >
        <Link href={link}>
          <Image
            src={image}
            alt=""
            width={400}
            height={500}
            className="h-[78vw] w-full object-cover object-top sm:h-72 lg:h-64 2xl:h-80"
          />
        </Link>

        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className={`bg-cover bg-[position:bottom_center] px-3 py-5 text-center ${
            backgroundColor == 1
              ? "bg-[#E36852]"
              : backgroundColor == 2
              ? "bg-arcshotsColor"
              : backgroundColor == 3
              ? "bg-[#4E4182]"
              : backgroundColor == 4
              ? "bg-gornaughtColor"
              : "bg-primary"
          }`}
        >
          <h6 className="text-xs tracking-wider">{title}</h6>

          <p className="no-scrollbar mt-1 h-8 overflow-scroll text-xs/4 text-white/90 ">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-2 flex w-full justify-center">
        <Link href={link}>
          <button
            className={`hidden rounded-full rounded-tl-none border px-5 text-xs lg:block ${
              borderColor == 1
                ? "border-secondary"
                : borderColor == 2
                ? "border-arcshotsColor"
                : borderColor == 3
                ? "border-blueAccent"
                : borderColor == 1
                ? "border-gornaughtColor"
                : "border-primary"
            } ${
              borderColor == 1
                ? "text-secondary"
                : borderColor == 2
                ? "text-arcshotsColor"
                : borderColor == 3
                ? "text-blueAccent"
                : borderColor == 4
                ? "text-gornaughtColor"
                : "text-primary"
            }`}
          >
            READ
          </button>
        </Link>
      </div>
    </div>
  );
};
