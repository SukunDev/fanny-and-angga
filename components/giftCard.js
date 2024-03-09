import useGiftCard from "@/hooks/useGiftCard";
import Image from "next/image";
import React from "react";
import { PiCopySimpleLight } from "react-icons/pi";

export default function GiftCard({ name, rek, src, image_back }) {
  const { handleClick, onCopy } = useGiftCard();
  return (
    <div className="relative px-16 py-4 mx-auto overflow-hidden text-center bg-white w-fit rounded-xl">
      <div className="absolute -right-4 -bottom-4 opacity-15 -rotate-12">
        <Image
          className="mx-auto w-44"
          src={image_back}
          alt="Rekening"
          width={640}
          height={152}
        />
      </div>
      <Image
        className="relative z-10 mx-auto w-60"
        src={src}
        alt="Rekening"
        width={640}
        height={152}
      />
      <div className="relative z-10 my-4 space-y-1">
        <h3 className="text-xl text-gray-600">a.n {name}</h3>
        <p className="font-bold text-gray-700">{rek}</p>
      </div>
      <button
        onClick={handleClick}
        className="relative z-10 flex gap-1 item-center mx-auto w-fit px-8 py-0.5 text-white rounded-full bg-stone-500"
      >
        <PiCopySimpleLight className="mt-0.5 text-xl text-white" />
        {onCopy ? "Copied" : "Salin"}
      </button>
    </div>
  );
}
