import { memo } from "react";
import { ProgressBar } from "react-aria-components";

type Props = Readonly<{
  percentage: number;
}>;

const QuizProgressBar = ({ percentage }: Props) => {
  return (
    <ProgressBar
      className="dark:bg-navy h-4 w-full rounded-full bg-white p-1"
      aria-label="Quiz progress"
      value={percentage}
    >
      {/* Fill inside the track */}
      <div
        className="bg-purple h-full rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </ProgressBar>
  );
};

export default memo(QuizProgressBar);
