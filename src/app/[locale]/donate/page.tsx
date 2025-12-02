import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { siFacebook, siInstagram, siMeetup } from 'simple-icons/icons';
import { getTranslations } from 'next-intl/server';

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
      <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <Card className="bg-white border border-red-100 shadow-sm">
              <CardContent className="p-6 space-y-6">
                <section className="space-y-3">
                  <h2 className="text-2xl font-semibold text-gray-900">{t('goalTitle')}</h2>
                  <div className="flex flex-col items-center text-center gap-3 md:gap-4 mt-2">
                    <span className="inline-flex items-center rounded-full bg-red-100 text-red-700 px-3 py-1 text-sm font-semibold">
                      {t('finalBadge')}
                    </span>
                    <div className="text-3xl md:text-4xl font-extrabold text-red-600 tracking-tight">
                      {t('finalDate')}
                    </div>
                    <div className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                      {t('goalSlogan')}
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium">
                    {t('goalDescription')}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mt-4">{t('whyImportantTitle')}</h3>
                  <p className="text-gray-700">
                    {t('whyImportantText1')}
                  </p>
                  <p className="text-gray-700">
                    {t('whyImportantText2')}
                  </p>
                </section>

                <section className="space-y-3">
                  <h2 className="text-xl font-semibold text-gray-900">{t('collectionTitle')}</h2>
                  <p className="text-gray-700">
                    {t('collectionText')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                    <Button asChild className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto cursor-pointer">
                      <Link
                        href="https://www.wosp.org.pl/fundacja/jak-wspierac-wosp/wesprzyj-online"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('supportOnline')}
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full sm:w-auto cursor-pointer">
                      <Link
                        href="https://www.wosp.org.pl/aktualnosci/choroby-przewodu-pokarmowego-celem-finalu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('aboutGoal')}
                      </Link>
                    </Button>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

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
    </>
  );
}
