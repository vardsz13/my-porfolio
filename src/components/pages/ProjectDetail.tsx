import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, X } from "lucide-react";
import Text from "@/components/sections/Text";
import Footer from "@/components/sections/Footer";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // Find the project by ID
  const project = projects.find((p) => p.id === id);

  // Handle keyboard events for the dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link to="/#projects" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to Projects</span>
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      {/* Image Dialog - Enhanced for larger image display */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogOverlay className="bg-black/90" />{" "}
        {/* Darker overlay for better contrast */}
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

      <div className="container max-w-5xl mx-auto py-6 px-4">
        {/* Back button - smaller and on left side */}
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="mb-4 hover:bg-gray-100 dark:hover:bg-zinc-800"
        >
          <Link to="/#projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Projects</span>
          </Link>
        </Button>

        {/* PROJECT OVERVIEW SECTION - Hero style with reduced spacing */}
        <div className="mb-8">
          {/* Title and description */}
          <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project overview image */}
          {project.imageUrl && (
            <div className="mb-6">
              <div
                className="w-full rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-[1.01]"
                onClick={() => setSelectedImage(project.imageUrl)}
                role="button"
                aria-label="View larger image"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelectedImage(project.imageUrl)
                }
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Links section */}
          <div className="flex flex-wrap gap-4 mt-6">
            {project.githubUrl && (
              <Button variant="outline" size="lg" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-5 w-5" />
                  <span>View Source Code</span>
                </a>
              </Button>
            )}

            {project.liveUrl && (
              <Button variant="default" size="lg" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  <span>Visit Live Site</span>
                </a>
              </Button>
            )}
          </div>

          {/* Divider line before Project Modules */}
          <hr className="border-t border-gray-200 dark:border-gray-700 my-8" />
        </div>

        {/* PROJECT MODULES SECTION */}
        {project.modules && project.modules.length > 0 && (
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md overflow-hidden p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Project Modules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.modules.map((module, moduleIndex) => (
                <div
                  key={moduleIndex}
                  className="bg-gray-50 dark:bg-zinc-700 rounded-lg p-4 shadow-sm"
                >
                  {/* Image first - clickable to open in modal instead of new tab */}
                  {module.imageUrl && (
                    <div
                      onClick={() => setSelectedImage(module.imageUrl)}
                      className="block mb-4 rounded-md overflow-hidden border border-gray-200 dark:border-gray-600 transition-transform hover:scale-[1.02] cursor-pointer"
                      role="button"
                      aria-label={`View larger image of ${module.title}`}
                      tabIndex={0}
                      onKeyDown={(e) =>
                        e.key === "Enter" && setSelectedImage(module.imageUrl)
                      }
                    >
                      <img
                        src={module.imageUrl}
                        alt={module.title}
                        className="w-full object-cover"
                      />
                    </div>
                  )}

                  {/* Title after image - in italics */}
                  <h3 className="text-md font-semibold italic mb-2">
                    {module.title}
                  </h3>

                  {/* Description after title */}
                  {module.description && (
                    <p className="text-gray-600 dark:text-gray-300">
                      {module.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Include Text component */}
        <div className="mt-2">
          <Text />
        </div>
      </div>

      {/* Include Footer component */}
      <Footer />
    </div>
  );
}
