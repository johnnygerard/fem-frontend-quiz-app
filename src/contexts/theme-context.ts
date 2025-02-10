import { THEME } from "@/types/theme";
import { createContext } from "react";

export const ThemeContext = createContext<
  | {
      systemTheme: THEME.DARK | THEME.LIGHT;
      theme: THEME;
      setTheme: (theme: THEME) => void;
    }
  | undefined
>(undefined);
