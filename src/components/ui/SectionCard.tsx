import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SectionCardProps {
  title: string;
  icon?: ReactNode | string;
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionCard({
  title,
  icon,
  children,
  id,
  className,
}: SectionCardProps) {
  return (
    <Card id={id} className={`scroll-mt-20  ${className}`}>
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="text-xl text-primary dark:text-primary-400">
            {icon}
          </div>
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">{children}</CardContent>
    </Card>
  );
}
