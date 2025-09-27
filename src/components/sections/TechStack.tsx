import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { FaTools } from "react-icons/fa";
import { techStack } from "@/data/techStack";
import { cn } from "@/lib/utils";

export default function TechStack() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handle body scrolling when dialog is open and manage scroll button visibility
  useEffect(() => {
    const scrollButton = document.querySelector(
      'button[aria-label="Scroll to top"]'
    ) as HTMLElement;

    if (isDialogOpen) {
      document.body.style.overflow = "hidden";
      // Hide scroll to top button when dialog is open
      if (scrollButton) {
        scrollButton.style.display = "none";
      }
    } else {
      document.body.style.overflow = "";
      // Restore scroll to top button when dialog is closed
      if (scrollButton) {
        scrollButton.style.display = "";
      }
    }

    return () => {
      document.body.style.overflow = "";
      if (scrollButton) {
        scrollButton.style.display = "";
      }
    };
  }, [isDialogOpen]);

  // Display only specific categories in the main view
  const mainViewCategories = [
    "Frontend",
    "Backend",
    "Design & Development Tools",
  ];
  const filteredTechStack = Object.fromEntries(
    Object.entries(techStack).filter(([category]) =>
      mainViewCategories.includes(category)
    )
  );

  // Custom Tech Stack Dialog component
  const CustomTechStackDialog = () => {
    if (!isDialogOpen) return null;

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-[90]"
          onClick={() => setIsDialogOpen(false)}
        />

        {/* Custom dialog container */}
        <div
          className={cn(
            "relative z-[100] bg-white dark:bg-zinc-900 rounded-xl",
            "w-[85vw] h-[80vh] max-w-6xl",
            "flex flex-col border border-zinc-200 dark:border-zinc-700",
            "transform-none transition-all duration-200 ease-out shadow-lg"
          )}
        >
          {/* Dialog header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-200 bg-zinc-50 dark:bg-zinc-800 dark:border-zinc-700 rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-100 dark:bg-zinc-700 rounded-full">
                <FaTools className="text-xl text-zinc-700 dark:text-zinc-300" />
              </div>
              <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-200">
                Complete Tech Stack
              </h2>
            </div>
            <button
              onClick={() => setIsDialogOpen(false)}
              className="rounded-full p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <XIcon className="size-5 text-zinc-500 dark:text-zinc-400" />
            </button>
          </div>

          {/* Dialog content with custom scrollbar */}
          <div className="flex-1 overflow-y-auto p-5 custom-scrollbar will-change-auto text-rendering-optimizeLegibility bg-white dark:bg-zinc-900">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-6">
              {Object.entries(techStack).map(([category, technologies]) => (
                <div key={category} className="space-y-2.5">
                  <h3 className="text-lg font-semibold pb-1.5 border-b border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech.name}
                        variant="outline"
                        className="px-3 py-1.5 text-sm font-medium flex items-center gap-1.5 border-zinc-300 dark:border-zinc-600 
                        bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700
                        transition-colors text-zinc-800 dark:text-zinc-200 shadow-sm"
                      >
                        <span className="text-zinc-600 dark:text-zinc-400">
                          {tech.icon}
                        </span>
                        <span className="font-medium">{tech.name}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Card id="tech-stack" className="scroll-mt-20 h-full">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="text-xl text-primary dark:text-primary-400">
              <FaTools aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl font-semibold">Tech Stack</CardTitle>
          </div>
        </CardHeader>

        <CardContent className="pt-0 flex flex-col h-full">
          <div className="space-y-4 flex-grow">
            {Object.entries(filteredTechStack).map(
              ([category, technologies]) => {
                // Handle different categories
                let displayTechnologies = technologies;
                if (category === "Design & Development Tools") {
                  // Show only specific Design & Development tools
                  const specificTools = [
                    "Figma",
                    "Git",
                    "GitHub",
                    "Trello",
                    "VS Code",
                    "Canva",
                  ];
                  displayTechnologies = technologies.filter((tech) =>
                    specificTools.includes(tech.name)
                  );
                } else if (category === "Frontend" || category === "Backend") {
                  // Show all Frontend and Backend technologies
                  displayTechnologies = technologies;
                } else {
                  // For other categories, limit to first 4 items
                  displayTechnologies = technologies.slice(0, 4);
                }

                return (
                  <div key={category} className="space-y-2">
                    <h3 className="text-lg font-medium pb-1 border-b border-zinc-200 dark:border-zinc-700">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {displayTechnologies.map((tech) => (
                        <Badge
                          key={tech.name}
                          variant="outline"
                          className="px-3 py-1 text-sm font-medium flex items-center border-zinc-300 dark:border-zinc-600 
                        bg-zinc-100 dark:bg-zinc-800
                        transition-colors text-zinc-800 dark:text-zinc-200"
                        >
                          {tech.icon} {tech.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-700 text-center">
            <Button
              onClick={() => setIsDialogOpen(true)}
              variant="outline"
              className="w-full"
            >
              View All
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Custom Full Tech Stack Dialog */}
      <CustomTechStackDialog />
    </>
  );
}
