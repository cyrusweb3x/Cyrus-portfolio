import { HeroSection } from "@/components/hero/hero-section"
import { SpaceStationAbout } from "@/components/about/space-station-about"
import { SkillsSection } from "@/components/skills/skills-section"
import { SolarSystemProjects } from "@/components/projects/solar-system-projects"
import { ContactSection } from "@/components/contact/contact-section"
import { Navbar } from "@/components/navbar/navbar"
import { FloatingParticles } from "@/components/effects/floating-particles"
import { Footer } from "@/components/footer/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingParticles />
      <main className="scroll-smooth relative z-10">
        <HeroSection />
        <SpaceStationAbout />
        <SkillsSection />
        <SolarSystemProjects />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
