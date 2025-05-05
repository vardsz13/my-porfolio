import React from "react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

/**
 * Mobile Menu Button Component
 * Hamburger icon that transforms to X when menu is open
 * With smooth transition animation
 */
export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <span
          className={`block h-0.5 w-6 bg-current rounded-sm transition-all duration-300 ease-out absolute ${
            isOpen ? "rotate-45" : "transform -translate-y-1.5"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current rounded-sm transition-all duration-300 ease-out absolute ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current rounded-sm transition-all duration-300 ease-out absolute ${
            isOpen ? "-rotate-45" : "transform translate-y-1.5"
          }`}
        />
      </div>
    </button>
  );
};
