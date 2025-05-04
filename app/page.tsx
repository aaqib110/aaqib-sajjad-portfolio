"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { useRouter } from "next/navigation"
import { ParallaxCard } from "@/components/parallax-card"
import { Scene3DCanvas } from "@/components/3d-scene"

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleScrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavigation = (href: string) => {
    router.push(href)
  }

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-gradient-gold text-2xl">Loading...</div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section with 3D */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <Scene3DCanvas title="AAQIB SAJJAD" subtitle="WEB DEVELOPER" />
        </motion.div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="luxury-glass p-8 rounded-lg max-w-3xl mx-auto gold-border"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
              <span className="text-gradient-gold">Aaqib Sajjad</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">Full Stack Web Developer</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => handleNavigation("/projects")} size="lg" className="btn-luxury">
                View My Work
              </Button>
              <Button
                onClick={() => handleNavigation("/contact")}
                variant="outline"
                size="lg"
                className="rounded-full border-[hsl(var(--gold))]"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" onClick={handleScrollDown} className="rounded-full animate-pulse-gold">
            <ChevronDown className="h-6 w-6 text-[hsl(var(--gold))]" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section ref={scrollRef} className="py-20 mt-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-playfair text-center">
              <span className="text-gradient-gold">About Me</span>
            </h2>

            <ParallaxCard className="mb-10">
              <div className="luxury-glass p-8 rounded-lg gold-border">
                <p className="text-lg mb-6">
                {`I’m a results-driven Web Developer with 2+ years of professional experience in building responsive, user-focused websites and web applications. I specialize in both front-end and back-end technologies.`}
                </p>

                <p className="text-lg mb-6">
                I also have hands-on experience with WordPress, customizing existing themes and plugins to meet project needs. I deliver optimized, visually appealing websites without building custom themes or plugins from scratch.
                </p>

                <div className="flex justify-center mt-8">
                  <Button onClick={() => handleNavigation("/about")} className="btn-luxury">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </ParallaxCard>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-playfair text-center">
            <span className="text-gradient-gold">My Skills</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React.js",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Bootstrap",
              "WordPress",
              "Git",
              "Node.js",
              "PostgreSQL",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="luxury-glass p-6 rounded-lg text-center"
              >
                <div className="text-lg font-medium gold-text">{skill}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button onClick={() => handleNavigation("/skills")} className="btn-luxury">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-playfair text-center">
            <span className="text-gradient-gold">Work Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <ParallaxCard className="mb-8">
              <div className="luxury-glass p-8 rounded-lg gold-border">
                <h3 className="text-xl font-bold mb-2 gold-text">Junior Web Developer</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-muted-foreground">AmbitSol - Rawalpindi</span>
                  <span className="text-muted-foreground">Jan 2024 - Apr 2025</span>
                </div>
                <p>
                  As a Junior Web Developer at AmbitSol, I've been actively involved in building and maintaining modern,
                  high-performance web applications using a versatile tech stack including Next.js, React.js TypeScript,
                  Redux Toolkit and WordPress.
                </p>
              </div>
            </ParallaxCard>

            <ParallaxCard>
              <div className="luxury-glass p-8 rounded-lg gold-border">
                <h3 className="text-xl font-bold mb-2 gold-text">WordPress Developer</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-muted-foreground">BizTorch - Islamabad</span>
                  <span className="text-muted-foreground">Nov 2022 - Mar 2023</span>
                </div>
                <p>
                As a WordPress Developer at BizTorch, I am responsible for building and maintaining professional, user-friendly websites using the WordPress platform.
                </p>
              </div>
            </ParallaxCard>

            <div className="flex justify-center mt-12">
              <Button onClick={() => handleNavigation("/experience")} className="btn-luxury">
                View Full Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="luxury-glass p-12 rounded-lg gold-border max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
              <span className="text-gradient-gold">Let's Work Together</span>
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can collaborate to bring your
              ideas to life.
            </p>
            <Button onClick={() => handleNavigation("/contact")} size="lg" className="btn-luxury">
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
