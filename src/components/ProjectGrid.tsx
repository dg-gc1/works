'use client'

import { useState } from 'react'
import { Project, FilterCategory } from '@/types'
import { categoryCounts } from '@/data/projects'
import ProjectRow from './ProjectRow'

const filters: { label: string; value: FilterCategory }[] = [
  { label: `All (${categoryCounts.all})`, value: 'all' },
  { label: `Architecture (${categoryCounts.architecture})`, value: 'architecture' },
  { label: `Urban (${categoryCounts.urban})`, value: 'urban' },
  { label: `Landscape (${categoryCounts.landscape})`, value: 'landscape' },
]

interface ProjectGridProps {
  projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all')

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter as Exclude<FilterCategory, 'all'>))

  return (
    <section id="projects">
      {/* Filter tabs */}
      <div className="px-8 border-b border-arch-border">
        <div className="flex items-center gap-6 md:gap-8 py-4 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`text-[10px] tracking-[0.2em] uppercase whitespace-nowrap transition-colors duration-200 pb-px shrink-0 ${
                activeFilter === f.value
                  ? 'text-arch-text border-b border-arch-text'
                  : 'text-arch-muted hover:text-arch-text'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project list */}
      <div>
        {filtered.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
