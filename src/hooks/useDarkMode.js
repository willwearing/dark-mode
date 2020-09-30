import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage();
  useEffect(() => {
    var bodyDiv = document.querySelector("body");
    darkMode
      ? bodyDiv.classList.toggle("dark-mode")
      : bodyDiv.classList.remove("dark-mode");
  }, [darkMode]);
  return [darkMode, setDarkMode];
};

export default useDarkMode;

// "light", "initial"
