import { QuizMetadata } from "@/types/quiz-metadata";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";

export const readQuizMetadata = async (): Promise<QuizMetadata[]> => {
  const path = join(cwd(), "data/quiz-metadata.json");
  const json = await readFile(path, "utf8");

  return JSON.parse(json);
};
