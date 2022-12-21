/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolioml26151fd83d4a40cb89e358a0b8c234d582358-staging.s3.amazonaws.com',
        port: '',
        pathname: '/image/upload/**',
      },
    ],
  },
}
