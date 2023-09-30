import("next").NextConfig

const nextConfig = {
  distDir: "out",
  images: {
    unoptimized: true,
    domains: ["lh3.googleusercontent.com"],
  },
}

module.exports = nextConfig
