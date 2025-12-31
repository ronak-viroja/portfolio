"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import projectsData from "@/content/projects.json"
import { Project } from "@/types"

const projects = projectsData as Project[]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <section id="projects" className="py-24 bg-[#e8ebf2] text-[#0A1028] relative" ref={ref}>
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
              <h2 className="text-5xl sm:text-6xl font-semibold text-[#0A1028] mb-2">Projects</h2>
              <p className="text-xl text-[#0A1028]/70 font-medium mb-6">Side Hustles & Passion Projects</p>
              <div className="h-px w-24 bg-[#0A1028]/30"></div>
            </motion.div>

            {/* Right Column: Projects List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-0"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  whileHover={{ x: 5, transition: { duration: 0.3 } }}
                  className="py-6 border-b border-[#0A1028]/10 last:border-b-0 hover:bg-[#0A1028]/5 rounded-lg px-4 -mx-4 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-[#0A1028]">{project.title}</h3>
                    {project.status && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#87CEEB] text-[#0A1028] whitespace-nowrap">
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="text-base text-[#0A1028]/70 leading-relaxed mb-3 text-justify">
                    {project.description}
                  </p>
                  {project.longDescription && (
                    <p className="text-sm text-[#0A1028]/60 leading-relaxed mb-3 text-justify">
                      {project.longDescription}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#0A1028]/10 text-[#0A1028]/70 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
            fill="#0A1028"
            className="transition-colors duration-300"
          />
        </svg>
      </div>
    </section>
  )
}

