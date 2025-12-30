import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { ExperienceSection } from "@/components/sections/Experience"
import { EducationSection } from "@/components/sections/Education"
import { SectionDivider } from "@/components/sections/SectionDivider"
import { AchievementsSection } from "@/components/sections/Achievements"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <EducationSection />
      <SectionDivider />
      <AchievementsSection />
    </>
  )
}

