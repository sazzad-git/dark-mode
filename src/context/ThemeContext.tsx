"use client";

import { createContext, useEffect, useState } from "react";

export const themeContext = createContext();

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storeTheme = localStorage.getItem("theme") || "light";
    setTheme(storeTheme);
  }, []);

  if (!isMounted) {
    return <>Loading...</>;
  }

  const changeTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };
  return (
    <themeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
