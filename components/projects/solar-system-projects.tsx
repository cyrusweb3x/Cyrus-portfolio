"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { X, ExternalLink, Github } from "lucide-react"

interface Planet {
  id: string
  name: string
  subtitle?: string
  description?: string
  stats?: string
  tags?: string[]
  links?: {
    live?: string
    github?: string
    basescan?: string
  }
  orbitRadius: number
  size: number
  colors: {
    primary: string
    secondary: string
    glow: string
  }
  speed: number
  rings?: number
  isLive?: boolean
  inspiration: "earth" | "saturn" | "neptune"
}

const planets: Planet[] = [
  {
    id: "base-capsule",
    name: "Base Capsule",
    subtitle: "Time-locked crypto gifting",
    description: "Time-locked crypto gifting protocol. Send ETH or USDC sealed until a future date. Listed on Base App with 10M+ downloads.",
    stats: "10 Users | 76 Txns | Base App Listed",
    tags: ["Solidity", "Next.js", "Web3", "Base"],
    links: {
      live: "https://basecapsule.xyz",
      github: "https://github.com",
      basescan: "https://basescan.org",
    },
    orbitRadius: 120,
    size: 36,
    colors: {
      primary: "#0EA5E9",
      secondary: "#14B8A6",
      glow: "rgba(14, 165, 233, 0.6)",
    },
    speed: 25,
    rings: 1,
    isLive: true,
    inspiration: "earth",
  },
  {
    id: "coming-soon-1",
    name: "Coming Soon",
    subtitle: "Building in public",
    orbitRadius: 160,
    size: 28,
    colors: {
      primary: "#A855F7",
      secondary: "#EC4899",
      glow: "rgba(168, 85, 247, 0.5)",
    },
    speed: 40,
    rings: 3,
    isLive: false,
    inspiration: "saturn",
  },
  {
    id: "coming-soon-2",
    name: "Coming Soon",
    subtitle: "Follow the journey",
    orbitRadius: 200,
    size: 22,
    colors: {
      primary: "#1E40AF",
      secondary: "#3B82F6",
      glow: "rgba(30, 64, 175, 0.4)",
    },
    speed: 55,
    isLive: false,
    inspiration: "neptune",
  },
  {
    id: "idea-lab",
    name: "Idea Lab",
    subtitle: "Experiments in progress",
    orbitRadius: 230,
    size: 16,
    colors: {
      primary: "#DC2626",
      secondary: "#F87171",
      glow: "rgba(220, 38, 38, 0.4)",
    },
    speed: 75,
    isLive: false,
    inspiration: "neptune",
  },
  {
    id: "next-build",
    name: "Next Build",
    subtitle: "Coming up next",
    orbitRadius: 260,
    size: 20,
    colors: {
      primary: "#EA580C",
      secondary: "#FB923C",
      glow: "rgba(234, 88, 12, 0.4)",
    },
    speed: 65,
    isLive: false,
    inspiration: "neptune",
  },
]

