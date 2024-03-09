import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function useMenu() {
  const params = useParams();
  const [activate, setActivate] = useState(null);
  useEffect(() => {
    if (window !== undefined) {
      setActivate(window.location.hash);
    }
  }, [params]);

  const scrolltoHash = function (element_id) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return { scrolltoHash, activate };
}

export default useMenu;
