"use client";

import React from "react";
import GalleryImage from "./galleryImage";
import { useThemeContext } from "./providers";

export default function Gallery({ imageList }) {
  const { data } = useThemeContext();
  return (
    <>
      {data.isOpenned ? (
        <section id="gallery" className="container px-4 py-8 mx-auto mt-16">
          <div className="flex flex-row-reverse items-center gap-4">
            <h3 className="text-4xl font-thin text-slate-500 font-newyork tracking-[0.3rem]">
              Gallery
            </h3>
            <div className="w-full h-px mt-2 bg-slate-500"></div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8">
            {imageList.map((item, idx) => (
              <GalleryImage src={item} key={idx} />
            ))}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}
