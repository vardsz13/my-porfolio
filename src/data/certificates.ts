import projectManagementCert from "@/assets/certificates/ProjectManagementCert.png";
import pythonCert from "@/assets/certificates/PythonCert.jpg";
import currentTrendsCert from "@/assets/certificates/CurrentTrendsCert.png";
import dataAnalyticsCert from "@/assets/certificates/DataAnalyticsCert.jpg";
import { CertificateItem } from "@/types/certificate";

export const certificates: CertificateItem[] = [
  {
    title: "Project Management Training",
    issuer: "Galena Scale Technologies Corp.",
    year: "2025",
    url: "#",
    imageSrc: projectManagementCert,
    description:
      "Comprehensive training on project management methodologies and practices.",
  },
  // {
  //   title: "Master Laravel 12 & PHP 2025",
  //   issuer: "Udemy",
  //   year: "2025",
  //   url: "https://www.udemy.com/certificate/UC-XXXX/",
  //   imageSrc: projectManagementCert,
  //   description:
  //     "Advanced course covering Laravel 12 framework and PHP development.",
  // },
//   {
//     title: "React - The Complete Guide",
//     issuer: "Udemy",
//     year: "2025",
//     url: "#",
//     imageSrc: "/certificates/react-guide.jpg",
//     description:
//       "Comprehensive React.js training including hooks, context API, and Next.js.",
//   },
//   {
//     title: "Tailwind CSS from Scratch",
//     issuer: "Udemy",
//     year: "2025",
//     url: "#",
//     imageSrc: "/certificates/tailwind-css.jpg",
//     description: "Mastering utility-first CSS with the Tailwind framework.",
//   },
  {
    title: "Explore Current Trends and Issues in Computing",
    issuer: "SBMA, Subic Bay Freeport Zone",
    year: "2024",
    url: "#",
    imageSrc: currentTrendsCert,
    description:
      "Exploration of emerging technologies and industry challenges in modern computing.",
  },
  {
    title: "Python Programming Application 2024",
    issuer: "Unit 703 Parc House II, Makati City",
    year: "2024",
    url: "#",
    imageSrc: pythonCert,
    description:
      "Applied Python programming techniques for real-world applications.",
  },
  {
    title: "Data Analytics 2024",
    issuer: "Unit 703 Parc House II, Makati City",
    year: "2024",
    url: "#",
    imageSrc: dataAnalyticsCert,
    description:
      "Foundational course in data analytics, covering data manipulation and visualization techniques.",
  },
];