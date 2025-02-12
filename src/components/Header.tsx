"use client";
import { ChevronLeft, ChevronRight, LogoWhite, LogoBlack } from "./ui/icons";
import IconButton from "./ui/IconButton";
import { BaseSurveyQuestion } from "../types/survey";
import { useSurveyNavigation } from "../hooks/useSurveyNavigation";
import { useParams } from "next/navigation";
import clsx from "clsx";

interface HeaderProps {
  question: BaseSurveyQuestion;
}

const Header = ({ question }: HeaderProps) => {
  const { id } = useParams();
  const { handleNext, handlePrevious, isAnswered, hasPrevious } =
    useSurveyNavigation(question);

  const isSurveyStarted = !!id;
  const navButtonsClsx = clsx(
    { ["fill-white"]: !isSurveyStarted },
    { ["fill-black"]: isSurveyStarted },
  );
  return (
    <header className="flex w-full items-center justify-between bg-transparent px-4 py-8 lg:px-40">
      <IconButton
        disabled={!hasPrevious}
        className={navButtonsClsx}
        onClick={handlePrevious}
        icon={<ChevronLeft />}
        ariaLabel="Previous Question"
      />

      {isSurveyStarted ? <LogoBlack /> : <LogoWhite />}

      <IconButton
        disabled={!isAnswered}
        icon={<ChevronRight />}
        onClick={handleNext}
        className={navButtonsClsx}
        ariaLabel="Next Question"
      />
    </header>
  );
};

export default Header;
