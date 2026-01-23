/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ⚠️ Temporarily ignore build errors for development
    // TODO: Fix Supabase type generation issues
    ignoreBuildErrors: true,
  },
  eslint: {
    // ⚠️ Temporarily ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
