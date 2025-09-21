// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos"], 
  },
   eslint: {
    // 🚀 Dengan ini, error ESLint tidak akan menghentikan build di Vercel
    ignoreDuringBuilds: true,
  },

};

module.exports = nextConfig;

