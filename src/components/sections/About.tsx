import React from "react";

interface AboutProps {
  title?: string;
  description?: string[];
}

/**
 * About Section Component
 * Displays personal information in a clean card format
 * Shows shadow effect only on hover
 */
export const About: React.FC<AboutProps> = ({
  title = "About Me",
  description = [
    "I am a passionate Front-End Developer and UI/UX Designer with a keen eye for detail and a commitment to creating intuitive, user-friendly interfaces.",
    "With experience in modern web technologies, I focus on building responsive, accessible websites that provide exceptional user experiences across all devices.",
    "I enjoy solving complex problems and continuously learning to stay updated with the latest industry trends and best practices.",
  ],
}) => {
  return (
    <section id="about" className="py-1">
      <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-shadow duration-300 hover:shadow-md">
        {/* Card Header with Icon */}
        <div className="p-6 pb-0">
          <div className="flex items-center gap-2 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-zinc-700 dark:text-zinc-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 pt-0">
          {description.map((paragraph, index) => (
            <p
              key={index}
              className="mb-4 text-zinc-700 dark:text-zinc-300 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
