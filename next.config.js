/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "out",
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  unoptimized: true,
}

module.exports = nextConfig
