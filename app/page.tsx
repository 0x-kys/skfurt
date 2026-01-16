import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import MiddleBanner from "@/components/middle-banner"
import ShopByCategories from "@/components/shop-by-categories"
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
        <ShopByCategories />
        <BottomBanner />
      </main>
      <Footer />
    </div>
  )
}
