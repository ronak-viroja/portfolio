"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import achievementsData from "@/content/achievements.json"
import { Achievement } from "@/types"

const achievements = achievementsData as Achievement[]

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-24 bg-[#e8ebf2] text-[#0A1028]" ref={ref}>
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
              <h2 className="text-5xl sm:text-6xl font-semibold text-[#0A1028] mb-2">Key Achievements</h2>
              <p className="text-xl text-[#0A1028]/70 font-medium mb-6">Professional Milestones</p>
              <div className="h-px w-24 bg-[#0A1028]/30"></div>
            </motion.div>

            {/* Right Column: Achievements List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-0"
            >
              {achievements.map((achievement, index) => (
                <div key={achievement.id} className="py-6 border-b border-[#0A1028]/10 last:border-b-0">
                  <h3 className="text-xl font-semibold text-[#0A1028] mb-1">{achievement.title}</h3>
                  <p className="text-base text-[#0A1028]/70 leading-relaxed text-justify">{achievement.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
