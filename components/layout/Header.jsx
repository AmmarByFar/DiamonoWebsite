import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 flex w-full justify-between p-10">
      <nav className="cc">
        <Link href={"/"}>
          <Image src="/logo.svg" alt="Studio Logo" width={80} height={10} />
        </Link>

        <ul className="mt-4 flex flex-col gap-2 text-center font-heading text-xs ">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/"}>
            <li>Factions</li>
          </Link>
          <Link href={"/"}>
            <li>COMICS</li>
          </Link>
          <Link href={"/"}>
            <li>Roadmap</li>
          </Link>
          <Link href={"/"}>
            <li>About</li>
          </Link>
        </ul>
      </nav>

      <div className="flex h-max gap-4">
        <button className="group flex w-56 items-center rounded-full rounded-tl-none border border-primary py-1 pl-1 pr-7 text-sm font-semibold uppercase text-primary transition-all hover:border-primary hover:bg-primary hover:text-black ">
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

        <button className="w-56 rounded-full rounded-br-none bg-primary px-16 py-2 text-sm font-semibold uppercase text-black transition-all hover:bg-primaryDark">
          Mint
        </button>
      </div>
    </header>
  );
};
