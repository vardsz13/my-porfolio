import React, { useState, useEffect } from "react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { MobileMenuButton } from "./MobileMenuButton";
import Logo from "@/assets/logo/black-logo.png"; // Rename the import to Logo

/**
 * Navigation Bar Component
 * Responsive navigation with mobile and desktop views
 */
export const NavBar: React.FC = () => {
  // State to track if mobile menu is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu (used when a link is clicked)
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      // Disable scrolling on body when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = "";
    }

    // Cleanup function to ensure scrolling is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm z-50 py-4 px-6 flex justify-center border-b border-zinc-200 dark:border-zinc-800">
        <div className="w-full max-w-5xl flex justify-between items-center">
          {/* Logo/Title with image */}
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Portfolio Logo"
              width={30}
              height={30}
              className="rounded-md"
            />
            <h2 className="font-bold text-xl">Portfolio</h2>
          </div>

          {/* Mobile Menu Toggle Button - Only visible on small screens */}
          <MobileMenuButton
            isOpen={mobileMenuOpen}
            onClick={toggleMobileMenu}
          />

          {/* Desktop Navigation - Hidden on mobile */}
          <DesktopNav />
        </div>
      </nav>

      {/* Mobile Navigation Menu - Only appears when menu is open */}
      {mobileMenuOpen && <MobileNav closeMenu={closeMenu} />}
    </>
  );
};

export default NavBar;
