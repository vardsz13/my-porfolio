import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggeredCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  dataAttributes?: Record<string, string>; // For any data attributes
  withOverlay?: boolean; // Option to add gradient overlay
}

export default function StaggeredCard({
  children,
  className = "",
  onClick,
  dataAttributes = {},
  withOverlay = false,
}: StaggeredCardProps) {
  // Spring animation for hover effect
  const springTransition = {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 0.8,
  };

  // Create data attributes object for spreading
  const dataProps = Object.entries(dataAttributes).reduce(
    (acc, [key, value]) => {
      acc[`data-${key}`] = value;
      return acc;
    },
    {} as Record<string, string>
  );

  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{
        y: -5,
        transition: springTransition,
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      {...dataProps}
    >
      {children}
      {withOverlay && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      )}
    </motion.div>
  );
}
