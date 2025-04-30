import React from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStack from "./components/sections/TechStack";
import NavBar from "./components/navigation/NavBar";
import profilePic from "./assets/profilepic.jpg";

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
      <div className="max-w-3xl mx-auto mt-24 space-y-6">
        {/* Hero Section */}
        <Hero
          name="John Paul C. Varde"
          location="Quezon City, Philippines"
          title="Front-End Developer and UI/UX Designer"
          email="johnpaulvarde13@gmail.com"
          profileImage={profilePic}
        />

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

        {/* Tech Stack Section */}
        <TechStack />

        {/* Add more sections here as needed */}
      </div>
    </div>
  );
}
