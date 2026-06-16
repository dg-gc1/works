import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Nav />
      <div className="flex-1 flex flex-col justify-center px-8 py-20">
        <p className="text-[10px] tracking-[0.2em] uppercase text-arch-faint mb-6">404</p>
        <h1 className="text-2xl text-arch-text font-light mb-6">Page not found</h1>
        <Link
          href="/"
          className="text-[10px] tracking-[0.2em] uppercase text-arch-muted hover:text-arch-text transition-colors duration-200"
        >
          ← Return to projects
        </Link>
      </div>
      <Footer />
    </main>
  )
}
