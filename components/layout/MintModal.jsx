"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

export const MintModal = () => {
  const [mintAmount, setMintAmount] = useState(2);
  const [gasFee, setGasFee] = useState(135);

  const progress = 35;
  const progressed = 2690;
  const progressTotalNum = 5000;

  const unisatHandler = () => {};
  const xverseHandler = () => {};

  useEffect(() => {
    console.log(mintAmount);

    console.log(gasFee);
  }, [mintAmount, gasFee]);

  return (
    <div className="relative z-50 bg-[url(/modal-bg.svg)] bg-cover bg-[top_center] bg-no-repeat px-5 pb-8 pt-14 drop-shadow-[14px_25px_14.5px_rgba(0,0,0,0.41)] md:px-10 md:pb-16 md:pt-20 lg:px-20 lg:pb-16 lg:pt-20">
      {/* top section */}
      <div className="md:flex">
        <div className="md:w-4/12">
          <p className="text-sm font-semibold text-primary">
            Ubinix / Daimono - Shadow Spirits
          </p>

          <h2 className="text-3xl tracking-wider md:mt-4 md:text-4xl">
            Ordinal Mint
          </h2>
        </div>

        <div className="mt-2 flex flex-1 flex-col  text-[10px] leading-[13px] text-gray-300 md:-mt-2 md:pr-8">
          <p className="mb-2">
            In the immersive virtual world, players venture into uncharted
            territories, joining powerful tribes to engage in intense battles
            against both players and rival tribes. With each player&apos;s
            unique skills and abilities, they collaborate and strategize to
            conquer formidable foes, while defending their tribe&apos;s honor
            and resources.
          </p>
          <p>
            Trade plays a pivotal role in this dynamic realm, as players
            leverage their acquired treasures and coveted NFT weapons to forge
            alliances or negotiate deals with other tribes. The marketplace
            buzzes with activity, offering a platform for players to buy, sell,
            and trade their meticulously crafted virtual assets. NFT weapons,
            with their distinct attributes and rarity, become highly
            sought-after commodities, fueling a thriving economy within the
            virtual realm.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="my-6 flex justify-between border-b border-t border-primary py-3 md:my-7 md:py-5">
        <div className="items-end gap-6 md:flex">
          <p className="text-sm font-semibold">Collection Supply</p>
          <h6 className="-mt-1 text-2xl md:-mt-0 md:text-4xl">5000</h6>
        </div>

        <div className="items-end gap-6 md:flex">
          <p className="text-sm font-semibold">Mint Price</p>
          <h6 className="-mt-1 text-2xl md:-mt-0 md:text-4xl">0.005 BTC</h6>
        </div>

        <div className="items-end gap-6 md:flex">
          <p className="text-sm font-semibold">Amount per Wallet</p>
          <h6 className="-mt-1 text-2xl md:-mt-0 md:text-4xl">4</h6>
        </div>
      </div>

      {/* Mint slides */}
      <div className="items-center gap-4 rounded-full text-sm font-extrabold text-black md:flex md:bg-primary md:px-7 md:py-3">
        <div className="mb-2 flex items-center justify-between rounded-full bg-primary px-4  py-2 md:mb-0 md:w-1/2 md:px-0 md:py-0">
          <p className="w-7/12 pr-2 md:w-fit">Daimono Mint amount</p>
          <Slider
            defaultValue={[mintAmount]}
            min={1}
            max={4}
            step={1}
            onValueCommit={(value) => setMintAmount(value)}
            className="w-32 md:w-48"
          />
          <p className="ml-4 w-20 text-right md:w-fit">{mintAmount}</p>
        </div>

        <div className="hidden h-6 w-px bg-black md:block" />

        <div className="flex items-center justify-between rounded-full bg-primary  px-4 py-2 md:w-1/2 md:px-0 md:py-0">
          <p className="w-7/12 pr-2 md:w-fit">Ordinal GAS fee</p>
          <Slider
            defaultValue={[gasFee]}
            min={25}
            max={250}
            step={1}
            onValueCommit={(value) => setGasFee(value)}
            className="w-32 md:w-48"
          />
          <p className="ml-4 w-20 text-right md:w-fit">{gasFee} sats</p>
        </div>
      </div>

      {/* Mint with buttons */}
      <div className="mb-12 mt-4 w-full justify-between gap-8 md:mb-14 md:mt-6 md:flex">
        <button
          className="mb-2 flex w-full items-center justify-center gap-6 rounded-full border border-primary bg-black py-1 text-sm font-semibold text-primary md:mb-0"
          onClick={unisatHandler}
        >
          <Image
            src="/icons/unisat-logo.png"
            alt="Unisat logo"
            width={35}
            height={35}
          />{" "}
          <span>Mint with Unisat</span>
        </button>

        <button
          className="flex w-full items-center justify-center gap-6 rounded-full border border-redAccent bg-darkBg py-1 text-sm font-semibold"
          onClick={xverseHandler}
        >
          <Image
            src="/icons/xverse-logo.png"
            alt="Xverse logo"
            width={35}
            height={35}
          />{" "}
          <span>Mint with Xverse</span>
        </button>
      </div>

      <div className="z-50">
        <p className="mb-1 text-sm font-semibold">Minted</p>

        <Progress value={progress} />

        <p className="mt-2 text-xs text-gray-300">
          {progressed} / {progressTotalNum}{" "}
          <span className="ml-3">({progress})%</span>
        </p>
      </div>
    </div>
  );
};
