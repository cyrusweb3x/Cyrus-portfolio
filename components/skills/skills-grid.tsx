"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "AI", isCenter: true },
  { name: "Next.js" },
  { name: "Solidity" },
  { name: "Web3" },
  { name: "TailwindCSS" },
  { name: "Smart Contracts" },
  { name: "Base" },
]

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className={`group flex items-center justify-center rounded-xl border p-4 transition-all duration-300 ${
            skill.isCenter
              ? "col-span-2 border-violet-500/50 bg-gradient-to-br from-violet-600/20 to-blue-600/20 sm:col-span-3"
              : "border-violet-500/20 bg-[#12121A] hover:border-violet-400 hover:bg-violet-500/10"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <span
            className={`font-medium transition-colors ${
              skill.isCenter
                ? "bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-xl text-transparent"
                : "text-gray-400 group-hover:text-violet-300"
            }`}
          >
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
