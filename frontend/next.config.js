/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '209.38.121.93',  // Use your server IP
        port: '1337',
        pathname: '/uploads/**',     // Match all uploads
      },
    ],
  },
}

module.exports = nextConfig

