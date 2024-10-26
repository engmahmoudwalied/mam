/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"], // يمكنك إضافة أي نطاقات أخرى تحتاجها هنا
    // remotePatterns: [] // يمكنك حذف هذا الجزء تمامًا
  },
};

module.exports = nextConfig;
