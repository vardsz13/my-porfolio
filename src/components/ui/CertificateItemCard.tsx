import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { FaCertificate } from "react-icons/fa";
import { CertificateItem } from "@/types/certificate";

type CertificateItemCardProps = {
  certificate: CertificateItem;
  onClick: () => void;
};

export default function CertificateItemCard({
  certificate,
  onClick,
}: CertificateItemCardProps) {
  return (
    <div
      className="flex flex-col sm:flex-row gap-3 p-3 sm:p-4 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-lg hover:shadow-md dark:hover:shadow-zinc-700/50 hover:border-zinc-300 dark:hover:border-primary/30 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Image container - Full width on mobile, left side on larger screens */}
      {certificate.imageSrc ? (
        <div className="w-full sm:w-auto sm:h-24 flex-shrink-0 overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800">
          <img
            src={certificate.imageSrc.toString()}
            alt={`${certificate.title} Certificate`}
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
      <div className="flex-grow min-w-0  flex flex-col sm:justify-center">
        <div className="flex justify-between sm:justify-start sm:flex-row sm:items-center gap-1 mb-1 sm:mb-1.5">
          <h3 className="font-semibold text-lg sm:text-lg line-clamp-1 text-zinc-800 dark:text-zinc-100">
            {certificate.title}
          </h3>
          <Badge
            variant="outline"
            className="whitespace-nowrap sm:ml-2 text-xs font-mono px-2 py-1 bg-yellow-50 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800"
          >
            {certificate.year}
          </Badge>
        </div>
        <div className="flex flex-col sm:gap-1">
          <span className="text-md md:text-md text-zinc-600 dark:text-zinc-400">
            {certificate.issuer}
          </span>
          {certificate.description && (
            <p className="text-sm md:text-sm text-zinc-500 dark:text-zinc-500 line-clamp-2 sm:line-clamp-1">
              {certificate.description}
            </p>
          )}
        </div>

        {/* Mobile View Button */}
        <div className="mt-2 sm:hidden">
          <div className="flex items-center w-full justify-center px-3 py-1.5">
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-1.5 text-xs"
            >
              <Eye className="h-3 w-3" />
              <span>View Certificate</span>
            </Button>
          </div>
        </div>
      </div>

      {/* View button - Only on larger screens */}
      <div className="hidden sm:flex items-center flex-shrink-0">
        <div className="flex items-center ">
          <Button
            variant="outline"
            size="sm"
            className="w-full gap-1.5 text-xs"
          >
            <Eye className="h-3 w-3" />
            <span>View Certificate</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
