import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Info',
}

const researchInterests = [
  'Spatial Data Analysis',
  'Environmental Perception',
  'Urban Morphology',
  'Active Mobility',
  'Thermal Comfort',
  'Ecological Infrastructure',
  'Participatory Design',
  'GIS & Remote Sensing',
]

const tools =
  'QGIS / ArcGIS / Rhino / Grasshopper / Python / R / Illustrator / Photoshop / InDesign / ENVI-met / EnergyPlus / Space Syntax / Machine Learning / Remote Sensing / Field Survey'

export default function InfoPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav activePage="info" />

      <div className="flex-1 px-8 py-16 max-w-2xl">

        {/* Profile */}
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arch-faint mb-8">Profile</p>
          <h1 className="text-xl text-arch-text font-light mb-6">Xiaolong (Gary) Chen</h1>
          <p className="text-[13px] text-arch-muted leading-relaxed mb-4">
            Xiaolong (Gary) Chen is a recent graduate from the Architectural
            Association (AA), London. His work moves across architecture,
            infrastructure, and landscape, investigating how spatial systems,
            environmental conditions, and material economies shape patterns of
            inhabitation and collective life.
          </p>
          <p className="text-[13px] text-arch-muted leading-relaxed mb-4">
            Positioned between design research and spatial practice, his
            projects examine how architecture can engage with urban
            transformation, ecological pressures, infrastructural networks,
            and the changing relationship between people and their built
            environment. Working across architectural, urban, and territorial
            scales, he uses mapping, environmental analysis, spatial
            speculation, and design intervention to construct alternative ways
            of reading and reshaping contemporary urban conditions.
          </p>
          <p className="text-[13px] text-arch-muted leading-relaxed">
            He is currently based between London and Guangzhou.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16 border-t border-arch-border pt-10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arch-faint mb-8">Education</p>
          <div className="space-y-8">
            <div className="grid grid-cols-[8rem_1fr] gap-6">
              <span className="text-[11px] text-arch-faint leading-relaxed">2024 — 2026</span>
              <div>
                <p className="text-[13px] text-arch-text mb-1">Architecture — ARB/RIBA Part 2</p>
                <p className="text-[12px] text-arch-muted mb-0.5">Architectural Association School of Architecture (AA)</p>
                <p className="text-[11px] text-arch-faint mb-1">London, United Kingdom</p>
                <p className="text-[11px] text-arch-faint italic">Second professional qualification towards ARB registration and RIBA membership</p>
              </div>
            </div>
            <div className="grid grid-cols-[8rem_1fr] gap-6">
              <span className="text-[11px] text-arch-faint leading-relaxed">2020 — 2023</span>
              <div>
                <p className="text-[13px] text-arch-text mb-1">Architecture — ARB/RIBA Part 1</p>
                <p className="text-[12px] text-arch-muted mb-0.5">Architectural Association School of Architecture (AA)</p>
                <p className="text-[11px] text-arch-faint mb-1">London, United Kingdom</p>
                <p className="text-[11px] text-arch-faint italic">First professional qualification in architecture</p>
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="mb-16 border-t border-arch-border pt-10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arch-faint mb-8">
            Research Interests
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {researchInterests.map((interest) => (
              <span key={interest} className="text-[12px] text-arch-muted">
                — {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Methods & Tools */}
        <div className="mb-16 border-t border-arch-border pt-10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arch-faint mb-8">
            Methods & Tools
          </p>
          <p className="text-[12px] text-arch-muted leading-loose">{tools}</p>
        </div>

        {/* Contact */}
        <div className="border-t border-arch-border pt-10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-arch-faint mb-8">Contact</p>
          <div className="space-y-3">
            <div className="grid grid-cols-[8rem_1fr] gap-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-arch-faint">Email</span>
              <a
                href="mailto:garychenaa@outlook.com"
                className="text-[12px] text-arch-muted hover:text-arch-text transition-colors duration-200"
              >
                garychenaa@outlook.com
              </a>
            </div>
            <div className="grid grid-cols-[8rem_1fr] gap-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-arch-faint">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/xiaolong-chen-80261216b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-arch-muted hover:text-arch-text transition-colors duration-200"
              >
                Xiaolong (Gary) Chen
              </a>
            </div>
            <div className="grid grid-cols-[8rem_1fr] gap-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-arch-faint">Instagram</span>
              <a
                href="https://instagram.com/xo_lo_cn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-arch-muted hover:text-arch-text transition-colors duration-200"
              >
                @xo_lo_cn
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
