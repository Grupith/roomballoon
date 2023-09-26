/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
}

module.exports = nextConfig
