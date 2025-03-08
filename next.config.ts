import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "out",
};

if (!!process.env.ROUTE) {
    nextConfig.basePath = `/${process.env.ROUTE?.trim()}`;
}

export default nextConfig;
