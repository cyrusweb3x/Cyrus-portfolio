"use client"

import { motion } from "framer-motion"

export function RadioWaves({ isTransmitting = false }: { isTransmitting?: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Concentric radio waves */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-purple-500/20"
          style={{
            width: `${(i + 1) * 200}px`,
            height: `${(i + 1) * 200}px`,
            animation: isTransmitting 
              ? `radioWave 2s ease-out ${i * 0.2}s infinite`
              : `radioWaveSlow 8s ease-in-out ${i * 0.5}s infinite`,
          }}
        />
      ))}
      
      {/* Transmitting burst waves */}
      {isTransmitting && (
        <>
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`burst-${i}`}
              className="absolute rounded-full border-2 border-purple-400"
              initial={{ width: 50, height: 50, opacity: 1 }}
              animate={{ 
                width: 800, 
                height: 800, 
                opacity: 0,
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}
      
      {/* Center glow */}
      <div 
        className={`absolute w-4 h-4 rounded-full transition-all duration-500 ${
          isTransmitting 
            ? 'bg-purple-400 shadow-[0_0_60px_30px_rgba(168,85,247,0.5)]' 
            : 'bg-purple-600 shadow-[0_0_30px_15px_rgba(168,85,247,0.3)]'
        }`}
      />
      
      <style jsx>{`
        @keyframes radioWave {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes radioWaveSlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}
