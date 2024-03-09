import React, { useEffect, useState } from "react";

function useGalleryImage({ src }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isShareCliked, setIsShareCliked] = useState(false);

  useEffect(() => {
    if (!isClicked) {
      document.querySelector("body").classList.remove("overflow-hidden");
    } else {
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }, [isClicked]);

  const handleCloseButton = () => {
    setIsClicked(!isClicked);
    setIsShareCliked(false);
  };

  const handleShareButton = () => {
    setIsShareCliked(!isShareCliked);
  };

  const handleOnImageClicked = () => {
    setIsClicked(true);
  };
  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = src;
    link.download = src.replace("/img/", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return {
    isClicked,
    isShareCliked,
    handleCloseButton,
    handleShareButton,
    handleDownloadClick,
    handleOnImageClicked,
  };
}

export default useGalleryImage;
