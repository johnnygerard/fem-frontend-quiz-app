export type QuizData = Readonly<{
  title: string;
  icon: string;
  challenges: SingleAnswerChallenge[];
}>;

type SingleAnswerChallenge = Readonly<{
  question: string;
  answer: string;
  badAnswers: string[];
}>;
