"use client"

import { motion } from "framer-motion"
import { AnimatedAvatar } from "./animated-avatar"
import { FloatingCode } from "./floating-code"
import { StatCounter } from "./stat-counter"

const stats = [
  { value: 10, suffix: "M+", label: "Users on Base App" },
  { value: 76, suffix: "", label: "On-chain Transactions" },
  { value: 124, suffix: "", label: "GitHub Commits" },
  { value: 1, suffix: "", label: "Live Mainnet Product" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen bg-background py-24 md:py-32 overflow-hidden">
      {/* Floating code snippets background */}
      <FloatingCode />

      {/* Purple accent lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary tracking-[0.3em] uppercase">
            Who Am I
          </span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Avatar */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <AnimatedAvatar />
          </motion.div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Not your typical developer.
            </motion.h2>

            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {"I'm Cyrus. A solo builder from Bangladesh taking on the world — one product at a time."}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {"I don't write code the traditional way. I think deeply. I design carefully. I direct AI precisely. Together we ship real products."}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="text-foreground font-medium">Base Capsule</span>
                {" — my latest build. Live on Base App. 10M+ potential users. Built solo. No team. No VC. Just vision."}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          className="mt-24 md:mt-32 pt-16 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <StatCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.15}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
