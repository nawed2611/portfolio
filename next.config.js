/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'pbs.twimg.com'],
  },
}

module.exports = nextConfig
