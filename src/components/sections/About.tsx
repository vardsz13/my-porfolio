import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaUser } from "react-icons/fa";

interface AboutProps {
  title?: string;
  description?: string[];
}

/**
 * About Section Component
 * Displays personal information in a clean card format
 * Uses shadcn/ui Card components for consistency
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
    <Card id="about" className="scroll-mt-20">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="text-xl text-primary dark:text-primary-400">
            <FaUser aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {description.map((paragraph, index) => (
          <p
            key={index}
            className="mb-4 text-zinc-700 dark:text-zinc-300 last:mb-0"
          >
            {paragraph}
          </p>
        ))}
      </CardContent>
    </Card>
  );
};

export default About;
