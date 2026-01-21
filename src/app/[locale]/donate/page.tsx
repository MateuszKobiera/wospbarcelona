import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { siFacebook, siInstagram, siMeetup, siYoutube } from 'simple-icons/icons';
import { getTranslations } from 'next-intl/server';
import { Heart, ExternalLink, Info } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('donate.title'),
    description: t('donate.description'),
    openGraph: {
      title: t('donate.title'),
      description: t('donate.description'),
    },
  };
}

export default async function DonatePage() {
  const t = await getTranslations('donate');

  return (
    <>
      <main className="py-16 bg-gradient-to-br from-red-50 via-pink-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('title')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Main CTA Card */}
          <Card className="bg-gradient-to-br from-red-600 to-pink-600 border-0 shadow-2xl mb-8 overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Heart className="w-12 h-12 md:w-16 md:h-16 text-white" fill="white" />
                </div>
              </div>

              <div className="space-y-3">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm text-white px-4 py-1.5 text-sm font-semibold">
                  {t('finalBadge')}
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                  {t('goalSlogan')}
                </h2>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                  {t('ctaDescription')}
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-50 text-lg md:text-xl font-bold py-6 md:py-8 px-8 md:px-12 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer mt-6"
              >
                <Link
                  href="https://eskarbonka.wosp.org.pl/dinudecipa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Heart className="w-6 h-6" fill="currentColor" />
                  {t('donateButton')}
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </Button>

              <p className="text-sm text-white/80 mt-4">
                {t('securePayment')}
              </p>
            </CardContent>
          </Card>

          {/* Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <Info className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('goalTitle')}</h3>
                    <p className="text-gray-700 text-sm">
                      {t('goalDescription')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-100 rounded-full p-2 mt-1">
                    <Heart className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('whyImportantTitle')}</h3>
                    <p className="text-gray-700 text-sm">
                      {t('whyImportantText1')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-4">
                <span className="inline-flex items-center rounded-full bg-red-100 text-red-700 px-3 py-1 text-sm font-semibold">
                  {t('finalDate')}
                </span>
                <p className="text-gray-700 max-w-3xl">
                  {t('whyImportantText2')}
                </p>
                <Button asChild variant="outline" className="cursor-pointer">
                  <Link
                    href="https://www.wosp.org.pl/aktualnosci/choroby-przewodu-pokarmowego-celem-finalu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {t('aboutGoal')}
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Socials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('socials.title')}</h2>
            <p className="text-gray-600">{t('socials.description')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <Link href="https://www.youtube.com/@sztabwospbarcelona3771" target="_blank" rel="noopener noreferrer" className="block">
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
                        <path d={siYoutube.path} />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">YouTube</div>
                  </div>
                  <p className="text-sm text-gray-700">
                    {t('socials.youtubeDesc')}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
