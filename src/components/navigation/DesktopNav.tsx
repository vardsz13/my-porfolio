import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { DarkModeToggle } from "../DarkModeToggle";
import { NAV_ITEMS } from "../../data/NavigationItems";

/**
 * Desktop Navigation Component
 * Horizontal menu items for larger screens
 */
export const DesktopNav: React.FC = () => {
  return (
    <div className="hidden md:flex gap-4 items-center">
      {/* Map through navigation items */}
      {NAV_ITEMS.map((item) => (
        <ScrollLink
          key={item.to}
          to={item.to}
          smooth={true}
          duration={800}
          offset={-80}
          spy={true}
          hashSpy={true}
          activeClass="text-indigo-500 font-medium"
          className="cursor-pointer hover:text-indigo-500 transition-colors duration-300"
          isDynamic={true}
        >
          {item.label}
        </ScrollLink>
      ))}
      <DarkModeToggle />
    </div>
  );
};
