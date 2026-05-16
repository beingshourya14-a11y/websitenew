/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Parent folder me package-lock ho to Turbopack galat root choose karke app/ miss kar deta hai (Vercel build fail)
    root: __dirname,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "comptechcompressor.com" },
      { protocol: "https", hostname: "www.comptechcompressor.com" },
      { protocol: "https", hostname: "www.comptechequipments.com" },
      { protocol: "https", hostname: "www.comptech.co.in" },
      { protocol: "https", hostname: "comptech.co.in" },
      { protocol: "https", hostname: "flowbite.com" },
    ],
  },
};

module.exports = nextConfig;
