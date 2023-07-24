"use client";

import Image from "next/image";
import { useState } from "react";
import { FactionsSidebar } from "./FactionsSidebar";

export const Hero = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-stretch md:flex-row md:overflow-hidden md:px-10">
      {/* Left section */}
      <div className="hidden h-screen w-36 flex-col justify-end pb-14 md:flex">
        <div className="flex">
          <Image
            src="/magetii-avatar.png"
            alt="taneika-avatar"
            width={60}
            height={60}
            className=""
          />
          <Image
            src="/taneika-avatar.png"
            alt="taneika-avatar"
            width={60}
            height={60}
            className="-ml-6"
          />
          <Image
            src="/magetii-avatar.png"
            alt="taneika-avatar"
            width={60}
            height={60}
            className="-ml-6"
          />
          <Image
            src="/taneika-avatar.png"
            alt="taneika-avatar"
            width={60}
            height={60}
            className="-ml-6"
          />
        </div>

        <h6 className="my-5 text-base leading-5 tracking-wider">
          What demon belongs to you?
        </h6>

        <button className="w-max rounded-full rounded-tl-none border border-primary px-6 py-1 text-sm text-primary transition-all hover:bg-primary hover:text-black">
          Find out
        </button>
      </div>

      {/* Mid section */}
      <div className="flex flex-1 flex-col items-center md:h-screen">
        <Image
          src="/home/home-banner-desktop.png"
          alt="Hero banner"
          width={700}
          height={700}
          className="hidden w-full xl:block xl:max-w-[1070px] 2xl:max-w-[70vw]"
        />
        <Image
          src="/home/home-banner-mobile.png"
          alt="Hero banner"
          width={1000}
          height={1000}
          className="md:w-[480px] lg:w-[510px] xl:hidden"
        />

        {/* Daimono logo */}
        <Image
          src="/home/daimono.png"
          alt="Hero banner"
          width={200}
          height={200}
          className="-mt-[18vw] w-[60vw] drop-shadow-2xl md:-mt-24 md:w-[300px] lg:-mt-36 xl:-mt-[14vw] xl:w-[390px]"
        />
      </div>

      {/* Left avatars */}
      <div className="flex w-full justify-center pb-8 pt-12 md:mt-24 md:w-36 md:flex-col md:items-end md:gap-10 md:pb-0 md:pt-0">
        <FactionsSidebar />
      </div>
    </div>
  );
};
