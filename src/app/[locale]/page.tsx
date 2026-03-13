import { Hero } from '@/components/Hero';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartHandshakeIcon, StoreIcon, UsersIcon, FlagIcon, Heart, ArrowRight, Sparkles } from 'lucide-react';
import { siFacebook, siInstagram, siYoutube } from 'simple-icons/icons';
import { SponsorsMarquee } from '@/components/SponsorsMarquee';
import { getAllPostsForLocale } from '@/content/blog-i18n';
import { ContactForm } from '@/components/ContactForm';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('home.title'),
    description: t('home.description'),
    openGraph: {
      title: t('home.title'),
      description: t('home.description'),
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const blogPosts = getAllPostsForLocale(locale);
  return (
    <main>
      <Hero />

      {/* 1. THANK YOU — Finale is done */}
      <section className="py-10 bg-gradient-to-br from-red-600 via-pink-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 text-xs font-semibold mb-4">
              <Heart className="w-3 h-3" fill="white" />
              {t('thankYouSection.badge')}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 drop-shadow-md">
              {t('thankYouSection.title')}
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-6 leading-relaxed">
              {t('thankYouSection.description')}
            </p>

            {/* Results coming soon card */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-5 py-2.5 mb-5 border border-white/30">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-semibold text-white">{t('thankYouSection.resultsComingSoon')}</span>
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PHOTO BENTO GRID */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 text-center">{t('photoSection.title')}</h2>
          <div
            className="grid grid-cols-4 md:grid-cols-6 gap-1.5"
            style={{ gridAutoRows: '120px' }}
          >
            {[
              '/images/34-final/wybrane/0a575815-d7c5-48a5-b629-857c1694e344.jpg',
              '/images/34-final/wybrane/IMG_7392.jpg',
              '/images/34-final/wybrane/0a885645-72c7-4bbb-ba56-b3ee6895befd.jpg',
              '/images/34-final/wybrane/1839e07d-8956-4617-b3b5-02805c21b81d.jpg',
              '/images/34-final/wybrane/IMG_7414.jpg',
              '/images/34-final/wybrane/1b040fa3-f693-4d7e-99f4-b7ee85710e2a.jpg',
              '/images/34-final/wybrane/77c5b268-df3e-47b4-b29a-fc35982a8fba.jpg',
              '/images/34-final/wybrane/IMG_7438.jpg',
              '/images/34-final/wybrane/cfa889df-f1df-469d-8014-b81ed0330fcf.jpg',
              '/images/34-final/wybrane/d0080507-e4ec-472e-9ba3-c4328686f552.jpg',
              '/images/34-final/wybrane/IMG_7446.jpg',
              '/images/34-final/wybrane/f4854028-f4f0-44f0-a9ef-3eaf6f2a7b11.jpg',
            ].map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`34. Finał WOŚP Barcelona ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 25vw, 17vw"
                />
              </div>
            ))}
          </div>
          <div className="mt-5 text-center">
            <Link
              href={`/${locale}/blog/dziekujemy-za-34-final-wosp-w-barcelonie`}
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold hover:underline transition-colors"
            >
              {t('photoSection.blogLinkText')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL MEDIA */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('socials.title')}</h2>
            <p className="text-gray-600">{t('socials.description')}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Link href="https://facebook.com/sztabWOSPBarcelona" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-gray-200 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer h-full">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 text-blue-600 fill-current" aria-hidden>
                      <path d={siFacebook.path} />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Facebook</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://instagram.com/wospbarcelona" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-gray-200 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer h-full">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-3">
                    <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 text-pink-600 fill-current" aria-hidden>
                      <path d={siInstagram.path} />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Instagram</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://www.youtube.com/@sztabwospbarcelona3771" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-gray-200 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer h-full">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3">
                    <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 text-red-600 fill-current" aria-hidden>
                      <path d={siYoutube.path} />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">YouTube</div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SPONSORS */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(255,255,255,0.98) 10%, rgba(255,165,190,0.60) 55%, rgba(255,165,120,0.50) 100%)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-center bg-cover opacity-[0.03] blur-[1px]"
          style={{ backgroundImage: "url('/images/grafiki/41_34FinalWOSP2026_kropki_modul_zapetlony_podglad.jpg')" }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-white/70 to-transparent" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 18%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.55) 30%, rgba(255,255,255,0) 60%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 mb-6 text-center">{t('sponsorsSection.title')}</h2>
          <p className="text-center text-lg md:text-xl text-gray-900 font-semibold mb-3">
            {t('sponsorsSection.subtitle')}
          </p>
          <p className="text-center text-base md:text-lg text-gray-800 mb-10 max-w-3xl mx-auto">
            {t('sponsorsSection.description')}
          </p>
          <SponsorsMarquee />
          <p className="mt-6 text-center text-sm text-gray-700 font-medium">{t('sponsorsSection.cta')}</p>
        </div>
      </section>

      {/* 5. COLLECTED AMOUNTS */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{t('amountsTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { finalNum: 33, amount: '13 881.91 €' },
              { finalNum: 32, amount: '10 460.47 €' },
              { finalNum: 31, amount: '8 989.94 €' },
              { finalNum: 30, amount: '2 496.62 €' },
            ].map((item) => (
              <div
                key={item.finalNum}
                className="group rounded-2xl p-[1px] bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
              >
                <Card className="rounded-2xl bg-white/95 backdrop-blur border border-gray-200/60 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5 cursor-default">
                  <CardContent className="p-6 md:p-7 text-center">
                    <div className="text-xs font-semibold text-gray-700/90 mb-3 cursor-default">
                      {item.finalNum} {t('finalLabel')}
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 tabular-nums cursor-default">
                      {item.amount}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('joinSection.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('joinSection.description')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{t('missionSection.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-gray-200/80">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                    <HeartHandshakeIcon className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{t('missionSection.cards.helpTitle')}</h3>
                </div>
                <p className="text-sm text-gray-700">{t('missionSection.cards.helpDesc')}</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200/80">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                    <StoreIcon className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{t('missionSection.cards.businessTitle')}</h3>
                </div>
                <p className="text-sm text-gray-700">{t('missionSection.cards.businessDesc')}</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200/80">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <UsersIcon className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{t('missionSection.cards.communityTitle')}</h3>
                </div>
                <p className="text-sm text-gray-700">{t('missionSection.cards.communityDesc')}</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200/80">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <FlagIcon className="w-5 h-5 text-pink-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{t('missionSection.cards.cultureTitle')}</h3>
                </div>
                <p className="text-sm text-gray-700">{t('missionSection.cards.cultureDesc')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Ostatnie wpisy na blogu */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{t('blogSection.latestTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...blogPosts]
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .slice(0, 3)
              .map((post) => {
                const href = post.sourceUrl ?? `/${locale}/blog/${post.slug}`;
                return (
                  <Link key={post.slug} href={href} target={post.sourceUrl ? '_blank' : undefined} rel={post.sourceUrl ? 'noopener noreferrer' : undefined} className="block group">
                    <Card className="overflow-hidden border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5">
                      {post.coverImage ? (
                        <div className="relative h-44">
                          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                        </div>
                      ) : null}
                      <CardContent className="p-5">
                        <div className="text-xs text-gray-500 mb-2">{post.date}</div>
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        {post.excerpt ? (
                          <p className="text-sm text-gray-700 line-clamp-3">{post.excerpt}</p>
                        ) : null}
                        <div className="mt-4 text-sm font-medium text-red-600 group-hover:underline">{t('blogSection.readMore')}</div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* Community Stats Section - simplified */}
      <section className="py-16 bg-gradient-to-br from-red-50 via-pink-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Heart, value: '9+', label: t('stats.yearsHelp') },
              { icon: UsersIcon, value: '100+', label: t('stats.volunteers') },
              { icon: HeartHandshakeIcon, value: '35 tys. €+', label: t('stats.fundsRaised') }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prosty formularz kontaktowy */}
      <section
        className="relative py-16 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(255,255,255,0.96) 0%, rgba(255,245,245,0.85) 40%, rgba(255,245,235,0.80) 100%), url('/images/pictures/pexels-frederic-bartl-256900-786126.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[12%] bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[12%] bg-gradient-to-l from-white to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">{t('contactSection.title')}</h2>
          <p className="text-center text-gray-700 mb-8">{t('contactSection.description')}</p>
          <div className="rounded-xl bg-white/80 backdrop-blur p-6">
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  );
}
