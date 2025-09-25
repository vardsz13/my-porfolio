import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Github, ExternalLink, Play, X } from "lucide-react";
import Footer from "@/components/sections/Footer";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { handlePageTransition } from "@/utils/pageTransition";
import ProjectModuleDialog from "@/components/ui/ProjectModuleDialog";
import useDocumentTitle from "@/utils/useDocumentTitle";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedModule, setSelectedModule] = useState<any | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  // Find the project by ID
  const project = projects.find((p) => p.id === id);

  // Set document title based on project title
  useDocumentTitle(project ? project.title : "Project Not Found");

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
      if (e.key === "Escape" && selectedModule) {
        setSelectedModule(null);
      }
      if (e.key === "Escape" && isVideoOpen) {
        setIsVideoOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, selectedModule, isVideoOpen]);

  // Handle back button with transition
  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handlePageTransition(() => {
      // Pass back the last opened project ID
      navigate("/", { state: { scrollTo: "projects", fromProjectId: id } });
    });
  };

  // Show a minimal loading state before mounting completes
  if (!mounted) {
    return <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950"></div>;
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button
            onClick={handleBackClick}
            className="flex items-center cursor-pointer"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Back to Projects</span>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-zinc-100 dark:bg-zinc-950 py-10 px-4">
      {/* Image Dialog - Enhanced for larger image display */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogOverlay className="bg-black/90" />
        <DialogContent
          className="max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-6xl border-none bg-transparent shadow-none p-0"
          closeButton={false}
        >
          {/* Add consistent close button */}
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

          <div className="relative max-w-full max-h-[95vh] flex items-center justify-center">
            <img
              src={selectedImage || ""}
              alt="Enlarged view"
              className="max-w-full max-h-[95vh] object-contain rounded-md shadow-2xl"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Dialog */}
      <Dialog
        open={isVideoOpen}
        onOpenChange={(open) => {
          if (!open) setIsVideoOpen(false);
        }}
      >
        <DialogOverlay className="bg-black/90" />
        <DialogContent
          className="max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-6xl border-none bg-transparent shadow-none p-0 cursor-pointer"
          closeButton={false}
        >
          <div className="relative max-w-full max-h-[95vh] flex items-center justify-center">
            {project.promoVideo && (
              <div className="w-full aspect-video">
                <iframe
                  src={project.promoVideo}
                  title={`${project.title} Demo Video`}
                  className="w-full h-full rounded-md shadow-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Module Dialog */}
      <ProjectModuleDialog
        open={!!selectedModule}
        onOpenChange={(open) => !open && setSelectedModule(null)}
        module={selectedModule}
      />

      <div className="max-w-5xl mx-auto">
        {/* Back button - smaller and on left side */}
        <Button
          variant="ghost"
          size="sm"
          onClick={handleBackClick}
          className="mb-6 hover:bg-zinc-200 dark:hover:bg-zinc-800 flex items-center cursor-pointer"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Back to Projects</span>
        </Button>

        {/* PROJECT OVERVIEW SECTION - without card styling */}
        <div className="mb-8">
          {/* Title and year badge with responsive layout */}
          <div className="flex flex-wrap items-center mb-4">
            <h1 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mr-3">
              {project.title}
            </h1>
            {project.year && (
              <Badge variant="outline" className="text-sm font-mono mt-1">
                {project.year}
              </Badge>
            )}
          </div>
          <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-6 max-w-3xl">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mb-6">
            <div className=" flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1.5 text-sm bg-zinc-200 dark:bg-zinc-800 "
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

            {/* Promo Video Button */}
            {project.promoVideo && (
              <Button
                variant="default"
                size="lg"
                onClick={() => setIsVideoOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 dark:text-secondary-foreground cursor-pointer"
              >
                <Play className="mr-2 h-5 w-5" />
                <span>Watch Video</span>
              </Button>
            )}
          </div>
        </div>

        {/* Border line separator */}
        <div className="max-w-5xl mx-auto border-t border-zinc-200 dark:border-zinc-800 py-4"></div>

        {/* PROJECT MODULES SECTION - keep this with card styling */}
        {project.modules && project.modules.length > 0 && (
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 mb-8">
            <h2 className="text-2xl font-bold mb-4">Project Modules</h2>
            <div className="flex flex-col gap-4">
              {project.modules.map((module, moduleIndex) => (
                <div
                  key={moduleIndex}
                  className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-4 transition duration-300 ease-in-out border border-transparent hover:border-zinc-300 dark:hover:border-primary/30 hover:shadow-lg dark:hover:shadow-zinc-700/50 cursor-pointer"
                  onClick={() => setSelectedModule(module)}
                  role="button"
                  aria-label={`View details of ${module.title}`}
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setSelectedModule(module)
                  }
                >
                  <div className="flex flex-col gap-3">
                    {/* Image - now part of the clickable card */}
                    {module.imageUrl && (
                      <div className="w-full rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-700">
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
                      <p className="text-zinc-600 dark:text-zinc-300">
                        {module.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Border line separator */}
        <div className="max-w-5xl mx-auto border-t border-zinc-200 dark:border-zinc-800 py-4"></div>

        {/* Let's Connect section - without card styling */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">
            Let's Connect
          </h2>
          <p className="text-zinc-600 dark:text-zinc-300">
            Interested in discussing this project or working together? Feel free
            to reach out!
          </p>
        </div>
      </div>

      {/* Footer with container to match content width */}
      <Footer />
    </div>
  );
}
