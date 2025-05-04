"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ParallaxCard } from "@/components/parallax-card"
import { Scene3DCanvas } from "@/components/3d-scene"

export default function SkillsPage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        'Prime React',
        "Material UI",
      ],
    },
    {
      name: "Backend",
      skills: ["PHP", "Node.js", "MySQL", "PostgreSQL",],
    },
    {
      name: "CMS & Tools",
      skills: [
        "WordPress",
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Postman",
        "Docker",
        "Slack",
        "Vercel",
        "RESTful APIs",
        "JSON",
        'Canva',
      ],
    },
    {
      name: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Time Management",
        "Adaptability",
        "Attention to Detail",
        "Critical Thinking",
        "Creativity",
      ],
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
          <Scene3DCanvas title="MY SKILLS" subtitle="TECHNICAL PROFICIENCIES" />
        </div>
      </section>

      {/* Skills Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-playfair text-center">
              <span className="text-gradient-gold">Technical Proficiencies</span>
            </h2>

            <div className="space-y-16">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <ParallaxCard>
                    <div className="luxury-glass p-8 rounded-lg gold-border">
                      <h3 className="text-2xl font-bold mb-6 font-playfair gold-text">{category.name}</h3>

                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="luxury-glass p-4 rounded-lg text-center"
                          >
                            <span>{skill}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </ParallaxCard>
                </div>
              ))}
            </div>

            <div className="mt-20">
              <ParallaxCard>
                <div className="luxury-glass p-8 rounded-lg gold-border">
                  <h2 className="text-3xl font-bold mb-8 font-playfair text-center gold-text">Continuous Learning</h2>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                    <p className="text-lg mb-4">
                      I am committed to continuous learning and staying updated with the latest technologies and trends
                      in web development. Currently, I am focusing on expanding my knowledge in:
                    </p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>Advanced React patterns and performance optimization</li>
                      <li>Server-side rendering and static site generation with Next.js</li>
                      <li>Web3 and blockchain technologies</li>
                      <li>Progressive Web Applications (PWAs)</li>
                      <li>Serverless architecture and cloud computing</li>
                    </ul>
                  </motion.div>
                </div>
              </ParallaxCard>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
