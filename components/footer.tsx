"use client"

import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-20 py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="luxury-glass p-8 rounded-lg gold-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-playfair gold-text">Aaqib Sajjad</h3>
              <p className="text-muted-foreground mb-4">
                A Full Stack Web Developer with expertise in building responsive, user-focused websites and
                applications.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/aaqib110"
                  className="hover:text-[hsl(var(--gold))] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/aaqib110/"
                  className="hover:text-[hsl(var(--gold))] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:aaqibansari604@gmail.com" className="hover:text-[hsl(var(--gold))] transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 font-playfair gold-text">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-[hsl(var(--gold))] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-[hsl(var(--gold))] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/experience" className="hover:text-[hsl(var(--gold))] transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="/skills" className="hover:text-[hsl(var(--gold))] transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-[hsl(var(--gold))] transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[hsl(var(--gold))] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 font-playfair gold-text">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="hover:text-[hsl(var(--gold))] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="hover:text-[hsl(var(--gold))] transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/cookie-policy" className="hover:text-[hsl(var(--gold))] transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="/disclaimer" className="hover:text-[hsl(var(--gold))] transition-colors">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[hsl(var(--gold))/0.3] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <MapPin className="h-4 w-4 mr-2 gold-text" />
              <span className="text-sm">Lahore, Pakistan</span>
            </div>
            <p className="text-sm text-muted-foreground">© {currentYear} Aaqib Sajjad. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
