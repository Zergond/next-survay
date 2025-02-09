import clsx from "clsx";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, className = "", onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "text-purple rounded-xl bg-white px-6 py-3 text-lg font-normal shadow-md transition-colors duration-300",
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
