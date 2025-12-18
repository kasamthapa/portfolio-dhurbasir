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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ResearchSection />
      <BooksSection />
      <AwardsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
