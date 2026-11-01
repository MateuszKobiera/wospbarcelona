import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { getAllPostsForLocale } from '@/content/blog-i18n';

type Props = {
  locale: string;
  currentSlug: string;
  labels: {
    navigation: string;
    newer: string;
    older: string;
  };
};

type Post = ReturnType<typeof getAllPostsForLocale>[number];

/** Newer article on the left, older one on the right (list is sorted newest first). */
export function PostNavigation({ locale, currentSlug, labels }: Props) {
  const posts = getAllPostsForLocale(locale);
  const index = posts.findIndex((p) => p.slug === currentSlug);
  if (index === -1) return null;

  const newer = index > 0 ? posts[index - 1] : null;
  const older = index < posts.length - 1 ? posts[index + 1] : null;
  if (!newer && !older) return null;

  return (
    <nav aria-label={labels.navigation} className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      {newer && <PostNavCard post={newer} locale={locale} label={labels.newer} direction="newer" />}
      {older && <PostNavCard post={older} locale={locale} label={labels.older} direction="older" />}
    </nav>
  );
}

function PostNavCard({ post, locale, label, direction }: { post: Post; locale: string; label: string; direction: 'newer' | 'older' }) {
  const isOlder = direction === 'older';

  return (
    <Link
      href={`/${locale}/news/${post.slug}`}
      rel={isOlder ? 'next' : 'prev'}
      className={`group flex flex-col rounded-xl bg-white border border-red-100 shadow-sm hover:shadow-lg hover:border-red-300 transition-all p-4 ${
        isOlder ? 'md:col-start-2 md:items-end md:text-right' : ''
      }`}
    >
      <span
        className={`inline-flex items-center gap-2 text-sm font-semibold text-red-600 mb-3 ${isOlder ? 'md:flex-row-reverse' : ''}`}
      >
        {isOlder ? (
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        ) : (
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
        )}
        {label}
      </span>

      <div className={`flex gap-4 w-full ${isOlder ? 'md:flex-row-reverse' : ''}`}>
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded-lg bg-linear-to-br from-red-500 via-red-400 to-pink-400">
          {post.thumbnailImage ? (
            <Image
              src={post.thumbnailImage}
              alt=""
              fill
              sizes="112px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">W</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className={`flex items-center text-xs text-gray-500 mb-1 ${isOlder ? 'md:justify-end' : ''}`}>
            <Calendar className="w-3 h-3 mr-1" />
            {post.date}
          </div>
          <h3 className="font-bold text-gray-900 line-clamp-2 mb-1 group-hover:text-red-600 transition-colors">{post.title}</h3>
          {post.excerpt && <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>}
        </div>
      </div>
    </Link>
  );
}
