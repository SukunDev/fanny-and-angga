import Link from "next/link";
import React from "react";
import {
  PiDownloadSimpleLight,
  PiFacebookLogo,
  PiPinterestLogo,
  PiShareFatLight,
  PiTwitterLogo,
  PiXLight,
} from "react-icons/pi";
import { motion } from "framer-motion";
import useGalleryImage from "@/hooks/useGalleryImage";

function GalleryImage({ src }) {
  const {
    isClicked,
    isShareCliked,
    handleCloseButton,
    handleShareButton,
    handleDownloadClick,
    handleOnImageClicked,
  } = useGalleryImage({ src });

  return (
    <>
      <div
        onClick={handleOnImageClicked}
        data-aos="zoom-in"
        data-offset="0"
        className={`cursor-pointer col-span-2`}
      >
        <img src={src} loading="lazy" />
      </div>

      <motion.div
        animate={isClicked ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            display: "block",
          },
          closed: {
            opacity: 0,
            transitionEnd: { display: "none" },
          },
        }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black/80 z-[997]`}
      >
        <div className="fixed flex items-center gap-4 right-4 top-2 lg:right-8 lg:top-4 z-[999]">
          <button onClick={handleDownloadClick}>
            <PiDownloadSimpleLight className="text-2xl text-white" />
          </button>
          <button onClick={handleShareButton}>
            <PiShareFatLight className="text-2xl text-white" />
          </button>
          <button onClick={handleCloseButton}>
            <PiXLight className="text-2xl text-white" />
          </button>
        </div>
        <motion.img
          animate={isClicked ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              scale: 1,
            },
            closed: {
              opacity: 0,
              scale: 0,
            },
          }}
          transition={{ duration: 0.3 }}
          className="h-[80%] lg:h-[90%] fixed inset-0 m-auto object-cover z-[997]"
          src={src}
          alt=""
        />
        {isShareCliked ? (
          <div className="fixed inset-0 bg-black/70 z-[997]">
            <ul className="absolute py-2 capitalize bg-white rounded-md top-14 right-8">
              <div class="absolute right-11 -top-3 w-0 h-0 border-l-[9px] border-l-transparent border-b-[16px] border-b-white border-r-[9px] border-r-transparent"></div>
              <li>
                <Link
                  className="flex items-center gap-2 px-4 py-1 transition duration-300 rounded-md hover:bg-gray-300 active:bg-gray-200"
                  href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_APP_URL
                  )}`}
                >
                  <PiFacebookLogo className="text-2xl text-gray-700" />
                  share on facebook
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 px-4 py-1 transition duration-300 rounded-md hover:bg-gray-300 active:bg-gray-200"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_APP_URL
                  )}`}
                >
                  <PiTwitterLogo className="text-2xl text-gray-700" />
                  share on twitter
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 px-4 py-1 transition duration-300 rounded-md hover:bg-gray-300 active:bg-gray-200"
                  href={`https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_APP_URL
                  )}&media=${encodeURIComponent(
                    process.env.NEXT_PUBLIC_APP_URL + src
                  )}`}
                >
                  <PiPinterestLogo className="text-2xl text-gray-700" />
                  Pin it
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </motion.div>
    </>
  );
}

export default GalleryImage;
