import { sidebarFactions } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const FactionsSidebar = () => {
  return (
    <>
      {sidebarFactions.map(({ name, link, avatar, emblem }, i) => (
        <Link key={i} href={link}>
          <div className="group relative flex h-28 w-24 flex-col items-center md:z-50 md:h-32 md:w-32">
            {/* Bg cross */}
            <Image
              src="/home/cross.svg"
              alt="Bg cross"
              width={120}
              height={120}
              className="absolute -top-5 hidden w-40 animate-fade animate-delay-300 animate-duration-500 animate-ease-in-out group-hover:block md:-top-8"
            />

            {/* Avatar */}
            <Image
              src={avatar}
              alt={name + "Avatar"}
              width={80}
              height={80}
              className="absolute w-16 group-hover:animate-fade group-hover:animate-reverse group-hover:animate-duration-200 group-hover:animate-ease-in-out md:w-20"
            />

            {/* Emblem */}
            <Image
              src={emblem}
              alt={name + "Emblem"}
              width={80}
              height={80}
              className="absolute hidden w-16 animate-fade-left transition-all animate-delay-150 animate-duration-500 animate-ease-in-out group-hover:block md:w-20"
            />

            <h4 className="absolute bottom-4 text-xs tracking-wider transition-all duration-200 group-hover:text-primary md:bottom-3 md:text-sm">
              {name}
            </h4>
          </div>
        </Link>
      ))}
    </>
  );
};
