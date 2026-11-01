import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ExternalLink, Play } from 'lucide-react';
import { siFacebook, siInstagram, siTiktok, siYoutube } from 'simple-icons/icons';
import { FacebookFeed, InstagramFeed, TikTokFeed } from '@/components/SocialEmbeds';
import { getLatestYoutubeVideos, YOUTUBE_CHANNEL_URL } from '@/lib/youtube';

// Re-read the YouTube feed at most once an hour.
export const revalidate = 3600;

const DATE_LOCALES: Record<string, string> = { pl: 'pl-PL', en: 'en-GB', es: 'es-ES', ca: 'ca-ES' };

function formatDate(iso: string, locale: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat(DATE_LOCALES[locale] ?? 'pl-PL', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}

function BrandIcon({ path, className }: { path: string; className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" className={`fill-current ${className ?? ''}`} aria-hidden>
      <path d={path} />
    </svg>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'social' });
  return {
    title: t('metaTitle'),
    description: t('description'),
    openGraph: { title: t('metaTitle'), description: t('description') },
  };
}

export default async function SocialPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'social' });
  const videos = await getLatestYoutubeVideos(4);

  const profiles = [
    { name: 'Facebook', handle: 'sztabWOSPBarcelona', href: 'https://www.facebook.com/sztabWOSPBarcelona', icon: siFacebook.path, color: 'bg-[#1877F2]' },
    { name: 'Instagram', handle: '@wospbarcelona', href: 'https://www.instagram.com/wospbarcelona/', icon: siInstagram.path, color: 'bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]' },
    { name: 'YouTube', handle: '@sztabwospbarcelona3771', href: YOUTUBE_CHANNEL_URL, icon: siYoutube.path, color: 'bg-[#FF0000]' },
    { name: 'TikTok', handle: '@wospbarcelona', href: 'https://www.tiktok.com/@wospbarcelona', icon: siTiktok.path, color: 'bg-gray-900' },
  ];

  return (
    <main className="py-10 bg-gradient-to-br from-white via-red-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t('title')}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{t('description')}</p>
        </div>

        {/* Profiles */}
        <section aria-label={t('followTitle')} className="mb-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl bg-white border border-red-100 shadow-sm p-4 transition-all hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white ${p.color}`}>
                <BrandIcon path={p.icon} className="h-6 w-6" />
              </span>
              <span className="min-w-0">
                <span className="block font-bold text-gray-900">{p.name}</span>
                <span className="block text-sm text-gray-600 truncate">{p.handle}</span>
              </span>
            </a>
          ))}
        </section>

        {/* Row 1: YouTube + Instagram */}
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          {/* YouTube */}
          <section>
            <div className="flex items-end justify-between gap-4 mb-4">
              <h2 className="text-xl font-bold text-gray-900 border-l-4 border-red-600 pl-3">{t('youtube.title')}</h2>
              <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-red-700 hover:underline">
                {t('youtube.channel')}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {videos.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2">
                {videos.map((v) => (
                  <a
                    key={v.id}
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-xl bg-white border border-red-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    <div className="relative aspect-video overflow-hidden bg-gray-900">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={v.thumbnail} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/90 text-white shadow-lg transition-transform group-hover:scale-110">
                          <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
                        </span>
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">{v.title}</h3>
                      {v.published && <div className="mt-1 text-sm text-gray-600">{formatDate(v.published, locale)}</div>}
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="rounded-xl bg-white border border-red-100 p-6 text-gray-700">{t('youtube.empty')}</p>
            )}
          </section>

          {/* Instagram */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-red-600 pl-3 mb-4">{t('instagram.title')}</h2>
            <InstagramFeed />
          </section>
        </div>

        {/* Row 2: TikTok + Facebook */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2 items-start">
          {/* TikTok */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-red-600 pl-3 mb-4">{t('tiktok.title')}</h2>
            <TikTokFeed />
          </section>

          {/* Facebook */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 border-l-4 border-red-600 pl-3 mb-4">{t('facebook.title')}</h2>
            <FacebookFeed />
          </section>
        </div>
      </div>
    </main>
  );
}
