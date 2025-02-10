"use client";
import { ThemeContext } from "@/contexts/theme-context";
import { THEME } from "@/types/theme";
import { memo, ReactNode, useEffect, useState } from "react";

type Props = Readonly<{
  children: ReactNode;
  initialTheme: THEME;
}>;

const ThemeProvider = ({ children, initialTheme }: Props) => {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const THEME_ATTR = "data-theme";

    switch (theme) {
      case THEME.LIGHT:
      case THEME.DARK:
        root.setAttribute(THEME_ATTR, theme);
        break;
      case THEME.SYSTEM:
        root.removeAttribute(THEME_ATTR);
        break;
      default:
        ((_: never) => _)(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default memo(ThemeProvider);
