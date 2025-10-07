import { ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  once?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5, // Reduced from 0.7 for better mobile performance
  className = "",
  distance = 20, // Reduced from 30 for better mobile performance
  once = true,
  threshold = 0.1,
}: ScrollRevealProps) {
  // Calculate initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "none":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  // Final position (fully visible)
  const finalPosition = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  // Improved cubic-bezier easing for smoother animations
  const customEasing = [0.215, 0.61, 0.355, 1];

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={finalPosition}
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: customEasing,
      }}
      data-scroll-reveal
    >
      {children}
    </motion.div>
  );
}
