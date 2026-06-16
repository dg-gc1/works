/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/works',
  assetPrefix: '/works',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
