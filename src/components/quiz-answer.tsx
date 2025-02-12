import IconCheckMark from "@/components/svg/icon-check-mark";
import IconCross from "@/components/svg/icon-cross";
import Text from "@/components/text";
import { cn } from "@/utils/cn";
import { indexToLetter } from "@/utils/index-to-letter";
import { memo } from "react";
import { Radio } from "react-aria-components";

type Props = Readonly<{
  answer: string;
  index: number;
  isCorrect: boolean;
  isSubmitted: boolean;
}>;

const QuizAnswer = ({ answer, index, isCorrect, isSubmitted }: Props) => {
  return (
    <Radio
      className={cn(
        "tb:rounded-3xl rounded-xl",
        "tb:gap-8 tb:h-20 dt:h-23 dt:px-5 h-16 gap-4 px-3",
        "dark:bg-navy dark:shadow-dark flex items-center bg-white shadow",
        "selected:inset-ring-3 inset-ring-purple",
        isSubmitted && (isCorrect ? "inset-ring-green" : "inset-ring-red"),
        !isSubmitted && "cursor-pointer",
      )}
      value={answer}
    >
      {({ isHovered, isSelected }) => (
        <>
          <Text
            className={cn(
              "tb:h-14 tb:w-14 tb:rounded-xl h-10 w-10 rounded-md",
              "text-grey-navy bg-light-grey grid place-items-center",
              !isSubmitted && isHovered && "text-purple bg-[#F6E7FF]",
              isSelected && "bg-purple text-white",
              isSelected && isSubmitted && (isCorrect ? "bg-green" : "bg-red"),
            )}
          >
            {indexToLetter(index)}
          </Text>
          <Text className="flex-1">{answer}</Text>
          {isSubmitted &&
            (isCorrect ? <IconCheckMark /> : isSelected && <IconCross />)}
        </>
      )}
    </Radio>
  );
};

export default memo(QuizAnswer);
