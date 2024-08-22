/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,  // 为每个路由生成一个 index.html 文件
  output: 'export',  // 启用静态HTML导出
  distDir: 'dist', 
  images: {
    unoptimized: true  // 对于静态导出，我们需要禁用Next.js的图像优化
  },
  // 如果你的应用不是部署在域名根目录，你可能需要设置 basePath
  // basePath: '/your-base-path',
}

module.exports = nextConfig