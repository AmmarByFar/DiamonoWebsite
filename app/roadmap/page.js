import Image from "next/image";

export default function Roadmap() {
  return (
    <div className="relative h-screen bg-[url(/bg2.png)] bg-cover bg-center">
      <Image
        src="/tl-corner.png"
        alt="corner swoosh"
        width={380}
        height={380}
        className="absolute left-0 top-0"
      />

      <div className="mx-auto flex h-screen max-w-6xl flex-col items-center justify-center gap-0 px-0 pt-20">
        <div className="relative mb-5 flex h-[35vw] w-full flex-col bg-[url(/roadmap/roadmap-1.png)] bg-[length:200%] bg-[position:bottom_center] bg-no-repeat sm:h-[58vw] md:mb-5 md:h-[120px] md:justify-end md:bg-[length:95%] md:bg-right-top lg:h-[146px]">
          <div className="flex items-end gap-2 pl-5 md:gap-12 md:pb-1.5">
            <h2 className="md:text-2xl">01.</h2>
            <h2 className="text-xl md:text-2xl">Mint date</h2>
          </div>
        </div>

        <div className="relative mb-5 flex h-[35vw] w-full flex-col bg-[url(/roadmap/roadmap-2.png)] bg-[length:200%] bg-[position:bottom_center] bg-no-repeat sm:h-[58vw] md:mb-5 md:h-[120px] md:justify-end md:bg-[length:95%] md:bg-right-top lg:h-[146px]">
          <div className="flex items-end justify-end gap-2 pl-5 pr-12 md:justify-between md:gap-12 md:pb-1.5">
            <h2 className="md:text-2xl">02.</h2>
            <h2 className="text-xl md:text-2xl">ALpha-Game Release</h2>
          </div>
        </div>

        <div className="relative mb-5 flex h-[35vw] w-full flex-col bg-[url(/roadmap/roadmap-3.png)] bg-[length:200%] bg-[position:bottom_center] bg-no-repeat sm:h-[58vw] md:mb-5 md:h-[120px] md:justify-end md:bg-[length:95%] md:bg-right-top lg:h-[146px]">
          <div className="flex items-end gap-2 pl-5 md:gap-40 md:pb-1.5">
            <h2 className="md:text-2xl">03.</h2>
            <h2 className="text-xl md:text-2xl">NFT Tradeable in-game items</h2>
          </div>
        </div>

        <div className="relative mb-5 flex h-[35vw] w-full flex-col bg-[url(/roadmap/roadmap-bg.svg)] bg-[length:200%] bg-[position:bottom_center] bg-no-repeat sm:h-[58vw] md:mb-5 md:h-[120px] md:justify-end md:bg-[length:95%] md:bg-right-top lg:h-[146px]">
          <div className="flex items-end justify-end gap-2 pl-5 pr-12 md:justify-between md:gap-12 md:pb-1.5 md:pr-36">
            <h2 className="md:text-2xl">04.</h2>
            <h2 className="text-xl text-white/5 md:text-2xl">Redacted</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
