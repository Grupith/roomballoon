/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    unoptimized: true,
    domains: ["lh3.googleusercontent.com"],
  },
}

module.exports = nextConfig
