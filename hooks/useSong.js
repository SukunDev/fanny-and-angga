import { useThemeContext } from "@/components/providers";
import React, { useEffect, useRef, useState } from "react";

function useSong() {
  const [isPaused, setIsPaused] = useState(false);
  const { data } = useThemeContext();
  const songRef = useRef();

  const handlePauseButton = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    const audio = songRef.current;
    if (data.isOpenned && audio.paused) {
      audio.play();
    }
  }, [data]);

  useEffect(() => {
    const audio = songRef.current;
    if (isPaused && !audio.paused) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [isPaused]);

  return { handlePauseButton, isPaused, songRef };
}

export default useSong;
