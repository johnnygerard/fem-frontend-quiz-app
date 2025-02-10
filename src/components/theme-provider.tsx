"use client";
import { THEME_ATTR, THEME_KEY } from "@/constants";
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

  // Initialize and track system theme
  useEffect(() => {
    const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? THEME.DARK : THEME.LIGHT);
    };

    setSystemTheme(systemThemeQuery.matches ? THEME.DARK : THEME.LIGHT);
    systemThemeQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      systemThemeQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const handleThemeChange = (theme: THEME): void => {
    setTheme(theme);

    // Persist theme with a cookie
    window.document.cookie = [
      `${THEME_KEY}=${theme}`,
      `max-age=${365 * 24 * 60 * 60}`, // 1 year
      "secure",
      "path=/",
      "samesite=lax",
    ].join("; ");
  };

  return (
    <ThemeContext.Provider
      value={{ systemTheme, theme, setTheme: handleThemeChange }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default memo(ThemeProvider);
