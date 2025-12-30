"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
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
    <section ref={ref} className="min-h-screen flex items-center relative bg-[#e8ebf2] pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-24 lg:py-32 relative z-10">
        <div className="max-w-[95%] lg:max-w-[1400px] mx-auto">
          {/* Two Column Layout - Grid: 1.2fr 1fr */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content (Left-aligned, Editorial Style) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-left max-w-[640px]"
            >
              {/* Name - Primary Identity (Larger sizes) */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-[48px] md:text-[72px] lg:text-[80px] xl:text-[96px] font-semibold text-[#0b132b] leading-[1.1] tracking-[-0.02em]"
              >
                Ronak Viroja
              </motion.h1>
              
              {/* Title - Secondary (Larger sizes) */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-medium text-[#1f2937] leading-[1.3] mt-3"
              >
                Staff Software Engineer
              </motion.h2>
              
              {/* Supporting Description (18px desktop, 16px mobile) */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base md:text-[17px] lg:text-[18px] font-normal text-[#4b5563] leading-[1.6] max-w-[520px] mt-5"
              >
                Building scalable systems and leading high-impact platforms across cloud and AI.
              </motion.p>
              
              {/* CTA Button - Left-aligned, below description */}
              <motion.button
                onClick={() => scrollToSection("about")}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="px-8 py-4 bg-[#87CEEB] text-[#0A1028] rounded-full font-medium text-base hover:bg-[#7BB8D4] transition-colors mt-7"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More
              </motion.button>
            </motion.div>

            {/* Right Column - Image (Secondary, Supporting) */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative flex justify-end"
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="relative w-full aspect-[4/5] max-w-md rounded-lg overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Ronak Viroja - Staff Software Engineer"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
