import QuizList from "@/components/quiz-list";
import { readQuizMetadataList } from "@/utils/read-quiz-metadata-list";
import { memo } from "react";

const Page = async () => {
  const metadata = await readQuizMetadataList();

  return <QuizList list={metadata} />;
};

export default memo(Page);
