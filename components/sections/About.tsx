"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      const startPosition = window.pageYOffset
      const distance = offsetPosition - startPosition
      const duration = 1500 // 3x slower than default + 1 second for smoother transition
      let start: number | null = null

      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      }

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)
        const easedProgress = easeInOutCubic(progress)

        window.scrollTo(0, startPosition + distance * easedProgress)

        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  return (
    <section id="about" className="py-24 bg-[#0A1028] text-white" ref={ref}>
      {/* Solid dark navy background - no curves, starts cleanly after Hero's curve */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-16">
        <div className="max-w-[95%] lg:max-w-[1400px] mx-auto">
          <div className="space-y-12">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <h2 className="text-5xl sm:text-6xl font-semibold text-white">About</h2>
              <p className="text-xl text-white/70 font-medium mb-6">Professional Profile</p>
              <div className="h-px w-24 bg-white/30"></div>
            </motion.div>

            {/* First Paragraph - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-6xl text-justify">
                With over a decade of experience in enterprise software engineering, I have established a strong foundation in developing and maintaining large-scale backend systems that power critical business operations. My expertise spans microservices architecture, cloud infrastructure management, and DevOps practices, with a particular strength in Java and Spring Boot ecosystems. Throughout my career, I have consistently delivered scalable solutions while fostering collaborative environments and contributing to technical excellence through mentorship and knowledge sharing.
              </p>
            </motion.div>

            {/* Image and Second Paragraph - Side by Side */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Image Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#0A1028]/20"
              >
                {/* Blurred background image */}
                <Image
                  src="/images/about-professional.png"
                  alt=""
                  fill
                  className="object-cover blur-md scale-110 opacity-30"
                  priority
                  aria-hidden="true"
                />
                {/* Main image - fully visible */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/about-professional.png"
                    alt="Ronak Viroja - Professional workspace"
                    width={800}
                    height={600}
                    className="object-contain max-w-full max-h-full rounded-lg"
                    priority
                  />
                </div>
              </motion.div>

              {/* Second Paragraph - Right */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-8"
              >
                <p className="text-base sm:text-lg text-white/80 leading-relaxed text-justify">
                  I am deeply engaged in exploring the transformative potential of Generative AI and advanced automation technologies, continuously expanding my knowledge in prompt engineering and AI-driven application development. My technical focus centers on architecting distributed systems, designing robust APIs, and implementing comprehensive automation strategies that enhance operational efficiency. I am committed to driving performance optimization initiatives and leveraging cutting-edge technologies to solve complex engineering challenges.
                </p>

                {/* CTA Button */}
                <motion.button
                  onClick={() => scrollToSection("achievements")}
                  className="px-8 py-4 bg-[#87CEEB] text-[#0A1028] rounded-full font-semibold text-lg hover:bg-[#7BB8D4] transition-colors shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Discover More
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
