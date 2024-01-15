/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "parkistra.com",
                port: "",
            },
            {
                protocol: "http",
                hostname: "parkistra.com",
                port: "",
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
            {
                protocol: "https",
                hostname: "scontent-iad3-2.cdninstagram.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "scontent-iad3-1.cdninstagram.com",
                port: "",
            },

            {
                protocol: "https",
                hostname: "graph.instagram.com",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
