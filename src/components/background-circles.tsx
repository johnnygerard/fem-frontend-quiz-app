import { clsx } from "clsx";
import { memo } from "react";

const BackgroundCircles = () => {
  const className =
    "fixed -z-1 h-244 w-244 rounded-full border-[#EDF1F9] dark:border-[#2D3949]";

  return (
    <>
      {/* Circle in the upper left corner */}
      <div
        aria-hidden={true}
        className={clsx(
          className,
          "tb:-left-135 tb:-top-111 dt:-top-103 -top-41 -left-150 border-[9rem]",
        )}
      />
      {/* Circle in the lower right corner */}
      <div
        aria-hidden={true}
        className={clsx(className, "dt:border-[9rem] -right-109 -bottom-92")}
      />
    </>
  );
};

export default memo(BackgroundCircles);
