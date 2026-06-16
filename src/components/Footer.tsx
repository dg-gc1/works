export default function Footer() {
  return (
    <footer className="px-8 py-10 border-t border-arch-border mt-auto">
      <div className="space-y-3">
        <div className="flex items-center gap-10">
          <span className="text-[10px] tracking-[0.2em] uppercase text-arch-faint w-24 shrink-0">
            Email
          </span>
          <a
            href="mailto:garychenaa@outlook.com"
            className="text-xs text-arch-muted hover:text-arch-text transition-colors duration-200"
          >
            garychenaa@outlook.com
          </a>
        </div>
        <div className="flex items-center gap-10">
          <span className="text-[10px] tracking-[0.2em] uppercase text-arch-faint w-24 shrink-0">
            LinkedIn
          </span>
          <a
            href="https://www.linkedin.com/in/xiaolong-chen-80261216b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-arch-muted hover:text-arch-text transition-colors duration-200"
          >
            Xiaolong (Gary) Chen
          </a>
        </div>
        <div className="flex items-center gap-10">
          <span className="text-[10px] tracking-[0.2em] uppercase text-arch-faint w-24 shrink-0">
            Instagram
          </span>
          <a
            href="https://instagram.com/xo_lo_cn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-arch-muted hover:text-arch-text transition-colors duration-200"
          >
            @xo_lo_cn
          </a>
        </div>
      </div>
    </footer>
  )
}
