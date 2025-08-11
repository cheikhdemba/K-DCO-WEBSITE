/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // Ensure we're using the Pages Router
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig 