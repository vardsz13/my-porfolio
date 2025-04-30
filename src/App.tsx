import React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import NavBar from "./components/navigation/NavBar";
import { Toaster } from "sonner"; // Import Sonner Toaster

/**
 * Main App Component
 * Contains the overall structure of the application
 */
export default function App() {
  return (
    <div className="min-h-screen w-full bg-zinc-100 dark:bg-zinc-950 py-10 px-4">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto mt-24">
        {/* Hero Section */}
        <Hero />

        {/* Content Grid Layout - Main content in two columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Left Column: About */}
          <div className="md:col-span-2">
            {/* About Section */}
            <About
              description={[
                "I am a passionate Front-End Developer and UI/UX Designer with a focus on creating beautiful, responsive, and user-friendly interfaces.",
                "With a strong foundation in modern web technologies and design principles, I strive to build applications that not only look great but also provide exceptional user experiences.",
                "I enjoy working collaboratively in cross-functional teams and have a knack for translating business requirements into elegant technical solutions.",
              ]}
              skills={[
                "React",
                "TypeScript",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Responsive Design",
                "UI/UX Design",
                "Git",
                "Figma",
                "NextJS",
                "Redux",
              ]}
            />
          </div>

          {/* Right Column: Education */}
          <div className="md:col-span-1">
            {/* Education Section */}
            <Education />
          </div>
        </div>

        {/* Second row of content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Left Column: Tech Stack */}
          <div className="md:col-span-2">
            {/* Tech Stack Section */}
            <TechStack /* Add any required props here if needed */ />
          </div>

          {/* Right Column: Contact */}
          <div className="md:col-span-1">
            {/* Contact Section */}
            <Contact />
          </div>
        </div>

        {/* Full Width Experience Section */}
        <div className="mt-6">
          <Experience />
        </div>
      </div>

      {/* Add Sonner Toaster component */}
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
