import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import OurCollections from "@/components/our-collections"
import MiddleBanner from "@/components/middle-banner"
import ShopByCategories from "@/components/shop-by-categories"
import BottomBanner from "@/components/bottom-banner"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <OurCollections />
        <MiddleBanner />
        <ShopByCategories />
        <BottomBanner />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </div>
  )
}
