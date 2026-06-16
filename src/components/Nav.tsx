import Link from 'next/link'

interface NavProps {
  activePage?: 'projects' | 'info'
}

export default function Nav({ activePage }: NavProps) {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-arch-border">
      <Link
        href="/"
        className="text-arch-text text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity duration-200"
      >
        Xiaolong (Gary) Chen
      </Link>
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className={`text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
            activePage === 'projects'
              ? 'text-arch-text border-b border-arch-text pb-px'
              : 'text-arch-muted hover:text-arch-text'
          }`}
        >
          Projects
        </Link>
        <Link
          href="/info"
          className={`text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 ${
            activePage === 'info'
              ? 'text-arch-text border-b border-arch-text pb-px'
              : 'text-arch-muted hover:text-arch-text'
          }`}
        >
          Info
        </Link>
      </div>
    </nav>
  )
}
