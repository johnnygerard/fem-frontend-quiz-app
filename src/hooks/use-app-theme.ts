import { ThemeContext } from "@/contexts/theme-context";
import { useContext } from "react";

export const useAppTheme = () => {
  const context = useContext(ThemeContext);
  if (context) return context;
  throw new Error("Context provider not found");
};
