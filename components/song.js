"use client";

import useSong from "@/hooks/useSong";
import React from "react";
import { PiPauseFill, PiPlayFill } from "react-icons/pi";

export default function Song() {
  const { isPaused, handlePauseButton, songRef } = useSong();

  return (
    <section>
      <div className="fixed inset-y-0 my-auto left-2 lg:left-4 h-fit z-[998]">
        <button
          onClick={handlePauseButton}
          className="relative p-2 bg-gray-200 rounded-full border-stone-700"
        >
          {isPaused ? (
            <PiPlayFill className="text-xl text-stone-900" />
          ) : (
            <PiPauseFill className="text-xl text-stone-900" />
          )}
        </button>
      </div>
      <audio ref={songRef} id="play-song" src="/song.mp3" loop></audio>
    </section>
  );
}
