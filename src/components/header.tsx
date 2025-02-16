"use client";
import QuizDisplay from "@/components/quiz-display";
import ThemeSwitcher from "@/components/theme-switcher";
import { useContextQuizMetadata } from "@/hooks/use-context-quiz-metadata";
import { memo } from "react";

const Header = () => {
  const { quizMetadata } = useContextQuizMetadata();

  return (
    <header className="mb-12 flex justify-between dt:mb-21">
      <h1 className="flex items-center gap-4 tb:gap-6">
        <QuizDisplay quizMetadata={quizMetadata} />
      </h1>
      <ThemeSwitcher />
    </header>
  );
};

export default memo(Header);
