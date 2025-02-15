import { QuizMetadata } from "@/types/quiz-metadata";
import { createContext } from "react";

export const QuizMetadataContext = createContext<
  | {
      quizMetadata: QuizMetadata | null;
      setQuizMetadata: (quizMetadata: QuizMetadata | null) => void;
    }
  | undefined
>(undefined);
