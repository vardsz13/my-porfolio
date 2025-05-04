import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";
import { NAV_ITEMS } from "../../data/NavigationItems";

interface MobileNavProps {
  closeMenu: () => void;
}

/**
 * Mobile Navigation Component
 * Full-screen overlay menu for mobile devices
 */
export const MobileNav: React.FC<MobileNavProps> = ({ closeMenu }) => {
  // Add local state for dark mode
  const [darkMode, setDarkMode] = React.useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  // Create a separate toggle function just for the mobile menu
  const toggleDarkMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMode = !darkMode;
    setDarkMode(newMode);

    // Save preference to localStorage
    localStorage.setItem("darkMode", String(newMode));

    // Toggle dark class on html element
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="fixed inset-0 z-40 bg-white dark:bg-zinc-900 pt-20 px-6 md:hidden">
      <div className="flex flex-col space-y-6 items-center">
        {/* Map through navigation items with enhanced click handler */}
        {NAV_ITEMS.map((item) => (
          <ScrollLink
            key={item.to}
            to={item.to}
            smooth={true}
            duration={800}
            delay={100}
            offset={-80}
            spy={true}
            isDynamic={true}
            className="text-lg cursor-pointer hover:text-blue-500 transition-colors"
            onClick={closeMenu}
          >
            {item.label}
          </ScrollLink>
        ))}

        {/* Custom dark mode toggle specifically for mobile menu */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 mt-4"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <FiSun className="h-5 w-5 text-yellow-500" />
          ) : (
            <FiMoon className="h-5 w-5 text-zinc-600" />
          )}
        </button>
      </div>
    </div>
  );
};
