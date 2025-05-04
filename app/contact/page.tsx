"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Scene3DCanvas } from "@/components/3d-scene"
import { ParallaxCard } from "@/components/parallax-card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  if (!isMounted) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Scene3DCanvas title="CONTACT ME" subtitle="LET'S CONNECT" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-8 font-playfair">
                  <span className="text-gradient-gold">Get In Touch</span>
                </h2>

                <p className="text-lg mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision. Feel free to reach out to me using the contact form or through any of the methods below.
                </p>

                <ParallaxCard>
                  <div className="luxury-glass p-8 rounded-lg gold-border space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-4 mt-1 gold-text" />
                      <div>
                        <h3 className="font-bold mb-1 gold-text">Location</h3>
                        <p>Lahore, Pakistan</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-6 w-6 mr-4 mt-1 gold-text" />
                      <div>
                        <h3 className="font-bold mb-1 gold-text">Email</h3>
                        <p>aaqibansari604@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-6 w-6 mr-4 mt-1 gold-text" />
                      <div>
                        <h3 className="font-bold mb-1 gold-text">Phone</h3>
                        <p>+92 349-1792567</p>
                      </div>
                    </div>
                  </div>
                </ParallaxCard>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-8 font-playfair">
                  <span className="text-gradient-gold">Send Me a Message</span>
                </h2>

                <ParallaxCard>
                  <div className="luxury-glass p-8 rounded-lg gold-border">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--gold))/0.2] mb-4"
                        >
                          <Send className="h-8 w-8 gold-text" />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-2 gold-text">Message Sent!</h3>
                        <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block mb-2 gold-text">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border-[hsl(var(--gold))/0.3] focus:border-[hsl(var(--gold))]"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block mb-2 gold-text">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border-[hsl(var(--gold))/0.3] focus:border-[hsl(var(--gold))]"
                          />
                        </div>

                        <div>
                          <label htmlFor="subject" className="block mb-2 gold-text">
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full border-[hsl(var(--gold))/0.3] focus:border-[hsl(var(--gold))]"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block mb-2 gold-text">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full min-h-[150px] border-[hsl(var(--gold))/0.3] focus:border-[hsl(var(--gold))]"
                          />
                        </div>

                        <Button type="submit" className="w-full btn-luxury" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
                  </div>
                </ParallaxCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
