import { clsx } from "clsx";
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
      className={clsx(
        className,
        {
          [VARIANT.SM]: "tb:text-[1.25rem] text-[0.875rem]/[1.5] italic",
          [VARIANT.BASE]: "tb:text-[1.75rem] text-[1.125rem] font-medium",
          [VARIANT.LG]: "tb:text-[2.25rem] text-[1.25rem]/[1.2] font-medium",
          [VARIANT.XL]: "tb:text-[4rem] text-[2.5rem] font-light",
          [VARIANT.XL_BOLD]: "tb:text-[4rem] text-[2.5rem] font-medium",
          [VARIANT.ERROR]: "text-red tb:text-[1.5rem] text-[1.125rem]",
        }[variant],
      )}
    >
      {children}
    </span>
  );
};

export default memo(Text);
