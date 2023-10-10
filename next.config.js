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
  appDir: "src/app",
};

module.exports = nextConfig;
