import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Footer from "@/components/sections/Footer";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Project } from "@/types/project";
import { handlePageTransition } from "@/utils/pageTransition";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  // Find the project by ID
  const project = projects.find((p) => p.id === id);

  // Handle theme persistence on mount
  useEffect(() => {
    setMounted(true);

    // Check for stored theme preference - match the implementation from DarkModeToggle.tsx
    const savedPreference = localStorage.getItem("darkMode");

    // If we have a saved preference, use that
    if (savedPreference !== null) {
      const isDark = savedPreference === "true";

      // Apply the saved preference
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    // Otherwise, use system preference
    else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      // Apply the system preference
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

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

  // Handle back button with transition
  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handlePageTransition(() => {
      navigate("/#projects");
      window.scrollTo(0, 0);
    });
  };

  // Show a minimal loading state before mounting completes
  if (!mounted) {
    return <div className="min-h-screen bg-gray-50 dark:bg-zinc-900"></div>;
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button onClick={handleBackClick} className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Projects</span>
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

      <div className="container max-w-5xl mx-auto py-6 px-4">
        {/* Back button - smaller and on left side */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBackClick}
          className="mb-4 hover:bg-gray-100 dark:hover:bg-zinc-800 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Back to Projects</span>
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
                className="w-full rounded-lg overflow-hidden shadow-md cursor-pointer"
                onClick={() =>
                  project.imageUrl && setSelectedImage(project.imageUrl)
                }
                role="button"
                aria-label="View larger image"
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
            <div className="flex flex-col gap-4">
              {project.modules.map((module, moduleIndex) => (
                <div
                  key={moduleIndex}
                  className="bg-gray-50 dark:bg-zinc-700 rounded-lg p-4 transition duration-200 ease-in-out border border-transparent hover:border-gray-300 dark:hover:border-zinc-500 hover:shadow-lg"
                >
                  <div className="flex flex-col gap-3">
                    {/* Image first - slightly smaller with max height */}
                    {module.imageUrl && (
                      <div
                        onClick={() =>
                          module.imageUrl && setSelectedImage(module.imageUrl)
                        }
                        className="w-full rounded-md overflow-hidden border border-gray-200 dark:border-gray-600 cursor-pointer"
                        role="button"
                        aria-label={`View larger image of ${module.title}`}
                        tabIndex={0}
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          module.imageUrl &&
                          setSelectedImage(module.imageUrl)
                        }
                      >
                        <img
                          src={module.imageUrl}
                          alt={module.title}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    )}

                    {/* Title after image */}
                    <h3 className="text-lg font-semibold italic">
                      {module.title}
                    </h3>

                    {/* Description last */}
                    {module.description && (
                      <p className="text-gray-600 dark:text-gray-300">
                        {module.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add border line before Let's Connect section */}
        <hr className="border-t border-zinc-200 dark:border-zinc-800 my-10" />

        {/* Let's Connect section */}
        <div className="text-left">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Interested in discussing this project or working together? Feel free
            to reach out!
          </p>
        </div>
      </div>

      {/* Include Footer component */}
      <Footer />
    </div>
  );
}
