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
            {
                protocol: "https",
                hostname: "scontent-vie1-1.cdninstagram.com",
            },
        ],
    },
};

module.exports = nextConfig
