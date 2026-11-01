import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    // The "Blog" section was renamed to "Aktualności" / "News" – keep old links working.
    return [
      { source: '/:locale(pl|en|es|ca)/blog', destination: '/:locale/news', permanent: true },
      { source: '/:locale(pl|en|es|ca)/blog/:path*', destination: '/:locale/news/:path*', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
