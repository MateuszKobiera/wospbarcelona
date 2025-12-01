import { Hero } from '@/components/Hero';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartHandshakeIcon, StoreIcon, UsersIcon, FlagIcon } from 'lucide-react';
import { siFacebook, siInstagram, siMeetup } from 'simple-icons/icons';
import { SponsorsMarquee } from '@/components/SponsorsMarquee';
import { blogPosts } from '@/content/blog';
import { ContactForm } from '@/components/ContactForm';

export default function HomePage() {
  const t = useTranslations('home');
  return (
    <main>
      <Hero />

      {/* Socials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('socials.title')}</h2>
            <p className="text-gray-600">{t('socials.description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="https://facebook.com/sztabWOSPBarcelona" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-blue-600 fill-current"
                        aria-hidden
                      >
                        <path d={siFacebook.path} />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Facebook</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    {t('socials.facebookDesc')}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://instagram.com/wospbarcelona" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-pink-600 fill-current"
                        aria-hidden
                      >
                        <path d={siInstagram.path} />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Instagram</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    {t('socials.instagramDesc')}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="https://www.meetup.com/wośp-barcelona" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center mr-2">
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-red-600 fill-current"
                        aria-hidden
                      >
                        <path d={siMeetup.path} />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Meetup</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    {t('socials.meetupDesc')}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative py-14 overflow-hidden"
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
          <h2 className="text-3xl font-extrabold text-gray-950 mb-4 text-center">{t('sponsorsSection.title')}</h2>
          <p className="text-center text-base md:text-lg text-gray-900 font-semibold mb-2">
            {t('sponsorsSection.subtitle')}
          </p>
          <p className="text-center text-sm md:text-base text-gray-900 mb-8">
            {t('sponsorsSection.description')}
          </p>
          <SponsorsMarquee />
          <p className="mt-3 text-center text-xs text-gray-600">{t('sponsorsSection.cta')}</p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">{t('amountsTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { final: '33 Finał', amount: '13 881.91 €' },
              { final: '32 Finał', amount: '10 460.47 €' },
              { final: '31 Finał', amount: '8 989.94 €' },
              { final: '30 Finał', amount: '2 496.62 €' },
            ].map((item) => (
              <div
                key={item.final}
                className="group rounded-2xl p-[1px] bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
              >
                <Card className="rounded-2xl bg-white/95 backdrop-blur border border-gray-200/60 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5 cursor-default">
                  <CardContent className="p-6 md:p-7 text-center">
                    <div className="text-xs font-semibold text-gray-700/90 mb-3 cursor-default">
                      {item.final}
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
                    <Link href="/donate">{t('finalSection.moreButton')}</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto cursor-pointer">
                    <Link href="https://www.wosp.org.pl/fundacja/jak-wspierac-wosp/wesprzyj-online" target="_blank" rel="noopener noreferrer">
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
                const href = post.sourceUrl ?? '#';
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
