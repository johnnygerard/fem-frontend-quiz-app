import QuizProgressBar from "@/components/quiz-progress-bar";
import Text from "@/components/text";
import { cn } from "@/utils/cn";
import { memo } from "react";

type Props = Readonly<{
  question: string;
  questionIndex: number;
  totalQuestions: number;
}>;

const QuizChallenge = ({ question, questionIndex, totalQuestions }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col dt:h-113 dt:w-116 dt:justify-between",
        "gap-6 tb:gap-10 dt:gap-0",
      )}
    >
      <div>
        <p>
          <Text variant="sm">
            {`Question ${questionIndex + 1} of ${totalQuestions}`}
          </Text>
        </p>
        <p className="mt-3 tb:mt-7 dt:max-h-80 dt:overflow-auto">
          <Text variant="lg">{question}</Text>
        </p>
      </div>
      <QuizProgressBar percentage={(questionIndex / totalQuestions) * 100} />
    </div>
  );
};

export default memo(QuizChallenge);
