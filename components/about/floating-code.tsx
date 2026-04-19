"use client"

import { motion } from "framer-motion"

const codeSnippets = [
  { code: "const web3 = new Web3()", x: "5%", y: "15%", delay: 0 },
  { code: "await contract.deploy()", x: "75%", y: "20%", delay: 0.5 },
  { code: "function mint() {}", x: "10%", y: "70%", delay: 1 },
  { code: "import { Base } from", x: "70%", y: "75%", delay: 1.5 },
  { code: "// ship it", x: "85%", y: "45%", delay: 2 },
  { code: "<Chain id={8453} />", x: "3%", y: "45%", delay: 2.5 },
]

export function FloatingCode() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-xs md:text-sm text-primary/20"
          style={{ left: snippet.x, top: snippet.y }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: snippet.delay, duration: 0.8 }}
        >
          <motion.span
            animate={{
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {snippet.code}
          </motion.span>
        </motion.div>
      ))}
    </div>
  )
}
