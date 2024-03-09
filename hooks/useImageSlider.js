import React, { useEffect, useState } from "react";

function useImageSlider({ listImage }) {
  const [imageChunk, setImageChunk] = useState(null);
  const [imageActive, setImageActive] = useState(1);

  useEffect(() => {
    setImageChunk(listImage);
  }, [listImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageActive((prevActive) =>
        prevActive === imageChunk.length ? 1 : prevActive + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [imageChunk]);

  return { imageChunk, imageActive };
}

export default useImageSlider;
