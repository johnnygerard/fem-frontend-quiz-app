import Text from "@/components/text";
import { QuizMetadata } from "@/types/quiz-metadata";
import Image from "next/image";
import { memo } from "react";

type Props = Readonly<{
  quizMetadata: QuizMetadata;
}>;

const QuizDisplay = ({ quizMetadata }: Props) => {
  return (
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
  );
};

export default memo(QuizDisplay);
