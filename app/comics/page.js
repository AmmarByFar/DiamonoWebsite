import { ComicsSwiper } from "@/components/ComicsSwiper";
import Image from "next/image";

export default function Comics() {
  return (
    <div className="min-h-screen bg-[url(/bg2.png)] bg-cover bg-center">
      <div className="mx-auto max-w-4xl pb-5 lg:px-4">
        <Image
          src="/comics/comics-banner-desktop.png"
          alt=""
          width={800}
          height={400}
          className="hidden w-full sm:block"
        />
        <Image
          src="/comics/comics-banner-mobile.jpg"
          alt=""
          width={800}
          height={400}
          className="w-full sm:hidden"
        />
      </div>

      <div className="-mt-40 flex pb-10 pl-16 sm:-mt-0 sm:pl-10 lg:pb-0">
        <div className="hidden w-2/12 pr-12 lg:block">
          <h4 className="text-xl">Lorem ipsum</h4>
          <p className="mt-2 text-xs text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            maxime ducimus maiores repellendus suscipit magni hic excepturi
            voluptatum perferendis quidem. Nobis, minima quis molestias nemo
            asperiores harum porro similique laudantium iusto
          </p>
        </div>

        <div className="relative w-full lg:w-10/12">
          <ComicsSwiper />
        </div>
      </div>
    </div>
  );
}
