import useImageSlider from "@/hooks/useImageSlider";
import Image from "next/image";
import React from "react";

export default function ImageSlider({ listImage }) {
  const { imageChunk, imageActive } = useImageSlider({ listImage });

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {imageChunk?.map((item, idx) => (
        <Image
          key={idx}
          src={item}
          className={`object-cover w-full h-full absolute transition-opacity duration-1000 ${
            idx + 1 === imageActive
              ? "opacity-100 animate-zoom-out "
              : "opacity-0"
          }`}
          style={{ zIndex: idx + 1 }}
          alt={`Slide ${idx + 1}`}
          loading="lazy"
          priority={false}
          fill={true}
        />
      ))}
    </div>
  );
}
