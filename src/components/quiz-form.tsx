import AppButton from "@/components/app-button";
import QuizAnswer from "@/components/quiz-answer";
import IconCross from "@/components/svg/icon-cross";
import Text from "@/components/text";
import { cn } from "@/utils/cn";
import { memo } from "react";
import { FieldError, Form, RadioGroup } from "react-aria-components";

type Props = Readonly<{
  answers: readonly string[];
  correctAnswer: string;
  handleSubmission: () => void;
  isReadOnly: boolean;
  formKey: number;
}>;

const QuizForm = ({
  answers,
  correctAnswer,
  handleSubmission,
  isReadOnly,
  formKey,
}: Props) => {
  return (
    <Form
      key={formKey}
      className="relative mb-11 tb:mb-18"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmission();
      }}
    >
      <RadioGroup
        className="flex flex-col gap-3 tb:gap-6"
        aria-label="Quiz Answers"
        isRequired
        isReadOnly={isReadOnly}
      >
        {answers.map((answer, index) => (
          <QuizAnswer
            key={index}
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
              <Text variant="error">
                {validationDetails.valueMissing
                  ? "Please select an answer"
                  : ""}
              </Text>
            </>
          )}
        </FieldError>
      </RadioGroup>
      <AppButton className="mt-3 tb:mt-8" type="submit">
        {isReadOnly ? "Next Question" : "Submit Answer"}
      </AppButton>
    </Form>
  );
};

export default memo(QuizForm);
