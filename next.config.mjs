const isProd = process.env.NODE_ENV === 'production';
const repoName = 'yoelijoayudar'; // 👈 nombre EXACTO del repositorio

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
    images: { unoptimized: true },
    output: 'export',
    trailingSlash: true,
    basePath: isProd ? `/${repoName}` : '',
    assetPrefix: isProd ? `/${repoName}/` : '',
};

export default nextConfig;
