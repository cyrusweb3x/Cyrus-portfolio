"use client"

import { useEffect, useState } from "react"

export function FloatingParticles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Twinkling stars - more stars throughout the page */}
      {[...Array(80)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 2 + 0.5}px`,
            height: `${Math.random() * 2 + 0.5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
      
      {/* Floating purple/blue particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? "#7C3AED" : "#4F46E5",
            opacity: 0.15,
            animation: `float ${10 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
      
      {/* Distant galaxy blobs - very subtle background decoration */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.04) 0%, transparent 70%)",
          left: "-5%",
          top: "10%",
          filter: "blur(60px)",
          transform: "rotate(-15deg)",
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(79, 70, 229, 0.03) 0%, transparent 70%)",
          right: "-10%",
          top: "40%",
          filter: "blur(50px)",
          transform: "rotate(20deg)",
        }}
      />
      <div 
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.025) 0%, transparent 70%)",
          left: "20%",
          bottom: "5%",
          filter: "blur(40px)",
        }}
      />

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.2); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-20px) translateX(3px); }
        }
      `}</style>
    </div>
  )
}
