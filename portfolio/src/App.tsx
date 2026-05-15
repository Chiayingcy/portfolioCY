import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TradingSection } from '@/components/sections/TradingSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TradingSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
