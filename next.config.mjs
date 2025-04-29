/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async rewrites() {
    return [
      {
        source: "/casecobra/:path*",
        destination: "https://casecobra-proj.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
