import clsx from "clsx";
import Image from "next/image";

interface IconButtonProps {
  icon?: React.ReactNode;
  iconSrc?: string;
  onClick: () => void;
  ariaLabel: string;
  className?: string;
}

const IconButton = ({
  icon,
  iconSrc,
  onClick,
  ariaLabel,
  className,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={clsx(
        "flex items-center justify-center rounded-full p-2 text-gray-700 transition-all hover:bg-gray-400/25 focus:outline-none focus:ring-2 focus:ring-blue-500",
        className,
      )}
    >
      {iconSrc && <Image src={iconSrc} alt={ariaLabel} />}

      {icon && icon}
    </button>
  );
};

export default IconButton;
