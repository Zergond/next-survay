import clsx from "clsx";

interface IconButtonProps {
  disabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
}

const IconButton = ({
  disabled = false,
  icon,
  onClick,
  ariaLabel,
  className,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={clsx(
        "flex items-center justify-center rounded-full p-2 text-gray-700 transition-all hover:bg-gray-400/25",
        { "pointer-events-none !fill-gray-400": disabled },
        className,
      )}
    >
      {icon && icon}
    </button>
  );
};

export default IconButton;
