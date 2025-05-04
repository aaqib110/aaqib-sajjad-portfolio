"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Define initParticles function outside of useEffect so it can be used in multiple places
  const initParticles = () => {
    if (!mounted || !dimensions.width || !dimensions.height) return

    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((dimensions.width * dimensions.height) / 15000), 100)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    particlesRef.current = particles
  }

  useEffect(() => {
    if (!mounted) return

    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const width = window.innerWidth
        const height = window.innerHeight
        canvas.width = width
        canvas.height = height
        setDimensions({ width, height })
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [mounted])

  // Initialize particles when dimensions change
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      initParticles()
    }
  }, [dimensions, mounted])

  useEffect(() => {
    if (!mounted || !dimensions.width || !dimensions.height) return

    const animate = () => {
      if (!canvasRef.current) return

      const canvas = canvasRef.current
      const ctx = canvas.getContext("2d")

      if (!ctx) return

      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = dimensions.width
        if (particle.x > dimensions.width) particle.x = 0
        if (particle.y < 0) particle.y = dimensions.height
        if (particle.y > dimensions.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)

        // Gold color for particles
        const particleColor =
          theme === "dark" ? `rgba(255, 215, 0, ${particle.opacity})` : `rgba(218, 165, 32, ${particle.opacity})`

        ctx.fillStyle = particleColor
        ctx.fill()
      })

      // Draw connections
      ctx.beginPath()
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p1 = particlesRef.current[i]

        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j]
          const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)

            const lineOpacity = 0.1 * (1 - distance / 100)
            const lineColor =
              theme === "dark" ? `rgba(255, 215, 0, ${lineOpacity})` : `rgba(218, 165, 32, ${lineOpacity})`

            ctx.strokeStyle = lineColor
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions, theme, mounted])

  if (!mounted) return null

  return <canvas ref={canvasRef} className="particles-bg" />
}
