import { memo } from "react";
import { FocusRing, FocusRingProps } from "react-aria";

const AppFocusRing = (props: FocusRingProps) => {
  return (
    <FocusRing
      focusRingClass="outline-2 outline-offset-2 outline-dark-navy dark:outline-white"
      {...props}
    />
  );
};

export default memo(AppFocusRing);
