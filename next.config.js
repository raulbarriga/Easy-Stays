/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "links.papareact.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.jsonkeeper.com",
        port: "",
        pathname: "/b/**",
      },
    ],
  },
  env: {
    mapboxbox: process.env.MAPBOX_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
