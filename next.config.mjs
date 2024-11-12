/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net', // Contentful's image CDN
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com', // Aceternity's image CDN
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash's image CDN
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
