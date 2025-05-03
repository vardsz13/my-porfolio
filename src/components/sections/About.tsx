import React from "react";
import AboutCard from "@/components/ui/AboutCard";
import { aboutData } from "@/data/about";

/**
 * About Section Component
 * Displays personal information in a clean card format
 */
export const About: React.FC = () => {
  return (
    <AboutCard title={aboutData.title} description={aboutData.description} />
  );
};

export default About;
