"use client";
import { QuizMetadataContext } from "@/contexts/quiz-metadata-context";
import { QuizMetadata } from "@/types/quiz-metadata";
import { usePathname } from "next/navigation";
import { memo, ReactNode, useEffect, useState } from "react";

type Props = Readonly<{
  children: ReactNode;
  quizMetadataList: QuizMetadata[];
}>;

const QuizMetadataProvider = ({ quizMetadataList, children }: Props) => {
  const pathname = usePathname();

  const [quizMetadata, setQuizMetadata] = useState({
    quizMetadataList,
    quizMetadata: null as QuizMetadata | null,
  });

  useEffect(() => {
    const match = pathname.match(/^\/quiz\/([^/]+)\/?$/);

    setQuizMetadata({
      quizMetadataList,
      quizMetadata:
        match &&
        (quizMetadataList.find((quiz) => match[1] === quiz.slug) ?? null),
    });
  }, [pathname, quizMetadataList]);

  return (
    <QuizMetadataContext.Provider value={quizMetadata}>
      {children}
    </QuizMetadataContext.Provider>
  );
};

export default memo(QuizMetadataProvider);
