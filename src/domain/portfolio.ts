export type Language = 'en' | 'vi'

export type NavItem = {
  label: string
  href: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type Experience = {
  company: string
  role: string
  period: string
  points: string[]
  stack: string[]
}

export type Project = {
  name: string
  description: string[]
  stack: string[]
}

export type Education = {
  school: string
  program: string
  period: string
  note?: string
}

export type PortfolioContent = {
  nav: NavItem[]
  labels: {
    brandAria: string
    role: string
    downloadCv: string
    contactMe: string
    mainStack: string
    experience: string
    focus: string
    domain: string
    years: string
    backendSystems: string
    bookingPlatforms: string
    about: string
    skills: string
    workExperience: string
    projects: string
    education: string
    contact: string
    languageSwitch: string
    scrollTop: string
  }
  hero: {
    name: string
    intro: string
    stack: string
  }
  about: {
    heading: string
    paragraphs: string[]
  }
  sections: {
    skillsHeading: string
    experienceHeading: string
    projectsHeading: string
    educationHeading: string
    contactHeading: string
  }
  skills: SkillGroup[]
  experiences: Experience[]
  projects: Project[]
  education: Education[]
  contact: {
    email: string
    phone: string
    github: string
  }
}
