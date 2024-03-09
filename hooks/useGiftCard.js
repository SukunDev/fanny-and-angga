import React, { useState } from "react";

function useGiftCard() {
  const [onCopy, setOnCopy] = useState(false);

  const handleClick = async () => {
    setOnCopy(true);
    navigator.clipboard.writeText(rek);
    setTimeout(() => {
      setOnCopy(false);
    }, 1000);
  };
  return { handleClick, onCopy };
}

export default useGiftCard;
