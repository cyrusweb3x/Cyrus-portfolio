"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0F] py-8 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <p className="text-sm text-gray-500">
            Built with vision. Shipped solo. 2026
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
