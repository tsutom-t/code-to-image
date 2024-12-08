/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/code-to-image",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
