import Image from "next/image";

export const FactionPageTemplate = ({ content }) => {
  const {
    name,
    banner,
    wordmark,
    swoosh,
    swooshPosition,
    emblem,
    emblemBorderColor,
    subtext,
    loreDescription,
    avatar,
  } = content;

  return (
    <div className="h-screen sm:flex">
      {/* Left banner section */}
      <div
        style={{
          backgroundImage: `url('${banner}')`,
        }}
        className={`relative h-[58vh] flex-1 bg-cover bg-center sm:h-screen`}
      >
        <Image
          src="/tl-corner.png"
          alt="top left swoosh"
          height={380}
          width={380}
          className="absolute left-0 top-0 hidden sm:block"
        />
        <Image
          src="/br-corner.png"
          alt="bottom right swoosh"
          height={380}
          width={380}
          className="absolute bottom-0 right-0 hidden sm:block"
        />

        {/* mobile divider */}
        <Image
          src="/mobile-divider.svg"
          alt="bottom right swoosh"
          height={380}
          width={380}
          className="left-0-0 absolute bottom-0 w-full sm:hidden"
        />

        <div className="absolute bottom-14 left-14 hidden text-center sm:block">
          <Image
            src={avatar.image}
            alt=""
            width={80}
            height={80}
            className="mx-auto mb-2 drop-shadow-2xl"
          />

          <h6 className="tracking-wider drop-shadow-md ">{avatar.name}</h6>
          <p className="font-heading text-sm tracking-wider drop-shadow-md">
            {avatar.description}
          </p>
        </div>
      </div>

      {/* mid gradient */}
      <div className="z-10 -ml-40 -mr-20 hidden w-48 bg-gradient-to-l from-darkBg from-20% sm:block" />

      {/* Right section */}
      <div className="z-10 flex flex-col items-center justify-center px-10 pb-14 text-center sm:w-[380px] sm:pb-0 sm:pt-20">
        <Image src={wordmark} alt={name + "wordmark"} width={100} height={20} />

        <div className="relative flex flex-col items-center justify-center">
          <Image
            src={swoosh}
            alt={name + "swoosh"}
            width={120}
            height={20}
            className={`absolute z-0 ${swooshPosition}`}
          />

          <h2 className="z-10 mb-1 mt-6 text-5xl tracking-wider sm:text-4xl">
            {name}
          </h2>
          <p className="px-8 text-xs text-gray-300">{subtext}</p>
        </div>

        <div className="my-6 h-10 w-px bg-gray-300" />

        <Image
          src={emblem}
          alt={name + "emblem"}
          width={120}
          height={120}
          className={`h-28 w-28 rounded-full border border-${emblemBorderColor} p-2`}
        />

        <div className="my-8 h-10 w-px bg-gray-300" />

        <h2 className="text-2xl tracking-wider">The Lore</h2>
        <div className="relative">
          <p className="no-scrollbar mt-1 h-28 overflow-scroll px-2 pb-16 text-xs text-gray-300 sm:h-24">
            {loreDescription}
          </p>
          <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-24 w-full bg-gradient-to-t from-darkBg" />
        </div>
      </div>

      <div className="pointer-events-none fixed bottom-0 right-0 z-10 block h-24 w-full bg-gradient-to-t from-darkBg sm:hidden" />
    </div>
  );
};
