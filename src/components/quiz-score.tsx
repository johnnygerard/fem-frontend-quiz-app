import AppButton from "@/components/app-button";
import QuizDisplay from "@/components/quiz-display";
import { useContextQuizMetadata } from "@/hooks/use-context-quiz-metadata";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import { memo } from "react";

type Props = Readonly<{
  score: number;
  totalQuestions: number;
}>;

const QuizScore = ({ score, totalQuestions }: Props) => {
  const { quizMetadata } = useContextQuizMetadata();
  const router = useRouter();

  return (
    <>
      <div
        className={cn(
          "flex flex-col items-center bg-white dark:bg-navy",
          "rounded-xl p-8 tb:rounded-3xl tb:p-12",
        )}
      >
        <div className="flex items-center gap-4 tb:gap-6">
          <QuizDisplay quizMetadata={quizMetadata} />
        </div>
        <span className="my-4 text-[5.5rem] font-medium tb:mt-10 tb:text-[9rem]">
          {score}
        </span>
        <span
          className={cn(
            "text-grey-navy dark:text-light-bluish",
            "text-[1.125rem] tb:text-[1.5rem]/[1.5]",
          )}
        >
          {`out of ${totalQuestions}`}
        </span>
      </div>
      <AppButton className="mt-3 tb:mt-8" onPress={() => router.push("/")}>
        Play Again
      </AppButton>
    </>
  );
};

export default memo(QuizScore);
