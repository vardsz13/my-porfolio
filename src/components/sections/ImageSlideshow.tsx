import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaImages } from "react-icons/fa";

interface ImageItem {
  src: string;
  alt?: string;
}

interface ImageSlideshowProps {
  images: ImageItem[];
  title?: string;
  speed?: number; // Lower = faster
  className?: string;
}

export default function ImageSlideshow({
  images,
  title = "My Journey",
  speed = 30, // Animation speed (lower = faster)
  className = "",
}: ImageSlideshowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate the images to create a seamless loop
  const allImages = [...images, ...images];

  // Handle the continuous horizontal scroll animation
  useEffect(() => {
    if (!scrollRef.current || images.length <= 3) return;

    let animationId: number;
    let position = 0;
    const imageWidth = 180; // Width of each image + margin
    const totalWidth = images.length * imageWidth;

    const scroll = () => {
      if (!scrollRef.current) return;

      position += 1; // Speed of scrolling

      // Reset position when we've scrolled through half the images (original set)
      if (position >= totalWidth) {
        position = 0;
      }

      scrollRef.current.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [images.length, speed]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Card id="journey" className={`scroll-mt-20 overflow-hidden ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <div className="text-xl text-primary dark:text-primary-400">
            <FaImages aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Scrolling image container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fading effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-zinc-100 dark:from-zinc-950 to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-zinc-100 dark:from-zinc-950 to-transparent"></div>

          {/* Image scroll area */}
          <div className="py-4 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-4 whitespace-nowrap"
              style={{ willChange: "transform" }}
            >
              {allImages.map((image, index) => (
                <div
                  key={index}
                  className="w-40 h-28 flex-shrink-0 rounded-md overflow-hidden"
                >
                  <img
                    src={image.src}
                    alt={image.alt || `Image ${(index % images.length) + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
