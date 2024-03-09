import { useThemeContext } from "@/components/providers";
import React, { useEffect } from "react";
import useImage from "./useImage";
import { useSearchParams } from "next/navigation";

function useCover({ src }) {
  const { loaded } = useImage({ src });
  const { data, handleDataChange } = useThemeContext();
  const searchParams = useSearchParams();
  const to = searchParams.get("to");

  useEffect(() => {
    if (data.isOpenned) {
      document.querySelector("body").classList.remove("overflow-hidden");
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }, [data]);

  const handleOpenButton = () => {
    handleDataChange({ isOpenned: true });
  };

  return {
    handleOpenButton,
    loaded,
    data,
    to,
  };
}

export default useCover;
