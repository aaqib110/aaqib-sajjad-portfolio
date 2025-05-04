"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ParallaxCard } from "@/components/parallax-card"
import { Scene3DCanvas } from "@/components/3d-scene"

export default function ExperiencePage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const experiences = [
    {
      title: "Junior Web Developer",
      company: "AmbitSol",
      location: "Rawalpindi",
      period: "Jan 2024 - Apr 2025",
      description:
        "As a Junior Web Developer at AmbitSol, I've been actively involved in building and maintaining modern, high-performance web applications using a versatile tech stack including Next.js, React.js TypeScript, Redux Toolkit and WordPress. I helped deliver scalable front-end solutions and custom WordPress Websites that aligned with client goals and enhanced user engagement.",
    },
    {
      title: "Software Systems Coordinator",
      company: "Prince Books",
      location: "Rawalpindi",
      period: "Apr 2023 - Dec 2023",
      description:
        "As a Software Systems Coordinator at Prince Books, I was responsible for overseeing the development and implementation of software systems. My responsibilities included coordinating with cross-functional teams, managing project timelines, and ensuring thorough testing and quality assurance.",
    },
    {
      title: "WordPress Developer",
      company: "BizTorch",
      location: "Islamabad",
      period: "Nov 2022 - Mar 2023",
      description:
        "As a WordPress developer at BizTorch, I was responsible for creating and maintaining custom WordPress websites. My responsibilities included designing and developing custom WordPress themes and plugins, customizing existing themes and plugins, optimizing website performance and security.",
    },
    {
      title: "Frontend Web Developer",
      company: "MRSUF PVT LTD",
      location: "Islamabad",
      period: "Feb 2021 - Jul 2022",
      description:
        "At MRSUF LTD, I was responsible for designing, developing, and maintaining the front-end of web applications with a strong focus on user experience and performance. My role involved building responsive and visually engaging user interfaces using HTML, CSS, and JavaScript, while ensuring compatibility across devices and browsers.",        
    },
  ]

  if (!isMounted) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Scene3DCanvas title="EXPERIENCE" subtitle="MY PROFESSIONAL JOURNEY" />
        </div>
      </section>

      {/* Experience Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-playfair text-center">
              <span className="text-gradient-gold">Work Experience</span>
            </h2>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ParallaxCard>
                    <div className="luxury-glass p-8 rounded-lg gold-border">
                      <h3 className="text-2xl font-bold mb-2 gold-text">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                        <span className="text-muted-foreground">
                          {exp.company} - {exp.location}
                        </span>
                        <span className="text-muted-foreground">{exp.period}</span>
                      </div>
                      <p className="text-lg">{exp.description}</p>
                    </div>
                  </ParallaxCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
