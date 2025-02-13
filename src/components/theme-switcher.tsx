"use client";
import IconMoon from "@/components/svg/icon-moon";
import IconSun from "@/components/svg/icon-sun";
import { useAppTheme } from "@/hooks/use-app-theme";
import { THEME } from "@/types/theme";
import { cn } from "@/utils/cn";
import { memo } from "react";
import { FocusRing } from "react-aria";
import { Switch } from "react-aria-components";

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useAppTheme();
  const isDark =
    theme === THEME.DARK ||
    (theme === THEME.SYSTEM && systemTheme === THEME.DARK);

  return (
    <div className="text-grey-navy tb:gap-4 flex items-center gap-2 dark:text-white">
      <IconSun aria-hidden={true} className="tb:h-6 tb:w-6 h-4 w-4" />
      <FocusRing focusRingClass="ring-2 ring-black dark:ring-white">
        <Switch
          aria-label="Dark mode"
          className="bg-purple tb:w-12 tb:h-7 h-5 w-8 cursor-pointer rounded-full p-1"
          isSelected={isDark}
          onChange={() => {
            setTheme(isDark ? THEME.LIGHT : THEME.DARK);
          }}
        >
          {/* Switch handle */}
          <span
            className={cn(
              "tb:w-5 tb:h-5 block h-3 w-3 rounded-full bg-white dark:ml-[50%]",
              "transition-[margin-left] duration-150 ease-in-out",
            )}
          />
        </Switch>
      </FocusRing>
      <IconMoon aria-hidden={true} className="tb:h-6 tb:w-6 h-4 w-4" />
    </div>
  );
};

export default memo(ThemeSwitcher);
