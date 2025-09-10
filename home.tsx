import { ParticlesBackground } from "@/components/particles-background";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { DownloadSection } from "@/components/download-section";
import { CommunitySection } from "@/components/community-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <DownloadSection />
        <CommunitySection />
        <Footer />
      </div>
    </div>
  );
}
