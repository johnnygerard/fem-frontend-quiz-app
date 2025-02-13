import { memo } from "react";
import { ProgressBar } from "react-aria-components";

type Props = Readonly<{
  percentage: number;
}>;

const QuizProgressBar = ({ percentage }: Props) => {
  return (
    <ProgressBar
      className="h-4 w-full rounded-full bg-white p-1 dark:bg-navy"
      aria-label="Quiz progress"
      value={percentage}
    >
      {/* Fill inside the track */}
      <div
        className="h-full rounded-full bg-purple"
        style={{ width: `${percentage}%` }}
      />
    </ProgressBar>
  );
};

export default memo(QuizProgressBar);
