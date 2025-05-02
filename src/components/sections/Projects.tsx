import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface Project {
  id: string; // Add ID for routing
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  modules?: {
    title: string;
    description?: string;
    imageUrl?: string;
  }[];
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md">
          <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-300" />
        </div>
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            {project.imageUrl && (
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex gap-3">
              {project.githubUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    <span>Code</span>
                  </a>
                </Button>
              )}

              <Button variant="default" size="sm" asChild>
                <Link
                  to={`/project/${project.id}`}
                  className="flex items-center"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  <span>View Project</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
