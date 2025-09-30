import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaUser } from "react-icons/fa";
import { AboutCardProps } from "@/types/about";

export const AboutCard: React.FC<AboutCardProps> = ({ title, description }) => {
  return (
    <Card id="about" className="scroll-mt-20">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="text-xl text-primary dark:text-primary-400">
            <FaUser aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {description.map((paragraph, index) => (
          <p
            key={index}
            className="mb-4 text-zinc-700 dark:text-zinc-300 last:mb-0"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default AboutCard;
