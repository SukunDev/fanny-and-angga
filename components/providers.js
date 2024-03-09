"use client";

import { createContext, useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [data, setData] = useState({
    isOpenned: false,
  });
  const handleDataChange = (e) => {
    setData((prevState) => {
      const newState = { ...prevState };
      Object.entries(e).forEach(([key, value]) => {
        newState[key] = value;
      });
      return newState;
    });
  };

  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ data, handleDataChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
