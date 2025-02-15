import AppFocusRing from "@/components/app-focus-ring";
import Text from "@/components/text";
import { TW_SHADOW } from "@/constants";
import { cn } from "@/utils/cn";
import { memo } from "react";
import { Button, ButtonProps } from "react-aria-components";

type Props = {
  children: string;
} & Omit<ButtonProps, "children">;

const AppButton = ({ children, className, ...props }: Props) => {
  return (
    <AppFocusRing>
      <Button
        {...props}
        className={cn(
          "h-14 w-full rounded-xl bg-purple p-3 tb:h-23 tb:rounded-3xl tb:p-8",
          "hover:bg-(image:--white-overlay)",
          className,
          TW_SHADOW,
        )}
      >
        <Text className="text-white">{children}</Text>
      </Button>
    </AppFocusRing>
  );
};

export default memo(AppButton);
