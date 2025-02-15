"use client";
import { QuizMetadataContext } from "@/contexts/quiz-metadata-context";
import { QuizMetadata } from "@/types/quiz-metadata";
import { usePathname } from "next/navigation";
import { memo, ReactNode, useEffect, useState } from "react";

type Props = Readonly<{
  children: ReactNode;
  quizMetadataList: QuizMetadata[];
}>;

const getQuizMetadata = (
  pathname: string,
  quizMetadataList: QuizMetadata[],
) => {
  const match = pathname.match(/^\/quiz\/([^/]+)\/?$/);

  return (
    match && (quizMetadataList.find((quiz) => match[1] === quiz.slug) ?? null)
  );
};

const QuizMetadataProvider = ({ quizMetadataList, children }: Props) => {
  const pathname = usePathname();

  const [quizMetadata, setQuizMetadata] = useState({
    quizMetadataList,
    quizMetadata: getQuizMetadata(pathname, quizMetadataList),
  });

  useEffect(() => {
    setQuizMetadata({
      quizMetadataList,
      quizMetadata: getQuizMetadata(pathname, quizMetadataList),
    });
  }, [pathname, quizMetadataList]);

  return (
    <QuizMetadataContext.Provider value={quizMetadata}>
      {children}
    </QuizMetadataContext.Provider>
  );
};

export default memo(QuizMetadataProvider);
