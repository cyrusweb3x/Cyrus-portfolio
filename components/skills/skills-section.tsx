"use client"

import { motion } from "framer-motion"
import { SkillOrbit } from "./skill-orbit"

export function SkillsSection() {
  return (
    <section id="skills" className="relative bg-[#0A0A0F] py-16 md:py-20">
      {/* Section divider top */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      {/* Background accent lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-8 top-1/4 h-32 w-px bg-gradient-to-b from-transparent via-violet-500/30 to-transparent" />
        <div className="absolute right-8 top-1/3 h-48 w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left side - Orbit visualization (desktop) / Grid (mobile) */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Desktop: Orbit */}
            <div className="hidden md:block">
              <SkillOrbit />
            </div>
            {/* Mobile: Orbit (scaled down) */}
            <div className="md:hidden" style={{ transform: "scale(0.6)", transformOrigin: "center center" }}>
              <SkillOrbit />
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <div className="max-w-lg text-center lg:text-left">
            <motion.span
              className="mb-4 inline-block font-mono text-sm uppercase tracking-[0.2em] text-violet-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              MY ARSENAL
            </motion.span>

            <motion.h2
              className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                AI is my superpower.
              </span>
            </motion.h2>

            <motion.p
              className="mb-6 text-lg leading-relaxed text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Every tool serves a purpose. AI at the center. Everything else orbits it. 
              This is how I build faster than teams.
            </motion.p>

            <motion.p
              className="text-sm font-medium text-violet-400/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Solo builder. Zero compromises.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Section divider bottom */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
