import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { WelcomeSection } from "../components/WelcomeSection";
import { MenuSection } from "../components/MenuSection";
import { GallerySection } from "../components/GallerySection";
import { CateringSection } from "../components/CateringSection";
import { AboutSection } from "../components/AboutSection";
import { NewsletterSection } from "../components/NewsletterSection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <MenuSection />
        <GallerySection />
        <CateringSection />
        <AboutSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
