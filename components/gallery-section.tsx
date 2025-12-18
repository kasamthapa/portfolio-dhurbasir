"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery/conference-presentation.png",
    alt: "International Conference Presentation",
    category: "Conferences",
  },
  {
    src: "/images/gallery/faculty-workshop.jpg",
    alt: "Faculty Workshop Session",
    category: "Workshops",
  },
  {
    src: "/images/gallery/award-ceremony.png",
    alt: "Award Ceremony",
    category: "Awards",
  },
  {
    src: "/images/gallery/academic-seminar.jpg",
    alt: "Academic Seminar",
    category: "Seminars",
  },
  {
    src: "/images/gallery/book-launch-event.jpg",
    alt: "Book Launch Event",
    category: "Publications",
  },
  {
    src: "/images/gallery/panel-discussion.png",
    alt: "Panel Discussion",
    category: "Conferences",
  },
  {
    src: "/images/gallery/conference-keynote.png",
    alt: "Conference Keynote",
    category: "Conferences",
  },
  {
    src: "/images/gallery/modern-conference-hall.png",
    alt: "Modern Conference Hall",
    category: "Conferences",
  },
  {
    src: "/images/gallery/training-session.jpg",
    alt: "Training Session",
    category: "Workshops",
  },
  {
    src: "/images/gallery/recognition-ceremony.jpg",
    alt: "Recognition Ceremony",
    category: "Awards",
  },
];

export function GallerySection() {
  const { ref, isInView } = useInView({ threshold: 0.05 });
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(
      (img) => img.src === selectedImage.src
    );
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
        : (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
    setSelectedIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  return (
    <>
      <section
        id="gallery"
        ref={ref}
        className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 bg-secondary/30 overflow-hidden"
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
              <div
                className={cn(
                  "h-px bg-border transition-all duration-1000 ease-out",
                  isInView ? "w-8" : "w-0"
                )}
                style={{ transitionDelay: "150ms" }}
              />
              <h2
                className={cn(
                  "font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground leading-tight transition-all duration-1000 ease-out",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "100ms" }}
              >
                Visual Documentation
              </h2>
              <p
                className={cn(
                  "text-sm sm:text-base text-muted-foreground max-w-md transition-all duration-1000 ease-out",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: "150ms" }}
              >
                Capturing moments from conferences, workshops, award ceremonies,
                and academic engagements.
              </p>
            </div>

            {/* Navigation */}
            <div
              className={cn(
                "flex items-center gap-3 transition-all duration-1000 ease-out",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: "200ms" }}
            >
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={cn(
                  "w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-border transition-all duration-500",
                  canScrollLeft
                    ? "text-foreground hover:bg-foreground hover:text-background hover:border-foreground"
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
                  "w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-border transition-all duration-500",
                  canScrollRight
                    ? "text-foreground hover:bg-foreground hover:text-background hover:border-foreground"
                    : "text-muted-foreground/30 cursor-not-allowed"
                )}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            className={cn(
              "flex flex-wrap gap-2 mb-6 lg:mb-8 transition-all duration-1000 ease-out",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
            style={{ transitionDelay: "250ms" }}
          >
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={cn(
                  "px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm transition-all duration-500",
                  filter === category
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground border border-border hover:border-foreground"
                )}
                style={{ transitionDelay: `${300 + index * 50}ms` }}
              >
                {category}
              </button>
            ))}
          </div>

          <div
            ref={scrollContainerRef}
            className={cn(
              "flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12 transition-all duration-1000 ease-out",
              isInView ? "opacity-100" : "opacity-0"
            )}
            style={{ transitionDelay: "350ms" }}
          >
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className={cn(
                  "group relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] aspect-[4/3] overflow-hidden bg-muted cursor-pointer transition-all duration-700 ease-out",
                  isInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                )}
                style={{ transitionDelay: `${400 + index * 75}ms` }}
                onClick={() => {
                  setSelectedImage(image);
                  setSelectedIndex(index);
                }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-background text-sm sm:text-base font-medium">
                    {image.alt}
                  </p>
                  <p className="text-background/70 text-xs mt-1">
                    {image.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/98 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-background/70 hover:text-background transition-colors duration-300 z-10 p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-background/50 hover:text-background transition-colors duration-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-background/50 hover:text-background transition-colors duration-300 z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full h-full m-4 sm:m-8 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-0 right-0 text-center animate-blur-in">
            <p className="text-background text-base sm:text-lg font-medium">
              {selectedImage.alt}
            </p>
            <p className="text-background/60 text-xs sm:text-sm mt-1">
              {selectedImage.category} · {selectedIndex + 1} /{" "}
              {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
