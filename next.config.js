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
                port: "",
            },
            {
                protocol: "https",
                hostname: "scontent.cdninstagram.com",
                port: "",
            },
        ],
        domains: [
            // "scontent.cdninstagram.com",
            // "graph.instagram.com",
            // "scontent-iad3-2.cdninstagram.com",
            // "scontent-iad3-1.cdninstagram.com",
            "*.cdninstagram.com",
        ],
    },
};

module.exports = nextConfig
