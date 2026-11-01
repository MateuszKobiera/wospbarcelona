import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { getAllPostsForLocale } from '@/content/blog-i18n';

type Props = {
  locale: string;
  currentSlug: string;
  title: string;
  readMoreLabel: string;
  count?: number;
};

/** Small, stable string hash so every article always gets the same "random" picks (no hydration/caching surprises). */
function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Pseudo-random selection of other articles, seeded by the current slug. */
export function pickRelatedPosts(locale: string, currentSlug: string, count = 3) {
  const others = getAllPostsForLocale(locale).filter((p) => p.slug !== currentSlug);
  return others
    .map((p) => ({ p, k: hash(currentSlug + '|' + p.slug) }))
    .sort((a, b) => a.k - b.k)
    .slice(0, count)
    .map(({ p }) => p);
}

export function RelatedPosts({ locale, currentSlug, title, readMoreLabel, count = 3 }: Props) {
  const posts = pickRelatedPosts(locale, currentSlug, count);
  if (posts.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/news/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl bg-white border border-red-100 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="relative h-40 overflow-hidden bg-gradient-to-br from-red-500 via-red-400 to-pink-400">
              {post.thumbnailImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.thumbnailImage}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">W</span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-4">
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <Calendar className="w-3 h-3 mr-1" />
                {post.date}
              </div>
              <h3 className="font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-red-600 transition-colors">{post.title}</h3>
              {post.excerpt && <p className="text-sm text-gray-600 line-clamp-3 flex-1">{post.excerpt}</p>}
              <span className="mt-3 text-sm font-semibold text-red-600">{readMoreLabel} →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
