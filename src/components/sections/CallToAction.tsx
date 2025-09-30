import React from "react";
import { Button } from "@/components/ui/button";
import { callToActionData } from "@/data/callToAction";
import { CallToActionData } from "@/types/callToAction";

interface CallToActionProps {
  data?: CallToActionData;
}

const CallToAction: React.FC<CallToActionProps> = ({
  data = callToActionData,
}) => {
  const { message, buttonText, buttonLink } = data;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Get the target element
    const targetId = buttonLink.substring(1); // Remove the # symbol
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll to the element smoothly
      targetElement.scrollIntoView({ behavior: "smooth" });

      // First remove any existing highlight from other elements
      document.querySelectorAll(".shadow-highlight").forEach((el) => {
        el.classList.remove("shadow-highlight");
      });

      // Add the enhanced shadow highlight
      targetElement.classList.add("shadow-highlight");

      // Add a subtle entrance animation to draw attention
      targetElement.classList.add("animate-entrance");

      // Optional: Remove the entrance animation after it completes
      setTimeout(() => {
        targetElement.classList.remove("animate-entrance");
      }, 1000);
    }
  };

  return (
    <div className="p-8">
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h3 className="text-xl md:text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          {message}
        </h3>
        <Button
          asChild
          variant="default"
          className="relative group overflow-hidden transition-all duration-500 transform hover:scale-105 group-hover:pulse-glow"
        >
          <a
            href={buttonLink}
            onClick={handleClick}
            className="relative z-10 px-8 py-3 flex items-center gap-2 font-bold"
          >
            <span className="relative z-10 flex items-center gap-2">
              {buttonText}
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                →
              </span>
            </span>
            <span
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x"
              style={{ zIndex: -1 }}
            ></span>
            <span className="absolute top-0 left-0 w-full h-full bg-white/20 dark:bg-white/10 transform -skew-x-12 translate-x-full group-hover:translate-x-[-180%] transition-transform duration-700"></span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
            <span className="absolute top-0 right-0 h-[2px] w-8 bg-white/70 transform rotate-45 translate-y-[-5px] translate-x-[5px] group-hover:animate-pulse"></span>
            <span className="absolute bottom-0 left-0 h-[2px] w-8 bg-white/70 transform rotate-45 translate-y-[5px] translate-x-[-5px] group-hover:animate-pulse"></span>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
