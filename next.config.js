/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,   
    },
    reactStrictMode: true,
    distDir: 'dist'
}

module.exports = nextConfig
