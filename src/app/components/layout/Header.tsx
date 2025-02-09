"use client";

import IconButton from "../ui/IconButton";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, Logo } from "../ui/icons";

interface HeaderProps {
  handleNext?: () => void;
  handlePrevious?: () => void;
}

const Header = ({ handleNext, handlePrevious }: HeaderProps) => {
  const renderNavButtons = !!handleNext && !!handlePrevious;

  return (
    <header
      className={clsx(
        "flex w-full items-center bg-transparent py-8",
        { "justify-center": !renderNavButtons },
        { "justify-between": renderNavButtons },
      )}
    >
      {renderNavButtons && (
        <IconButton
          className={clsx({})}
          icon={ChevronLeft}
          onClick={handlePrevious}
          ariaLabel="Previous Question"
        />
      )}

      <Logo />

      {renderNavButtons && (
        <IconButton
          icon={ChevronRight}
          onClick={handleNext}
          ariaLabel="Next Question"
        />
      )}
    </header>
  );
};

export default Header;
