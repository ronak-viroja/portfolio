"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      const startPosition = window.pageYOffset
      const distance = offsetPosition - startPosition
      const duration = 1500 // 3x slower than default (500ms * 3)
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
    <section className="min-h-screen flex items-center relative bg-[#e8ebf2] pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-20 relative z-10">
        <div className="max-w-[95%] lg:max-w-[1400px] mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Large Headline */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light text-[#0A1028] leading-tight tracking-tight">
                Staff Software Engineer
              </h1>
              
              {/* Professional Summary */}
              <p className="text-xl sm:text-2xl text-[#0A1028]/80 leading-relaxed max-w-2xl font-light text-justify">
                A seasoned software engineering professional with a decade of expertise in enterprise backend systems, distributed microservices architecture, and cloud-native infrastructure. Specializing in building resilient, high-performance applications and driving technical innovation through automation and emerging technologies.
              </p>
              
              {/* CTA Button */}
              <motion.button
                onClick={() => scrollToSection("about")}
                className="px-8 py-4 bg-[#87CEEB] text-[#0A1028] rounded-full font-semibold text-lg hover:bg-[#7BB8D4] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore More
              </motion.button>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-end"
            >
              <div className="relative w-full aspect-[4/5] max-w-md ml-auto">
                <Image
                  src="/images/profile.jpg"
                  alt="Ronak Viroja - Staff Software Engineer"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
