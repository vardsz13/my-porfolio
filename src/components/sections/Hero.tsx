import { heroData } from "@/data/hero";
import { Tooltip } from "@/components/ui/tooltip";
import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLParagraphElement>(null);

  // Add animation effect when component mounts with a slight delay for a more dramatic effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add("animate-title");
      }
    }, 300); // Delay the animation start by 300ms for better visual effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
      <div className="relative mx-auto md:mx-0 mb-1 md:mb-0">
        <Tooltip
          content={
            <span>
              {heroData.helloMessage || "👋 Hello, nice to meet you!"}
            </span>
          }
          position="top"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-zinc-900 dark:border-zinc-800 cursor-pointer group relative">
            <div className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out"></div>
            <img
              src={heroData.profileImage}
              alt="Profile"
              className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:brightness-105"
            />
          </div>
        </Tooltip>
        {heroData.availableToWork && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs px-3 py-0.5 rounded-full inline-flex items-center shadow-md z-10 whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></span>
            Available for Work
          </div>
        )}
      </div>
      <div className="text-center md:text-left mt-1 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
          {heroData.name}
          <div className="inline-flex relative mt-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#1D9BF0]" /* Twitter/X blue color */
            >
              <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484v-.002z" />
              <path
                d="M9.5 15.5l-3-3 1-1 2 2 5-5 1 1-6 6z"
                fill="white"
                stroke="white"
                strokeWidth="0.5"
              />
            </svg>
          </div>
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-2">
          <span className="inline-flex items-center justify-center md:justify-start">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 19.9l-4.95-5.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            {heroData.location}
          </span>
        </p>

        {/* Animated Title */}
        <p
          ref={titleRef}
          className="title-animation text-xl md:text-2xl mb-3 leading-normal tracking-wider font-semibold"
        >
          {heroData.title.split("").map((char, index) => (
            <span
              key={index}
              className={`inline-block relative ${
                char === " " ? "mx-1" : "mx-[1px]"
              }`}
              style={{
                fontVariationSettings: "'wght' 600, 'wdth' 105",
                letterSpacing: "0.01em",
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {char}
            </span>
          ))}
        </p>

        <div className="flex gap-2 justify-center md:justify-start">
          <a
            href="/resume/Resume_Varde,John Paul.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 hover:bg-zinc-700 dark:hover:bg-zinc-300 hover:shadow-md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
              <path d="M8 11a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0-3a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z" />
            </svg>
            My Resume
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${heroData.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-300 dark:border-zinc-700 px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:shadow-md"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
