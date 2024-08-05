// next.config.js
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
};

module.exports = nextConfig;
