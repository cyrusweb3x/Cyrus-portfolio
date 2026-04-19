"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const asteroids = [
  {
    name: "@CyrusWeb3X",
    href: "https://x.com/CyrusWeb3X",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    glowColor: "rgba(59, 130, 246, 0.6)",
    hoverGlow: "0 0 30px rgba(59, 130, 246, 0.7), 0 0 60px rgba(59, 130, 246, 0.3)",
    borderColor: "border-blue-500/30",
    hoverBorder: "hover:border-blue-400",
    hoverText: "group-hover:text-blue-400",
    bgGradient: "from-blue-900/40 to-slate-900/60",
    floatDuration: 4,
    floatY: [-6, 6, -6],
    floatX: [3, -3, 3],
    shape: "rounded-[40%_60%_55%_45%/50%_40%_60%_50%]",
    size: "w-16 h-16",
  },
  {
    name: "cyrusweb3x",
    href: "https://github.com/cyrusweb3x",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    glowColor: "rgba(168, 85, 247, 0.5)",
    hoverGlow: "0 0 30px rgba(168, 85, 247, 0.7), 0 0 60px rgba(168, 85, 247, 0.3)",
    borderColor: "border-purple-500/30",
    hoverBorder: "hover:border-purple-400",
    hoverText: "group-hover:text-purple-400",
    bgGradient: "from-purple-900/40 to-slate-900/60",
    floatDuration: 5,
    floatY: [5, -7, 5],
    floatX: [-4, 4, -4],
    shape: "rounded-[55%_45%_50%_50%/45%_55%_45%_55%]",
    size: "w-16 h-16",
  },
  {
    name: "7cyrus",
    href: "https://warpcast.com/7cyrus",
    icon: (
      <span className="text-base font-bold">F</span>
    ),
    glowColor: "rgba(139, 92, 246, 0.5)",
    hoverGlow: "0 0 30px rgba(139, 92, 246, 0.7), 0 0 60px rgba(139, 92, 246, 0.3)",
    borderColor: "border-violet-500/30",
    hoverBorder: "hover:border-violet-400",
    hoverText: "group-hover:text-violet-400",
    bgGradient: "from-violet-900/40 to-slate-900/60",
    floatDuration: 4.5,
    floatY: [-5, 8, -5],
    floatX: [2, -5, 2],
    shape: "rounded-[45%_55%_60%_40%/55%_45%_50%_50%]",
    size: "w-14 h-14",
  },
  {
    name: "Email",
    href: "mailto:contact@cyrus.dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    glowColor: "rgba(234, 179, 8, 0.5)",
    hoverGlow: "0 0 30px rgba(234, 179, 8, 0.7), 0 0 60px rgba(234, 179, 8, 0.3)",
    borderColor: "border-yellow-500/30",
    hoverBorder: "hover:border-yellow-400",
    hoverText: "group-hover:text-yellow-400",
    bgGradient: "from-yellow-900/40 to-slate-900/60",
    floatDuration: 3.5,
    floatY: [4, -6, 4],
    floatX: [-3, 2, -3],
    shape: "rounded-[50%_50%_45%_55%/40%_60%_45%_55%]",
    size: "w-12 h-12",
  },
]

export function FloatingSocials() {
  return (
    <div className="relative z-10 flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12">
      {asteroids.map((asteroid, index) => (
        <motion.div
          key={asteroid.name}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.15, duration: 0.5, type: "spring" }}
        >
          <Link
            href={asteroid.href}
            target={asteroid.href.startsWith("mailto") ? undefined : "_blank"}
            rel={asteroid.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="group relative flex flex-col items-center gap-3"
          >
            {/* Asteroid body */}
            <motion.div
              className={`relative ${asteroid.size} ${asteroid.shape} bg-gradient-to-br ${asteroid.bgGradient} border ${asteroid.borderColor} ${asteroid.hoverBorder} flex items-center justify-center text-gray-400 ${asteroid.hoverText} transition-all duration-300 cursor-pointer`}
              animate={{
                y: asteroid.floatY,
                x: asteroid.floatX,
              }}
              whileHover={{
                scale: 1.15,
                boxShadow: asteroid.hoverGlow,
                y: 0,
                x: 0,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                y: { duration: asteroid.floatDuration, repeat: Infinity, ease: "easeInOut" },
                x: { duration: asteroid.floatDuration * 1.3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.2 },
                boxShadow: { duration: 0.3 },
              }}
            >
              {asteroid.icon}
            </motion.div>

            {/* Label */}
            <span className="text-xs font-mono text-gray-500 group-hover:text-gray-300 transition-colors">
              {asteroid.name}
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
