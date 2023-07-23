"use client";

import Image from "next/image";
import { useState } from "react";
import { FactionsSidebar } from "./FactionsSidebar";

export const Hero = () => {
  return (
    <div className="flex h-screen w-full items-center justify-stretch overflow-hidden px-10">
      {/* Left section */}
      <div className="flex h-screen w-40 flex-col justify-end pb-20">
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

        <h6 className="my-5 max-w-[150px] text-base leading-5 tracking-wider">
          What demon belongs to you?
        </h6>

        <button className="w-max rounded-full rounded-tl-none border border-primary px-6 py-1 text-sm text-primary transition-all hover:bg-primary hover:text-black">
          Find out
        </button>
      </div>

      {/* Mid section */}
      <div className="flex h-screen flex-1 flex-col items-center">
        <Image
          src="/home/home-banner-desktop.png"
          alt="Hero banner"
          width={700}
          height={700}
          className="w-[70vw]"
        />

        <Image
          src="/home/daimona.png"
          alt="Hero banner"
          width={200}
          height={200}
          className="-mt-52 w-[400px]"
        />
      </div>

      {/* Left avatars */}
      <div className="mt-24 flex w-40 flex-col items-end gap-10">
        <FactionsSidebar />
      </div>
    </div>
  );
};
