"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import educationData from "@/content/education.json"
import { Education } from "@/types"

const educations = educationData as Education[]

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section id="education" className="py-24 bg-[#0A1028] text-white relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-[95%] lg:max-w-[1400px] mx-auto">
          {/* Two Column Layout: Heading Left, List Right */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Section Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl sm:text-6xl font-semibold text-white mb-2">Education</h2>
              <p className="text-xl text-white/70 font-medium mb-6">Academic Background</p>
              <div className="h-px w-24 bg-white/30"></div>
            </motion.div>

            {/* Right Column: Education List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-0"
            >
              {educations.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  whileHover={{ x: 5, transition: { duration: 0.3 } }}
                  className="py-6 border-b border-white/10 last:border-b-0 hover:bg-white/5 rounded-lg px-4 -mx-4 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {edu.degree}
                    {edu.endDate && <span className="text-lg font-normal text-white/70 ml-2">({edu.endDate})</span>}
                  </h3>
                  <p className="text-lg text-white/70 mb-1">{edu.institution}</p>
                  {edu.location && (
                    <p className="text-base text-white/60">{edu.location}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Curved SVG Divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-10" style={{ marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0,120 L0,80 Q360,40 720,80 T1440,80 L1440,120 Z"
            fill="#e8ebf2"
            className="transition-colors duration-300"
          />
        </svg>
      </div>
    </section>
  )
}
