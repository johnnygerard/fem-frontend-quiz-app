"use server";
import { THEME_KEY } from "@/constants";
import { THEME } from "@/types/theme";
import { cookies } from "next/headers";

export const loadTheme = async (): Promise<THEME> => {
  const cookieStore = await cookies();
  const theme = cookieStore.get(THEME_KEY)?.value;

  return theme === THEME.DARK || theme === THEME.LIGHT ? theme : THEME.SYSTEM;
};
