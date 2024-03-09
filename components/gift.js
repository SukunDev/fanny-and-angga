"use client";

import GiftCard from "@/components/giftCard";
import React from "react";
import { PiGiftLight } from "react-icons/pi";
import { motion } from "framer-motion";
import useGift from "@/hooks/useGift";

export default function Gift() {
  const { buttonClickedHandler, isButtonClicked, giftCardVariants } = useGift();

  return (
    <section
      id="gift"
      className="px-4 pb-8 md:pt-16 bg-gradient-to-b from-stone-500 to-stone-700"
    >
      <div className="font-thin text-center capitalize text-stone-200">
        <h3 className="text-2xl md:text-3xl">wedding gift</h3>
        <p className="mt-2 text-sm md:text-base">
          doa restu anda merupakan karunia yang sangat berarti bagi kami. dan
          jika memberi adalah ungkapan randa kasih anda, anda dapat memberi kado
          melalui
        </p>
      </div>
      <button
        onClick={buttonClickedHandler}
        className="flex items-center gap-2 px-6 py-2 mx-auto mt-8 capitalize transition duration-300 rounded-md text-stone-100 w-fit bg-stone-950 hover:bg-stone-800 active:bg-stone-900"
      >
        <PiGiftLight className="mt-1 text-2xl" />
        kirim hadiah
      </button>

      <motion.div
        animate={isButtonClicked ? "open" : "closed"}
        variants={giftCardVariants}
        transition={{ duration: 0.3 }}
        className="my-4"
      >
        <GiftCard
          name="Fannny Indriani Cahyani"
          rek="0354-01-103970-503"
          src="/img/bri.png"
          image_back="/img/bri_back.png"
        />
      </motion.div>
      <motion.div
        animate={isButtonClicked ? "open" : "closed"}
        variants={giftCardVariants}
        transition={{ duration: 0.3 }}
        className="my-4"
      >
        <GiftCard
          name="Fannny Indriani Cahyani"
          rek="0812-2424-7204"
          src="/img/dana.png"
          image_back="/img/dana_back.png"
        />
      </motion.div>

      <div className="text-sm text-center capitalize text-stone-200 md:text-base">
        <p>
          demikian kami sampaikan undangan ini, mohon maaf apabila terdapat
          kesalahan kata atau nama. sekali lagi terimakasih
        </p>
        <h3 className="mt-4 text-lg font-medium md:text-xl">the wedding of</h3>
        <h2 className="mt-5 text-2xl font-normal md:text-3xl font-aston">
          Fanny & Angga
        </h2>
      </div>
    </section>
  );
}
