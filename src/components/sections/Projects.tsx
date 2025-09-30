import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code2, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Project } from "@/types/project";

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
      className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm hover:shadow-md dark:hover:shadow-zinc-700/"
    >
      {/* Image Dialog */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogOverlay className="bg-black/90" />
        <DialogContent
          className="max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-6xl border-none bg-transparent shadow-none p-0"
          closeButton={false}
        >
          <div className="relative max-w-full max-h-[95vh] flex items-center justify-center">
            <img
              src={selectedImage || ""}
              alt="Enlarged view"
              className="max-w-full max-h-[95vh] object-contain rounded-md shadow-2xl"
            />
          </div>
          <div className="absolute top-5 right-5 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedImage(null)}
              className="w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white shadow-md cursor-pointer"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-md">
          <Code2 className="h-5 w-5" />
        </div>
        <h2 className="text-2xl font-bold">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            data-project-id={project.id}
            className="overflow-hidden transition-all duration-300 hover:shadow-md dark:hover:shadow-zinc-700/50 border border-zinc-200 dark:border-zinc-700 hover:border-primary/30 dark:hover:border-primary/30 flex flex-col"
          >
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
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                {project.year && (
                  <Badge
                    variant="outline"
                    className="text-sm font-mono px-2.5 py-0.5 bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700/40"
                  >
                    {project.year}
                  </Badge>
                )}
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 border-slate-300 dark:border-slate-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="mt-auto border-t border-zinc-100 dark:border-zinc-800 pt-4">
              <div className="flex gap-3">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-shrink-0 cursor-pointer"
                  >
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
                  className="flex items-center flex-shrink-0 cursor-pointer"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  <span>View Project</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
