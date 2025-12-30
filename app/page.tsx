"use client"

import { motion } from "framer-motion"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { ExperienceSection } from "@/components/sections/Experience"
import { EducationSection } from "@/components/sections/Education"
import { SectionDivider } from "@/components/sections/SectionDivider"
import { AchievementsSection } from "@/components/sections/Achievements"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <Hero />
      <About />
      <ExperienceSection />
      <EducationSection />
      <SectionDivider />
      <AchievementsSection />
    </motion.div>
  )
}

