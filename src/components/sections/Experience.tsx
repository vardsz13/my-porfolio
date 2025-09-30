import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experiences";

const Experience: React.FC = () => {
  // Assuming the experiences array is sorted with the latest/current first
  const latestExperienceIndex = 0;

  return (
    <Card id="experience" className="scroll-mt-20">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="text-xl text-primary dark:text-primary-400">
            <FaBriefcase aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl font-semibold">Experience</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-2.5 top-4 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-700"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 pb-6 last:pb-0">
              {/* Timeline dot - with animation for the current/latest experience */}
              <div
                className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-3 
                  border-white dark:border-zinc-900 shadow-md z-10
                  ${
                    index === latestExperienceIndex
                      ? "bg-indigo-500 dark:bg-indigo-400 animate-pulse"
                      : "bg-zinc-600 dark:bg-zinc-500"
                  }`}
              >
                {index === latestExperienceIndex && (
                  <span className="absolute inset-0 rounded-full bg-indigo-500/40 dark:bg-indigo-400/40 animate-ping"></span>
                )}
              </div>

              <div
                className={`p-5 rounded-lg bg-white dark:bg-zinc-800 shadow border 
                ${
                  index === latestExperienceIndex
                    ? "border-indigo-400/60 dark:border-indigo-500/40"
                    : "border-zinc-100 dark:border-zinc-700"
                }`}
              >
                <div className="flex justify-between items-start gap-3 mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                    {exp.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className={`text-sm font-mono px-2 py-1 ${
                      index === latestExperienceIndex
                        ? "bg-indigo-100 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-100 border-indigo-300 dark:border-indigo-600 font-medium"
                        : "bg-indigo-100/80 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700/40"
                    }`}
                  >
                    {exp.year}
                  </Badge>
                </div>

                {exp.company && (
                  <p className="text-md text-zinc-600 dark:text-zinc-300 font-semibold mb-4">
                    {exp.company}
                  </p>
                )}

                <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-zinc-600 dark:text-zinc-400 mt-1">
                        •
                      </span>
                      <span className="text-base leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
