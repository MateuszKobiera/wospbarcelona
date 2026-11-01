import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { HeartBackground } from '@/components/HeartBackground';
import { getAllPostsForLocale } from '@/content/blog-i18n';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

/** Articles pinned to the top of the news page, in display order (the first one gets the big tile). */
const FEATURED_SLUGS = [
  '35-final-wosp-zagramy-dla-noworodkow',
  'dziekujemy-za-34-final-wosp-w-barcelonie',
  'wolontariusze-35-finalu-wosp-zapisy-barcelona',
  'co-czwarty-mieszkaniec-katalonii-urodzil-sie-za-granica',
];

type Post = ReturnType<typeof getAllPostsForLocale>[number];

const DATE_LOCALES: Record<string, string> = { pl: 'pl-PL', en: 'en-GB', es: 'es-ES', ca: 'ca-ES' };

function formatDate(date: string, locale: string) {
  const d = new Date(`${date}T12:00:00`);
  if (Number.isNaN(d.getTime())) return date;
  return new Intl.DateTimeFormat(DATE_LOCALES[locale] ?? 'pl-PL', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}

function postHref(post: Post, locale: string) {
  return post.sourceUrl ?? `/${locale}/news/${post.slug}`;
}

function Thumb({ post, className, size = 'medium' }: { post: Post; className: string; size?: 'medium' | 'large' }) {
  if (post.thumbnailImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={post.thumbnailImage}
        alt={post.title}
        loading="lazy"
        className={`${className} object-cover transition-transform duration-500 group-hover:scale-105`}
      />
    );
  }
  return (
    <div className={`${className} bg-gradient-to-br from-red-500 via-red-400 to-pink-400 flex items-center justify-center relative overflow-hidden`}>
      <HeartBackground size={size} />
      <span className="text-white text-4xl font-bold relative z-10">W</span>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('blog.title'),
    description: t('blog.description'),
    openGraph: {
      title: t('blog.title'),
      description: t('blog.description'),
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('blog');
  const allPosts = [...getAllPostsForLocale(locale)].sort((a, b) => b.date.localeCompare(a.date));

  const bySlug = new Map(allPosts.map((p) => [p.slug, p]));
  const featured = FEATURED_SLUGS.map((s) => bySlug.get(s)).filter((p): p is Post => !!p);
  const featuredSet = new Set(featured.map((p) => p.slug));
  const rest = allPosts.filter((p) => !featuredSet.has(p.slug));
  const [lead, ...sidePicks] = featured;

  return (
    <main className="py-10 bg-gradient-to-br from-white via-red-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Most interesting – pinned articles */}
        {lead && (
          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-3">{t('featuredTitle')}</h2>
            <div className="grid gap-4 lg:grid-cols-5">
              {/* Big tile: photo + slim solid dark caption panel (high contrast, readable regardless of the photo) */}
              <Link
                href={postHref(lead, locale)}
                className="group flex flex-col lg:col-span-3 overflow-hidden rounded-xl bg-gray-900 shadow-sm lg:min-h-[330px] transition-shadow hover:shadow-lg focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                <div className="relative aspect-[16/9] lg:aspect-auto lg:flex-1 lg:min-h-[200px] overflow-hidden">
                  <Thumb post={lead} className="absolute inset-0 h-full w-full" size="large" />
                </div>
                <div className="border-l-4 border-red-500 px-4 py-3">
                  <h3 className="text-lg md:text-xl font-bold text-white leading-snug line-clamp-2 group-hover:underline decoration-2 underline-offset-4">
                    {lead.title}
                  </h3>
                  {lead.excerpt && <p className="hidden md:block mt-1 text-sm text-gray-100 line-clamp-1">{lead.excerpt}</p>}
                  <div className="mt-1 text-xs text-gray-300">{formatDate(lead.date, locale)}</div>
                </div>
              </Link>

              {/* Three horizontal cards – each takes an equal third of the lead's height, no gaps */}
              <div className="lg:col-span-2 grid gap-3 lg:grid-rows-3">
                {sidePicks.map((post) => (
                  <Link
                    key={post.slug}
                    href={postHref(post, locale)}
                    className="group flex h-full min-h-[96px] overflow-hidden rounded-xl bg-white border border-red-100 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    <div className="relative w-32 sm:w-40 shrink-0 overflow-hidden">
                      <Thumb post={post} className="absolute inset-0 h-full w-full" />
                    </div>
                    <div className="min-w-0 flex flex-col justify-center p-3">
                      <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-3 group-hover:text-red-600 transition-colors">
                        {post.title}
                      </h3>
                      <div className="mt-1 flex items-center text-sm text-gray-600">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {formatDate(post.date, locale)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All other articles, newest first */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-3">{t('allTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={postHref(post, locale)}
                className="group flex flex-col overflow-hidden rounded-xl bg-white border border-red-100 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="overflow-hidden">
                  <Thumb post={post} className="aspect-[16/10] w-full" />
                </div>
                <div className="flex flex-col flex-1 p-4">
                  <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-3 mb-2 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                  )}
                  <div className="mt-auto flex items-center text-xs text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(post.date, locale)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
