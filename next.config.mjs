/** @type {import('next').NextConfig} */
// Portal ini tayang di https://www.pintuweb.id/menu-digital: PintuWeb meneruskan path /menu-digital ke project ini
// (pola multi-zone), jadi semua rute & aset hidup di bawah basePath yang sama.
const nextConfig = {
  basePath: '/menu-digital',
  // Gambar statis tanpa Image Optimization Vercel: varian WebP di public/_img lewat image-loader.js
  // (dibuat scripts/static-images.mjs . --base /menu-digital).
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  async headers() {
    return [{ source: '/_img/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] }];
  },
  async redirects() {
    // Alamat portal-menu.pintuweb.id di luar basePath -> alamat utama.
    return [
      { source: '/', destination: 'https://www.pintuweb.id/menu-digital', basePath: false, permanent: true },
      { source: '/:lama((?!menu-digital(?:/|$)).+)', destination: 'https://www.pintuweb.id/menu-digital', basePath: false, permanent: true },
    ];
  },
};

export default nextConfig;
