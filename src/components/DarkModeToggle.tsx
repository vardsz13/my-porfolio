import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Check for user's preferred theme or saved preference on load
  useEffect(() => {
    // First check localStorage
    const savedPreference = localStorage.getItem("darkMode");

    // If we have a saved preference, use that
    if (savedPreference !== null) {
      const isDark = savedPreference === "true";
      setDarkMode(isDark);

      // Apply the saved preference
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    // Otherwise, use system preference
    else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);

      // Apply the system preference
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
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
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <FiSun className="h-5 w-5 text-yellow-500" />
      ) : (
        <FiMoon className="h-5 w-5 text-zinc-600" />
      )}
    </button>
  );
};
