"use client";
import QuizForm from "@/components/quiz-form";
import { QuizData } from "@/types/quiz-data";
import { shuffle } from "@/utils/shuffle";
import { memo, useState } from "react";

type Props = Readonly<{
  firstChallenge: {
    correctAnswer: string;
    answers: string[];
  };
  challenges: QuizData["challenges"];
}>;

const Quiz = ({ firstChallenge, challenges }: Props) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(firstChallenge.answers);
  const [correctAnswer, setCorrectAnswer] = useState(
    firstChallenge.correctAnswer,
  );
  const [isReadOnly, setIsReadOnly] = useState(false);

  const handleSubmission = () => {
    if (isReadOnly) {
      const nextIndex = questionIndex + 1;
      const nextChallenge = challenges[nextIndex];

      setQuestionIndex(nextIndex);
      setCorrectAnswer(nextChallenge.answer);
      setAnswers(shuffle([nextChallenge.answer, ...nextChallenge.badAnswers]));
    }

    setIsReadOnly((value) => !value);
  };

  return (
    <div>
      <QuizForm
        answers={answers}
        correctAnswer={correctAnswer}
        isReadOnly={isReadOnly}
        handleSubmission={handleSubmission}
      />
    </div>
  );
};

export default memo(Quiz);
