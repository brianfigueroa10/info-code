/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      's3-us-west-2.amazonaws.com',
      'www.notion.so',
      'prod-files-secure.s3.us-west-2.amazonaws.com',
      'images.unsplash.com',
    ],
  },
}

export default nextConfig
