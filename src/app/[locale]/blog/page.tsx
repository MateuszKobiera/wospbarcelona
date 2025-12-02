import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { HeartBackground } from '@/components/HeartBackground';
import { getAllPostsForLocale } from '@/content/blog-i18n';
import { getTranslations } from 'next-intl/server';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('blog');
  const blogPosts = getAllPostsForLocale(locale);

  return (
    <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-white border border-red-100 shadow-sm">
            <div className="md:flex">
              <div className="md:w-1/2">
                {blogPosts[0].coverImage ? (
                  <img
                    src={blogPosts[0].coverImage}
                    alt={blogPosts[0].title}
                    className="h-64 md:h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-64 md:h-full bg-gradient-to-br from-red-500 via-red-400 to-pink-400 flex items-center justify-center relative overflow-hidden">
                    <HeartBackground size="large" />
                    <span className="text-white text-6xl font-bold relative z-10">W</span>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 p-8">
                <div className="mb-4">
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                    {t('article')}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                {blogPosts[0].excerpt && (
                  <p className="text-gray-700 mb-6 line-clamp-3">{blogPosts[0].excerpt}</p>
                )}
                <div className="flex items-center text-sm text-gray-500 mb-6 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                </div>
                <Link className="inline-flex bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md" href={`/${locale}/blog/${blogPosts[0].slug}`}>
                  {t('readMore')}
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.slug} className="overflow-hidden bg-white border border-red-100 shadow-sm hover:shadow-md transition-shadow">
              {post.coverImage ? (
                <img src={post.coverImage} alt={post.title} className="h-48 w-full object-cover" loading="lazy" />
              ) : (
                <div className="h-48 bg-gradient-to-br from-red-500 via-red-400 to-pink-400 flex items-center justify-center relative overflow-hidden">
                  <HeartBackground size="medium" />
                  <span className="text-white text-4xl font-bold relative z-10">W</span>
                </div>
              )}
              <CardHeader>
                <div className="mb-2">
                  <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                    {t('article')}
                  </span>
                </div>
                <CardTitle className="text-xl line-clamp-2 text-gray-900 font-bold">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {post.excerpt && (
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                )}
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>
                <Link className="inline-flex w-full justify-center border border-red-200 text-red-700 hover:bg-red-50 px-4 py-2 rounded-md" href={`/${locale}/blog/${post.slug}`}>
                  {t('readMore')}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
