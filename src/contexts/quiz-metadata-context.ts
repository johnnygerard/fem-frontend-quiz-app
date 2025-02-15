import { QuizMetadata } from "@/types/quiz-metadata";
import { createContext } from "react";

export const QuizMetadataContext = createContext<
  | {
      quizMetadataList: QuizMetadata[];
      quizMetadata: QuizMetadata | null;
    }
  | undefined
>(undefined);
