"use client";
import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  const contentRef = useRef();

  const [contentScroll, setContentScroll] = useState(33.33);

  const calculateScrollPercentage = () => {
    const scrollTop = contentRef.current.scrollTop;
    const scrollHeight = contentRef.current.scrollHeight;
    const clientHeight = contentRef.current.clientHeight;

    const maxScroll = scrollHeight - clientHeight;
    setContentScroll(((scrollTop / maxScroll) * 100).toFixed(2));
  };

  function scrollMore() {
    const scrollHeight = contentRef.current.scrollHeight;
    const clientHeight = contentRef.current.clientHeight;
    const maxScroll = scrollHeight - clientHeight;
    const scrollAmount = maxScroll * 0.33;

    const newScrollTop = contentRef.current.scrollTop + scrollAmount;
    contentRef.current.scrollTop =
      newScrollTop >= scrollHeight ? scrollHeight : newScrollTop;
  }

  return (
    <div className="flex flex-col bg-[url(/bg2.png)] bg-cover bg-center lg:h-screen lg:flex-row lg:px-10">
      {/* Left content */}
      <div className="flex h-full w-full items-center justify-center gap-10 px-5 pt-32 md:px-10 md:pt-64 lg:w-[50%] lg:px-0 lg:pl-10 lg:pt-20 xl:w-[46%] xl:gap-24 2xl:w-[36%]">
        <div className="hidden h-1/2 flex-col gap-2 lg:flex">
          <div
            className={`h-1/3 w-[3px] bg-primary bg-opacity-30 ${
              contentScroll <= 33.33 && "bg-opacity-100"
            }`}
          />
          <div
            className={`h-1/3 w-[3px] bg-primary bg-opacity-30 ${
              contentScroll > 33.33 && contentScroll < 66.66 && "bg-opacity-100"
            }`}
          />
          <div
            className={`h-1/3 w-[3px] bg-primary bg-opacity-30 ${
              contentScroll >= 66.66 && "bg-opacity-100"
            }`}
          />
        </div>

        <div className="h-8/12 md:pr-52 lg:ml-10 lg:pr-0">
          <p className="mb-2 font-bold text-primary">
            About Ubinix, The company behind Daimono
          </p>

          <h1 className="mb-5 text-3xl leading-10 tracking-wider lg:text-4xl xl:text-[2.5rem] ">
            Forging captivating gaming experiences.
          </h1>

          <div className="relative">
            <p
              ref={contentRef}
              onScroll={calculateScrollPercentage}
              className="no-scrollbar h-72 overflow-scroll pb-8 text-xs text-white transition-all lg:h-72 lg:pr-8"
            >
              Welcome to the world of Ubinix, a manifestation of the vision and
              ambition of Omnient Studios. We&apos;re a tightly knit team with a
              shared passion for pushing the boundaries of gaming, continuously
              striving to redefine the gaming landscape by injecting innovation,
              creativity, and topical relevance into our offerings. <br />
              <br />
              At Ubinix, we believe that the essence of a team lies not in its
              size, but in the quality of its ideas and the depth of its
              dedication. Each member of our team brings a blend of artistic
              talent and technological expertise to the table, providing the
              momentum we need to pioneer the future of gaming. <br />
              <br />
              Our strength lies in our agility and speed. By developing a
              streamlined workflow, we&apos;re able to react swiftly and
              dynamically to changes and opportunities. We work twords a rapid
              turnaround time for updates and content drops, a reflection of our
              commitment to staying one step ahead of the curve. <br />
              <br />
              Ubinix is more than a company—it&apos;s a culture. We live and
              breathe the gaming world, and our mission is to create games that
              not only follow the trends but help shape them. Each game we
              create is a reflection of our commitment to staying attuned to
              technological innovation and cultural shifts. <br />
              <br />
              But what truly sets us apart is our unity. At Ubinix, we&apos;re
              not just a team; we&apos;re a family. Our close-knit structure
              fosters a unique creative energy that fuels our innovation and
              ambition. We&apos;re a collective of passionate, creative, and
              technically excellent individuals, driving a movement towards a
              new era in gaming. We invite you to join us on this exciting
              journey and be part of the Ubinix experience.
            </p>

            <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-32 w-full bg-gradient-to-t from-darkBg from-5% lg:hidden" />
          </div>

          {/* CTAs */}
          <div className="mt-4 gap-2 lg:flex">
            <Link href="/trailer">
              <button className="group flex w-52 items-center rounded-b-[18px] border border-primary py-1 pl-1 pr-5 text-sm font-semibold uppercase text-primary transition-all hover:border-primary hover:bg-primary hover:text-black ">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary transition-all group-hover:bg-white ">
                  <Image
                    src="/icons/right-polygon.svg"
                    alt="right-polygon"
                    width={9}
                    height={9}
                    className=""
                  />
                </span>
                <span className="ml-auto mt-0.5">Play game trailer</span>
              </button>
            </Link>

            <button
              disabled={contentScroll >= 66}
              onClick={scrollMore}
              className="hidden cursor-pointer items-center gap-2 rounded-full rounded-br-none bg-primary p-2 px-4 text-sm font-semibold uppercase text-black transition-all hover:bg-primaryDark disabled:cursor-not-allowed disabled:opacity-30 lg:flex"
            >
              <span>More</span>
              <Image
                src="/icons/down-arrow.svg"
                alt="right-polygon"
                width={12}
                height={12}
                className=""
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end lg:h-full lg:w-[50%] lg:flex-col xl:w-[54%] 2xl:w-[64%]">
        <Image
          src="/about.png"
          alt="about"
          width={800}
          height={800}
          className="hidden lg:block 2xl:h-auto 2xl:w-[900px] 2xl:object-cover"
        />
        <Image
          src="/about-mobile.png"
          alt="about"
          width={600}
          height={600}
          className="z-20 -mt-16 h-auto w-80 md:-mt-48 md:w-96 lg:hidden"
        />
      </div>
    </div>
  );
}
