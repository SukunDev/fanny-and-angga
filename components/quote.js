"use client";

import React from "react";
import { useThemeContext } from "./providers";

export default function Quote({
  shortNameFemale,
  shortNameMale,
  quote,
  quoteFrom,
}) {
  const { data } = useThemeContext();
  return (
    <>
      {data.isOpenned ? (
        <section id="quote" className="relative text-center">
          <img
            className="absolute inset-0 z-0 w-full"
            src="/img/img-tree-shadow.png"
            alt=""
          />
          <div className="container relative z-10 pt-16 mx-auto">
            <h2 className="text-xl font-medium text-gray-700 uppercase lg:text-4xl md:text-3xl font-aston">
              {shortNameFemale.charAt(0)}
              <span className="text-3xl font-normal text-gray-500"> & </span>
              {shortNameMale.charAt(0)}
            </h2>
            <div className="h-px m-auto mt-6 mb-10 bg-gray-700 w-36"></div>
            <div
              className="space-y-4 text-sm md:text-base lg:text-lg"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="0"
              data-aos-easing="ease-in-out"
            >
              <p className="text-gray-700 ">{quote}</p>
              <p className="text-base text-gray-700 md:text-lg lg:text-xl">
                {quoteFrom}
              </p>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
