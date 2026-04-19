"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <motion.div
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-24 md:pt-28 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Dark backdrop behind text for readability */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-full max-w-3xl h-[420px] rounded-3xl backdrop-blur-[2px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(5, 5, 10, 0.9) 0%, rgba(5, 5, 10, 0.7) 40%, transparent 75%)",
          }}
        />
      </div>

      {/* Welcome label */}
      <motion.span
        variants={itemVariants}
        className="relative mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white"
        style={{ textShadow: "0 0 15px rgba(255,255,255,0.7)" }}
      >
        Welcome to
      </motion.span>

      {/* Main heading - Pure white with purple glow */}
      <motion.h1
        variants={itemVariants}
        className="relative mb-6 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-white"
        style={{ 
          textShadow: "0 0 20px rgba(255,255,255,0.9), 0 0 40px rgba(139,92,246,0.8), 0 0 80px rgba(139,92,246,0.6), 0 0 120px rgba(139,92,246,0.4)",
        }}
      >
        Cyrus&apos;s Universe
      </motion.h1>

      {/* Subtitle - Pure white with subtle glow */}
      <motion.p
        variants={itemVariants}
        className="relative mb-4 text-xl font-medium text-white sm:text-2xl"
        style={{ textShadow: "0 0 15px rgba(255,255,255,0.6)" }}
      >
        Solo Builder. Bangladesh → World.
      </motion.p>

      {/* Description - Pure white with subtle glow */}
      <motion.p
        variants={itemVariants}
        className="relative mb-10 max-w-md text-base text-white/95 sm:text-lg"
        style={{ textShadow: "0 0 10px rgba(255,255,255,0.4)" }}
      >
        I build real products with AI. Shipped to 10M+ users. Solo.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#about"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 animate-pulse-glow sm:text-lg"
      >
        <span className="relative z-10">Explore Universe</span>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-secondary to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="mt-6 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-white/60">
          Scroll
        </span>
        <ChevronDown className="mt-1 h-5 w-5 animate-scroll-indicator text-white/60" />
      </motion.div>
    </motion.div>
  )
}
