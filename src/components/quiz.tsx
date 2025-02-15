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
  challenges: QuizData;
}>;

const Quiz = ({ firstChallenge, challenges }: Props) => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(firstChallenge.answers);
  const [correctAnswer, setCorrectAnswer] = useState(
    firstChallenge.correctAnswer,
  );
  const [isReadOnly, setIsReadOnly] = useState(false);
  // This key is used as a workaround to force a remount of the quiz form to fix
  // multiple focus issues.
  const [formKey, setFormKey] = useState(0);

  const handleSubmission = (answer?: string): void => {
    if (isReadOnly) {
      const nextIndex = questionIndex + 1;

      if (nextIndex === challenges.length) {
        setShowScore(true);
        return;
      }

      const { correctAnswer, incorrectAnswers } = challenges[nextIndex];

      setQuestionIndex(nextIndex);
      setCorrectAnswer(correctAnswer);
      setAnswers(shuffle([correctAnswer, ...incorrectAnswers]));
      setFormKey((value) => value + 1);
    } else if (answer === correctAnswer) setScore((value) => value + 1);

    setIsReadOnly((value) => !value);
  };

  return (
    <div>
      {showScore ? (
        `Score: ${score}/${challenges.length}`
      ) : (
        <QuizForm
          answers={answers}
          correctAnswer={correctAnswer}
          isReadOnly={isReadOnly}
          handleSubmission={handleSubmission}
          formKey={formKey}
        />
      )}
    </div>
  );
};

export default memo(Quiz);
