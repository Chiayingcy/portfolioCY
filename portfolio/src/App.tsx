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
      {/* Ambient background blobs â€” more vivid in both themes */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Orange glow â€” top left */}
        <div className="absolute -top-32 -left-16 h-96 w-96 rounded-full bg-accent/18 blur-[100px] dark:bg-accent/22" />
        {/* Sky-blue glow â€” top right */}
        <div className="absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-blue-400/25 blur-[120px] dark:bg-blue-500/18" />
        {/* Soft sky glow â€” bottom left */}
        <div className="absolute bottom-[8%] left-[5%] h-80 w-80 rounded-full bg-sky-400/20 blur-[90px] dark:bg-indigo-400/12" />
        {/* Extra glow â€” mid right, dark mode only */}
        <div className="absolute top-[50%] right-[3%] h-72 w-72 rounded-full bg-blue-500/0 blur-[80px] dark:bg-indigo-500/10" />
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
