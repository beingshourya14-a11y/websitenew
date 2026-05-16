import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "comptechcompressor.com",
      },
      {
        protocol: "https",
        hostname: "www.comptechcompressor.com",
      },
      {
        protocol: "https",
        hostname: "www.comptechequipments.com",
      },
      {
        protocol: "https",
        hostname: "www.comptech.co.in",
      },
      {
        protocol: "https",
        hostname: "comptech.co.in",
      },
      {
        protocol: "https",
        hostname: "flowbite.com",
      },
    ],
  },
};

export default nextConfig;
