/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: process.env.NODE_ENV === "production" ? "/testwebsite2" : "",
    output: "export",
    distDir: "dist",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
