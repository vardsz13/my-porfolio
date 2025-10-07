import { useState } from "react";
import SectionCard from "@/components/ui/SectionCard";
import { FaCertificate } from "react-icons/fa";
import CertificateItemCard from "@/components/ui/CertificateItemCard";
import CertificateDialog from "@/components/ui/CertificateDialog";
import { certificates } from "@/data/certificates";
import { CertificateItem } from "@/types/certificate";
import { StaggerContainer, ScrollReveal } from "@/components/animations";

export default function Certificates() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateItem | null>(null);

  const handleCertificateClick = (cert: CertificateItem) => {
    setSelectedCertificate(cert);
    setOpenDialog(true);
  };

  return (
    <ScrollReveal>
      <SectionCard
        title="Certifications"
        icon={<FaCertificate className="text-zinc-900 dark:text-zinc-100" />}
        id="certifications"
      >
        <StaggerContainer
          delay={0.2}
          staggerDelay={0.1}
          duration={0.5}
          amount={0.1}
        >
          <div className="grid grid-cols-1 gap-4">
            {certificates.map((cert, index) => (
              <CertificateItemCard
                key={index}
                certificate={cert}
                onClick={() => handleCertificateClick(cert)}
                animate={true}
              />
            ))}
          </div>
        </StaggerContainer>

        <CertificateDialog
          open={openDialog}
          onOpenChange={setOpenDialog}
          certificate={selectedCertificate}
        />
      </SectionCard>
    </ScrollReveal>
  );
}
