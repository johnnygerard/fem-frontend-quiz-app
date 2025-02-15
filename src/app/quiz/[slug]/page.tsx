import Quiz from "@/components/quiz";
import { QuizData } from "@/types/quiz-data";
import { QuizMetadata } from "@/types/quiz-metadata";
import { shuffle } from "@/utils/shuffle";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { memo } from "react";

export const dynamicParams = false;

const readQuizMetadata = async (): Promise<QuizMetadata[]> => {
  const path = join(cwd(), "data/quiz-metadata.json");
  const json = await readFile(path, "utf8");

  return JSON.parse(json);
};

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  return (await readQuizMetadata()).map(({ slug }) => ({ slug }));
};

type Props = Readonly<{
  params: Promise<{ slug: string }>;
}>;

const Page = async ({ params }: Props) => {
  const slug = (await params).slug;
  const metadata = (await readQuizMetadata()).find(
    (metadata) => metadata.slug === slug,
  );

  if (metadata === undefined) throw new Error("Quiz not found");

  const json = await readFile(join(cwd(), metadata.data), "utf8");
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
