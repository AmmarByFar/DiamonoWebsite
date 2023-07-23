import { sidebarFactions } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const FactionsSidebar = () => {
  return (
    <>
      {sidebarFactions.map(({ name, link, avatar, emblem }, i) => (
        <Link key={i} href={link}>
          <div className="group relative flex h-32 w-32 flex-col items-center transition-all">
            {/* Bg cross */}
            <Image
              src="/home/cross.svg"
              alt="Bg cross"
              width={120}
              height={120}
              className="absolute -top-8 hidden w-40 animate-fade animate-delay-500 animate-duration-500 animate-ease-in-out group-hover:block"
            />

            {/* Avatar */}
            <Image
              src={avatar}
              alt={name + "Avatar"}
              width={80}
              height={80}
              className="absolute group-hover:animate-fade group-hover:animate-reverse group-hover:animate-duration-200 group-hover:animate-ease-in-out"
            />

            {/* Emblem */}
            <Image
              src={emblem}
              alt={name + "Emblem"}
              width={80}
              height={80}
              className="absolute hidden animate-fade-left transition-all animate-delay-150 animate-duration-500 animate-ease-in-out group-hover:block"
            />

            <h4 className="absolute bottom-3 text-sm tracking-wider">{name}</h4>
          </div>
        </Link>
      ))}
    </>
  );
};
