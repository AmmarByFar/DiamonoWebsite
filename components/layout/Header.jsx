"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants";
import { Slider } from "@/components/ui/slider";
import { MintModal } from "./MintModal";

export const Header = () => {
  const [menuEnabled, setMenuEnabled] = useState(false);

  return (
    <header className="fixed top-0 z-50 flex w-full justify-between p-6 md:p-10">
      <Dialog>
        <nav className="cc">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="Studio Logo"
              width={88}
              height={20}
              className="drop-shadow-lg"
            />
          </Link>

          <ul className="mt-4 hidden flex-col gap-2 text-center font-heading text-xs tracking-wider md:flex">
            {navLinks.map(({ name, link }, i) => (
              <Link key={i} href={link}>
                <li className="transition-all hover:text-primary">{name}</li>
              </Link>
            ))}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden h-max gap-2 md:flex">
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
          <DialogTrigger className="w-40 rounded-full rounded-br-none bg-primary p-2 text-sm font-semibold uppercase text-black transition-all hover:bg-primaryDark">
            Mint
          </DialogTrigger>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={() => setMenuEnabled(true)} className="md:hidden">
          <Image
            src="/icons/hamburger-menu.svg"
            alt="hamburger menu"
            width={26}
            height={26}
            className="fill-white text-white drop-shadow-lg"
          />
        </button>

        {/* Mobile Menu */}
        {menuEnabled && (
          <div className="fixed left-0 top-0 flex h-screen w-full animate-flip-down flex-col items-center justify-between bg-primary bg-cover bg-center p-6 text-center animate-delay-75 animate-duration-500 animate-ease-in-out md:hidden">
            <div className="flex w-full justify-between">
              <Image
                src="/logo-black.svg"
                alt="Studio Logo"
                width={88}
                height={20}
              />

              <button onClick={() => setMenuEnabled(false)}>
                <Image
                  src="/icons/close.svg"
                  alt="close menu"
                  width={26}
                  height={26}
                />
              </button>
            </div>

            {/* nav links */}
            <ul className="flex flex-col gap-6 font-heading text-4xl text-black">
              {navLinks.map(({ name, link }, i) => (
                <Link key={i} href={link} onClick={() => setMenuEnabled(false)}>
                  <li>{name}</li>
                </Link>
              ))}
            </ul>

            <div className="my-10 ">
              <button className="group flex w-48 items-center rounded-b-2xl border border-darkBg py-1 pl-1 pr-6 font-semibold uppercase text-darkBg transition-all hover:border-darkBg hover:bg-darkBg hover:text-primary ">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-darkBg transition-all group-hover:bg-primary ">
                  <Image
                    src="/icons/white-polygon.svg"
                    alt="right-polygon"
                    width={9}
                    height={9}
                    className=""
                  />
                </span>
                <span className="ml-auto mt-0.5">Game trailer</span>
              </button>

              <DialogTrigger className="mt-3 w-48 rounded-full rounded-br-none bg-darkBg p-2 text-base uppercase text-primary transition-all hover:bg-secondary">
                Mint
              </DialogTrigger>
            </div>

            <Image
              src="/diamona-black.svg"
              alt="Studio Logo"
              width={148}
              height={40}
              className="mb-3"
            />
          </div>
        )}

        {/* Modal */}
        <DialogContent className="max-w-[1080px] border-none shadow-none md:h-[605px]">
          <MintModal />
        </DialogContent>
      </Dialog>
    </header>
  );
};
