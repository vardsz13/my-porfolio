import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Module = {
  title: string;
  description?: string;
  imageUrl?: string;
};

type ProjectModuleDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  module: Module | null;
};

export default function ProjectModuleDialog({
  open,
  onOpenChange,
  module,
}: ProjectModuleDialogProps) {
  if (!module) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="bg-black/80" />
      <DialogContent
        className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl max-h-[90vh] overflow-y-auto p-0 border-none bg-white dark:bg-zinc-800 shadow-xl rounded-xl"
        closeButton={false}
      >
        {/* Single close button positioned in the top right */}
        <div className="absolute top-5 right-5 z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="h-9 w-9 rounded-full bg-white/90 dark:bg-zinc-700/90 hover:bg-white dark:hover:bg-zinc-700 shadow-md"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        {/* Image displayed prominently */}
        {module.imageUrl && (
          <div className="w-full flex justify-center bg-black/5 dark:bg-black/30 p-2 sm:p-4 md:p-4">
            <div className="max-h-[100vh] overflow-hidden rounded-lg shadow-lg">
              <img
                src={module.imageUrl}
                alt={module.title}
                className="w-auto max-w-full h-auto max-h-[100vh] object-contain"
              />
            </div>
          </div>
        )}

        {/* Content section with padding */}
        <div className="px-4 py-3 sm:px-6 sm:py-4">
          <DialogHeader className="text-left mb-3 sm:mb-4">
            <DialogTitle className="text-xl md:text-2xl lg:text-3xl font-bold">
              {module.title}
            </DialogTitle>
          </DialogHeader>

          {module.description && (
            <div className="prose dark:prose-invert max-w-none text-base md:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <p className="mb-2">{module.description}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
