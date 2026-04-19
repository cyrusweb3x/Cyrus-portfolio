"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function GlowOrb() {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current && glowRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05
      meshRef.current.scale.setScalar(scale)
      glowRef.current.scale.setScalar(scale * 1.5)
    }
  })

  return (
    <group>
      {/* Inner core */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial
          color="#4F46E5"
          transparent
          opacity={0.1}
        />
      </mesh>
      
      {/* Outer glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[2.2, 32, 32]} />
        <meshBasicMaterial
          color="#7C3AED"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}
