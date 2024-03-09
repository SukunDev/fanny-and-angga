"use client";

import React from "react";
import ImageSlider from "./imageSlider";
import useHero from "@/hooks/useHero";
import { useThemeContext } from "./providers";

export default function Hero({
  imageList,
  weddingDate,
  shortNameFemale,
  shortNameMale,
}) {
  const { date, windowWidth } = useHero({ weddingDate });
  const { data } = useThemeContext();

  return (
    <>
      {data.isOpenned ? (
        <section id="hero">
          <div className="container relative z-[140] mx-auto">
            <ImageSlider listImage={imageList} />
          </div>
          {windowWidth <= 640 ? (
            ""
          ) : (
            <div className="absolute inset-0 z-[130] hidden blur sm:block">
              <ImageSlider listImage={imageList} />
            </div>
          )}
          <div className="absolute z-[200] px-4 py-2 text-center text-white uppercase bottom-4 md:bottom-6 lg:bottom-8 rounded-xl inset-x-4 backdrop-blur">
            <div className="px-0.5 mx-auto">
              <p className="font-medium text-white tracking-[0.5rem] md:tracking-[0.75rem] lg:tracking-[0.9rem] text-xs md:text-sm lg:text-base text-nowrap">
                the wedding of
              </p>
            </div>
            <h2 className="p-4 text-xl md:text-2xl lg:text-3xl leading-[1.75] text-white capitalize font-aston">
              {shortNameFemale} & {shortNameMale}
            </h2>
            <ul className="flex items-center justify-center gap-4 capitalize">
              <li>
                <p className="text-lg font-semibold md:text-xl lg:text-2xl">
                  {date?.days}
                </p>
                <p className="text-xs">days</p>
              </li>
              <li>
                <p className="text-lg font-semibold md:text-xl lg:text-2xl">
                  {date?.hours}
                </p>
                <p className="text-xs">hours</p>
              </li>
              <li>
                <p className="text-lg font-semibold md:text-xl lg:text-2xl">
                  {date?.minutes}
                </p>
                <p className="text-xs">minutes</p>
              </li>
              <li>
                <p className="text-lg font-semibold md:text-xl lg:text-2xl">
                  {date?.seconds}
                </p>
                <p className="text-xs">seconds</p>
              </li>
            </ul>
          </div>
          <div className="absolute inset-0 z-[150] w-full h-full bg-gradient-to-t from-black/50 via-transparent"></div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
