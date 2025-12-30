export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  date: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location?: string
  startDate: string
  endDate: string | null
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Skill {
  category: string
  skills: string[]
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Education {
  id: string
  degree: string
  institution: string
  location?: string
  startDate: string
  endDate: string
  description: string
  courses: string[]
  gpa?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  year: string
  category: string
}

