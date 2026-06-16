import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Xiaolong (Gary) Chen — Architecture, Urbanism, Landscape',
    template: '%s — Xiaolong (Gary) Chen',
  },
  description:
    'A designer and researcher working across architecture, urbanism, and landscape. Research-driven spatial design.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body className="bg-arch-bg text-arch-text font-mono antialiased">
        {children}
      </body>
    </html>
  )
}
