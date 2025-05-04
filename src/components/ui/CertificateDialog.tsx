import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CertificateItem } from "@/types/certificate";

type CertificateDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  certificate: CertificateItem | null;
};

export default function CertificateDialog({
  open,
  onOpenChange,
  certificate,
}: CertificateDialogProps) {
  if (!certificate) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-left">
          <div className="flex flex-col space-y-1">
            <div className="flex items-start flex-wrap gap-2">
              <DialogTitle className="text-base sm:text-xl text-left !mt-0 !mb-0">
                {certificate.title}
              </DialogTitle>
              {certificate.issuer === "Udemy" && (
                <Badge
                  variant="outline"
                  className="bg-[#A435F0]/10 text-[#A435F0] border-[#A435F0]/20 mt-0.5"
                >
                  Udemy
                </Badge>
              )}
            </div>
            <DialogDescription className="text-sm text-left text-muted-foreground mt-1">
              Issued by {certificate.issuer} in {certificate.year}
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="mt-2 sm:mt-4 space-y-3 sm:space-y-4">
          {certificate.imageSrc ? (
            <div className="rounded-md overflow-hidden border border-zinc-200 dark:border-zinc-800">
              <img
                src={certificate.imageSrc.toString()}
                alt={`${certificate.title} Certificate`}
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

          {certificate.description && (
            <p className="text-sm sm:text-md text-zinc-600 dark:text-zinc-400">
              {certificate.description}
            </p>
          )}

          {certificate.url && certificate.url !== "#" && (
            <div className="flex justify-end">
              <Button variant="outline" size="sm" asChild className="gap-1.5">
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span className="text-xs sm:text-sm">View</span>
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
