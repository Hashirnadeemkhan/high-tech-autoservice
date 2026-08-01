/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['utfs.io'], // ✅ allow UploadThing image URLs
  },
}

export default nextConfig;
