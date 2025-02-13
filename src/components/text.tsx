import { cn } from "@/utils/cn";
import { memo } from "react";

const VARIANT = {
  SM: "sm",
  BASE: "base",
  LG: "lg",
  XL: "xl",
  XL_BOLD: "xl-bold",
  ERROR: "error",
} as const;

type Props = Readonly<{
  children: string;
  className?: string;
  variant?: (typeof VARIANT)[keyof typeof VARIANT];
}>;

const Text = ({ children, className, variant = VARIANT.BASE }: Props) => {
  return (
    <span
      className={cn(
        {
          [VARIANT.SM]: "text-[0.875rem]/[1.5] italic tb:text-[1.25rem]",
          [VARIANT.BASE]: "text-[1.125rem] font-medium tb:text-[1.75rem]",
          [VARIANT.LG]: "text-[1.25rem]/[1.2] font-medium tb:text-[2.25rem]",
          [VARIANT.XL]: "text-[2.5rem] font-light tb:text-[4rem]",
          [VARIANT.XL_BOLD]: "text-[2.5rem] font-medium tb:text-[4rem]",
          [VARIANT.ERROR]: "text-[1.125rem] text-red tb:text-[1.5rem]",
        }[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};

export default memo(Text);
