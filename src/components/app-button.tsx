import Text from "@/components/text";
import { cn } from "@/utils/cn";
import { memo } from "react";
import { FocusRing } from "react-aria";
import { Button, ButtonProps } from "react-aria-components";

type Props = {
  children: string;
} & Omit<ButtonProps, "children">;

const AppButton = ({ children, className, ...props }: Props) => {
  return (
    <FocusRing
      focusRingClass={cn(
        "inset-ring-2 inset-ring-black tb:inset-ring-4 dark:inset-ring-white",
      )}
    >
      <Button
        {...props}
        className={cn(
          "h-14 w-full rounded-xl bg-purple p-3 tb:h-23 tb:rounded-3xl tb:p-8",
          "shadow outline-none hover:bg-(image:--white-overlay) dark:shadow-dark",
          className,
        )}
      >
        <Text className="text-white">{children}</Text>
      </Button>
    </FocusRing>
  );
};

export default memo(AppButton);
