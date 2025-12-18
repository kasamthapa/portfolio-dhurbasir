"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const books = [
  {
    title: "Business Communication",
    publisher: "Sunrise Publication",
    level: "BBS 1st Year",
    cover: "/images/books/book-1.png",
  },
  {
    title: "English for Business",
    publisher: "Guinness Publications",
    level: "BBS Program",
    cover: "/images/books/book-2.png",
  },
  {
    title: "Compulsory English",
    publisher: "Ocean Books",
    level: "Grade 11",
    cover: "/images/books/book-3.png",
  },
  {
    title: "Business English",
    publisher: "Vidhyarthi Publication",
    level: "BBA Program",
    cover: "/images/books/book-4.png",
  },
  {
    title: "Academic Writing",
    publisher: "Delight Print Publication",
    level: "Bachelor Level",
    cover: "/images/books/book-5.png",
  },
  {
    title: "English Literature",
    publisher: "Megha Publications",
    level: "Bachelor Level",
    cover: "/images/books/book-6.png",
  },
  {
    title: "Business Communication",
    publisher: "Sunrise Publication",
    level: "BBS 1st Year",
    cover: "/images/books/book-1.png",
  },
  {
    title: "English for Business",
    publisher: "Guinness Publications",
    level: "BBS Program",
    cover: "/images/books/book-2.png",
  },
  {
    title: "Compulsory English",
    publisher: "Ocean Books",
    level: "Grade 11",
    cover: "/images/books/book-3.png",
  },
  {
    title: "Business English",
    publisher: "Vidhyarthi Publication",
    level: "BBA Program",
    cover: "/images/books/book-4.png",
  },
  {
    title: "Academic Writing",
    publisher: "Delight Print Publication",
    level: "Bachelor Level",
    cover: "/images/books/book-5.png",
  },
  {
    title: "English Literature",
    publisher: "Megha Publications",
    level: "Bachelor Level",
    cover: "/images/books/book-6.png",
  },
];

export function BooksSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Calculate active index for indicator
      const itemWidth = 200;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.6;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="books"
      ref={ref}
      className="py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div
          className={cn(
            "mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground">
                04 — Publications
              </span>
              <div
                className={cn(
                  "h-px bg-border mt-4 mb-5 transition-all duration-1000 ease-out",
                  isInView ? "w-8" : "w-0"
                )}
                style={{ transitionDelay: "200ms" }}
              />
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground leading-tight">
                Authored Books
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md hidden sm:block">
                Educational textbooks widely used across Nepal.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                  className={cn(
                    "w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center border border-border transition-all duration-500",
                    canScrollLeft
                      ? "hover:bg-foreground hover:text-background hover:border-foreground cursor-pointer"
                      : "opacity-30 cursor-not-allowed"
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
                      ? "hover:bg-foreground hover:text-background hover:border-foreground cursor-pointer"
                      : "opacity-30 cursor-not-allowed"
                  )}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className={cn(
          "flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pb-4 transition-all duration-1000 ease-out",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "300ms" }}
      >
        <div className="hidden xl:block shrink-0 w-[calc((100vw-1400px)/2)]" />

        {books.map((book, index) => (
          <div
            key={index}
            className={cn(
              "group shrink-0 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] transition-all duration-700 ease-out",
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            )}
            style={{ transitionDelay: `${400 + index * 50}ms` }}
          >
            {/* Book Cover with enhanced hover */}
            <div className="relative aspect-[3/4] bg-muted mb-3 sm:mb-4 overflow-hidden border border-border group-hover:shadow-xl transition-all duration-500">
              <Image
                src={
                  book.cover ||
                  "/placeholder.svg?height=320&width=240&query=book cover"
                }
                alt={book.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-background text-xs font-medium">
                  View Details
                </span>
              </div>
            </div>

            {/* Book Info */}
            <div className="space-y-1">
              <h3 className="font-serif text-sm sm:text-base text-foreground leading-tight line-clamp-2 group-hover:text-muted-foreground transition-colors duration-500">
                {book.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground">
                {book.publisher}
              </p>
              <p className="text-[10px] sm:text-[11px] text-muted-foreground/60">
                {book.level}
              </p>
            </div>
          </div>
        ))}

        <div className="shrink-0 w-4 sm:w-6 md:w-8" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div
          className={cn(
            "flex justify-center gap-1.5 mt-6 transition-all duration-1000 ease-out",
            isInView ? "opacity-100" : "opacity-0"
          )}
          style={{ transitionDelay: "600ms" }}
        >
          {Array.from({ length: Math.ceil(books.length / 3) }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                Math.floor(activeIndex / 3) === i
                  ? "w-6 bg-foreground"
                  : "w-1.5 bg-foreground/20"
              )}
            />
          ))}
        </div>

        {/* Stats Footer */}
        <div
          className={cn(
            "mt-10 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-border transition-all duration-1000 ease-out",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <p className="text-muted-foreground">
              <span className="font-serif text-3xl sm:text-4xl text-foreground mr-2">
                45+
              </span>
              <span className="text-xs sm:text-sm">
                textbooks published across multiple publishers
              </span>
            </p>
            <span className="text-[10px] sm:text-[11px] tracking-[0.1em] uppercase text-muted-foreground/60">
              Sunrise · Guinness · Ocean · Vidhyarthi · Delight · Megha
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
