import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex h-screen w-full justify-stretch px-10">
      <div className="flex w-40 flex-col justify-end pb-20">
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

        <h6 className="my-4 max-w-[130px] leading-5">
          What demon belong to you?
        </h6>

        <button className="w-max rounded-full rounded-tl-none border border-primary px-8 py-1 text-primary transition-all hover:bg-primary hover:text-black">
          Find out
        </button>
      </div>

      {/* Mid section */}
      <div className=" flex flex-1 flex-col items-center">
        <Image
          src="/home/home-banner-desktop.png"
          alt="Hero banner"
          width={800}
          height={800}
          className="w-full"
        />

        <Image
          src="/home/daimona.png"
          alt="Hero banner"
          width={200}
          height={200}
          className="-mt-40 w-[400px]"
        />
      </div>

      {/* Left avatars */}
      <div className="mt-36 flex w-40 flex-col items-end gap-10">
        <div className="group flex h-32 w-24 flex-col items-center gap-4 border transition-all">
          <div className="block transition-all group-hover:hidden">
            <Image
              src="/home/fact1.png"
              alt="Faction 1"
              width={80}
              height={80}
            />
          </div>

          <div className="hidden transition-all group-hover:block">
            <Image
              src="/home/fact4.png"
              alt="Faction 1"
              width={80}
              height={80}
            />
          </div>
          <h4 className="text-sm">Taneika</h4>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Image src="/home/fact2.png" alt="Faction 1" width={80} height={80} />
          <h4 className="text-sm">Arcshots</h4>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src="/home/fact3.png" alt="Faction 1" width={80} height={80} />
          <h4 className="text-sm">Magetti</h4>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src="/home/fact4.png" alt="Faction 1" width={80} height={80} />
          <h4 className="text-sm">Gornaught</h4>
        </div>
      </div>
    </div>
  );
};
// Taneika
// Arcshots
// Magetti
// Gornaught
