import React from "react";
import { FaUserTie } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { references } from "@/data/references";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const References: React.FC = () => {
  return (
    <Card id="references" className="scroll-mt-20">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <div className="text-xl text-primary dark:text-primary-400">
            <FaUserTie aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl font-semibold">References</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {references.map((ref, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-zinc-50/80 dark:bg-zinc-800/50 shadow-sm border border-zinc-200 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-800 transition-colors duration-200"
            >
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                {ref.name}
              </h3>
              <p className="text-zinc-700 dark:text-zinc-300 text-sm mt-1 font-medium">
                {ref.title}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-0.5">
                {ref.organization}
              </p>

              <div className="mt-3 space-y-1.5">
                {ref.email && (
                  <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <MdEmail className="text-zinc-500 dark:text-zinc-500" />
                    <a
                      href={`mailto:${ref.email}`}
                      className="hover:text-primary dark:hover:text-primary-400 transition-colors"
                    >
                      {ref.email}
                    </a>
                  </div>
                )}

                {ref.phone && (
                  <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <FaPhone className="text-zinc-500 dark:text-zinc-500" />
                    <span>{ref.phone}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default References;
