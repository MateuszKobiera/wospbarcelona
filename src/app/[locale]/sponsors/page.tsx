import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { ContactForm } from '@/components/ContactForm';

type LinkRef = { label: string; url: string };
type SponsorItem = {
  key: string;
  links?: LinkRef[];
  logoUrl?: string;
};

export default async function SponsorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('sponsors');

  const labelKey = (label: string): string | null => {
    const l = label.toLowerCase();
    if (/^strona|website|site|home$/.test(l)) return 'website';
    if (/^mapy|maps$/.test(l)) return 'maps';
    if (/^sklep|shop$/.test(l)) return 'shop';
    if (/^kontakt|contact$/.test(l)) return 'contact';
    if (/^rezerwacje|booking$/.test(l)) return 'booking';
    if (/^lekcja próbna|free trial$/.test(l)) return 'trial';
    if (/^kariera|careers$/.test(l)) return 'careers';
    return null;
  };

  const categories: {
    categoryKey: string;
    items: SponsorItem[];
  }[] = [
      {
        categoryKey: 'sponsors',
        items: [
          {
            key: 'bonaBarcelona',
            links: [
              { label: 'website', url: 'https://bonabarcelona.pl' },
              { label: 'Instagram', url: 'https://www.instagram.com/bona.barcelona' },
              { label: 'Facebook', url: 'https://www.facebook.com/share/1Es4gdyiVK/?mibextid=wwXIfr' },
            ],
            logoUrl: '/images/sponsors/logo wektory-krzywe kolor DO DRUKU-1.png'
          },
        ],
      },
      {
        categoryKey: 'partners',
        items: [
          {
            key: 'wawelRestobar',
            links: [
              { label: 'maps', url: 'https://maps.app.goo.gl/ALp5fnzBVBzRfsR68' },
              { label: 'Telefon', url: 'tel:+34934579550' },
            ],
            logoUrl: '/images/sponsors/Wawel.png'
          },
          {
            key: 'solDeGracia',
            links: [
              { label: 'website', url: 'https://www.soldegracia.com' },
              { label: 'maps', url: 'https://maps.app.goo.gl/8w3JvpxX3znpRHu67' },
              { label: 'Telefon', url: 'tel:+34934617032' },
              { label: 'Email', url: 'mailto:info@beermacia.com' },
            ],
            logoUrl: '/images/sponsors/311836535_638740301171743_4776177943725666713_n.png'
          },
        ],
      },
      {
        categoryKey: 'coorganizers',
        items: [
          {
            key: 'kosmoHisplano',
            links: [
              { label: 'website', url: 'https://kosmohisplano.com' },
              { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100063355321151' },
              { label: 'Instagram', url: 'https://www.instagram.com/miniplwbarcelonie' },
              { label: 'YouTube', url: 'https://www.youtube.com/@KOSMOHISPLANO/videos' },
            ],
            logoUrl: '/images/sponsors/kosmo-his-plano.png'
          },
        ],
      },
    ];

  return (
    <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{t('title')}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('description')}</p>
        </div>

        <div className="space-y-16">
          {categories.map((cat) => {
            const categoryTitle = t(`categories.${cat.categoryKey}.title`);
            const categoryDescription = t(`categories.${cat.categoryKey}.description`);

            return (
              <section key={cat.categoryKey}>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{categoryTitle}</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">{categoryDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((s) => {
                    const itemName = t(`items.${s.key}.name`);
                    const itemDescription = t(`items.${s.key}.description`);

                    return (
                      <Card
                        key={`${cat.categoryKey}-${s.key}`}
                        className="bg-white border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <CardHeader className="text-center pb-4">
                          {s.logoUrl ? (
                            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                              <Image
                                src={s.logoUrl}
                                alt={`${itemName} logo`}
                                width={80}
                                height={80}
                                className="max-w-full max-h-full object-contain"
                                priority={false}
                              />
                            </div>
                          ) : (
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 via-red-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl">
                              {itemName.charAt(0)}
                            </div>
                          )}
                          <CardTitle className="text-xl font-bold text-gray-900">
                            {itemName}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                          {itemDescription && (
                            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                              {itemDescription}
                            </p>
                          )}

                          {s.links && s.links.length > 0 && (
                            <div className="space-y-3">
                              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                {t('linkLabels.links')}
                              </div>
                              <div className="flex flex-wrap gap-2 justify-center">
                                {s.links.map((lr) => (
                                  <a
                                    key={`${s.key}-${lr.label}-${lr.url}`}
                                    href={lr.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1.5 rounded-full border border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 text-sm font-medium transition-colors cursor-pointer"
                                  >
                                    {labelKey(lr.label) ? t(`linkLabels.${labelKey(lr.label)}` as keyof typeof t) : lr.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('cta.title')}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t('cta.subtitle')}</p>
          <div className="rounded-xl bg-white/80 backdrop-blur p-6">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
