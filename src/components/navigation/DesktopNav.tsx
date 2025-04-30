import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { DarkModeToggle } from "../DarkModeToggle";
import { NAV_ITEMS } from "./NavigationItems";

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
          className="cursor-pointer hover:text-blue-500"
        >
          {item.label}
        </ScrollLink>
      ))}
      <DarkModeToggle />
    </div>
  );
};
