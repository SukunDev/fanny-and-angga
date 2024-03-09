"use client";

import useCover from "@/hooks/useCover";
import React from "react";
import { motion } from "framer-motion";
import { PiEnvelopeLight, PiHeartFill } from "react-icons/pi";
import Image from "next/image";

export default function Cover({ src, shortNameFemale, shortNameMale }) {
  const { handleOpenButton, loaded, data, to } = useCover({ src });

  return (
    <>
      <motion.div
        animate={!data.isOpenned ? "open" : "closed"}
        variants={{
          open: { opacity: 1, display: "block" },
          closed: { opacity: 0, transitionEnd: { display: "none" } },
        }}
        transition={{ duration: 2 }}
        className="fixed inset-0 z-[999] font-montserrat"
      >
        <div className="absolute inset-x-0 z-10 flex flex-col items-center text-center uppercase top-16">
          <p
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-duration="2000"
            className="font-semibold text-white tracking-[0.3rem] md:tracking-[0.4rem] lg:tracking-[0.65rem] text-sm lg:text-base"
          >
            the wedding of
          </p>
          <h2
            data-aos="fade-up"
            data-aos-duration="2000"
            className="mt-6 text-3xl md:text-4xl lg:text-5xl leading-[1.75] md:leading-[1.8] lg:leading-[1.8] text-white capitalize font-aston"
          >
            <span>{shortNameFemale}</span>
            <br />&<span>{shortNameMale}</span>
          </h2>
        </div>
        <div className="absolute inset-x-0 z-10 flex flex-col items-center text-center uppercase bottom-16">
          <p
            data-aos="fade-right"
            data-aos-duration="2000"
            className="font-medium text-white"
          >
            kepada yth.
            <br />
            bapak/ibu/saudara/<span className="normal-case">i</span> <br />
          </p>
          <p
            data-aos="fade-left"
            data-aos-duration="2000"
            className="text-xl font-semibold text-white capitalize md:text-2xl"
          >
            {to ? to : "Tamu"}
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="2000"
            data-aos-offset="0"
            onClick={handleOpenButton}
            className="flex items-center gap-1 px-4 py-2 mx-auto mt-10 capitalize bg-white rounded-md w-fit animate-scale"
          >
            <PiEnvelopeLight className="text-lg md:text-xl" />
            buka undangan
          </button>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            className="object-cover"
            src={src}
            alt="cover"
            priority={true}
            fill
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/85 to-transparent"></div>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-white/50 via-transparent"></div>
        </div>
      </motion.div>

      <motion.div
        animate={!loaded ? "open" : "closed"}
        variants={{
          open: { opacity: 1, display: "block" },
          closed: { opacity: 0, transitionEnd: { display: "none" } },
        }}
        transition={{ duration: 1 }}
        className="fixed inset-0 bg-black z-[999]"
      >
        <PiHeartFill className="absolute inset-0 m-auto text-[10rem] text-white animate-scale" />
      </motion.div>
    </>
  );
}
