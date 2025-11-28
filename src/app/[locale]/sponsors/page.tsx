import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

type LinkRef = { label: string; url: string };
type SponsorItem = { name: string; description?: string; links?: LinkRef[]; logoUrl?: string };

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
    title: string;
    description: string;
    items: SponsorItem[];
  }[] = [
    {
      title: 'Sponsorzy',
      description: 'Firmy, które finansowo wspierają nasze działania i umożliwiają organizację wydarzeń WOŚP w Barcelonie.',
      items: [
        { 
          name: 'Bona Barcelona', 
          description: 'Sponsor licytacji charytatywnej. Przekazuje vouchery na wycieczki: Montserrat dla 6 osób (480€) oraz Andora dla 6 osób (1020€). Vouchery ważne przez rok.',
          links: [
            { label: 'Strona', url: 'https://bonabarcelona.pl' },
            { label: 'Instagram', url: 'https://www.instagram.com/bona.barcelona' },
            { label: 'Facebook', url: 'https://www.facebook.com/share/1Es4gdyiVK/?mibextid=wwXIfr' },
          ],
          logoUrl: '/images/sponsors/logo wektory-krzywe kolor DO DRUKU-1.png'
        },
      ],
    },
    {
      title: 'Partnerzy',
      description: 'Lokalne firmy i instytucje, które wspierają nasze działania logistycznie, merytorycznie i organizacyjnie.',
      items: [
        { 
          name: 'Wawel RestoBar', 
          description: 'Polska restauracja w Barcelonie. Mały kawałek Polski w sercu Barcelony. W tym miejscu zamówisz doskonale przyrządzone pierogi, zupę i kiełbaski. Kucharze przygotowują tutaj dobre naleśniki, szarlotkę i inne polskie specjały. Zgodnie z opiniami gości, piwo smakuje w tym miejscu wyśmienicie.',
          links: [
            { label: 'Mapy', url: 'https://maps.app.goo.gl/ALp5fnzBVBzRfsR68' },
            { label: 'Telefon', url: 'tel:+34934579550' },
          ],
          logoUrl: '/images/sponsors/Wawel.png'
        },
        { 
          name: 'Sol de Gracia', 
          description: 'Najlepszy sklep z piwami rzemieślniczymi w Barcelonie. Sol de Gracia to sklep z piwami craftowymi z największym wyborem w całej Barcelonie. Przyjdź wybrać swoje ulubione piwo, gwarantujemy, że jeśli go nie mamy, to bardzo prawdopodobne, że nie istnieje.',
          links: [
            { label: 'Strona', url: 'https://www.soldegracia.com' },
            { label: 'Mapy', url: 'https://maps.app.goo.gl/8w3JvpxX3znpRHu67' },
            { label: 'Telefon', url: 'tel:+34934617032' },
            { label: 'Email', url: 'mailto:info@beermacia.com' },
          ],
          logoUrl: '/images/sponsors/311836535_638740301171743_4776177943725666713_n.png'
        },
      ],
    },
    {
      title: 'Współorganizatorzy',
      description: 'Organizacje i osoby, które współtworzą i realizują razem z nami misję WOŚP w Barcelonie.',
      items: [
        { 
          name: 'Stowarzyszenie Edukacyjne Kosmo HisPLano', 
          description: 'Zaprasza najmłodszych mieszkańców Barcelony, zwłaszcza dzieci i młodzież z polonijnych rodzin do udziału w pasjonujących zajęciach dodatkowych. Organizacja koncentruje się na wzbogacaniu umiejętności językowych oraz poszerzaniu wiedzy o Polsce.',
          links: [
            { label: 'Strona', url: 'https://kosmohisplano.com' },
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
          {categories.map((cat) => (
            <section key={cat.title}>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{cat.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{cat.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((s) => (
                  <Card
                    key={`${cat.title}-${s.name}`}
                    className="bg-white border border-red-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader className="text-center pb-4">
                      {s.logoUrl ? (
                        <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                          <Image
                            src={s.logoUrl}
                            alt={`${s.name} logo`}
                            width={80}
                            height={80}
                            className="max-w-full max-h-full object-contain"
                            priority={false}
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 via-red-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl">
                          {s.name.charAt(0)}
                        </div>
                      )}
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {s.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      {s.description && (
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                          {s.description}
                        </p>
                      )}
                      
                      {s.links && s.links.length > 0 && (
                        <div className="space-y-3">
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            Linki
                          </div>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {s.links.map((lr) => (
                              <a
                                key={`${s.name}-${lr.label}-${lr.url}`}
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
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-20 bg-orange-50 rounded-lg p-8 border border-orange-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{t('cta.title')}</h2>
              <p className="text-gray-700">{t('cta.subtitle')}</p>
            </div>
            <div className="flex gap-3 lg:justify-end">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">
                <Link href={`/${locale}/contact`}>{t('cta.contact')}</Link>
              </Button>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer">
                <a href={`mailto:${t('cta.email')}`}>{t('cta.email')}</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
