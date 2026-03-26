import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.spendnetwork.com',
      },
    ],
  },
};

export default withMDX(nextConfig);
