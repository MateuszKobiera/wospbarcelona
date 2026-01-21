import { Hero } from '@/components/Hero';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartHandshakeIcon, StoreIcon, UsersIcon, FlagIcon, Heart, Gavel, Wallet, ArrowRight, Sparkles } from 'lucide-react';
import { siFacebook, siInstagram, siMeetup, siYoutube } from 'simple-icons/icons';
import { SponsorsMarquee } from '@/components/SponsorsMarquee';
import { blogPosts } from '@/content/blog';
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

export default function HomePage() {
  const t = useTranslations('home');
  const locale = useLocale();
  return (
    <main>
      <Hero />

      {/* 1. MAIN FINALE INVITATION - Hero section for the event */}
      <section className="py-16 bg-gradient-to-br from-red-600 via-pink-600 to-red-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-sm font-semibold mb-6">
              <Heart className="w-4 h-4" fill="white" />
              {t('heroFinale.badge')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('heroFinale.title')}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-medium">
              {t('heroFinale.date')}
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
              {t('heroFinale.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Link href={`/${locale}/events/1`} className="flex items-center gap-2">
                  {t('heroFinale.button')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TWO SUPPORT OPTIONS - Donate & Allegro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t('supportSection.title')}
            </h2>
            <p className="text-gray-600">
              {t('supportSection.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Donate Online */}
            <Card className="group border-2 border-pink-200 hover:border-pink-400 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {t('supportSection.donate.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('supportSection.donate.description')}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white font-semibold w-full rounded-full"
                >
                  <Link href="https://eskarbonka.wosp.org.pl/dinudecipa" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    {t('supportSection.donate.button')}
                    <Heart className="w-5 h-5" fill="currentColor" />
                  </Link>
                </Button>
                <p className="text-xs text-gray-500 mt-3">{t('supportSection.donate.secure')}</p>
              </CardContent>
            </Card>

            {/* Allegro Auctions */}
            <Card className="group border-2 border-orange-200 hover:border-orange-400 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                    <Gavel className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {t('supportSection.allegro.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('supportSection.allegro.description')}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold w-full rounded-full"
                >
                  <Link href="https://allegro.pl/uzytkownik/Client%3A140580262" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    {t('supportSection.allegro.button')}
                    <Sparkles className="w-5 h-5" />
                  </Link>
                </Button>
                <p className="text-xs text-gray-500 mt-3">{t('supportSection.allegro.info')}</p>
              </CardContent>
            </Card>
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

            <Link href="https://www.meetup.com/wośp-barcelona" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-gray-200 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer h-full">
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-3">
                    <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 text-red-600 fill-current" aria-hidden>
                      <path d={siMeetup.path} />
                    </svg>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Meetup</div>
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



      {/* Final Section */}
      <section className="py-12 bg-gradient-to-br from-white via-red-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border border-red-100 shadow-sm">
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{t('finalSection.title')}</h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto cursor-pointer">
                    <Link href="https://www.wosp.org.pl/aktualnosci/choroby-przewodu-pokarmowego-celem-finalu" target="_blank" rel="noopener noreferrer">{t('finalSection.moreButton')}</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto cursor-pointer">
                    <Link href="https://eskarbonka.wosp.org.pl/dinudecipa" target="_blank" rel="noopener noreferrer">
                      {t('finalSection.supportOnline')}
                    </Link>
                  </Button>
                </div>
              </div>
              <p className="text-gray-700">{t('finalSection.description')}</p>
            </CardContent>
          </Card>
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
