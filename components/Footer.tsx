"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, MapPin, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/constants"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <footer id="footer" ref={ref} className="bg-[#0A1028] text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-[95%] lg:max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
            {/* Left: Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Location</h4>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Bangalore, India</span>
              </div>
            </motion.div>

            {/* Center: Connect Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 flex flex-col items-center"
            >
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Let's Connect</h4>
              <motion.a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#87CEEB] text-[#0A1028] rounded-full font-semibold hover:bg-[#7BB8D4] transition-colors group"
                aria-label="Connect on LinkedIn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Right: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 md:ml-auto"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-3">
                {[
                  { name: "About", href: "/#about" },
                  { name: "Experience", href: "/#experience" },
                  { name: "Education", href: "/#education" },
                  { name: "Achievements", href: "/#achievements" },
                  { name: "IEEE Research Paper", href: "https://ieeexplore.ieee.org/document/7411268", external: true },
                ].map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
