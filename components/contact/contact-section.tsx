"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { RadioWaves } from "./radio-waves"
import { FloatingSocials } from "./floating-socials"
import { ContactForm } from "./contact-form"

export function ContactSection() {
  const [isTransmitting, setIsTransmitting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleTransmit = () => {
    setIsTransmitting(true)
    setTimeout(() => setIsTransmitting(false), 2000)
  }

  return (
    <section id="contact" className="relative min-h-screen bg-[#0A0A0F] py-16 md:py-20 overflow-hidden">
      {/* Section divider top */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      
      {/* Star field background */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && [...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `contactTwinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      {/* Radio waves background */}
      <RadioWaves isTransmitting={isTransmitting} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Section header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-mono text-purple-400 tracking-[0.3em] mb-4">
            TRANSMISSION
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Send a Signal
          </h2>
          <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
            Pick your frequency.
          </p>
        </motion.div>

        {/* Space station */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div
            className="w-20 h-20 md:w-24 md:h-24 relative"
            animate={{
              boxShadow: [
                "0 0 20px rgba(168,85,247,0.3), 0 0 40px rgba(168,85,247,0.1)",
                "0 0 30px rgba(168,85,247,0.5), 0 0 60px rgba(168,85,247,0.2)",
                "0 0 20px rgba(168,85,247,0.3), 0 0 40px rgba(168,85,247,0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ borderRadius: "30% 70% 60% 40% / 50% 40% 60% 50%" }}
          >
            {/* Station body */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-[#12121a] to-blue-600/30 border border-purple-500/40"
              style={{ borderRadius: "30% 70% 60% 40% / 50% 40% 60% 50%" }}
            />
            {/* Station inner glow */}
            <div
              className="absolute inset-2 bg-gradient-to-br from-purple-500/20 to-blue-500/10 flex items-center justify-center"
              style={{ borderRadius: "30% 70% 60% 40% / 50% 40% 60% 50%" }}
            >
              <svg className="w-8 h-8 md:w-10 md:h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating social asteroids */}
        <FloatingSocials />

        {/* Contact form */}
        <ContactForm onTransmit={handleTransmit} />
      </div>

      <style jsx>{`
        @keyframes contactTwinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  )
}
