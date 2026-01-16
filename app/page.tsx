import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import MiddleBanner from "@/components/middle-banner"
import ExploreByCategories from "@/components/shop-by-categories"
import BottomBanner from "@/components/bottom-banner"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <MiddleBanner />
        <ExploreByCategories />
        <BottomBanner />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </div>
  )
}
