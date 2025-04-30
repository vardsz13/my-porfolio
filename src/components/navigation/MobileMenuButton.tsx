import React from "react";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

/**
 * Mobile Menu Button Component
 * Hamburger icon that transforms to X when menu is open
 */
export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return (
    <button
      className="md:hidden flex items-center"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12" // X icon
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16" // Hamburger icon
          />
        )}
      </svg>
    </button>
  );
};
