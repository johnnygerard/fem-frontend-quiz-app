import Text from "@/components/text";
import ThemeSwitcher from "@/components/theme-switcher";
import Image from "next/image";
import { memo } from "react";

type Props = Readonly<{
  quiz?: {
    title: string;
    icon: string;
  };
}>;

const Header = ({ quiz }: Props) => {
  return (
    <header className="flex justify-between">
      {quiz ? (
        <h1 className="tb:gap-6 flex items-center gap-4">
          <Image
            aria-hidden="true"
            className="tb:h-14 tb:w-14 h-10 w-10"
            src={quiz.icon}
            width="40"
            height="40"
            priority
            unoptimized
            alt=""
          />
          <Text>{quiz.title}</Text>
        </h1>
      ) : (
        // Layout placeholder
        <div aria-hidden="true" className="tb:h-14 h-10" />
      )}
      <ThemeSwitcher />
    </header>
  );
};

export default memo(Header);
