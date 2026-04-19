"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface ParticleFieldProps {
  count?: number
  radius?: number
}

export function ParticleField({ count = 2000, radius = 3 }: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const speeds = new Float32Array(count)

    const purple = new THREE.Color("#7C3AED")
    const blue = new THREE.Color("#4F46E5")
    const white = new THREE.Color("#FFFFFF")

    for (let i = 0; i < count; i++) {
      // Distribute particles on sphere surface
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi

      const r = radius + (Math.random() - 0.5) * 0.5
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      // Random color between purple, blue and white
      const colorChoice = Math.random()
      let color
      if (colorChoice < 0.4) {
        color = purple
      } else if (colorChoice < 0.7) {
        color = blue
      } else {
        color = white
      }
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = Math.random() * 3 + 1
      speeds[i] = Math.random() * 0.5 + 0.2
    }

    return { positions, colors, sizes, speeds }
  }, [count, radius])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1 },
    }),
    []
  )

  useFrame((state) => {
    if (pointsRef.current && materialRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  const vertexShader = `
    uniform float uTime;
    uniform float uPixelRatio;
    attribute float aSize;
    attribute float aSpeed;
    varying vec3 vColor;
    
    void main() {
      vColor = color;
      
      vec3 pos = position;
      float angle = uTime * aSpeed;
      float s = sin(angle);
      float c = cos(angle);
      
      // Subtle orbital motion
      pos.x = position.x * c - position.z * s;
      pos.z = position.x * s + position.z * c;
      
      // Breathing effect
      float breathe = sin(uTime * 0.5 + length(position) * 2.0) * 0.1 + 1.0;
      pos *= breathe;
      
      vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      
      gl_Position = projectedPosition;
      gl_PointSize = aSize * uPixelRatio * (1.0 / -viewPosition.z) * 50.0;
    }
  `

  const fragmentShader = `
    varying vec3 vColor;
    
    void main() {
      float distanceToCenter = length(gl_PointCoord - vec2(0.5));
      float alpha = 1.0 - smoothstep(0.0, 0.5, distanceToCenter);
      
      // Add glow effect
      float glow = exp(-distanceToCenter * 3.0) * 0.5;
      
      gl_FragColor = vec4(vColor, alpha + glow);
    }
  `

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles.positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={particles.colors}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSize"
          array={particles.sizes}
          count={count}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aSpeed"
          array={particles.speeds}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        vertexColors
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
