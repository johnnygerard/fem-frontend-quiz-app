"use client";
import { QuizMetadataContext } from "@/contexts/quiz-metadata-context";
import { QuizMetadata } from "@/types/quiz-metadata";
import { memo, ReactNode, useState } from "react";

type Props = Readonly<{
  children: ReactNode;
}>;

const QuizMetadataProvider = ({ children }: Props) => {
  const [quizMetadata, setQuizMetadata] = useState<QuizMetadata | null>(null);

  return (
    <QuizMetadataContext.Provider
      value={{
        quizMetadata,
        setQuizMetadata,
      }}
    >
      {children}
    </QuizMetadataContext.Provider>
  );
};

export default memo(QuizMetadataProvider);
