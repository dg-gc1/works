import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import ProjectGrid from '@/components/ProjectGrid'
import Footer from '@/components/Footer'
import { projects } from '@/data/projects'
import { getProjectMedia } from '@/lib/getProjectMedia'

export default function Home() {
  const enriched = projects.map((p) => ({
    ...p,
    media: getProjectMedia(p.slug, p.media),
  }))

  return (
    <main className="min-h-screen flex flex-col">
      <Nav activePage="projects" />
      <HeroSection />
      <ProjectGrid projects={enriched} />
      <Footer />
    </main>
  )
}
