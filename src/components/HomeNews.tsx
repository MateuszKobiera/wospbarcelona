import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { getAllPostsForLocale } from '@/content/blog-i18n';

type Post = ReturnType<typeof getAllPostsForLocale>[number];

/**
 * Hand-picked "most interesting" articles (sidebar), in order of preference.
 * Articles already shown in the main grid are skipped, so keep a few spares here.
 */
const FEATURED_SLUGS = [
  '35-final-wosp-zagramy-dla-noworodkow',
  'jak-dziala-wosp-skad-pieniadze-i-gdzie-trafia-sprzet',
  'ostateczny-wynik-34-finalu-wosp-263-mln-zl',
  'czym-jest-swiatelko-do-nieba-jak-wyglada-dzien-finalu',
  'wosp-gra-na-calym-swiecie-sztaby-zagraniczne-34-finalu',
  'co-czwarty-mieszkaniec-katalonii-urodzil-sie-za-granica',
  'tak-wygladal-33-final-wosp-w-barcelonie',
  'jak-zostac-wolontariuszem-wosp-w-barcelonie',
  'sie-gotuje-sie-pomaga-smaki-swiata-z-wosp',
  'ostateczny-wynik-33-finalu-wosp-289-mln-zl',
];

const MAIN_COUNT = 5; // lead tile + side card + row of 3
const FEATURED_COUNT = 4; // big card + 3 rows in the sidebar
const BOTTOM_COUNT = 4; // compact row under everything

const DATE_LOCALES: Record<string, string> = { pl: 'pl-PL', en: 'en-GB', es: 'es-ES', ca: 'ca-ES' };

function formatDate(date: string, locale: string) {
  const d = new Date(`${date}T12:00:00`);
  if (Number.isNaN(d.getTime())) return date;
  return new Intl.DateTimeFormat(DATE_LOCALES[locale] ?? 'pl-PL', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}

function postHref(post: Post, locale: string) {
  return post.sourceUrl ?? `/${locale}/news/${post.slug}`;
}

function PostImage({ post, sizes }: { post: Post; sizes: string }) {
  const src = post.thumbnailImage ?? post.coverImage;
  if (!src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-400 to-pink-400">
        <Heart className="w-8 h-8 text-white/80" fill="currentColor" />
      </div>
    );
  }
  return (
    <Image src={src} alt={post.title} fill sizes={sizes} className="object-cover transition-transform duration-500 group-hover:scale-105" />
  );
}

/** Photo on top, headline below. */
function Card({ post, locale, imageClass = 'aspect-[16/10]' }: { post: Post; locale: string; imageClass?: string }) {
  return (
    <Link href={postHref(post, locale)} className="group block">
      <div className={`relative overflow-hidden rounded-xl bg-gray-100 ${imageClass}`}>
        <PostImage post={post} sizes="(max-width: 768px) 100vw, 25vw" />
      </div>
      <h3 className="mt-3 text-lg font-bold text-gray-900 leading-snug line-clamp-3 group-hover:text-red-600 transition-colors">
        {post.title}
      </h3>
      <div className="mt-1 text-xs text-gray-500">{formatDate(post.date, locale)}</div>
    </Link>
  );
}

export async function HomeNews({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'home.newsSection' });
  const posts = [...getAllPostsForLocale(locale)].sort((a, b) => b.date.localeCompare(a.date));
  if (posts.length === 0) return null;

  const main = posts.slice(0, MAIN_COUNT);
  const shown = new Set(main.map((p) => p.slug));
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const featured = FEATURED_SLUGS.map((s) => bySlug.get(s))
    .filter((p): p is Post => !!p && !shown.has(p.slug))
    .slice(0, FEATURED_COUNT);
  featured.forEach((p) => shown.add(p.slug));
  const bottom = posts.filter((p) => !shown.has(p.slug)).slice(0, BOTTOM_COUNT);

  const [lead, second, ...row] = main;
  const [topPick, ...picks] = featured;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('title')}</h2>
          <p className="text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {/* Main grid */}
          <div className="lg:col-span-3 grid gap-6 md:grid-cols-3 content-start">
            {/* Lead: title over the photo */}
            <Link href={postHref(lead, locale)} className="group relative block md:col-span-2 overflow-hidden rounded-xl bg-gray-100 aspect-[16/10] md:aspect-auto md:min-h-[300px]">
              <PostImage post={lead} sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="border-l-4 border-red-500 pl-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug group-hover:underline decoration-2 underline-offset-4">
                    {lead.title}
                  </h3>
                  <div className="mt-2 text-xs text-white/75">{formatDate(lead.date, locale)}</div>
                </div>
              </div>
            </Link>

            {second && <Card post={second} locale={locale} />}
            {row.map((post) => (
              <Card key={post.slug} post={post} locale={locale} />
            ))}
          </div>

          {/* Sidebar: most interesting */}
          {topPick && (
            <aside className="rounded-xl bg-gradient-to-br from-red-600 via-pink-600 to-red-700 p-4 text-white shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-4 h-4" fill="white" />
                <h3 className="text-lg font-bold uppercase tracking-wide">{t('featuredTitle')}</h3>
              </div>

              <Link href={postHref(topPick, locale)} className="group block overflow-hidden rounded-lg bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <PostImage post={topPick} sizes="(max-width: 1024px) 100vw, 25vw" />
                </div>
                <div className="p-3 text-lg font-bold text-gray-900 leading-snug line-clamp-4 group-hover:text-red-600 transition-colors">
                  {topPick.title}
                </div>
              </Link>

              <ul className="mt-2">
                {picks.map((post) => (
                  <li key={post.slug}>
                    <Link href={postHref(post, locale)} className="group flex items-start gap-3 py-3 border-b border-white/20 last:border-b-0">
                      <div className="relative w-24 h-16 shrink-0 overflow-hidden rounded-md bg-white/20">
                        <PostImage post={post} sizes="96px" />
                      </div>
                      <span className="text-sm font-bold leading-snug line-clamp-3 group-hover:underline">{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>

        {/* Compact bottom row */}
        {bottom.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-200 pt-6">
            {bottom.map((post) => (
              <Link key={post.slug} href={postHref(post, locale)} className="group flex items-start gap-3">
                <div className="relative w-24 h-16 shrink-0 overflow-hidden rounded-md bg-gray-100">
                  <PostImage post={post} sizes="96px" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-gray-900 leading-snug line-clamp-3 group-hover:text-red-600 transition-colors">{post.title}</div>
                  <div className="mt-1 text-xs text-gray-500">{formatDate(post.date, locale)}</div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold hover:underline transition-colors"
          >
            {t('allArticles')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
