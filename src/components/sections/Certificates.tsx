import React, { useState } from "react";
import SectionCard from "@/components/ui/SectionCard";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react"; // Added Eye icon
import { FaCertificate } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";

// Import your certificate images
import projectManagementCert from "@/assets/certificates/ProjectManagementCert.png";
import pythonCert from "@/assets/certificates/PythonCert.jpg";
import currentTrendsCert from "@/assets/certificates/CurrentTrendsCert.png";

type CertificateItem = {
  title: string;
  issuer: string;
  year: string;
  url?: string;
  imageSrc?: string;
  description?: string;
};

export default function Certificates() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateItem | null>(null);

  const certificates: CertificateItem[] = [
    {
      title: "Project Management Training",
      issuer: "Galena Scale Technologies Corp.",
      year: "2025",
      url: "#",
      imageSrc: projectManagementCert,
      description:
        "Comprehensive training on project management methodologies and practices.",
    },
    {
      title: "Master Laravel 12 & PHP 2025",
      issuer: "Udemy",
      year: "2025",
      url: "https://www.udemy.com/certificate/UC-XXXX/",
      imageSrc: projectManagementCert,
      description:
        "Advanced course covering Laravel 12 framework and PHP development.",
    },
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      year: "2025",
      url: "#",
      imageSrc: "/certificates/react-guide.jpg",
      description:
        "Comprehensive React.js training including hooks, context API, and Next.js.",
    },
    {
      title: "Tailwind CSS from Scratch",
      issuer: "Udemy",
      year: "2025",
      url: "#",
      imageSrc: "/certificates/tailwind-css.jpg",
      description: "Mastering utility-first CSS with the Tailwind framework.",
    },
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
  ];

  const handleCertificateClick = (cert: CertificateItem) => {
    setSelectedCertificate(cert);
    setOpenDialog(true);
  };

  return (
    <SectionCard
      title="Certifications"
      icon={<FaCertificate className="text-zinc-900 dark:text-zinc-100" />}
      id="certifications"
    >
      <div className="flex flex-col space-y-3">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-3 p-3 sm:p-4 border border-zinc-200 dark:border-zinc-800 bg-primary-foreground rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer"
            onClick={() => handleCertificateClick(cert)}
          >
            {/* Image container - Full width on mobile, left side on larger screens */}
            {cert.imageSrc ? (
              <div className="w-full sm:w-auto sm:h-24 sm:w-36 flex-shrink-0 overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800">
                <img
                  src={cert.imageSrc.toString()}
                  alt={`${cert.title} Certificate`}
                  className="w-full h-auto sm:h-full sm:w-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/certificates/placeholder.jpg";
                  }}
                />
              </div>
            ) : (
              <div className="w-full h-20 sm:h-24 sm:w-36 flex-shrink-0 bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center">
                <FaCertificate className="h-8 w-8 text-zinc-400" />
              </div>
            )}

            {/* Content - Below image on mobile, right side on larger screens */}
            <div className="flex-grow min-w-0 flex flex-col sm:justify-center">
              <div className="flex justify-between sm:justify-start sm:flex-row sm:items-center gap-1 mb-1 sm:mb-1.5">
                <h3 className="font-medium text-base sm:text-lg line-clamp-1 text-zinc-900 dark:text-zinc-100">
                  {cert.title}
                </h3>
                <Badge
                  variant="outline"
                  className="whitespace-nowrap sm:ml-2 text-xs px-2 h-5 font-normal bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
                >
                  {cert.year}
                </Badge>
              </div>
              <div className="flex flex-col sm:gap-1">
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  {cert.issuer}
                </span>
                {cert.description && (
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 line-clamp-2 sm:line-clamp-1">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Mobile View Button */}
              <div className="mt-2 sm:hidden">
                <div className="flex items-center w-full justify-center px-3 py-1.5 text-xs text-primary font-medium rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-primary hover:text-white transition-colors duration-300">
                  <Eye className="h-3 w-3 mr-1.5" />
                  <span>View Certificate</span>
                </div>
              </div>
            </div>

            {/* View button - Only on larger screens */}
            <div className="hidden sm:flex items-center flex-shrink-0">
              <div className="flex items-center px-3 py-1.5 text-sm text-primary font-medium rounded-md border border-zinc-200 dark:border-zinc-700 hover:bg-primary hover:text-white transition-colors duration-300">
                <Eye className="h-3.5 w-3.5 mr-1.5" />
                <span>View</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedCertificate && (
            <>
              <DialogHeader className="text-left">
                <div className="flex flex-col space-y-1">
                  <div className="flex items-start flex-wrap gap-2">
                    <DialogTitle className="text-base sm:text-xl text-left !mt-0 !mb-0">
                      {selectedCertificate.title}
                    </DialogTitle>
                    {selectedCertificate.issuer === "Udemy" && (
                      <Badge
                        variant="outline"
                        className="bg-[#A435F0]/10 text-[#A435F0] border-[#A435F0]/20 mt-0.5"
                      >
                        Udemy
                      </Badge>
                    )}
                  </div>
                  <DialogDescription className="text-xs text-left text-muted-foreground mt-1">
                    Issued by {selectedCertificate.issuer} in{" "}
                    {selectedCertificate.year}
                  </DialogDescription>
                </div>
              </DialogHeader>
              <div className="mt-2 sm:mt-4 space-y-3 sm:space-y-4">
                {selectedCertificate.imageSrc ? (
                  <div className="rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800">
                    <img
                      src={selectedCertificate.imageSrc.toString()}
                      alt={`${selectedCertificate.title} Certificate`}
                      className="w-full h-auto"
                      onError={(e) => {
                        e.currentTarget.src = "/certificates/placeholder.jpg";
                      }}
                    />
                  </div>
                ) : (
                  <div className="p-6 sm:p-8 bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center">
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                      Certificate preview not available
                    </p>
                  </div>
                )}

                {selectedCertificate.description && (
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    {selectedCertificate.description}
                  </p>
                )}

                {selectedCertificate.url && selectedCertificate.url !== "#" && (
                  <div className="flex justify-end">
                    <a
                      href={selectedCertificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 text-xs bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                    >
                      <Eye className="mr-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      <span className="text-xs sm:text-sm">
                        View Certificate
                      </span>
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SectionCard>
  );
}
