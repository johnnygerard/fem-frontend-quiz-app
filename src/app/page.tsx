import QuizList from "@/components/quiz-list";
import Text from "@/components/text";
import { cn } from "@/utils/cn";
import { readQuizMetadataList } from "@/utils/read-quiz-metadata-list";
import { memo } from "react";

const Page = async () => {
  const metadata = await readQuizMetadataList();

  return (
    <div
      className={cn(
        "mt-12 dt:mt-21",
        "flex justify-between gap-10 max-dt:flex-col tb:gap-16 dt:gap-0",
      )}
    >
      <hgroup>
        <h1 className="flex flex-col gap-2">
          <Text variant="xl">Welcome to the</Text>
          <Text variant="xl-bold">Frontend Quiz!</Text>
        </h1>
        <p className="mt-4 dt:mt-12">
          <Text variant="sm">Pick a subject to get started.</Text>
        </p>
      </hgroup>
      <div className="dt:w-141">
        <QuizList list={metadata} />
      </div>
    </div>
  );
};

export default memo(Page);
