type SingleAnswerChallenge = Readonly<{
  question: string;
  correctAnswer: string;
  incorrectAnswers: readonly string[];
}>;

export type QuizData = SingleAnswerChallenge[];
