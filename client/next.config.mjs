/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://firebasestorage.googleapis.com',
            port: '',
            pathname: '/dashboard/profile/**',
          },
        ],
      },
}; 

export default nextConfig;
