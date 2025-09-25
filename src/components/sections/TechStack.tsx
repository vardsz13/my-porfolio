import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaTools } from "react-icons/fa";
import { techStack } from "@/data/techStack";

// Then use tempTechStack instead of imported techStack
export default function TechStack() {
  console.log("TechStack data:", techStack);
  return (
    <Card id="tech-stack" className="scroll-mt-20">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="text-xl text-primary dark:text-primary-400">
            <FaTools aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl font-semibold">Tech Stack</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-4">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div key={category} className="space-y-2">
              <h3 className="text-lg font-medium pb-1 border-b border-zinc-200 dark:border-zinc-700">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
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
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
