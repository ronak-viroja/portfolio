"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import experienceData from "@/content/experience.json"
import { Experience } from "@/types"
import { formatDate } from "@/lib/utils"

const experiences = experienceData as Experience[]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section id="experience" className="py-24 bg-[#e8ebf2] text-[#0A1028] relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-[95%] lg:max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-semibold text-[#0A1028] mb-2">Experience</h2>
            <p className="text-xl text-[#0A1028]/70 font-medium mb-6">Professional Journey</p>
            <div className="h-px w-24 bg-[#0A1028]/30"></div>
          </motion.div>

          {/* Experience List - Two Column Layout Per Role */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30, x: -20 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 30, x: -20 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ x: 5, transition: { duration: 0.3 } }}
                className="grid md:grid-cols-2 gap-8 p-6 rounded-lg hover:bg-[#0A1028]/5 transition-colors"
              >
                {/* Left Column: Role + Industry */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#0A1028] mb-2">{exp.title}</h3>
                  <p className="text-lg text-[#0A1028]/70">{exp.company}</p>
                  {exp.location && (
                    <p className="text-base text-[#0A1028]/60 mt-1">{exp.location}</p>
                  )}
                  {(exp.startDate || exp.endDate) && (
                    <p className="text-sm text-[#0A1028]/50 mt-2">
                      {exp.startDate && formatDate(exp.startDate)}
                      {exp.startDate && exp.endDate && " - "}
                      {exp.endDate ? formatDate(exp.endDate) : exp.endDate === null ? " - Present" : ""}
                    </p>
                  )}
                </div>

                {/* Right Column: Description */}
                <div>
                  <p className="text-base text-[#0A1028]/80 leading-relaxed mb-4 text-justify">{exp.description}</p>
                  {exp.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.5, delay: index * 0.15 + i * 0.1 + 0.3 }}
                              className="text-sm text-[#0A1028]/70 flex items-start gap-2"
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 + 0.4 }}
                                className="text-[#0A1028]/50 mt-1"
                          >
                            •
                          </motion.span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
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
            fill="#0A1028"
            className="transition-colors duration-300"
          />
        </svg>
      </div>
    </section>
  )
}
