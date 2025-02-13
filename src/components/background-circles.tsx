import { cn } from "@/utils/cn";
import { memo } from "react";

const BackgroundCircles = () => {
  const className =
    "fixed -z-1 h-244 w-244 rounded-full border-[#EDF1F9] dark:border-[#2D3949]";

  return (
    <>
      {/* Circle in the upper left corner */}
      <div
        aria-hidden={true}
        className={cn(
          "tb:-left-135 tb:-top-111 dt:-top-103 -top-41 -left-150 border-[9rem]",
          className,
        )}
      />
      {/* Circle in the lower right corner */}
      <div
        aria-hidden={true}
        className={cn("dt:border-[9rem] -right-109 -bottom-92", className)}
      />
    </>
  );
};

export default memo(BackgroundCircles);
