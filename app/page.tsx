import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { BePartSection } from "@/components/be-part-section"
import { ChildrensHomeSection } from "@/components/childrens-home-section"
import { NewsSection } from "@/components/news-section"
import { DonateSection } from "@/components/donate-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BePartSection />
      <ChildrensHomeSection />
      <NewsSection />
      <DonateSection />
      <ContactSection />
    </main>
  )
}
