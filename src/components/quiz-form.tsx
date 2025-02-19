import AppButton from "@/components/app-button";
import QuizAnswer from "@/components/quiz-answer";
import IconCross from "@/components/svg/icon-cross";
import Text from "@/components/text";
import { cn } from "@/utils/cn";
import { memo, useState } from "react";
import { FieldError, Form, RadioGroup } from "react-aria-components";

type Props = Readonly<{
  answers: readonly string[];
  correctAnswer: string;
  handleSubmission: (answer?: string) => void;
  isLastQuestion: boolean;
  isReadOnly: boolean;
  formKey: number;
}>;

const QuizForm = ({
  answers,
  correctAnswer,
  handleSubmission,
  isLastQuestion,
  isReadOnly,
  formKey,
}: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  return (
    <Form
      key={formKey}
      className="relative mb-11 tb:mb-18"
      onSubmit={(event) => {
        event.preventDefault();

        if (isReadOnly) {
          setSelectedAnswer(null);
          handleSubmission();
          return;
        }

        if (selectedAnswer === null) throw new Error("Impossible state");
        handleSubmission(selectedAnswer);
      }}
    >
      <RadioGroup
        className="flex flex-col gap-3 tb:gap-6"
        aria-label="Quiz Answers"
        isRequired
        isReadOnly={isReadOnly}
        value={selectedAnswer}
        onChange={setSelectedAnswer}
      >
        {answers.map((answer, index) => (
          <QuizAnswer
            key={`${correctAnswer}-${answer}-${index}`}
            index={index}
            answer={answer}
            isCorrect={answer === correctAnswer}
            isReadOnly={isReadOnly}
          />
        ))}
        <FieldError
          className={cn(
            "absolute bottom-0 flex items-center gap-2",
            "left-1/2 min-w-max -translate-x-1/2",
            "translate-y-[calc(100%+3*var(--spacing))] tb:translate-y-[calc(100%+8*var(--spacing))]",
          )}
        >
          {({ validationDetails }) => (
            <>
              <IconCross />
              <Text variant="error" className="animate-fade-in">
                {validationDetails.valueMissing
                  ? "Please select an answer"
                  : ""}
              </Text>
            </>
          )}
        </FieldError>
      </RadioGroup>
      <AppButton className="mt-3 tb:mt-8" type="submit">
        {isReadOnly
          ? isLastQuestion
            ? "View Score"
            : "Next Question"
          : "Submit Answer"}
      </AppButton>
    </Form>
  );
};

export default memo(QuizForm);
