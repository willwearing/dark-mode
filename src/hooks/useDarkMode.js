import useLocalStorage from "./useLocalStorage";

export const useDarkMode = (initalValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("setDarkKey", initalValue);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
