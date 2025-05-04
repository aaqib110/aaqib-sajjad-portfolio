"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Scene3DCanvas } from "@/components/3d-scene"
import { ParallaxCard } from "@/components/parallax-card"

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Scene3DCanvas title="ABOUT ME" subtitle="MY JOURNEY & EXPERTISE" />
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <ParallaxCard className="mb-12">
              <div className="luxury-glass p-8 rounded-lg gold-border">
                <h2 className="text-3xl font-bold mb-6 font-playfair">
                  <span className="text-gradient-gold">Professional Profile</span>
                </h2>
                <p className="text-lg mb-6">
                  I am a passionate and results-driven Web Developer with over 2 years of professional experience in building responsive, user-focused websites and web applications. I specialize in both front-end and back-end technologies, with a strong commitment to writing clean, maintainable code that aligns with modern web development standards
                </p>
                <p className="text-lg mb-6">
                  In addition to custom web development, I have practical experience working with WordPress, focusing on implementing and customizing existing themes and plugins to meet project requirements. I efficiently configure and optimize WordPress solutions to deliver functional, visually appealing, and performance-driven websites without developing custom themes or plugins from scratch
                </p>
              </div>
            </ParallaxCard>

            <ParallaxCard className="mb-12">
              <div className="luxury-glass p-8 rounded-lg gold-border">
                <h2 className="text-3xl font-bold mb-6 font-playfair">
                  <span className="text-gradient-gold">Education</span>
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold gold-text">Bachelor of Science in Computer Science (BSCS)</h3>
                    <p className="text-muted-foreground">Virtual University of Pakistan | 2017 - 2023</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold gold-text">Intermediate</h3>
                    <p className="text-muted-foreground">Govt. Collage Tandlianwal, Faisalabad | 2015 - 2017</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold gold-text">Matric</h3>
                    <p className="text-muted-foreground">Govt. High School 603 G.B, Faisalabad | 2013 - 2015</p>
                  </div>
                </div>
              </div>
            </ParallaxCard>

            <ParallaxCard>
              <div className="luxury-glass p-8 rounded-lg gold-border">
                <h2 className="text-3xl font-bold mb-6 font-playfair">
                  <span className="text-gradient-gold">Personal Approach</span>
                </h2>
                <p className="text-lg mb-6">
                  I believe in continuous learning and staying updated with the latest technologies and trends in web
                  development. This allows me to provide innovative solutions that leverage cutting-edge tools and
                  methodologies.
                </p>
                <p className="text-lg mb-6">My work philosophy centers around three core principles:</p>
                <ul className="list-disc pl-6 space-y-3 text-lg">
                  <li>
                    <strong className="gold-text">Quality:</strong> I prioritize clean, maintainable code that follows
                    best practices and industry standards.
                  </li>
                  <li>
                    <strong className="gold-text">Collaboration:</strong> I value open communication and teamwork,
                    working closely with clients and colleagues to achieve shared goals.
                  </li>
                  <li>
                    <strong className="gold-text">User-Centric Design:</strong> I focus on creating intuitive,
                    accessible interfaces that provide exceptional user experiences.
                  </li>
                </ul>
              </div>
            </ParallaxCard>
          </motion.div>
        </div>
      </section>
    </>
  )
}
