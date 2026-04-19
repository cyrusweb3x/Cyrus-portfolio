"use client"

import { motion } from "framer-motion"

export function AnimatedAvatar() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80">
      {/* Outer orbiting ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-primary/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbiting dot */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
      </motion.div>

      {/* Middle orbiting ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-secondary/40"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbiting dot */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(79,70,229,0.8)]" />
      </motion.div>

      {/* Inner orbiting ring */}
      <motion.div
        className="absolute inset-8 rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/70 shadow-[0_0_6px_rgba(124,58,237,0.6)]" />
      </motion.div>

      {/* Avatar core with glow */}
      <motion.div
        className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 backdrop-blur-sm"
        animate={{
          boxShadow: [
            "0 0 30px rgba(124,58,237,0.3), inset 0 0 30px rgba(79,70,229,0.2)",
            "0 0 50px rgba(124,58,237,0.5), inset 0 0 40px rgba(79,70,229,0.3)",
            "0 0 30px rgba(124,58,237,0.3), inset 0 0 30px rgba(79,70,229,0.2)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Inner abstract pattern */}
        <div className="absolute inset-4 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-secondary/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-bl from-secondary/30 via-transparent to-primary/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-8 h-8 rounded-full bg-primary/60"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating particles around avatar */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
