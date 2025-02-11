import { clsx } from "clsx";
import { memo } from "react";
import { Button, ButtonProps } from "react-aria-components";

const AppButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      className={clsx(
        "tb:text-[1.75rem] text-[1.125rem] leading-none font-medium text-white",
        "bg-purple tb:rounded-3xl tb:h-23 tb:p-8 h-14 w-full rounded-xl p-3",
        "shadow hover:bg-(image:--white-overlay)",
      )}
    />
  );
};

export default memo(AppButton);
