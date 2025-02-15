"use client";
import Text from "@/components/text";
import ThemeSwitcher from "@/components/theme-switcher";
import { useContextQuizMetadata } from "@/hooks/use-context-quiz-metadata";
import Image from "next/image";
import { memo } from "react";

const Header = () => {
  const { quizMetadata } = useContextQuizMetadata();

  return (
    <header className="flex justify-between">
      {quizMetadata ? (
        <h1 className="flex items-center gap-4 tb:gap-6">
          <Image
            aria-hidden="true"
            className="h-10 w-10 tb:h-14 tb:w-14"
            src={`/image/icon/${quizMetadata.slug}.svg`}
            width="40"
            height="40"
            priority
            unoptimized
            alt=""
          />
          <Text>{quizMetadata.title}</Text>
        </h1>
      ) : (
        // Layout placeholder
        <div aria-hidden="true" className="h-10 tb:h-14" />
      )}
      <ThemeSwitcher />
    </header>
  );
};

export default memo(Header);
