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
    <section id="experience" className="py-24 bg-[#0A1028] text-white" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-[95%] lg:max-w-[1400px] mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-semibold text-white mb-2">Experience</h2>
            <p className="text-xl text-white/70 font-medium mb-6">Professional Journey</p>
            <div className="h-px w-24 bg-white/30"></div>
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
                className="grid md:grid-cols-2 gap-8 p-6 rounded-lg hover:bg-white/5 transition-colors"
              >
                {/* Left Column: Role + Industry */}
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-lg text-white/70">{exp.company}</p>
                  {exp.location && (
                    <p className="text-base text-white/60 mt-1">{exp.location}</p>
                  )}
                  {(exp.startDate || exp.endDate) && (
                    <p className="text-sm text-white/50 mt-2">
                      {exp.startDate && formatDate(exp.startDate)}
                      {exp.startDate && exp.endDate && " - "}
                      {exp.endDate ? formatDate(exp.endDate) : exp.endDate === null ? "Present" : ""}
                    </p>
                  )}
                </div>

                {/* Right Column: Description */}
                <div>
                  <p className="text-base text-white/80 leading-relaxed mb-4 text-justify">{exp.description}</p>
                  {exp.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.5, delay: index * 0.15 + i * 0.1 + 0.3 }}
                          className="text-sm text-white/70 flex items-start gap-2"
                        >
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.15 + i * 0.1 + 0.4 }}
                            className="text-white/50 mt-1"
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
    </section>
  )
}
