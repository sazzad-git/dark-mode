/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useContext } from "react";
import { themeContext } from "./ThemeContext";

const ClientThemeWrapper = ({ children }: any) => {
  const { theme } = useContext(themeContext);
  return <div data-theme={theme}>{children}</div>;
};

export default ClientThemeWrapper;
