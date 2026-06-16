import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { projects, getProjectBySlug } from '@/data/projects'
import { getProjectMedia } from '@/lib/getProjectMedia'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

type MediaType = 'youtube' | 'pdf' | 'video' | 'image'

function getMediaType(src: string): MediaType {
  if (/youtu\.?be/.test(src)) return 'youtube'
  if (src.toLowerCase().endsWith('.pdf')) return 'pdf'
  if (/\.(mp4|mov|webm)$/i.test(src)) return 'video'
  return 'image'
}

function getYouTubeEmbedUrl(url: string): string {
  const m = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/)
  return m ? `https://www.youtube.com/embed/${m[1]}` : url
}

function MediaItem({ src, title, index }: { src: string; title: string; index: number }) {
  const type = getMediaType(src)

  if (type === 'youtube') {
    return (
      <div className="relative w-full bg-arch-surface" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={getYouTubeEmbedUrl(src)}
          title={`${title} — video ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  if (type === 'pdf') {
    return (
      <>
        {/* Mobile: open in new tab */}
        <div className="block lg:hidden w-full bg-arch-surface px-6 py-8">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.2em] uppercase text-arch-muted hover:text-arch-text transition-colors duration-200 border border-arch-border px-5 py-3 inline-block"
          >
            View Document ↗
          </a>
        </div>
        {/* Desktop: embedded iframe */}
        <div className="hidden lg:block w-full bg-arch-surface" style={{ height: '85vh' }}>
          <iframe
            src={src}
            title={`${title} — document ${index + 1}`}
            className="w-full h-full border-0"
          />
        </div>
      </>
    )
  }

  if (type === 'video') {
    return (
      <div className="w-full bg-arch-surface">
        <video
          controls
          preload="metadata"
          className="w-full h-auto"
          title={`${title} — video ${index + 1}`}
        >
          <source src={src} />
        </video>
      </div>
    )
  }

  return (
    <div className="w-full bg-arch-surface">
      <Image
        src={src}
        alt={`${title} — image ${index + 1}`}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, calc(100vw - 4rem)"
        className="w-full h-auto"
        unoptimized
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const media = getProjectMedia(project.slug, project.media)

  return (
    <main className="min-h-screen flex flex-col">
      <Nav activePage="projects" />

      {/* Back link */}
      <div className="px-8 pt-6 pb-5 border-b border-arch-border">
        <Link
          href="/"
          className="text-[10px] tracking-[0.2em] uppercase text-arch-faint hover:text-arch-text transition-colors duration-200"
        >
          ← All Projects
        </Link>
      </div>

      {/* Project header */}
      <div className="px-8 pt-12 pb-12 border-b border-arch-border">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16">
          <div>
            <p className="text-[11px] text-arch-faint mb-4">{project.number}</p>
            <h1 className="text-2xl md:text-[1.9rem] uppercase tracking-[0.06em] text-arch-text font-medium leading-tight mb-8">
              {project.title}
            </h1>
            <p className="text-[13px] text-arch-muted leading-relaxed max-w-xl">
              {project.longDescription ?? project.description}
            </p>
          </div>

          {/* Metadata sidebar */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-5 lg:content-start lg:pt-10">
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
      </div>

      {/* Media gallery */}
      <div className="px-8 py-12 flex-1">
        {media.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {media.map((src, i) => {
              const type = getMediaType(src)
              const fullWidth = type === 'youtube' || type === 'pdf' || type === 'video'
              return (
                <div key={i} className={fullWidth ? 'md:col-span-2' : ''}>
                  <MediaItem src={src} title={project.title} index={i} />
                </div>
              )
            })}
          </div>
        ) : (
          <div className="w-full flex items-center justify-center bg-arch-surface" style={{ height: '60vh' }}>
            <span className="text-[10px] tracking-[0.2em] uppercase text-arch-faint">
              Images coming soon
            </span>
          </div>
        )}
      </div>

      {/* Prev / Next navigation */}
      <div className="px-8 py-8 border-t border-arch-border">
        <div className="flex items-center justify-between">
          {(() => {
            const idx = projects.findIndex((p) => p.slug === project.slug)
            const prev = projects[idx - 1]
            const next = projects[idx + 1]
            return (
              <>
                <div>
                  {prev && (
                    <Link
                      href={`/projects/${prev.slug}`}
                      className="text-[10px] tracking-[0.2em] uppercase text-arch-faint hover:text-arch-text transition-colors duration-200"
                    >
                      ← {prev.number} {prev.title}
                    </Link>
                  )}
                </div>
                <div>
                  {next && (
                    <Link
                      href={`/projects/${next.slug}`}
                      className="text-[10px] tracking-[0.2em] uppercase text-arch-faint hover:text-arch-text transition-colors duration-200"
                    >
                      {next.number} {next.title} →
                    </Link>
                  )}
                </div>
              </>
            )
          })()}
        </div>
      </div>

      <Footer />
    </main>
  )
}
