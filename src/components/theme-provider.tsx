"use client";
import { persistTheme } from "@/app/actions";
import { ThemeContext } from "@/contexts/theme-context";
import { THEME } from "@/types/theme";
import { memo, ReactNode, useEffect, useState } from "react";

type Props = Readonly<{
  children: ReactNode;
  initialTheme: THEME;
}>;

const ThemeProvider = ({ children, initialTheme }: Props) => {
  const [theme, setTheme] = useState(initialTheme);
  const [systemTheme, setSystemTheme] = useState<THEME.DARK | THEME.LIGHT>(
    THEME.LIGHT,
  );

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

    // Track system theme
    const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? THEME.DARK : THEME.LIGHT);
    };

    systemThemeQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      systemThemeQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        systemTheme,
        theme,
        setTheme: async (theme: THEME) => {
          setTheme(theme);
          await persistTheme(theme);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default memo(ThemeProvider);
