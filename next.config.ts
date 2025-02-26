import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig: NextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // Your existing image configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'piscum.photos',
        port: '',
        pathname: '/account123/**',
        search: '',
      },
    ],
  },
  
  // Other Next.js config options
  reactStrictMode: true,
};

// Apply MDX configuration to Next.js config
export default withMDX(nextConfig);