import clsx from "clsx";
import React from "react";

interface ButtonProps {
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ active, children, className = "", onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "rounded-xl bg-white px-6 py-3 text-lg font-normal text-black shadow-md transition-colors duration-300 hover:bg-violet-100",
        { ["bg-purple-gradient text-white"]: active },
        className,
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
