import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-zinc-900 text-white dark:bg-zinc-700 dark:text-zinc-100 shadow-lg
      hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white
      transition-all cursor-pointer border-2 border-transparent hover:border-primary"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  ) : null;
};

export default ScrollToTopButton;
