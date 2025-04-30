import React from "react";
import { Badge } from "../ui/badge";
// Import icons
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGit,
  FaPhp,
  FaTrello,
  FaTools,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiLaravel,
  SiFigma,
  SiFirebase,
  SiCanva,
} from "react-icons/si";

export default function TechStack() {
  const stack = {
    Frontend: [
      {
        name: "HTML5",
        icon: (
          <FaHtml5 className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "CSS3",
        icon: (
          <FaCss3Alt className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <SiJavascript className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "React",
        icon: (
          <FaReact className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <SiTypescript className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <SiTailwindcss className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
    ],
    Backend: [
      {
        name: "PHP",
        icon: (
          <FaPhp className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "Laravel",
        icon: (
          <SiLaravel className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "SQL",
        icon: (
          <SiPostgresql className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
    ],
    Databases: [
      {
        name: "MySQL",
        icon: (
          <SiMysql className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "PostgreSQL",
        icon: (
          <SiPostgresql className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "Firebase",
        icon: (
          <SiFirebase className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
    ],
    "Design & Development Tools": [
      {
        name: "Figma",
        icon: (
          <SiFigma className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "Git",
        icon: (
          <FaGit className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "Canva",
        icon: (
          <SiCanva className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "GitHub",
        icon: (
          <FaGithub className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
      {
        name: "Trello",
        icon: (
          <FaTrello className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
        ),
      },
    ],
  };

  return (
    <section id="tech-stack" className="py-1">
      <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-shadow duration-300 hover:shadow-md">
        {/* Card Header with Icon */}
        <div className="p-6 pb-0">
          <div className="flex items-center gap-2 mb-4">
            <FaTools className="h-5 w-5 text-black dark:text-white" />
            <h2 className="text-xl font-semibold">Tech Stack</h2>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 pt-0">
          <div className="space-y-4">
            {Object.entries(stack).map(([category, technologies]) => (
              <div key={category} className="space-y-2">
                <h3 className="text-lg font-medium pb-1 border-b border-zinc-200 dark:border-zinc-700">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech.name}
                      variant="outline"
                      className="px-3 py-1 text-sm font-medium flex items-center border-zinc-300 dark:border-zinc-600 
                      bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 
                      transition-colors cursor-pointer text-black dark:text-white"
                    >
                      {tech.icon} {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
