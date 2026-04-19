"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface StatCounterProps {
  value: number
  suffix?: string
  label: string
  delay?: number
}

export function StatCounter({ value, suffix = "", label, delay = 0 }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const duration = 2000
      const startTime = Date.now() + delay * 1000
      
      const animate = () => {
        const now = Date.now()
        if (now < startTime) {
          requestAnimationFrame(animate)
          return
        }
        
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        setCount(Math.floor(easeOutQuart * value))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(value)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
    >
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  )
}
