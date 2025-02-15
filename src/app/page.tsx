import QuizList from "@/components/quiz-list";
import { readQuizMetadata } from "@/utils/read-quiz-metadata";
import { memo } from "react";

const Page = async () => {
  const metadata = await readQuizMetadata();

  return <QuizList list={metadata} />;
};

export default memo(Page);
