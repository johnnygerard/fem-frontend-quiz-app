import AppFocusRing from "@/components/app-focus-ring";
import IconCheckMark from "@/components/svg/icon-check-mark";
import IconCross from "@/components/svg/icon-cross";
import Text from "@/components/text";
import { TW_SHADOW } from "@/constants";
import { cn } from "@/utils/cn";
import { indexToLetter } from "@/utils/index-to-letter";
import { memo } from "react";
import { Radio } from "react-aria-components";

type Props = Readonly<{
  answer: string;
  index: number;
  isCorrect: boolean;
  isReadOnly: boolean;
}>;

const QuizAnswer = ({ answer, index, isCorrect, isReadOnly }: Props) => {
  return (
    <AppFocusRing>
      <Radio
        className={cn(
          "rounded-xl tb:rounded-3xl",
          "gap-4 p-3 tb:gap-8 dt:px-5 dt:py-4.5",
          "flex items-center bg-white dark:bg-navy",
          "inset-ring-purple selected:inset-ring-3",
          isReadOnly && (isCorrect ? "inset-ring-green" : "inset-ring-red"),
          !isReadOnly && "cursor-pointer",
          !isReadOnly && "selected:outline-none",
          TW_SHADOW,
        )}
        autoFocus={!isReadOnly && index === 0}
        value={answer}
        onKeyDown={() => {}} // Enable form submission when pressing Enter key
      >
        {({ isFocusVisible, isHovered, isSelected }) => (
          <>
            <Text
              className={cn(
                "h-10 w-10 rounded-md tb:h-14 tb:w-14 tb:rounded-xl",
                "grid place-items-center bg-light-grey text-grey-navy",
                !isReadOnly &&
                  (isHovered || isFocusVisible) &&
                  "bg-[#F6E7FF] text-purple",
                isSelected && "bg-purple text-white",
                isSelected && isReadOnly && (isCorrect ? "bg-green" : "bg-red"),
              )}
            >
              {indexToLetter(index)}
            </Text>
            <Text className="flex-1 [word-break:break-word]">{answer}</Text>
            {isReadOnly &&
              (isCorrect ? <IconCheckMark /> : isSelected && <IconCross />)}
          </>
        )}
      </Radio>
    </AppFocusRing>
  );
};

export default memo(QuizAnswer);
