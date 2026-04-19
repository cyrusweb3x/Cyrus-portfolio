"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "Base Capsule",
    badge: "LIVE ON BASE MAINNET",
    badgeType: "live" as const,
    description: `Time-locked crypto gifting protocol.
Send ETH or USDC sealed until a future date.
Listed on Base App with 10M+ downloads.`,
    stats: "10 Users | 76 Transactions | Base App",
    tags: ["Solidity", "Next.js", "Web3", "Base"],
    links: {
      live: "https://basecapsule.xyz",
      github: "https://github.com",
      basescan: "https://basescan.org",
    },
    featured: true,
  },
  {
    title: "More Coming Soon",
    badge: "IN PROGRESS",
    badgeType: "progress" as const,
    description: `Building in public.
Follow the journey.`,
    tags: ["Web3", "AI", "Base"],
    featured: false,
  },
  {
    title: "More Coming Soon",
    badge: "IN PROGRESS",
    badgeType: "progress" as const,
    description: `Building in public.
Follow the journey.`,
    tags: ["Web3", "AI", "Base"],
    featured: false,
  },
  {
    title: "More Coming Soon",
    badge: "IN PROGRESS",
    badgeType: "progress" as const,
    description: `Building in public.
Follow the journey.`,
    tags: ["Web3", "AI", "Base"],
    featured: false,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen overflow-hidden bg-[#0A0A0F] py-24 md:py-32">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block font-mono text-sm tracking-[0.3em] text-purple-400">
            MY WORK
          </span>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Projects that{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              ship
            </span>
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title + index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
