/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'aceternity.com'],  // Tambahkan domain yang diizinkan di sini
  },
};

export default nextConfig;
