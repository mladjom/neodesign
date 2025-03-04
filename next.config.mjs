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

const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos', 
        port: '',
        pathname: '/**', // Allow any path under picsum.photos
      },
    ],
  },
  
  reactStrictMode: true,
};

// Apply MDX configuration to Next.js config
export default withMDX(nextConfig);