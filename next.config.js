/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "parkistra.com",
            },
            {
                protocol: "https",
                hostname: "cdna.artstation.com",
            },
        ],
    },
};

module.exports = nextConfig
