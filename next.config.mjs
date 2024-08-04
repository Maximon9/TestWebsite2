/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: process.env.NODE_ENV === "production" ? "/testwebsite2" : "",
    output: "export",
    distDir: "out",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
