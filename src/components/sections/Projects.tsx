import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

interface Project {
  id: string;
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    // First add a fade-out class to the main content
    document.body.classList.add("page-transition-out");

    // Wait for the transition to complete before navigating
    setTimeout(() => {
      navigate(`/project/${projectId}`);

      // Delay the removal of transition class slightly to ensure smooth transition
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.body.classList.remove("page-transition-out");
      }, 50);
    }, 400); // Match this with your CSS transition duration (slightly longer)
  };

  return (
    <section
      id="projects"
      className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm"
    >
      {/* Image Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogOverlay className="bg-black/90" />
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-6xl border-none bg-transparent shadow-none p-0">
          <div className="relative max-w-full max-h-[95vh] flex items-center justify-center">
            <img
              src={selectedImage || ""}
              alt="Enlarged view"
              className="max-w-full max-h-[95vh] object-contain rounded-md shadow-2xl"
            />
          </div>
        </DialogContent>
      </Dialog>

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
              <div
                className="w-full h-64 overflow-hidden cursor-pointer"
                onClick={() =>
                  project.imageUrl && setSelectedImage(project.imageUrl)
                }
                role="button"
                aria-label={`View larger image of ${project.title}`}
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  project.imageUrl &&
                  setSelectedImage(project.imageUrl)
                }
              >
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

              <Button
                variant="default"
                size="sm"
                onClick={() => handleProjectClick(project.id)}
                className="flex items-center"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                <span>View Project</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
