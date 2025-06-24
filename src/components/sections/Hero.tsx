import { heroData } from "@/data/hero";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
      <div className="relative mx-auto md:mx-0 mb-1 md:mb-0">
        <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-zinc-900 dark:border-zinc-800">
          <img
            src={heroData.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {heroData.availableToWork && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs px-3 py-0.5 rounded-full inline-flex items-center shadow-md z-10 whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-white rounded-full mr-1.5 animate-pulse"></span>
            Available for Work
          </div>
        )}
      </div>
      <div className="text-center md:text-left mt-1 md:mt-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{heroData.name}</h1>
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
        <p className="text-xl mb-3">{heroData.title}</p>
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
