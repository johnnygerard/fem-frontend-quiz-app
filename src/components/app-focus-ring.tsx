import { cn } from "@/utils/cn";
import { memo } from "react";
import { FocusRing, FocusRingProps } from "react-aria";

const AppFocusRing = (props: FocusRingProps) => {
  return (
    <FocusRing
      focusRingClass={cn(
        "outline-2 outline-offset-2",
        "animate-focus-ring outline-dark-navy dark:outline-white",
      )}
      {...props}
    />
  );
};

export default memo(AppFocusRing);
