import Image from "next/image";

export const FactionsSidebar = () => {
  return (
    <>
      {/* Taneika */}
      <div className="group relative flex h-32 w-32 flex-col items-center transition-all">
        {/* Bg cross */}
        <Image
          src="/home/cross.svg"
          alt="Faction 1"
          width={120}
          height={120}
          className="absolute -top-8 hidden w-40 animate-fade animate-delay-500 animate-duration-500 animate-ease-in-out group-hover:block"
        />

        {/* Avatar */}
        <Image
          src="/home/taneika.png"
          alt="Faction 1"
          width={80}
          height={80}
          className="absolute group-hover:animate-fade group-hover:animate-reverse group-hover:animate-duration-200 group-hover:animate-ease-in-out"
        />

        {/* Emblem */}
        <Image
          src="/home/taneika-emblem.png"
          alt="Faction 1"
          width={80}
          height={80}
          className="absolute hidden animate-fade-left transition-all animate-delay-150 animate-duration-500 animate-ease-in-out group-hover:block"
        />

        <h4 className="absolute bottom-2 text-sm">Taneika</h4>
      </div>

      {/* Arcshots */}
      <div className="group relative flex h-32 w-32 flex-col items-center transition-all">
        {/* Bg cross */}
        <Image
          src="/home/cross.svg"
          alt="Faction 1"
          width={120}
          height={120}
          className="absolute -top-8 hidden w-40 animate-fade animate-delay-500 animate-duration-500 animate-ease-in-out group-hover:block"
        />

        {/* Avatar */}
        <Image
          src="/home/arcshots.png"
          alt="Faction 1"
          width={80}
          height={80}
          className="absolute group-hover:animate-fade group-hover:animate-reverse group-hover:animate-duration-200 group-hover:animate-ease-in-out"
        />

        {/* Emblem */}
        <Image
          src="/home/arcshots-emblem.png"
          alt="Faction 1"
          width={80}
          height={80}
          className="absolute hidden animate-fade-left transition-all animate-delay-150 animate-duration-500 animate-ease-in-out group-hover:block"
        />

        <h4 className="absolute bottom-2 text-sm">Arcshots</h4>
      </div>

      {/* Magetti */}
      <div className="group relative flex h-32 w-32 flex-col items-center transition-all">
        {/* Bg cross */}
        <Image
          src="/home/cross.svg"
          alt="Faction 1"
          width={120}
          height={120}
          className="absolute -top-8 hidden w-40 animate-fade animate-delay-500 animate-duration-500 animate-ease-in-out group-hover:block"
        />

        {/* Avatar */}
        <Image
          src="/home/magetti.png"
          alt="Faction 1"
          width={80}
          height={80}
          className="absolute group-hover:animate-fade group-hover:animate-reverse group-hover:animate-duration-200 group-hover:animate-ease-in-out"
        />

        {/* Emblem */}
        <Image
          src="/home/magetti-emblem.png"
          alt="Faction 1"
          width={80}
          height={80}
          className="absolute hidden animate-fade-left transition-all animate-delay-150 animate-duration-500 animate-ease-in-out group-hover:block"
        />

        <h4 className="absolute bottom-2 text-sm">Magetti</h4>
      </div>

      {/* =========== */}
      <div className="group relative flex h-32 w-32 flex-col items-center transition-all">
        {/* Bg cross */}
        <Image
          src="/home/cross.svg"
          alt="Faction 1"
          width={120}
          height={120}
          className="absolute -top-8 hidden w-40 animate-fade animate-delay-500 animate-duration-500 animate-ease-in-out group-hover:block"
        />

        {/* Avatar */}
        <Image
          src="/home/gornaught.png"
          alt="Faction 1"
          width={80}
          height={80}
          className="absolute group-hover:animate-fade group-hover:animate-reverse group-hover:animate-duration-200 group-hover:animate-ease-in-out"
        />

        {/* Emblem */}
        <Image
          src="/home/gornaught-emblem.png"
          alt="Faction 1"
          width={80}
          height={80}
          className="absolute hidden animate-fade-left transition-all animate-delay-150 animate-duration-500 animate-ease-in-out group-hover:block"
        />

        <h4 className="absolute bottom-2 text-sm">Gornaught</h4>
      </div>
    </>
  );
};

// Taneika
// Arcshots
// Magetti
// Gornaught
