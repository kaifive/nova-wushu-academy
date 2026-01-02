/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'nova-wushu-academy';
const nextConfig = {
  ...(isProd && { output: 'export' }),
  images: { unoptimized: true },
  // Removed basePath and assetPrefix for custom domain compatibility
};

module.exports = nextConfig;
