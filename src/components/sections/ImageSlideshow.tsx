import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaImages } from "react-icons/fa";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations";

interface ImageItem {
  src: string;
  alt?: string;
}

interface ImageSlideshowProps {
  images: ImageItem[];
  title?: string;
  speed?: number; // Higher = faster
  className?: string;
}

export default function ImageSlideshow({
  images,
  title = "My Journey",
  speed = 30, // Animation speed (higher = faster)
  className = "",
}: ImageSlideshowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate the images to create a seamless loop
  const allImages = [...images, ...images, ...images]; // Triple the images for smoother looping

  // Handle the continuous horizontal scroll animation
  useEffect(() => {
    if (!scrollRef.current || !containerRef.current || images.length <= 3)
      return;

    let animationId: number;
    let position = 0;
    let lastTimestamp: number | null = null;
    const imageWidth = 180; // Width of each image + margin
    const totalWidth = images.length * imageWidth;

    // Pixels per second (adjusted by speed parameter)
    const pixelsPerSecond = speed * 2;

    const scroll = (timestamp: number) => {
      if (!scrollRef.current || !containerRef.current) return;

      // Calculate elapsed time since last frame
      if (lastTimestamp === null) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Calculate how much to move based on elapsed time and speed
      const delta = (pixelsPerSecond * elapsed) / 1000;
      position += delta;

      // Reset position when we've scrolled through the original set
      // This creates a seamless loop since we have 3 sets of images
      if (position >= totalWidth) {
        position = 0;
        // Instantly reset to start without visual jump
        scrollRef.current.style.transition = "none";
        scrollRef.current.style.transform = `translateX(-${position}px)`;
        // Force a reflow to ensure the transition is disabled
        void scrollRef.current.offsetWidth;
        // Re-enable transition for smooth movement
        scrollRef.current.style.transition = "";
      } else {
        scrollRef.current.style.transform = `translateX(-${position}px)`;
      }

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
    <ScrollReveal direction="up" threshold={0.2}>
      <Card
        id="journey"
        className={`scroll-mt-20 overflow-hidden ${className}`}
      >
        <CardHeader className="pb-3">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-xl text-primary dark:text-primary-400">
              <FaImages aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
          </motion.div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Scrolling image container */}
          <div className="relative overflow-hidden" ref={containerRef}>
            {/* Gradient overlays for fading effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-zinc-100 dark:from-zinc-950 to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-zinc-100 dark:from-zinc-950 to-transparent"></div>

            {/* Image scroll area */}
            <motion.div
              className="py-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                ref={scrollRef}
                className="flex gap-4 whitespace-nowrap"
                style={{
                  willChange: "transform",
                }}
              >
                {allImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="w-40 h-28 flex-shrink-0 rounded-md overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt || `Image ${(index % images.length) + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
}
