/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname:
          "/fse1.relahq.com/public/styles/kb_full/s3/property-images/prop-nid-83661131/**",
      },
    ],
  },
};

module.exports = nextConfig;
