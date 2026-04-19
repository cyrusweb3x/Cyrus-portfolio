"use client"

import dynamic from "next/dynamic"
import { HeroContent } from "./hero-content"

// Dynamically import Three.js scene to avoid SSR issues
const ParticleScene = dynamic(
  () => import("./particle-scene").then((mod) => mod.ParticleScene),
  { ssr: false }
)

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Radial gradient overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, #0A0A0F 70%)",
        }}
      />
      
      {/* Three.js Canvas */}
      <ParticleScene />
      
      {/* Text Content */}
      <HeroContent />
    </section>
  )
}