function PlanetPopup({ planet, onClose }: { planet: Planet; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md bg-[#0A0A12] border border-white/10 rounded-2xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: `0 0 80px ${planet.colors.glow}, 0 25px 50px -12px rgba(0, 0, 0, 0.8)` }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-14 h-14 rounded-full relative"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${planet.colors.secondary}, ${planet.colors.primary}, #0a0a12)`,
              boxShadow: `0 0 40px ${planet.colors.glow}`,
            }}
          >
            {planet.rings && planet.rings > 0 && (
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ transform: "rotateX(70deg)" }}
              >
                <div 
                  className="w-20 h-20 rounded-full border-2 opacity-60"
                  style={{ borderColor: planet.colors.primary }}
                />
              </div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{planet.name}</h3>
            {planet.isLive && (
              <span className="inline-flex items-center gap-1.5 text-xs text-green-400 font-mono">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                LIVE ON BASE MAINNET
              </span>
            )}
          </div>
        </div>

        {planet.description && (
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{planet.description}</p>
        )}

        {planet.stats && (
          <div className="flex items-center gap-2 text-xs font-mono mb-4 text-white/70">
            {planet.stats.split(" | ").map((stat, i) => (
              <span key={i} className="px-2 py-1 bg-white/5 rounded border border-white/10">
                {stat}
              </span>
            ))}
          </div>
        )}

        {planet.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {planet.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {planet.links && (
          <div className="flex gap-3">
            {planet.links.live && (
              <a
                href={planet.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white text-sm rounded-lg transition-all font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Live App
              </a>
            )}
            {planet.links.github && (
              <a
                href={planet.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-all border border-white/10"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {planet.links.basescan && (
              <a
                href={planet.links.basescan}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600/80 hover:bg-blue-500 text-white text-sm rounded-lg transition-all"
              >
                Basescan
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

function RealisticSun() {
  return (
    <g style={{ transform: "translate(350px, 300px)" }}>
      {/* Outer corona glow */}
      <circle r="100" fill="rgba(255, 69, 0, 0.08)" style={{ filter: "blur(40px)" }} />
      <circle r="80" fill="rgba(255, 140, 0, 0.12)" style={{ filter: "blur(30px)" }} />
      <circle r="60" fill="rgba(255, 200, 100, 0.2)" style={{ filter: "blur(20px)" }} />
      
      {/* Corona rays - animated */}
      {[...Array(12)].map((_, i) => (
        <line
          key={i}
          x1="0"
          y1="0"
          x2={Math.cos((i * 30 * Math.PI) / 180) * 70}
          y2={Math.sin((i * 30 * Math.PI) / 180) * 70}
          stroke="rgba(255, 200, 100, 0.3)"
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            filter: "blur(2px)",
            animation: `pulse ${2 + (i % 3) * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      
      {/* Sun body - outer red layer */}
      <circle r="45" fill="#FF4500" opacity="0.8" style={{ filter: "blur(3px)" }} />
      
      {/* Sun body - orange middle layer */}
      <circle r="38" fill="#FF8C00" />
      
      {/* Sun body - bright yellow-white center */}
      <circle r="30" fill="url(#sun-gradient)" />
      
      {/* Sun inner highlight */}
      <circle r="20" fill="#FFF7AE" opacity="0.6" />
      <circle r="12" fill="#FFFEF0" opacity="0.4" />
      
      {/* Sun surface texture */}
      <circle r="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      
      {/* Floating corona particles */}
      {[...Array(8)].map((_, i) => (
        <circle
          key={`particle-${i}`}
          r="2"
          fill="#FFD700"
          opacity="0.6"
          style={{
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            transform: `translate(${Math.cos((i * 45 * Math.PI) / 180) * 55}px, ${Math.sin((i * 45 * Math.PI) / 180) * 55}px)`,
          }}
        />
      ))}
      
      {/* Label */}
      <text
        y="75"
        textAnchor="middle"
        fill="#FFD700"
        fontSize="11"
        fontFamily="monospace"
        letterSpacing="0.15em"
        fontWeight="500"
      >
        MY WORK
      </text>
    </g>
  )
}

function OrbitingPlanet({ 
  planet, 
  isPaused, 
  onSelect,
  hoveredPlanet,
  setHoveredPlanet,
  centerX,
  centerY
}: { 
  planet: Planet
  isPaused: boolean
  onSelect: (planet: Planet) => void
  hoveredPlanet: string | null
  setHoveredPlanet: (id: string | null) => void
  centerX: number
  centerY: number
}) {
  const [angle, setAngle] = useState(
    planet.id === "base-capsule" ? 45 : 
    planet.id === "coming-soon-1" ? 120 : 
    planet.id === "coming-soon-2" ? 210 :
    planet.id === "idea-lab" ? 300 : 30
  )
  const isHovered = hoveredPlanet === planet.id
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (isPaused) {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      return
    }
    
    let lastTime = performance.now()
    
    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime
      lastTime = currentTime
      setAngle((prev) => (prev + (delta * 0.001 * (360 / planet.speed))) % 360)
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isPaused, planet.speed])

  const x = Math.cos((angle * Math.PI) / 180) * planet.orbitRadius
  const y = Math.sin((angle * Math.PI) / 180) * planet.orbitRadius * 0.4

  return (
    <>
      {/* Orbit path - dotted line */}
      <ellipse
        cx={centerX}
        cy={centerY}
        rx={planet.orbitRadius}
        ry={planet.orbitRadius * 0.4}
        fill="none"
        stroke="rgba(139, 92, 246, 0.2)"
        strokeWidth="1"
        strokeDasharray="6 6"
        style={{ filter: "drop-shadow(0 0 2px rgba(139, 92, 246, 0.3))" }}
      />

      {/* Planet group */}
      <g
        style={{
          transform: `translate(${centerX + x}px, ${centerY + y}px)`,
          cursor: "pointer",
        }}
        onMouseEnter={() => setHoveredPlanet(planet.id)}
        onMouseLeave={() => setHoveredPlanet(null)}
        onClick={() => onSelect(planet)}
      >
        {/* Planet glow */}
        <circle
          r={planet.size * (isHovered ? 1.8 : 1.2)}
          fill={planet.colors.glow}
          style={{
            filter: `blur(${planet.size / 2}px)`,
            transition: "all 0.3s ease",
            opacity: isHovered ? 1 : 0.6,
          }}
        />

        {/* Planet rings (for Saturn-inspired) */}
        {planet.rings && planet.rings > 1 && (
          <g style={{ transform: "rotateX(70deg)" }}>
            {[...Array(planet.rings)].map((_, i) => (
              <ellipse
                key={i}
                rx={planet.size * (0.9 + i * 0.2)}
                ry={planet.size * (0.25 + i * 0.05)}
                fill="none"
                stroke={planet.colors.primary}
                strokeWidth={2 - i * 0.3}
                opacity={0.6 - i * 0.1}
              />
            ))}
          </g>
        )}

        {/* Single ring for Earth-inspired (Base Capsule) */}
        {planet.rings === 1 && (
          <ellipse
            rx={planet.size * 0.85}
            ry={planet.size * 0.2}
            fill="none"
            stroke="#38BDF8"
            strokeWidth="2.5"
            opacity={isHovered ? 0.9 : 0.7}
            style={{ 
              transform: "rotate(-20deg)",
              filter: "drop-shadow(0 0 6px rgba(56, 189, 248, 0.8))",
              transition: "all 0.3s ease",
            }}
          />
        )}

        {/* Planet body */}
        <circle
          r={planet.size / 2}
          fill={`url(#planet-gradient-${planet.id})`}
          style={{
            filter: isHovered ? "brightness(1.4)" : "brightness(1)",
            transition: "all 0.3s ease",
          }}
        />

        {/* Planet atmosphere glow for Neptune */}
        {planet.inspiration === "neptune" && (
          <circle
            r={planet.size / 2 + 3}
            fill="none"
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="2"
            style={{ filter: "blur(2px)" }}
          />
        )}

        {/* Planet name label */}
        <text
          y={planet.size / 2 + 18}
          textAnchor="middle"
          fill="rgba(255,255,255,0.8)"
          fontSize="9"
          fontFamily="monospace"
          letterSpacing="0.05em"
        >
          {planet.name}
        </text>

        {/* Hover tooltip */}
        {isHovered && (
          <g style={{ transition: "all 0.2s ease" }}>
            <rect
              x={-55}
              y={-planet.size / 2 - 40}
              width={110}
              height={28}
              rx={6}
              fill="rgba(10, 10, 18, 0.95)"
              stroke={planet.colors.primary}
              strokeWidth="1"
            />
            <text
              y={-planet.size / 2 - 22}
              textAnchor="middle"
              fill="white"
              fontSize="10"
              fontWeight="500"
            >
              Click to explore
            </text>
          </g>
        )}
      </g>
    </>
  )
}

function SolarSystemDesktop() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null)
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null)
  const centerX = 350
  const centerY = 300

  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto" style={{ overflow: "visible" }}>
        <svg viewBox="0 0 700 600" className="w-full h-auto" style={{ overflow: "visible" }}>
          <defs>
            {/* Sun gradient */}
            <radialGradient id="sun-gradient" cx="35%" cy="35%">
              <stop offset="0%" stopColor="#FFF7AE" />
              <stop offset="40%" stopColor="#FFD700" />
              <stop offset="70%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#FF4500" />
            </radialGradient>
            
            {/* Planet gradients */}
            {planets.map((planet) => (
              <radialGradient
                key={planet.id}
                id={`planet-gradient-${planet.id}`}
                cx="30%"
                cy="30%"
              >
                <stop offset="0%" stopColor={planet.colors.secondary} />
                <stop offset="50%" stopColor={planet.colors.primary} />
                <stop offset="100%" stopColor="#0a0a12" />
              </radialGradient>
            ))}
          </defs>

          {/* Central Sun (rendered first so it stays behind planets) */}
          <RealisticSun />

          {/* Orbiting planets (rendered after sun so they are always on top) */}
          {planets.map((planet) => (
            <OrbitingPlanet
              key={planet.id}
              planet={planet}
              isPaused={selectedPlanet !== null}
              onSelect={setSelectedPlanet}
              hoveredPlanet={hoveredPlanet}
              setHoveredPlanet={setHoveredPlanet}
              centerX={centerX}
              centerY={centerY}
            />
          ))}
        </svg>
      </div>

      <AnimatePresence>
        {selectedPlanet && (
          <PlanetPopup
            planet={selectedPlanet}
            onClose={() => setSelectedPlanet(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

function MobileSolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null)
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null)
  const centerX = 350
  const centerY = 300

  return (
    <>
      <div 
        className="relative w-full mx-auto" 
        style={{ overflow: "visible", transformOrigin: "center center" }}
      >
        <svg viewBox="50 80 600 440" className="w-full h-auto" style={{ overflow: "visible" }}>
          <defs>
            <radialGradient id="mobile-sun-gradient" cx="35%" cy="35%">
              <stop offset="0%" stopColor="#FFF7AE" />
              <stop offset="40%" stopColor="#FFD700" />
              <stop offset="70%" stopColor="#FF8C00" />
              <stop offset="100%" stopColor="#FF4500" />
            </radialGradient>
            {planets.map((planet) => (
              <radialGradient
                key={`mobile-${planet.id}`}
                id={`mobile-planet-gradient-${planet.id}`}
                cx="30%"
                cy="30%"
              >
                <stop offset="0%" stopColor={planet.colors.secondary} />
                <stop offset="50%" stopColor={planet.colors.primary} />
                <stop offset="100%" stopColor="#0a0a12" />
              </radialGradient>
            ))}
          </defs>

          {/* Central Sun (rendered first so it stays behind planets) */}
          <RealisticSun />

          {/* Orbiting planets (rendered after sun so they are always on top) */}
          {planets.map((planet) => (
            <OrbitingPlanet
              key={planet.id}
              planet={planet}
              isPaused={selectedPlanet !== null}
              onSelect={setSelectedPlanet}
              hoveredPlanet={hoveredPlanet}
              setHoveredPlanet={setHoveredPlanet}
              centerX={centerX}
              centerY={centerY}
            />
          ))}
        </svg>
      </div>

      <AnimatePresence>
        {selectedPlanet && (
          <PlanetPopup planet={selectedPlanet} onClose={() => setSelectedPlanet(null)} />
        )}
      </AnimatePresence>
    </>
  )
}

export function SolarSystemProjects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="projects" className="relative min-h-screen bg-[#0A0A0F] py-16 md:py-20" style={{ overflow: "visible" }}>
      {/* Section divider top */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Twinkling star field background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && [...Array(150)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Distant galaxy blobs */}
        <div 
          className="absolute w-64 h-64 rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(ellipse, #7C3AED, transparent 70%)",
            left: "10%",
            top: "20%",
            filter: "blur(40px)",
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full opacity-[0.02]"
          style={{
            background: "radial-gradient(ellipse, #4F46E5, transparent 70%)",
            right: "15%",
            bottom: "30%",
            filter: "blur(30px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12 text-center"
        >
          <span className="mb-4 inline-block font-mono text-sm tracking-[0.3em] text-purple-400">
            EXPLORE
          </span>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Projects that{" "}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              orbit
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-md mx-auto text-sm md:text-base">
            Click on any planet to explore the project details
          </p>
        </motion.div>

        {/* Desktop: Interactive Solar System */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block"
        >
          <SolarSystemDesktop />
        </motion.div>

        {/* Mobile: Simplified Solar System Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:hidden"
        >
          <MobileSolarSystem />
        </motion.div>
      </div>

      {/* Section divider bottom */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  )
}
