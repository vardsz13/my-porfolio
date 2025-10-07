import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay before animation starts
  staggerDelay?: number; // Delay between each child animation
  direction?: "forward" | "backward"; // Animation direction
  duration?: number; // Animation duration
  ease?: [number, number, number, number] | string; // Animation easing
  once?: boolean; // Whether to animate only once
  amount?: number | "some" | "all"; // Amount of element visible before animation starts
}

export default function StaggerContainer({
  children,
  className = "",
  delay = 0.15,
  staggerDelay = 0.1,
  direction = "forward",
  duration = 0.5,
  ease = [0.215, 0.61, 0.355, 1], // Improved easing (cubic-bezier)
  once = true,
  amount = 0.3,
}: StaggerContainerProps) {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        staggerDirection: direction === "forward" ? 1 : -1,
        delayChildren: delay,
        ease: ease,
      },
    },
  };

  // Child animation variants
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: ease,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={containerVariants}
      data-stagger-container
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants} data-stagger-item>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants} data-stagger-item>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
