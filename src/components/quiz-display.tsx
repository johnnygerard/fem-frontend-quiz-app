import Text from "@/components/text";
import { QuizMetadata } from "@/types/quiz-metadata";
import Image from "next/image";
import { memo } from "react";

type Props = Readonly<{
  quizMetadata: QuizMetadata | null;
}>;

const QuizDisplay = ({ quizMetadata }: Props) => {
  return quizMetadata ? (
    <>
      <Image
        aria-hidden="true"
        className="h-10 w-10 tb:h-14 tb:w-14"
        src={`/image/icon/${quizMetadata.slug}.svg`}
        width="40"
        height="40"
        unoptimized
        alt=""
      />
      <Text>{quizMetadata.title}</Text>
    </>
  ) : (
    // Layout placeholder
    <div aria-hidden="true" className="h-10 tb:h-14" />
  );
};

export default memo(QuizDisplay);
