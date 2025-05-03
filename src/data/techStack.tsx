import React from "react";
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
import { TechStackData } from "@/types/techStack";

export const techStack: TechStackData = {
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
      icon: <FaPhp className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />,
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
      icon: <FaGit className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />,
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
