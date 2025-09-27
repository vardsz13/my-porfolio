import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGit,
  FaPhp,
  FaTrello,
  FaSass,
  FaWordpress,
  FaGlobe,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiLaravel,
  SiFigma,
  SiFirebase,
  SiCanva,
  SiBootstrap,
  SiJira,
  SiDiscord,
  SiPython,
  SiNodedotjs,
  SiAdobephotoshop,
  SiNotion,
  SiApachejmeter,
  SiWireshark,
  SiBurpsuite,
  SiSap,
  SiOracle,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { BsMicrosoft } from "react-icons/bs";
import { TechStackData } from "@/types/techStack";

export const techStack: TechStackData = {
  Frontend: [
    {
      name: "HTML5",
      icon: (
        <FaHtml5 className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "CSS3",
      icon: (
        <FaCss3Alt className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "SCSS",
      icon: (
        <FaSass className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <SiJavascript className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "React",
      icon: (
        <FaReact className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <SiTypescript className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <SiTailwindcss className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Bootstrap",
      icon: (
        <SiBootstrap className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
  ],
  Backend: [
    {
      name: "PHP",
      icon: <FaPhp className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />,
    },
    {
      name: "Python",
      icon: (
        <SiPython className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Node.js",
      icon: (
        <SiNodedotjs className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Laravel",
      icon: (
        <SiLaravel className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "SQL",
      icon: (
        <SiPostgresql className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
  ],
  Databases: [
    {
      name: "MySQL",
      icon: (
        <SiMysql className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <SiPostgresql className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Firebase",
      icon: (
        <SiFirebase className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
  ],
  "Design & Development Tools": [
    {
      name: "Figma",
      icon: (
        <SiFigma className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Photoshop",
      icon: (
        <SiAdobephotoshop className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "VS Code",
      icon: (
        <VscCode className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Git",
      icon: <FaGit className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />,
    },
    {
      name: "Jira",
      icon: (
        <SiJira className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Notion",
      icon: (
        <SiNotion className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Canva",
      icon: (
        <SiCanva className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "GitHub",
      icon: (
        <FaGithub className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Trello",
      icon: (
        <FaTrello className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Discord",
      icon: (
        <SiDiscord className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Microsoft Teams",
      icon: (
        <BsMicrosoft className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
  ],
  CMS: [
    {
      name: "WordPress",
      icon: (
        <FaWordpress className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Wix",
      icon: (
        <FaGlobe className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
  ],
  "Testing & Security Tools": [
    {
      name: "Apache JMeter",
      icon: (
        <SiApachejmeter className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Wireshark",
      icon: (
        <SiWireshark className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
    {
      name: "Burp Suite",
      icon: (
        <SiBurpsuite className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
  ],
  "Enterprise Systems": [
    {
      name: "SAP S/4HANA",
      icon: <SiSap className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />,
    },
    {
      name: "SAP Web GUI",
      icon: <SiSap className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />,
    },
    {
      name: "Oracle Forms",
      icon: (
        <SiOracle className="mr-2 text-zinc-700 dark:text-zinc-300 text-lg" />
      ),
    },
  ],
};
