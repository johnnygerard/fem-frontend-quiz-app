import Text from "@/components/text";
import { cn } from "@/utils/cn";
import { memo } from "react";
import { Button, ButtonProps } from "react-aria-components";

type Props = {
  children: string;
} & Omit<ButtonProps, "children">;

const AppButton = ({ children, className, ...props }: Props) => {
  return (
    <Button
      {...props}
      className={cn(
        "bg-purple tb:rounded-3xl tb:h-23 tb:p-8 h-14 w-full rounded-xl p-3",
        "dark:shadow-dark shadow hover:bg-(image:--white-overlay)",
        className,
      )}
    >
      <Text className="text-white">{children}</Text>
    </Button>
  );
};

export default memo(AppButton);
