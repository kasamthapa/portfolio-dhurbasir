"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery/conference-1.png",
    alt: "International Conference Presentation",
    category: "Conferences",
  },
  {
    src: "/images/gallery/workshop-1.png",
    alt: "Faculty Workshop Session",
    category: "Workshops",
  },
  {
    src: "/images/gallery/award-1.png",
    alt: "Award Ceremony",
    category: "Awards",
  },
  {
    src: "/images/gallery/seminar-1.png",
    alt: "Academic Seminar",
    category: "Seminars",
  },
  {
    src: "/images/gallery/book-launch-1.png",
    alt: "Book Launch Event",
    category: "Publications",
  },
  {
    src: "/images/gallery/conference-2.png",
    alt: "Panel Discussion",
    category: "Conferences",
  },
  {
    src: "/images/gallery/conference-3.png",
    alt: "Panel Discussion",
    category: "Conferences",
  },
  {
    src: "/images/gallery/conference-4.png",
    alt: "Panel Discussion",
    category: "Conferences",
  },
  {
    src: "/images/gallery/workshop-2.png",
    alt: "Training Session",
    category: "Workshops",
  },
  {
    src: "/images/gallery/award-2.png",
    alt: "Recognition Ceremony",
    category: "Awards",
  },
];

export function GallerySection() {
  const { ref, isInView } = useInView({ threshold: 0.05 });
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);
  const [filter, setFilter] = useState<string>("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categories = [
    "All",
    "Conferences",
    "Workshops",
    "Awards",
    "Seminars",
    "Publications",
  ];

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, [filteredImages]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section
        id="gallery"
        ref={ref}
        className="py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 bg-secondary/30 overflow-x-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 lg:mb-12">
            <div className="space-y-4">
              <span
                className={cn(
                  "text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-muted-foreground/70 transition-all duration-1000 ease-out",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                06 — Gallery
              </span>
              <h2
                className={cn(
                  "font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground leading-tight transition-all duration-1000 ease-out delay-100",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                Visual Documentation
              </h2>
              <p
                className={cn(
                  "text-sm sm:text-base text-muted-foreground max-w-md transition-all duration-1000 ease-out delay-150",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                Capturing moments from conferences, workshops, award ceremonies,
                and academic engagements.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div
              className={cn(
                "flex items-center gap-2 transition-all duration-1000 ease-out delay-200",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
            >
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={cn(
                  "p-2 border border-border transition-all duration-300",
                  canScrollLeft
                    ? "text-foreground hover:bg-foreground hover:text-background"
                    : "text-muted-foreground/30 cursor-not-allowed"
                )}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={cn(
                  "p-2 border border-border transition-all duration-300",
                  canScrollRight
                    ? "text-foreground hover:bg-foreground hover:text-background"
                    : "text-muted-foreground/30 cursor-not-allowed"
                )}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filter tabs */}
          <div
            className={cn(
              "flex flex-wrap gap-2 mb-6 lg:mb-8 transition-all duration-1000 ease-out delay-200",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-3 py-1.5 text-xs sm:text-sm transition-all duration-500",
                  filter === category
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground border border-border"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Horizontal Scrolling Gallery */}
          <div
            ref={scrollContainerRef}
            className={cn(
              "flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 transition-all duration-1000 ease-out delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="group relative flex-shrink-0 w-[260px] sm:w-[300px] lg:w-[340px] aspect-[4/3] overflow-hidden bg-muted cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
                />
                {/* Hover overlay with info */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-500 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-background text-sm font-medium">
                      {image.alt}
                    </p>
                    <p className="text-background/70 text-xs mt-1">
                      {image.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div
            className={cn(
              "flex justify-center mt-6 gap-1 transition-all duration-1000 ease-out delay-400",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            {filteredImages.map((_, index) => (
              <div
                key={index}
                className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-background/70 hover:text-background transition-colors duration-500 z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 text-center">
            <p className="text-background text-base sm:text-lg">
              {selectedImage.alt}
            </p>
            <p className="text-background/60 text-xs sm:text-sm mt-1">
              {selectedImage.category}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
