/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/page-a", destination: "/pages-router/page-a" },
        { source: "/page-b", destination: "/pages-router/page-b" },
      ],
    };
  },
};

module.exports = nextConfig;
