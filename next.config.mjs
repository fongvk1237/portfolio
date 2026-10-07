/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pure static site: `npm run build` writes plain HTML/CSS/JS to ./out.
  // No Node server runs in production, so there is nothing to attack or edit remotely.
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  devIndicators: false,
  images: { unoptimized: true }, // required for static export; the photo is pre-optimised
}

export default nextConfig
