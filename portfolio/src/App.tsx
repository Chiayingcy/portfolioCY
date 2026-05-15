import React from 'react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { HiringSnapshotSection } from '@/components/sections/HiringSnapshotSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TradingSection } from '@/components/sections/TradingSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 left-[8%] h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute top-[20%] right-[8%] h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <HiringSnapshotSection />
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
