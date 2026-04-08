import { AnnouncementBar } from "@/components/announcement-bar";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { HeadlineSection } from "@/components/headline-section";
import { ScienceSection } from "@/components/science-section";
import { ProductShowcase } from "@/components/product-showcase";
import { EthosSection } from "@/components/ethos-section";
import { ProductCards } from "@/components/product-cards";
import { CTASection } from "@/components/cta-section";
import { PressMarquee } from "@/components/press-marquee";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-col gap-6 md:gap-10">
        <HeroSection />
        <HeadlineSection />
        <ScienceSection />
        <ProductShowcase />
        <EthosSection />
        <ProductCards />
        <CTASection />
        <PressMarquee />
      </main>
      <Footer />
    </>
  );
}
