import React, { useState } from "react";
import SectionCard from "@/components/ui/SectionCard";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaCertificate } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Import your certificate images
import projectManagementCert from "@/assets/certificates/ProjectManagementCert.png";
import pythonCert from "@/assets/certificates/PythonCert.jpg";
import currentTrendsCert from "@/assets/certificates/CurrentTrendsCert.png";

type CertificateItem = {
  title: string;
  issuer: string;
  year: string;
  url?: string;
  imageSrc?: string; // Add image source for certificate preview
  description?: string; // Optional description for the certificate
};

export default function Certificates() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateItem | null>(null);

  const certificates: CertificateItem[] = [
    {
      title: "Project Management Training",
      issuer: "Galena Scale Technologies Corporation",
      year: "2025",
      url: "#",
      imageSrc: projectManagementCert, // Replace with actual path when available
      description:
        "Comprehensive training on project management methodologies and practices.",
    },
    {
      title: "Master Laravel 12 & PHP 2025",
      issuer: "Udemy",
      year: "2025",
      url: "https://www.udemy.com/certificate/UC-XXXX/", // Replace with actual certificate URL
      imageSrc: projectManagementCert,
      description:
        "Advanced course covering Laravel 12 framework and PHP development.",
    },
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      year: "2025",
      url: "#",
      imageSrc: "/certificates/react-guide.jpg", // Replace with actual path when available
      description:
        "Comprehensive React.js training including hooks, context API, and Next.js.",
    },
    {
      title: "Tailwind CSS from Scratch",
      issuer: "Udemy",
      year: "2025",
      url: "#",
      imageSrc: "/certificates/tailwind-css.jpg", // Replace with actual path when available
      description: "Mastering utility-first CSS with the Tailwind framework.",
    },
    {
      title: "Explore Current Trends and Issues in Computing",
      issuer: "SBMA, Subic Bay Freeport Zone",
      year: "2024",
      url: "#",
      imageSrc: currentTrendsCert, // Replace with actual path when available
      description:
        "Exploration of emerging technologies and industry challenges in modern computing.",
    },
    {
      title: "Python Programming Application 2024",
      issuer: "Unit 703 Parc House II 21 Edsa, Guadalupe Nuevo, Makati City",
      year: "2024",
      url: "#",
      imageSrc: pythonCert, // Replace with actual path when available
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
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <Card
            key={index}
            className="border bg-primary-foreground border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-all duration-300 relative group flex flex-col h-full"
          >
            <CardHeader className="pb-0">
              <div className="flex justify-between gap-2">
                <div className="min-w-0">
                  <CardTitle className="text-lg font-medium min-h-[2.5rem] line-clamp-2 break-words">
                    {cert.title}
                  </CardTitle>
                </div>
                <Badge
                  variant="outline"
                  className="whitespace-nowrap shrink-0 mt-1 text-xs px-2 h-5 font-normal bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-800/40"
                >
                  {cert.year}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="py-1 flex-grow">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 min-h-[2rem] line-clamp-2">
                {cert.issuer}
              </p>
            </CardContent>

            <CardFooter className="mt-auto">
              <Button
                variant="outline"
                size="sm"
                className="w-full transition-colors duration-300 hover:bg-primary hover:text-white"
                onClick={() => handleCertificateClick(cert)}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Certificate
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Certificate Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-2xl">
          {selectedCertificate && (
            <>
              <DialogHeader>
                <div className="flex flex-col space-y-1">
                  <div className="flex items-center gap-2">
                    <DialogTitle className="text-xl ">
                      {selectedCertificate.title}
                    </DialogTitle>
                    {selectedCertificate.issuer === "Udemy" && (
                      <Badge
                        variant="outline"
                        className="bg-[#A435F0]/10 text-[#A435F0] border-[#A435F0]/20 shrink-0"
                      >
                        Udemy
                      </Badge>
                    )}
                  </div>
                  <DialogDescription className="text-sm text-left text-muted-foreground">
                    Issued by {selectedCertificate.issuer} in{" "}
                    {selectedCertificate.year}
                  </DialogDescription>
                </div>
              </DialogHeader>
              <div className="mt-4 space-y-4">
                {selectedCertificate.imageSrc ? (
                  <div className="rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800">
                    <img
                      src={selectedCertificate.imageSrc}
                      alt={`${selectedCertificate.title} Certificate`}
                      className="w-full h-auto"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.currentTarget.src = "/certificates/placeholder.jpg";
                      }}
                    />
                  </div>
                ) : (
                  <div className="p-8 bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center">
                    <p className="text-zinc-500 dark:text-zinc-400">
                      Certificate preview not available
                    </p>
                  </div>
                )}

                {selectedCertificate.description && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {selectedCertificate.description}
                  </p>
                )}

                {selectedCertificate.url && selectedCertificate.url !== "#" && (
                  <div className="flex justify-end">
                    <Button asChild variant="secondary">
                      <a
                        href={selectedCertificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Original Certificate
                      </a>
                    </Button>
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
