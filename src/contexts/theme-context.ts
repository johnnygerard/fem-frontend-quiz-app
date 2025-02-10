import { THEME } from "@/types/theme";
import { createContext } from "react";

export const ThemeContext = createContext<
  | {
      theme: THEME;
      setTheme: (theme: THEME) => void;
    }
  | undefined
>(undefined);
