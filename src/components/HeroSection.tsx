export default function HeroSection() {
  return (
    <section className="px-8 pt-14 pb-16 border-b border-arch-border">
      <p className="text-[10px] tracking-[0.22em] uppercase text-arch-faint mb-10">
        Architecture, Urbanism, Landscape
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16">
        <div>
          <h1 className="text-[2rem] md:text-[2.6rem] leading-[1.15] text-arch-text font-light mb-10">
            Exploring architecture,
            <br />
            spatial systems,
            <br />
            mobility, infrastructure,
            <br />
            and environmental perception.
          </h1>
          <a
            href="#projects"
            className="text-[10px] tracking-[0.22em] uppercase text-arch-muted hover:text-arch-text transition-colors duration-200"
          >
            View Selected Work ↓
          </a>
        </div>
        <div className="lg:pt-1">
          <p className="text-[13px] text-arch-muted leading-relaxed max-w-xs">
            Xiaolong (Gary) Chen is a recent graduate from the Architectural
            Association (AA), London. His work moves across architecture,
            urbanism, and landscape, investigating how spatial systems,
            infrastructure, mobility, and environmental conditions shape
            everyday forms of inhabitation.
          </p>
        </div>
      </div>
    </section>
  )
}
