import { MdEmail } from "react-icons/md";
import {
  FaCertificate,
  FaFileDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
// Import without explicit type to avoid TypeScript error
import * as framerMotion from "framer-motion";
import { ScrollReveal } from "@/components/animations";
const { motion } = framerMotion;
// Define Variant type inline
type Variant = any;

interface ContactInfoProps {
  className?: string;
}

export default function ContactInfo({ className = "" }: ContactInfoProps) {
  // Staggered animation for items
  const container = {
    hidden: { opacity: 0 } as Variant,
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    } as Variant,
  };

  const item = {
    hidden: { opacity: 0, y: 10 } as Variant,
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    } as Variant,
  };

  return (
    <ScrollReveal direction="up" duration={0.7}>
      <div className={className}>
        <motion.div
          className="flex flex-col space-y-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="group flex items-center space-x-3 p-3.5 rounded-lg bg-zinc-50/90 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 dark:hover:border-primary-400/30"
            whileHover={{ scale: 1.01, x: 3 }}
          >
            <div className="bg-primary/10 dark:bg-primary-400/10 rounded-full p-2 text-center flex items-center justify-center">
              <MdEmail className="text-xl text-primary dark:text-primary-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-zinc-500 dark:text-zinc-500 font-medium">
                Email
              </span>
              <a
                href="mailto:paul.varde10@gmail.com"
                className="text-sm text-zinc-800 dark:text-zinc-200 hover:text-primary dark:hover:text-primary-400 transition-colors flex items-center gap-1.5 group-hover:gap-2"
              >
                paul.varde10@gmail.com
                <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="group flex items-center space-x-3.5 p-4 rounded-lg bg-zinc-50/90 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 dark:hover:border-primary-400/30"
            whileHover={{ scale: 1.01, x: 3 }}
          >
            <div className="bg-primary/10 dark:bg-primary-400/10 rounded-full p-2.5 text-center flex items-center justify-center">
              <FaCertificate className="text-xl text-primary dark:text-primary-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-zinc-500 dark:text-zinc-500 font-medium">
                Organization
              </span>
              <span className="text-sm text-zinc-800 dark:text-zinc-200 font-medium">
                JPCS T.I.P. QC Chapter
              </span>
              <span className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
                Junior Philippine Computer Society
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="group flex items-center space-x-3 p-3.5 rounded-lg bg-zinc-50/90 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/30 dark:hover:border-primary-400/30"
            whileHover={{ scale: 1.01, x: 3 }}
          >
            <div className="bg-primary/10 dark:bg-primary-400/10 rounded-full p-2 text-center flex items-center justify-center">
              <FaFileDownload className="text-xl text-primary dark:text-primary-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-zinc-500 dark:text-zinc-500 font-medium">
                Resume
              </span>
              <a
                href="/resume/Resume_Varde,John Paul.pdf"
                download="John_Paul_Varde_Resume.pdf"
                className="text-sm text-zinc-800 dark:text-zinc-200 hover:text-primary dark:hover:text-primary-400 transition-colors flex items-center gap-1.5 group-hover:gap-2"
              >
                Download Resume
                <FaFileDownload className="text-xs opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}
