import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'arch-bg': '#0a0a0a',
        'arch-surface': '#111111',
        'arch-border': '#1e1e1e',
        'arch-text': '#e8e5df',
        'arch-muted': '#888888',
        'arch-faint': '#555555',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
