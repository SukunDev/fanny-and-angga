import React, { useState } from "react";

const giftCardVariants = {
  open: {
    opacity: 1,
    scale: 1,
    height: "auto",
  },
  closed: {
    opacity: 0,
    scale: 0,
    height: "0px",
  },
};

function useGift() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const buttonClickedHandler = () => {
    setIsButtonClicked(!isButtonClicked);
  };
  return { buttonClickedHandler, isButtonClicked, giftCardVariants };
}

export default useGift;
