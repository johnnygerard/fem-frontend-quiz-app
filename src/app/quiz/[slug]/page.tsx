import Quiz from "@/components/quiz";
import { QuizData } from "@/types/quiz-data";
import { readQuizMetadataList } from "@/utils/read-quiz-metadata-list";
import { shuffle } from "@/utils/shuffle";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { memo } from "react";

// Dynamic segments not included in generateStaticParams will return a 404.
export const dynamicParams = false;

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  return (await readQuizMetadataList()).map(({ slug }) => ({ slug }));
};

type Props = Readonly<{
  params: Promise<{ slug: string }>;
}>;

const Page = async ({ params }: Props) => {
  const slug = (await params).slug;
  const metadata = (await readQuizMetadataList()).find(
    (metadata) => metadata.slug === slug,
  );

  if (metadata === undefined) throw new Error("Quiz not found");

  const path = join(cwd(), `data/quiz/${slug}.json`);
  const json = await readFile(path, "utf8");
  const challenges = shuffle(JSON.parse(json) as QuizData);
  const { correctAnswer, incorrectAnswers } = challenges[0];

  return (
    <div>
      <Quiz
        firstChallenge={{
          correctAnswer,
          answers: shuffle([correctAnswer, ...incorrectAnswers]),
        }}
        challenges={challenges}
      />
    </div>
  );
};

export default memo(Page);
