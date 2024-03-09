"use client";

import useMenu from "@/hooks/useMenu";
import React from "react";
import {
  PiCalendarCheck,
  PiCalendarCheckFill,
  PiChat,
  PiChatFill,
  PiHeart,
  PiHeartFill,
  PiHouseSimple,
  PiHouseSimpleFill,
  PiImage,
  PiImageFill,
} from "react-icons/pi";

export default function Menu() {
  const { scrolltoHash } = useMenu();
  return (
    <section
      id="menu"
      className="fixed inset-x-0 bottom-0 z-[100] block sm:hidden"
    >
      <div className="bg-[#121212] px-4 py-2 rounded-t-lg">
        <ul className="flex items-center justify-between">
          <li className="group">
            <button
              onClick={() => {
                scrolltoHash("hero");
              }}
              className="p-2 text-xl text-white rounded-full hover:bg-white/5 active:bg-white/10"
            >
              <PiHouseSimple className="block text-3xl group-hover:hidden" />
              <PiHouseSimpleFill className="hidden text-3xl group-hover:block" />
            </button>
          </li>
          <li className="group">
            <button
              onClick={() => {
                scrolltoHash("couple");
              }}
              className="inline-flex items-center p-2 text-xl text-white rounded-full hover:bg-white/5 active:bg-white/10"
            >
              <PiHeart className="block text-3xl group-hover:hidden" />
              <PiHeartFill className="hidden text-3xl group-hover:block" />
            </button>
          </li>
          <li className="group">
            <button
              onClick={() => {
                scrolltoHash("event");
              }}
              className="inline-flex items-center p-2 text-xl text-white rounded-full hover:bg-white/5 active:bg-white/10"
            >
              <PiCalendarCheck className="block text-3xl group-hover:hidden" />
              <PiCalendarCheckFill className="hidden text-3xl group-hover:block" />
            </button>
          </li>
          <li className="group">
            <button
              onClick={() => {
                scrolltoHash("gallery");
              }}
              className="inline-flex items-center p-2 text-xl text-white rounded-full hover:bg-white/5 active:bg-white/10"
            >
              <PiImage className="block text-3xl group-hover:hidden" />
              <PiImageFill className="hidden text-3xl group-hover:block" />
            </button>
          </li>
          <li className="group">
            <button
              onClick={() => {
                scrolltoHash("comment");
              }}
              className="inline-flex items-center p-2 text-xl text-white rounded-full hover:bg-white/5 active:bg-white/10"
            >
              <PiChat className="block text-3xl group-hover:hidden" />
              <PiChatFill className="hidden text-3xl group-hover:block" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
