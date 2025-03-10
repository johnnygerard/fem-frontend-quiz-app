"use client";
import AppFocusRing from "@/components/app-focus-ring";
import IconMoon from "@/components/svg/icon-moon";
import IconSun from "@/components/svg/icon-sun";
import { cn } from "@/utils/cn";
import { useThemeContext } from "next-theme-provider";
import { memo } from "react";
import { Switch } from "react-aria-components";

const ThemeSwitcher = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <div className="flex items-center gap-2 text-grey-navy tb:gap-4 dark:text-white">
      <IconSun aria-hidden className="size-4 tb:size-6" />
      <AppFocusRing>
        <Switch
          aria-label="Dark mode"
          className="h-5 w-8 cursor-pointer rounded-full bg-purple p-1 tb:h-7 tb:w-12"
          onChange={toggleTheme}
        >
          {/* Switch handle */}
          <span
            className={cn(
              "block h-3 w-3 rounded-full bg-white tb:h-5 tb:w-5 dark:ml-[50%]",
              "transition-[margin-left] duration-150 ease-in-out",
            )}
          />
        </Switch>
      </AppFocusRing>
      <IconMoon aria-hidden className="size-4 tb:size-6" />
    </div>
  );
};

export default memo(ThemeSwitcher);
