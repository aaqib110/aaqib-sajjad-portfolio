"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { useRouter } from "next/navigation"
import { Scene3DCanvas } from "@/components/3d-scene"
import { ParallaxCard } from "@/components/parallax-card"

export default function ProjectsPage() {
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const projects = [
    {
      title: "Royaamed Telehealth System",
      description:
        "Designed and developed a comprehensive telehealth platform enabling patients to book virtual consultations, manage appointments, and make secure payments. Built with Node.js, Next.js, and React, it features a modern interface using Tailwind CSS and TypeScript, integrates Prisma with PostgreSQL for efficient data handling, and supports online payments via Stripe.",
      technologies: ["Node.js", "Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe"],
      liveLink: "https://www.royaamed.com/",
      // githubLink: "#",
      image: "/royaamed.png?height=600&width=800",
    },
    {
      title: "Biltre - Invoicing and Billing Software",
      description:
        "Developed a robust, full-stack invoicing and billing platform designed to streamline financial operations for businesses. Built with Node.js, Next.js, and React on the frontend and powered by PHP (Lumen Laravel) and MySQL on the backend, it features a responsive UI using Tailwind CSS and Material UI for a seamless user experience.",
      technologies: ["Node.js", "Next.js", "React", "TypeScript", "Tailwind CSS", "Material UI", "PHP", "MySQL", "Lumen Laravel"],
      liveLink: "https://www.alhijamah.com/",
      // githubLink: "#",
      image: "/biltre3.png?height=600&width=800",
    },
    {
      title: "Umar Welfare Foundation",
      description:
        "Developed a responsive WordPress website for Umar Welfare Foundation, a non-profit dedicated to alleviating poverty and supporting communities in Pakistan. Built with the Fundraiser Lite theme and Elementor, the site showcases initiatives such as medical camps, education centers, and clean water projects. Integrated features like WPForms for donor engagement and Joinchat for communication and support.",
      technologies: ["WordPress", "PHP", "MySQL", "Fundraiser Lite Theme", "Elementor", "Joinchat", "WPForms"],
      liveLink: "https://www.umarwelfare.org/",
      // githubLink: "#",
      image: "/umarwelfare.png?height=600&width=800",
    },
    {
      title: "Abbad Tours",
      description:
        "Developed a responsive and user-friendly WordPress website for Abbad Tours, specializing in Hajj and Umrah pilgrimage packages. Utilizing the Astra theme and Elementor, the site offers seamless navigation and showcases various packages with detailed itineraries. Integrated features like Contact Form 7 for inquiries and Joinchat for real-time communication enhance user engagement and support.",
      technologies: ["WordPress", "PHP", "MySQL", "Astra Theme", "Contact Form 7", "Elementor", "Joinchat"],
      liveLink: "https://abbadtours.com.pk/",
      // githubLink: "#",
      image: "/abbad-tours4.png?height=600&width=800",
    },
    {
      title: "Al Ghufran Hijamah Center",
      description:
        "Developed a responsive WordPress website for Al Ghufran Hijamah Center, a leading wellness clinic in Rawalpindi, Pakistan, specializing in traditional Hijama (cupping therapy). The site features a modern design using The7 theme and WPBakery, and integrates tools like Contact Form 7, Joinchat, and Slider Revolution to enhance user engagement and experience.",
      technologies: ["WordPress", "PHP", "MySQL", "The7 Theme", "WPBakery", "Contact Form 7", "Joinchat", "Slider Revolution"],
      liveLink: "https://www.alhijamah.com/",
      // githubLink: "#",
      image: "/alghufran-hijamah2.png?height=600&width=800",
    },
    {
      title: "Al Hijamah Store",
      description:
        "Developed a feature-rich WooCommerce website for Al Hijamah Store to showcase and sell cupping therapy products online. Built with the Ekommart theme and Elementor, the site offers a smooth, responsive shopping experience, integrated with WP Forms for inquiries and Chaty for real-time customer support and engagement.",
      technologies: ["WordPress", "PHP", "MySQL", "WooCommerce", "Ekommart Theme", "Elementor", "Chaty", "WP Forms"],
      liveLink: "https://store.alhijamah.com/",
      // githubLink: "#",
      image: "/alhijamah-store.png?height=600&width=800",
    },
    {
      title: "Machcoal Private Limited",
      description:
        "Developed a responsive WordPress website for Machcoal Private Limited, a leading industrial solutions provider in Pakistan. Built with the PopularFX theme and Divi Builder, the site highlights the company’s coal importation, mining operations, and logistics services. The smooth navigation enhances user experience and effectively showcases the company's operations.",
      technologies: ["WordPress", "PHP", "MySQL", "PopularFX Theme", "Divi Builder"],
      liveLink: "https://machcoal.com/",
      // githubLink: "#",
      image: "/machcoal1.png?height=600&width=800",
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
          <Scene3DCanvas title="PROJECTS" subtitle="MY CREATIVE PORTFOLIO" />
        </div>
      </section>

      {/* Projects Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-playfair text-center">
              <span className="text-gradient-gold">Featured Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-3d-container"
                >
                  <ParallaxCard>
                    <div className="luxury-glass rounded-lg overflow-hidden gold-border">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 gold-text">{project.title}</h3>
                        <p className="text-muted-foreground mb-4 text-justify">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-secondary/20 px-3 py-1 rounded-full text-sm border border-[hsl(var(--gold))/0.3]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex space-x-4">
                          <Button asChild variant="outline" size="sm" className="border-[hsl(var(--gold))]">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          {/* <Button asChild variant="outline" size="sm" className="border-[hsl(var(--gold))]">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Source Code
                            </a>
                          </Button> */}
                        </div>
                      </div>
                    </div>
                  </ParallaxCard>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <ParallaxCard className="max-w-3xl mx-auto">
                <div className="luxury-glass p-8 rounded-lg gold-border">
                  <p className="text-lg mb-8">
                    These are just a few examples of my work. I have experience with various other projects, including
                    custom WordPress themes, e-commerce solutions, and web applications.
                  </p>

                  <Button onClick={() => router.push("/contact")} size="lg" className="btn-luxury">
                    Discuss Your Project
                  </Button>
                </div>
              </ParallaxCard>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}