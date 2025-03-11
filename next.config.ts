import type { NextConfig } from "next";

let nextConfig: NextConfig = {
    /* config options here */

    images: {
        unoptimized: true,
    },
};

// config so it would work on GitHub Pages
if (process.env.ROUTE) {
    nextConfig = {
        output: "export",
        distDir: "out",
        basePath: `/${process.env.ROUTE?.trim()}`,
        assetPrefix: `/${process.env.ROUTE?.trim()}`,
        images: {
            unoptimized: true,
        },
    }
}





export default nextConfig;
