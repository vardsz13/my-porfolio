import React from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectData } from "@/types/ProjectData";

/**
 * Projects Section Component
 * Displays a collection of projects in a responsive grid
 */
export const Projects: React.FC = () => {
  // Sample project data - replace with your actual projects
  const projects: ProjectData[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/images/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoUrl: "https://example.com/demo",
      codeUrl: "https://github.com/yourusername/ecommerce",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description:
        "Real-time weather application using OpenWeather API and React",
      image: "/images/projects/weather.jpg",
      tags: ["React", "API Integration", "Tailwind CSS"],
      demoUrl: "https://example.com/weather-demo",
      codeUrl: "https://github.com/yourusername/weather-app",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity tool for managing tasks and projects",
      image: "/images/projects/taskapp.jpg",
      tags: ["TypeScript", "React", "Firebase"],
      demoUrl: "https://example.com/task-demo",
      codeUrl: "https://github.com/yourusername/task-app",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10">
          A selection of my recent work and personal projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
