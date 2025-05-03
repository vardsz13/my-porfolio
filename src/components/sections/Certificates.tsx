import React, { useState } from "react";
import SectionCard from "@/components/ui/SectionCard";
import { FaCertificate } from "react-icons/fa";
import CertificateItemCard from "@/components/ui/CertificateItemCard";
import CertificateDialog from "@/components/ui/CertificateDialog";
import { certificates } from "@/data/certificates";
import { CertificateItem } from "@/types/certificate";

export default function Certificates() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateItem | null>(null);

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
          <CertificateItemCard
            key={index}
            certificate={cert}
            onClick={() => handleCertificateClick(cert)}
          />
        ))}
      </div>

      <CertificateDialog
        open={openDialog}
        onOpenChange={setOpenDialog}
        certificate={selectedCertificate}
      />
    </SectionCard>
  );
}
