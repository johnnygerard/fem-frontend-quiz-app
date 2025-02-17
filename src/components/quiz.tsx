"use client";
import QuizChallenge from "@/components/quiz-challenge";
import QuizForm from "@/components/quiz-form";
import QuizScore from "@/components/quiz-score";
import Text from "@/components/text";
import { QuizData } from "@/types/quiz-data";
import { cn } from "@/utils/cn";
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
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(firstChallenge.answers);
  const [correctAnswer, setCorrectAnswer] = useState(
    firstChallenge.correctAnswer,
  );
  const [isReadOnly, setIsReadOnly] = useState(false);
  // This key is used as a workaround to force a remount of the quiz form to fix
  // multiple focus issues.
  const [formKey, setFormKey] = useState(0);
  const totalQuestions = challenges.length;

  const handleSubmission = (answer?: string): void => {
    if (isReadOnly) {
      const nextIndex = questionIndex + 1;

      if (nextIndex === totalQuestions) {
        setShowScore(true);
        return;
      }

      const { correctAnswer, incorrectAnswers } = challenges[nextIndex];

      setQuestionIndex(nextIndex);
      setCorrectAnswer(correctAnswer);
      setAnswers(shuffle([correctAnswer, ...incorrectAnswers]));
      setFormKey((value) => value + 1);
    } else {
      setProgressPercentage(((questionIndex + 1) / totalQuestions) * 100);
      if (answer === correctAnswer) setScore((value) => value + 1);
    }

    setIsReadOnly((value) => !value);
  };

  return (
    <div
      className={cn(
        "flex max-dt:flex-col dt:justify-between",
        "gap-10 tb:gap-16 dt:gap-0",
      )}
    >
      {showScore ? (
        <h2 className="flex flex-col gap-2">
          <Text variant="xl">Quiz completed</Text>
          <Text variant="xl-bold">You scored...</Text>
        </h2>
      ) : (
        <QuizChallenge
          progressPercentage={progressPercentage}
          question={challenges[questionIndex].question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
        />
      )}
      <div className="dt:w-141">
        {showScore ? (
          <QuizScore score={score} totalQuestions={totalQuestions} />
        ) : (
          <QuizForm
            answers={answers}
            correctAnswer={correctAnswer}
            isLastQuestion={questionIndex === totalQuestions - 1}
            isReadOnly={isReadOnly}
            handleSubmission={handleSubmission}
            formKey={formKey}
          />
        )}
      </div>
    </div>
  );
};

export default memo(Quiz);
