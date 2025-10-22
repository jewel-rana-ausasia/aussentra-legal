import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: true will fail the build on ESLint warnings
    // Setting ignoreDuringBuilds: true will allow build to pass even with lint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
