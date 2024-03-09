"use client";

import useEvent from "@/hooks/useEvent";
import Link from "next/link";
import React from "react";
import {
  PiClockAfternoonThin,
  PiMapPinFill,
  PiMapPinLine,
  PiStopCircleLight,
} from "react-icons/pi";
import { useThemeContext } from "./providers";

export default function Event({ listEvent, streaming }) {
  const { dateFormat } = useEvent();
  const { data } = useThemeContext();
  return (
    <>
      {data.isOpenned ? (
        <section
          id="event"
          className="py-8 mt-16 bg-gradient-to-b from-stone-800 to-white"
        >
          <div className="container mx-auto">
            <div className="flex items-start gap-4 pl-4 mb-8 text-white capitalize">
              <h3 className="flex flex-col text-xl md:text-2xl lg:text-3xl tracking-[0.3rem] font-newyork">
                <span>wedding</span>
                <span className="-mt-1.5">event</span>
              </h3>
              <div className="w-full h-px mt-5 bg-white"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {listEvent.map((item, idx) => (
                <div
                  key={idx}
                  className={
                    (idx % 2 === 0
                      ? "flex-row rounded-tr-[2rem]"
                      : "flex-row-reverse rounded-tl-[2rem]") +
                    " flex mx-4 mt-4 bg-white overflow-hidden"
                  }
                >
                  <div className="relative px-8 text-white md:px-10 bg-stone-700">
                    <p
                      data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                      data-aos-delay={(idx + 1) * 100}
                      data-aos-duration="2000"
                      className="absolute inset-0 m-auto w-fit h-fit [writing-mode:vertical-lr] uppercase rotate-180 text-center text-xl md:text-2xl lg:text-3xl tracking-widest"
                    >
                      {item.title}
                    </p>
                  </div>
                  <div className="w-full mx-4 mb-4">
                    <div className="flex items-center my-4">
                      <h3
                        data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                        data-aos-delay={(idx + 1) * 200}
                        data-aos-duration="2000"
                        className="ml-6 text-7xl text-stone-500"
                      >
                        {dateFormat(item.date).day}
                      </h3>
                      <p
                        data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                        data-aos-delay={(idx + 1) * 250}
                        data-aos-duration="2000"
                        className="ml-8 text-sm font-thin leading-6 uppercase md:text-base lg:text-lg text-stone-700"
                      >
                        {dateFormat(item.date).dayName}
                        <br />
                        {dateFormat(item.date).monthName}
                        <br />
                        {dateFormat(item.date).year}
                      </p>
                    </div>
                    <hr />
                    <div
                      data-aos={idx % 2 === 1 ? "fade-left" : "fade-right"}
                      data-aos-delay={(idx + 1) * 250}
                      data-aos-duration="2000"
                      className="flex items-center justify-center gap-1 mt-2 text-base md:text-lg text-stone-700"
                    >
                      <PiClockAfternoonThin className="mt-px text-xl" />
                      <p>{item.jam}</p>
                    </div>
                    <div className="flex flex-col mt-4 space-y-4">
                      <h3
                        data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                        data-aos-delay={(idx + 1) * 250}
                        data-aos-duration="2000"
                        className="flex items-center gap-1 font-medium uppercase text-stone-800"
                      >
                        <PiMapPinLine /> lokasi acara
                      </h3>
                      <p
                        data-aos={idx % 2 === 1 ? "fade-left" : "fade-right"}
                        data-aos-delay={(idx + 1) * 250}
                        data-aos-duration="2000"
                        className="text-sm font-light text-stone-700"
                      >
                        <span className="font-semibold capitalize">
                          {item.lokasi}
                        </span>
                        <br />
                        {item.address}
                      </p>
                      <Link
                        data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
                        data-aos-delay={(idx + 1) * 250}
                        data-aos-duration="2000"
                        className="flex items-center gap-1 px-4 py-2 font-medium border rounded-md w-fit text-stone-500 border-stone-500"
                        href={item.maps_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PiMapPinFill />
                        Google Maps
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {streaming.status ? (
              <div className="px-4 py-2.5 mx-4 mt-8 space-y-2 text-sm font-light text-center capitalize bg-white rounded-md text-stone-500 overflow-hidden">
                <div
                  data-aos="zoom-in-down"
                  data-aos-delay="200"
                  data-aos-duration="2000"
                  className="flex items-center gap-1 mx-auto w-fit text-stone-700"
                >
                  <PiStopCircleLight className="mt-1 text-xl" />
                  <h3 className="text-lg font-semibold">live streaming</h3>
                </div>
                <p
                  data-aos="zoom-in"
                  data-aos-delay="600"
                  className="text-sm md:text-base"
                >
                  kami mengajak anda yang tidak bisa hadir langsung untuk
                  bergabung pada momen sepesial kami melalui siaran langsung
                  secara virtual dengan klik tombol berikut:
                </p>
                <div className="flex items-center justify-center gap-1">
                  {streaming.links.map((item, idx) => (
                    <Link
                      data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                      data-aos-duration="2000"
                      key={idx}
                      className="flex items-center gap-1 px-4 py-2 font-medium border rounded-md w-fit text-stone-500 border-stone-500"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
