"use client";
import AppLink from "@/components/app-link";
import QuizDisplay from "@/components/quiz-display";
import { TW_SHADOW } from "@/constants";
import { useContextQuizMetadata } from "@/hooks/use-context-quiz-metadata";
import { cn } from "@/utils/cn";
import { memo } from "react";

const QuizList = () => {
  const { quizMetadataList } = useContextQuizMetadata();

  return (
    <ul className="flex flex-col gap-3 tb:gap-6">
      {quizMetadataList.map(({ slug, title }) => (
        <li key={slug}>
          <AppLink
            className={cn(
              "flex items-center gap-4 p-3 tb:gap-8 dt:p-5",
              "rounded-xl bg-white tb:rounded-3xl dark:bg-navy",
              TW_SHADOW,
            )}
            href={`/quiz/${slug}`}
          >
            <QuizDisplay quizMetadata={{ slug, title }} />
          </AppLink>
        </li>
      ))}
    </ul>
  );
};

export default memo(QuizList);
