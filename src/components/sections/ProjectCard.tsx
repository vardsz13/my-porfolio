import React from "react";
import { ProjectData } from "@/types/ProjectData";

interface ProjectCardProps {
  project: ProjectData;
}

/**
 * Project Card Component
 * Displays individual project information
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Project Image */}
      <div className="aspect-video w-full relative bg-zinc-100 dark:bg-zinc-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-400">
            No image available
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Live Demo
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium rounded-md border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
