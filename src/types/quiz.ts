export type Quiz = Readonly<{
  title: string;
  icon: string;
  challenges: readonly SingleAnswerChallenge[];
}>;

type SingleAnswerChallenge = Readonly<{
  question: string;
  answer: string;
  badAnswers: readonly string[];
}>;
