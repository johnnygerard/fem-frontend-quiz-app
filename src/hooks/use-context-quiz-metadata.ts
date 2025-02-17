import { QuizMetadataContext } from "@/contexts/quiz-metadata-context";
import { useContext } from "react";

export const useContextQuizMetadata = () => {
  const context = useContext(QuizMetadataContext);

  if (context === undefined) throw new Error("Context provider not found");
  return context;
};
