import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { SkillsSection } from '@/components/skills-section'
import { ExperienceSection } from '@/components/experience-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
      </main>
      <SiteFooter />
    </div>
  )
}
