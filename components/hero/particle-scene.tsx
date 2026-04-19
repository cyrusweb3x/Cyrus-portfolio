"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { ParticleField } from "./particle-field"
import { StarField } from "./star-field"
import { GlowOrb } from "./glow-orb"

export function ParticleScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <StarField count={1500} />
          <GlowOrb />
          <ParticleField count={2500} radius={2.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
