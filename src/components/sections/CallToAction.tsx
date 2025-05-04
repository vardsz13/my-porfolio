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

      // Add the permanent shadow highlight
      targetElement.classList.add("shadow-highlight");
    }
  };

  return (
    <div className="p-8">
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h3 className="text-xl md:text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          {message}
        </h3>
        <Button asChild variant="default">
          <a href={buttonLink} onClick={handleClick}>
            {buttonText}
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
