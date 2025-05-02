import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Certificate from "@/components/sections/Certificates";
import NavBar from "@/components/navigation/NavBar";
import { Toaster } from "sonner";
import Projects from "@/components/sections/Projects";
import Text from "@/components/sections/Text";
import Footer from "@/components/sections/Footer";
import { projects } from "@/data/projects"; // Import projects from data file

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
            <About />
          </div>

          {/* Right Column: Education */}
          <div className="md:col-span-1">
            <Education />
          </div>
        </div>

        {/* Second row of content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Left Column: Tech Stack */}
          <div className="md:col-span-2">
            <TechStack />
          </div>

          {/* Right Column: Contact */}
          <div className="md:col-span-1">
            <Contact />
          </div>
        </div>

        {/* Full Width Experience Section */}
        <div className="mt-6">
          <Experience />
        </div>

        {/* Full Width Certificate Section */}
        <div className="mt-6">
          <Certificate />
        </div>

        {/* Full Width Projects Section - Simple and Clean */}
        <div className="mt-6">
          <Projects projects={projects} />
        </div>

        {/* Text Section - Call to Action */}
        <div className="mt-6">
          <Text />
        </div>
      </div>

      {/* Footer Section */}
      <Footer />

      {/* Add Sonner Toaster component */}
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
