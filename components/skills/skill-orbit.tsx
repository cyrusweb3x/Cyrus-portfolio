"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Skill {
  name: string
  icon: React.ReactNode
  orbitRadius: number
  duration: number
  delay: number
}

const skills: Skill[] = [
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
    orbitRadius: 120,
    duration: 20,
    delay: 0,
  },
  {
    name: "Solidity",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 0L4.5 12h5.25L12 6l2.25 6h5.25L12 0zm0 24l7.5-12h-5.25L12 18l-2.25-6H4.5L12 24z" opacity="0.8" />
      </svg>
    ),
    orbitRadius: 120,
    duration: 20,
    delay: 3.33,
  },
  {
    name: "Web3",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" stroke="currentColor" fill="none" />
      </svg>
    ),
    orbitRadius: 120,
    duration: 20,
    delay: 6.66,
  },
  {
    name: "TailwindCSS",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
    orbitRadius: 120,
    duration: 20,
    delay: 10,
  },
  {
    name: "Smart Contracts",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM8 17v-1h8v1H8zm0-3v-1h8v1H8zm0-3v-1h5v1H8z" />
      </svg>
    ),
    orbitRadius: 120,
    duration: 20,
    delay: 13.33,
  },
  {
    name: "Base",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    orbitRadius: 120,
    duration: 20,
    delay: 16.66,
  },
]

export function SkillOrbit() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <div className="relative flex size-[320px] items-center justify-center md:size-[400px]">
      {/* Connecting lines */}
      <svg className="absolute inset-0 size-full" style={{ zIndex: 0 }}>
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2
          const x2 = 50 + (skill.orbitRadius / 2) * Math.cos(angle)
          const y2 = 50 + (skill.orbitRadius / 2) * Math.sin(angle)
          return (
            <line
              key={skill.name}
              x1="50%"
              y1="50%"
              x2={`${x2}%`}
              y2={`${y2}%`}
              className="stroke-violet-500/20"
              strokeWidth="1"
              style={{
                animation: `pulse-line 3s ease-in-out ${index * 0.5}s infinite`,
              }}
            />
          )
        })}
      </svg>

      {/* Center AI circle */}
      <motion.div
        className="absolute z-10 flex size-24 items-center justify-center rounded-full md:size-32"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Outer glow */}
        <div className="absolute size-full animate-pulse rounded-full bg-violet-500/30 blur-xl" />
        {/* Middle glow */}
        <div className="absolute size-[90%] rounded-full bg-gradient-to-br from-violet-600/50 to-blue-600/50 blur-md" />
        {/* Inner circle */}
        <div className="absolute size-[80%] rounded-full bg-gradient-to-br from-violet-600 to-blue-600" />
        {/* Core */}
        <div className="relative z-10 flex size-[70%] items-center justify-center rounded-full bg-[#0A0A0F]">
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
            AI
          </span>
        </div>
      </motion.div>

      {/* Orbit ring */}
      <div
        className="absolute rounded-full border border-violet-500/20"
        style={{
          width: skills[0].orbitRadius * 2 + 40,
          height: skills[0].orbitRadius * 2 + 40,
        }}
      />

      {/* Orbiting skills */}
      {skills.map((skill, index) => {
        const isHovered = hoveredSkill === skill.name
        return (
          <div
            key={skill.name}
            className="absolute"
            style={{
              width: skill.orbitRadius * 2 + 40,
              height: skill.orbitRadius * 2 + 40,
              animationName: isHovered ? "none" : "orbit",
              animationDuration: `${skill.duration}s`,
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDelay: `-${skill.delay}s`,
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <motion.div
              className={`absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer flex-col items-center gap-1 transition-all duration-300 ${
                isHovered ? "scale-125" : ""
              }`}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              style={{
                animationName: isHovered ? "none" : "counter-orbit",
                animationDuration: `${skill.duration}s`,
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
                animationDelay: `-${skill.delay}s`,
              }}
            >
              <div
                className={`flex size-10 items-center justify-center rounded-full border transition-all duration-300 md:size-12 ${
                  isHovered
                    ? "border-violet-400 bg-violet-500/30 text-violet-300 shadow-lg shadow-violet-500/50"
                    : "border-violet-500/30 bg-[#0A0A0F] text-gray-400"
                }`}
              >
                {skill.icon}
              </div>
              <span
                className={`whitespace-nowrap text-xs font-medium transition-colors duration-300 ${
                  isHovered ? "text-violet-300" : "text-gray-500"
                }`}
              >
                {skill.name}
              </span>
            </motion.div>
          </div>
        )
      })}

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes counter-orbit {
          from {
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
          }
          to {
            transform: translateX(-50%) translateY(-50%) rotate(-360deg);
          }
        }
        @keyframes pulse-line {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}
