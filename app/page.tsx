import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { BooksSection } from "@/components/books-section";
import { ResearchSection } from "@/components/research-section";
import { AwardsSection } from "@/components/awards-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";
import { FloatingElements } from "@/components/floating-element";
import { SectionDivider } from "@/components/section-divider";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden relative">
      <ScrollProgress />
      <CursorGlow />
      <FloatingElements />

      <Navigation />
      <HeroSection />
      <SectionDivider variant="minimal" />
      <AboutSection />
      <SectionDivider variant="accent" />
      <ExperienceSection />
      <ResearchSection />
      <SectionDivider variant="minimal" />
      <BooksSection />
      <SectionDivider variant="accent" />
      <AwardsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
