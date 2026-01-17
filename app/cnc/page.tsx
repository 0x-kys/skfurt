import Header from "@/components/header";
import Footer from "@/components/footer";
import CncHero from "@/components/cnc-hero";
import CncShowcase from "@/components/cnc-showcase";
import CncCapabilities from "@/components/cnc-capabilities";
import BottomBanner from "@/components/bottom-banner";

export default function CncPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main>
        <CncHero />
        <CncShowcase />
        <CncCapabilities />
        <BottomBanner />
      </main>
      <Footer />
    </div>
  );
}