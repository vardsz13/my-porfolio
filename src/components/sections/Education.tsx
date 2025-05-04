import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";

const Education: React.FC = () => {
  return (
    <Card id="education" className="scroll-mt-20 flex flex-col h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <div className="text-xl text-primary dark:text-primary-400">
            <FaGraduationCap aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl font-semibold">Education</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-0 flex-grow flex flex-col">
        <div className="h-full flex flex-col">
          <div className="p-4 rounded-lg bg-zinc-50/80 dark:bg-zinc-800/50 shadow-sm border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 transition-colors duration-200 flex-grow">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
              {education.degree}
            </h3>
            <div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 text-sm mt-1 mb-3 font-medium">
              {education.logo && (
                <img
                  src={education.logo}
                  alt="School Logo"
                  width={35}
                  height={35}
                />
              )}
              {education.institution}
            </div>
            <div>
              <Badge
                variant="outline"
                className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50 px-2 py-1 text-xs font-mono rounded-md"
              >
                {education.period}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
