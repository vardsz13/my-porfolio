import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
  iconColor?: string;
}

const SocialLinks: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      href: "https://linkedin.com/in/john-paul-varde",
      icon: <FaLinkedin className="text-2xl text-[#0A66C2]" />,
      ariaLabel: "LinkedIn Profile",
    },
    {
      href: "https://github.com/vardsz13",
      icon: <FaGithub className="text-2xl text-zinc-900 dark:text-zinc-100" />,
      ariaLabel: "GitHub Profile",
    },
    {
      href: "https://instagram.com/_itsmepaaul",
      icon: <FaInstagram className="text-2xl text-[#E1306C]" />,
      ariaLabel: "Instagram Profile",
    },
  ];

  return (
    <div>
      <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-400 mb-1">
        Social Links
      </h3>
      <div className="flex gap-2">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-zinc-50/80 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700  transition-colors duration-200 flex-1 flex justify-center items-center"
            aria-label={link.ariaLabel}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
