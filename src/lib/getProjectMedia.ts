import fs from 'fs'
import path from 'path'

const MEDIA_EXTENSIONS = /\.(jpg|jpeg|png|gif|webp|svg|tif|tiff|pdf|mp4|mov|webm)$/i

function sortMedia(files: string[]): string[] {
  return [...files].sort((a, b) => {
    const aBase = path.basename(a).toLowerCase()
    const bBase = path.basename(b).toLowerCase()
    if (aBase.startsWith('cover')) return -1
    if (bBase.startsWith('cover')) return 1
    return aBase.localeCompare(bBase, undefined, { numeric: true })
  })
}

export function getProjectMedia(slug: string, extraUrls: string[] = []): string[] {
  const dir = path.join(process.cwd(), 'public', 'projects', slug)

  let scanned: string[] = []
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter((f) => MEDIA_EXTENSIONS.test(f))
    scanned = sortMedia(files).map((f) => `/projects/${slug}/${f}`)
  }

  const youtubeUrls = extraUrls.filter((u) => /youtu\.?be/.test(u))

  return [...scanned, ...youtubeUrls]
}
