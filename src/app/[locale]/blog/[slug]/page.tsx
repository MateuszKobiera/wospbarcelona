import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locales } from '@/i18n';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts, findPostBySlug } from '@/content/blog';
import { Facebook, Instagram, MessageSquare } from 'lucide-react';

export function generateStaticParams() {
  const params: { locale: (typeof locales)[number]; slug: string }[] = [];
  for (const locale of locales) {
    for (const post of blogPosts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = findPostBySlug(slug);
  if (!post) return notFound();

  return (
    <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href={`/${locale}/blog`} className="text-red-600 hover:underline">
            ← Wróć do bloga
          </Link>
        </div>
        {/* Hero cover */}
        {post.coverImage && (
          <div className="mb-6 overflow-hidden rounded-xl border border-red-100 shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.coverImage} alt={post.title} className="w-full h-56 md:h-72 object-cover" />
          </div>
        )}

        <Card className="bg-white border border-red-100 shadow-sm">
          <CardContent className="p-6 md:p-8 space-y-6">
            <header className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{post.title}</h1>
              <div className="text-sm text-gray-500">{post.date}</div>
            </header>

            {/* Excerpt hidden on single post per request */}

            {post.sections.map((s, i) => (
              <section key={i} className="space-y-3">
                {s.title && (
                  <h2 className="text-xl font-semibold text-gray-900">{s.title}</h2>
                )}
                <div className="max-w-none leading-relaxed text-gray-900 [&_p]:text-gray-900 [&_h1]:text-gray-900 [&_h2]:text-gray-900 [&_h3]:text-gray-900 [&_li]:text-gray-900 [&_strong]:text-gray-900 [&_em]:text-gray-900/90 [&_a]:text-red-700 hover:[&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:marker:text-gray-500 [&_img]:rounded-lg [&_img]:border">
                  {s.body}
                </div>
              </section>
            ))}

            {/* removed original source link per request */}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-4 border-t">
                <div className="text-sm font-semibold text-gray-900 mb-2">Tagi</div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Social links */}
            {(post.social?.facebook || post.social?.instagram || post.social?.meetup) && (
              <div className="pt-4 border-t">
                <div className="text-sm font-semibold text-gray-900 mb-2">Śledź nas</div>
                <div className="flex gap-3">
                  {post.social?.facebook && (
                    <Button asChild variant="outline">
                      <Link href={post.social.facebook} target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-4 h-4 mr-2" /> Facebook
                      </Link>
                    </Button>
                  )}
                  {post.social?.instagram && (
                    <Button asChild variant="outline">
                      <Link href={post.social.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-4 h-4 mr-2" /> Instagram
                      </Link>
                    </Button>
                  )}
                  {post.social?.meetup && (
                    <Button asChild variant="outline">
                      <Link href={post.social.meetup} target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="w-4 h-4 mr-2" /> Meetup
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
