"use server";
import { THEME } from "@/types/theme";
import { cookies } from "next/headers";
import { env } from "node:process";

export const loadTheme = async (): Promise<THEME> => {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;

  return theme === THEME.DARK || theme === THEME.LIGHT ? theme : THEME.SYSTEM;
};

const themeCookieOptions = {
  maxAge: 365 * 24 * 60 * 60, // 1 year
  path: "/",
  secure: env["NODE_ENV"] === "production",
  httpOnly: true,
  sameSite: "lax",
} as const;

export const persistTheme = async (theme: THEME): Promise<void> => {
  const cookieStore = await cookies();
  cookieStore.set("theme", theme, themeCookieOptions);
};
