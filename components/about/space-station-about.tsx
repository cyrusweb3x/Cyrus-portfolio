"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { StatCounter } from "./stat-counter"

const stats = [
  { value: 10, suffix: "M+", label: "Users on Base App" },
  { value: 76, suffix: "", label: "On-chain Transactions" },
  { value: 124, suffix: "", label: "GitHub Commits" },
  { value: 1, suffix: "", label: "Live Mainnet Product" },
]

function SpaceStationAvatar() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const eyeX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const eyeY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) / 30
      const deltaY = (e.clientY - centerY) / 30
      
      const clampedX = Math.max(-8, Math.min(8, deltaX))
      const clampedY = Math.max(-8, Math.min(8, deltaY))
      
      mouseX.set(clampedX)
      mouseY.set(clampedY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div ref={containerRef} className="relative w-80 h-80 md:w-96 md:h-96">
      {/* Space station window frame - outer */}
      <div className="absolute inset-0 rounded-2xl border-4 border-gray-700 bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl overflow-hidden">
        {/* Window inner glow border */}
        <div className="absolute inset-2 rounded-xl border-2 border-purple-500/30 shadow-[inset_0_0_40px_rgba(124,58,237,0.2)]" />
        
        {/* Station decorative elements */}
        <div className="absolute top-3 left-3 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500/70 animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 rounded-full bg-green-500/70" />
        </div>
        
        {/* Top panel buttons */}
        <div className="absolute top-3 right-3 flex gap-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-3 h-1 rounded-full bg-gray-600" />
          ))}
        </div>
        
        {/* Side panel lines */}
        <div className="absolute left-3 top-12 bottom-12 w-1 flex flex-col gap-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex-1 bg-gray-700 rounded-full" />
          ))}
        </div>
        <div className="absolute right-3 top-12 bottom-12 w-1 flex flex-col gap-2">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex-1 bg-gray-700 rounded-full" />
          ))}
        </div>
        
        {/* Bottom panel */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`w-4 h-4 rounded border border-gray-600 ${i === 2 ? 'bg-purple-500/50' : 'bg-gray-800'}`} />
          ))}
        </div>
        
        {/* Inner window with avatar */}
        <div className="absolute inset-8 rounded-lg bg-[#0A0A0F] overflow-hidden flex items-center justify-center">
          {/* Star background inside window */}
          <div className="absolute inset-0">
            {mounted && [...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>
          
          {/* Geometric Avatar */}
          <div className="relative w-40 h-48">
            {/* Outer glow */}
            <div className="absolute inset-0 blur-xl bg-gradient-to-b from-purple-500/30 to-blue-500/30 rounded-full" />
            
            {/* Head - geometric hexagon style */}
            <svg viewBox="0 0 100 120" className="relative w-full h-full">
              {/* Body glow */}
              <defs>
                <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#4F46E5" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Head outline */}
              <path
                d="M50 10 L75 25 L75 55 L50 70 L25 55 L25 25 Z"
                fill="none"
                stroke="url(#avatarGradient)"
                strokeWidth="2"
                filter="url(#glow)"
              />
              
              {/* Inner face lines */}
              <path
                d="M50 20 L65 30 L65 50 L50 60 L35 50 L35 30 Z"
                fill="rgba(124, 58, 237, 0.1)"
                stroke="url(#avatarGradient)"
                strokeWidth="1"
                opacity="0.6"
              />
              
              {/* Eyes container */}
              <g filter="url(#glow)">
                {/* Left eye */}
                <motion.circle
                  cx={42}
                  cy={40}
                  r="4"
                  fill="#FFFFFF"
                  style={{
                    x: eyeX,
                    y: eyeY,
                  }}
                />
                {/* Right eye */}
                <motion.circle
                  cx={58}
                  cy={40}
                  r="4"
                  fill="#FFFFFF"
                  style={{
                    x: eyeX,
                    y: eyeY,
                  }}
                />
              </g>
              
              {/* Shoulders/Body */}
              <path
                d="M30 75 L50 70 L70 75 L80 100 L70 115 L30 115 L20 100 Z"
                fill="none"
                stroke="url(#avatarGradient)"
                strokeWidth="2"
                filter="url(#glow)"
              />
              
              {/* Body inner lines */}
              <path
                d="M40 80 L50 75 L60 80 L65 95 L60 105 L40 105 L35 95 Z"
                fill="rgba(79, 70, 229, 0.15)"
                stroke="url(#avatarGradient)"
                strokeWidth="1"
                opacity="0.5"
              />
              
              {/* Center chest detail */}
              <circle cx="50" cy="90" r="5" fill="url(#avatarGradient)" opacity="0.6" filter="url(#glow)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SpaceStationAbout() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section id="about" className="relative bg-[#0A0A0F] py-16 md:py-20 overflow-hidden">
      {/* Section divider top */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      {/* Background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-purple-400 tracking-[0.3em] uppercase">
            Who Am I
          </span>
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Left side - Floating info */}
          <motion.div
            className="hidden lg:flex flex-col items-end gap-6 text-right"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-1">
              <span className="text-xs font-mono text-purple-400/70 uppercase tracking-wider">Name</span>
              <p className="text-2xl font-bold text-white">Cyrus</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-purple-400/70 uppercase tracking-wider">Role</span>
              <p className="text-lg text-gray-300">Solo Builder</p>
            </div>
          </motion.div>

          {/* Center - Space Station Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SpaceStationAvatar />
          </motion.div>

          {/* Right side - Location and Quote */}
          <motion.div
            className="hidden lg:flex flex-col items-start gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-1">
              <span className="text-xs font-mono text-purple-400/70 uppercase tracking-wider">Location</span>
              <p className="text-lg text-gray-300">Bangladesh → World</p>
            </div>
            <div className="space-y-2 max-w-xs">
              <span className="text-xs font-mono text-purple-400/70 uppercase tracking-wider">Philosophy</span>
              <p className="text-sm text-gray-400 italic leading-relaxed">
                &quot;I don&apos;t just write code.<br/>
                I build universes.<br/>
                With AI as my co-pilot.&quot;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile info - shown only on small screens */}
        <motion.div
          className="lg:hidden mt-10 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex justify-center gap-12">
            <div className="space-y-1">
              <span className="text-xs font-mono text-purple-400/70 uppercase tracking-wider">Name</span>
              <p className="text-xl font-bold text-white">Cyrus</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-purple-400/70 uppercase tracking-wider">Role</span>
              <p className="text-lg text-gray-300">Solo Builder</p>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-xs font-mono text-purple-400/70 uppercase tracking-wider">Location</span>
            <p className="text-gray-300">Bangladesh → World</p>
          </div>
          <p className="text-sm text-gray-400 italic max-w-xs mx-auto">
            &quot;I don&apos;t just write code. I build universes. With AI as my co-pilot.&quot;
          </p>
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="mt-16 pt-12 border-t border-purple-500/20"
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
      
      {/* Section divider bottom */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  )
}
