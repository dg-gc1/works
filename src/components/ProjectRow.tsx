import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/types'

interface ProjectRowProps {
  project: Project
}

function isImage(src: string): boolean {
  return !/youtu\.?be/.test(src) && !src.toLowerCase().endsWith('.pdf')
}

export default function ProjectRow({ project }: ProjectRowProps) {
  const imageItems = project.media.filter(isImage)
  const hasImages = imageItems.length > 0
  const hasTwoImages = imageItems.length >= 2

  return (
    <Link href={`/projects/${project.slug}`} className="block group border-b border-arch-border">
      <div className="grid grid-cols-1 lg:grid-cols-[3.5rem_1fr_13rem_40%] hover:bg-arch-surface transition-colors duration-200">

        {/* Number — desktop only */}
        <div className="hidden lg:flex items-start pt-8 pb-8 pl-8">
          <span className="text-[11px] text-arch-faint font-mono">{project.number}</span>
        </div>

        {/* Title + Description */}
        <div className="px-8 lg:pl-0 pt-8 pb-8 lg:pr-10">
          <span className="text-[11px] text-arch-faint lg:hidden mb-2 block">{project.number}</span>
          <h2 className="text-[13px] uppercase tracking-[0.08em] text-arch-text font-medium leading-snug mb-4 group-hover:opacity-90 transition-opacity duration-200">
            {project.title}
          </h2>
          <p className="text-[12px] text-arch-muted leading-relaxed max-w-sm">
            {project.description}
          </p>

          {/* Mobile metadata */}
          <div className="lg:hidden mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-arch-faint mb-0.5">Type</p>
              <p className="text-[11px] text-arch-muted">{project.type}</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-arch-faint mb-0.5">Year</p>
              <p className="text-[11px] text-arch-muted">{project.year}</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-arch-faint mb-0.5">Location</p>
              <p className="text-[11px] text-arch-muted">{project.location}</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-arch-faint mb-0.5">Tags</p>
              <p className="text-[11px] text-arch-muted">{project.tags.join(' / ')}</p>
            </div>
          </div>
        </div>

        {/* Metadata — desktop only */}
        <div className="hidden lg:block pt-8 pb-8 pr-8">
          <div className="space-y-4">
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-arch-faint mb-1">Type</p>
              <p className="text-[12px] text-arch-muted">{project.type}</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-arch-faint mb-1">Year</p>
              <p className="text-[12px] text-arch-muted">{project.year}</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-arch-faint mb-1">Location</p>
              <p className="text-[12px] text-arch-muted">{project.location}</p>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.2em] uppercase text-arch-faint mb-1">Tags</p>
              <p className="text-[12px] text-arch-muted">{project.tags.join(' / ')}</p>
            </div>
          </div>
        </div>

        {/* Thumbnail area — desktop only, cover image only */}
        <div className="hidden lg:flex items-start bg-arch-surface">
          {hasImages ? (
            <Image
              src={imageItems[0]}
              alt={project.title}
              width={0}
              height={0}
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              sizes="(max-width: 1024px) 0px, 40vw"
              unoptimized
            />
          ) : (
            <div className="flex-1 bg-arch-surface" style={{ minHeight: '230px' }} />
          )}
        </div>
      </div>
    </Link>
  )
}
