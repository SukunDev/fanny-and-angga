"use client";

import React from "react";
import Lottie from "react-lottie";
import animationData from "../public/birds";
import { useThemeContext } from "./providers";
import Link from "next/link";
import { PiInstagramLogo } from "react-icons/pi";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Couple({ coupleData }) {
  const { data } = useThemeContext();
  return (
    <>
      {data.isOpenned ? (
        <section id="couple" className="relative mt-16 text-center capitalize">
          {coupleData.length > 0
            ? coupleData.map((item, idx) => (
                <div key={idx}>
                  <div className="absolute">
                    <Lottie options={defaultOptions} />
                  </div>
                  <div className="container relative mx-auto">
                    <div
                      className={
                        (idx % 2 === 0
                          ? "md:flex-row-reverse"
                          : "md:flex-row") + " flex flex-col items-center"
                      }
                    >
                      <div
                        className="w-2/4 md:w-2/5 p-4 mx-auto bg-white border rounded-md shadow-[10px_5px_10px_2px_rgb(0,0,0,0.2)] relative z-50"
                        data-aos="fade-up"
                        data-aos-delay={(idx + 1) * 100}
                      >
                        <img
                          className="object-cover"
                          src={item.image}
                          alt={item.full_name}
                        />
                      </div>
                      <div className="relative z-0 mt-8 space-y-3">
                        <h3
                          data-aos="fade-down"
                          data-aos-delay={(idx + 1) * 0}
                          data-aos-duration="2000"
                          className="text-lg text-gray-700 md:text-xl lg:text-2xl font-adelia"
                        >
                          {item.full_name}
                        </h3>
                        <div
                          data-aos="fade-down"
                          data-aos-delay={(idx + 1) * 200}
                        >
                          <p className="text-sm md:text-base lg:text-lg">
                            {item.type === "female" ? "putri" : "putra"} dari
                          </p>
                          <p className="text-base md:text-lg lg:text-xl">
                            bapak {item.father_name} dan ibu {item.mother_name}
                          </p>
                        </div>
                        <Link
                          data-aos="fade-down"
                          data-aos-delay={(idx + 1) * 200}
                          className="block mx-auto text-2xl text-gray-500 transition duration-300 hover:text-gray-400 active:scale-110 w-fit"
                          href={item.instagram}
                        >
                          <PiInstagramLogo />
                        </Link>
                      </div>
                    </div>
                    {idx == 0 ? (
                      <p
                        data-aos="zoom-in-down"
                        data-aos-delay="400"
                        data-aos-duration="2000"
                        className="my-12 text-2xl text-gray-700 md:my-24 md:text-4xl lg:text-5xl font-aston"
                      >
                        -&-
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))
            : ""}
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Couple;
