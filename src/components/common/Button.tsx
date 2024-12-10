'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant: 'solid' | 'outline' | 'text';
  light?: boolean;
}
export default function Button(props: ButtonProps) {
  const { text, onClick, variant, light } = props;

  const getButtonClasses = () => {
    const bgClass =
      variant === 'outline' || variant === 'text'
        ? 'bg-transparent'
        : light
          ? 'bg-lightBlueBase'
          : 'bg-darkBase';
    const textClass =
      variant === 'outline' || variant === 'text'
        ? light
          ? 'text-lightBase'
          : 'text-darkBase'
        : light
          ? 'text-darkBase'
          : 'text-lightBase';
    const borderClass =
      variant === 'outline'
        ? light
          ? 'border border-lightBase'
          : 'border border-darkBase'
        : '';
    const hoverClass =
      (variant === 'outline' && light) || (variant === 'text' && light)
        ? 'hover:bg-lightBase hover:text-darkBase'
        : 'hover:bg-darkBase hover:text-lightBase';

    return ` ${bgClass} ${textClass} ${borderClass} ${hoverClass}`;
  };

  return (
    <button
      className={`duration-500" group relative flex flex-row items-center justify-between gap-2 rounded-lg p-2 text-center text-sm transition-all md:text-base 2xl:text-xl ${getButtonClasses()}`}
      onClick={onClick}
    >
      {text}
      <span className="relative block h-full w-4">
        <FontAwesomeIcon
          icon={faAngleRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-100 transition-opacity duration-500 ease-in-out group-hover:opacity-0"
        />
        <FontAwesomeIcon
          icon={faArrowRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
        />
      </span>
    </button>
  );
}
