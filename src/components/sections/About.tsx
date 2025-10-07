import React from "react";
import AboutCard from "@/components/ui/AboutCard";
import { aboutData } from "@/data/about";
import { ScrollReveal } from "@/components/animations";

/**
 * About Section Component
 * Displays personal information in a clean card format
 */
export const About: React.FC = () => {
  return (
    <ScrollReveal>
      <AboutCard title={aboutData.title} description={aboutData.description} />
    </ScrollReveal>
  );
};

export default About;
