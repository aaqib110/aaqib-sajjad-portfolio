"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface GradientHeroProps {
  title: string
  subtitle: string
}

export function Scene3DCanvas({ title, subtitle }: GradientHeroProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="canvas-container relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--primary))/0.1] to-[hsl(var(--gold))/0.2] animate-gradient"></div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[hsl(var(--gold))/0.3]"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold font-playfair text-gradient-gold mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Light effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[hsl(var(--gold))/0.1] to-transparent opacity-70 pointer-events-none"></div>
    </div>
  )
}
