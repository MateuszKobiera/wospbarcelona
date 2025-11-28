import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { getTranslations } from 'next-intl/server';

type LinkRef = { label: string; url: string };
type SponsorItem = { name: string; links?: LinkRef[]; logoUrl?: string };

export default async function SponsorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('sponsors');

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const labelKey = (label: string): string | null => {
    const l = label.toLowerCase();
    if (/^strona|website|site|home$/.test(l)) return 'website';
    if (/^mapy|maps$/.test(l)) return 'maps';
    if (/^telefon|phone$/.test(l)) return 'phone';
    if (/^sklep|shop$/.test(l)) return 'shop';
    if (/^kontakt|contact$/.test(l)) return 'contact';
    if (/^rezerwacje|booking$/.test(l)) return 'booking';
    if (/^lekcja próbna|free trial$/.test(l)) return 'trial';
    if (/^kariera|careers$/.test(l)) return 'careers';
    return null; // brand/platform labels like Facebook, Instagram, YouTube, Etsy, Empik, Linktree
  };

  const categories: {
    title: string;
    description?: string;
    items: SponsorItem[];
  }[] = [
    {
      title: t('groups.partnersTitle'),
      items: [
        { name: 'KosmoHisPlano', links: [
          { label: 'Strona', url: 'https://kosmohisplano.com' },
          { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100063355321151' },
          { label: 'Instagram', url: 'https://www.instagram.com/miniplwbarcelonie' },
          { label: 'YouTube', url: 'https://www.youtube.com/@KOSMOHISPLANO/videos' },
        ]},
        { name: 'Moja Katalonia', links: [
          { label: 'Strona', url: 'https://www.mojakatalonia.com' },
          { label: 'Mapy', url: 'https://maps.app.goo.gl/32ozGL9barH1suMw8' },
        ]},
        { name: 'Wawel RestoBar', links: [
          { label: 'Mapy', url: 'https://g.co/kgs/SwRGEap' },
          { label: 'Telefon', url: 'tel:+34934579550' },
        ]},
        { name: 'Krakoviak', links: [
          { label: 'Mapy', url: 'https://maps.app.goo.gl/kWQt3NZxNPzwSihj8' },
          { label: 'Sklep', url: 'https://www.krakoviak.shop/catalog' },
          { label: 'Sol de Gracia', url: 'https://www.instagram.com/soldegraciabcn/' },
          { label: 'Beer Macia', url: 'https://beermacia.com' },
        ]},
        { name: 'PolCat', links: [
          { label: 'Strona', url: 'https://polcat.net' },
          { label: 'Mapy', url: 'https://g.co/kgs/mcBJTqS' },
          { label: 'Telefon', url: 'tel:+34 677 359 234' },
        ]},
        { name: 'Delicias by Bea', links: [
          { label: 'Strona', url: 'https://www.deliciasbybea.com' },
          { label: 'Mapy', url: 'https://maps.app.goo.gl/Kce5nYkcZJyC532x5' },
        ]},
        { name: 'Alira Health', links: [
          { label: 'Strona', url: 'https://alirahealth.com' },
          { label: 'Kariera', url: 'https://alirahealth.com/careers/' },
        ]},
        { name: 'Tomex Car-bus', links: [
          { label: 'Mapy', url: 'https://maps.app.goo.gl/shepb4X2Ff6mUdem7' },
        ]},
        { name: 'AG Photography BCN', links: [
          { label: 'bodas.net', url: 'https://www.bodas.net/fotografos/aneta-grabowska-photography--e117109' },
        ]},
        { name: 'JBB Bałdyga', links: [
          { label: 'Strona', url: 'https://jbb.pl' },
        ]},
        { name: 'Musztardy Konik', links: [
          { label: 'Strona', url: 'https://musztardykonik.pl' },
        ]},
        { name: 'jakub rajchelt', links: [
          { label: 'Telefon', url: 'tel:+48 502 217 689' },
        ]},
        { name: 'La Magia de los Sabores', links: [
          { label: 'Strona', url: 'https://foodtruckya.com/es/catering/la-magia-de-los-sabores' },
        ]},
        { name: 'World Class Barcelona', links: [
          { label: 'Strona', url: 'https://worldclassbcn.com/en/' },
          { label: 'Lekcja próbna', url: 'https://worldclassbcn.com/en/free-trial-spanish-class/' },
          { label: 'Mapy', url: 'https://maps.app.goo.gl/LHePTLVgoPcoKYkS6' },
        ]},
        { name: 'ART-TUR', links: [
          { label: 'Strona', url: 'https://www.art-tur.pl' },
        ]},
        { name: 'Templo Beauty', links: [
          { label: 'Rezerwacje', url: 'https://wa.me/+55 11 98278-5843' },
        ]},
        { name: 'Polska Costa', links: [
          { label: 'Strona', url: 'https://polska-costa.com' },
          { label: 'Kontakt', url: 'https://wa.me/+34960730023' },
        ]},
        { name: 'Aneta Grabowska Photography', links: [
          { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100064157194306' },
          { label: 'Instagram', url: 'https://www.instagram.com/agphotographybcn/' },
        ]},
      ],
    },
    {
      title: t('groups.artistsTitle'),
      items: [
        { name: 'Helena Staniszewska', links: [
          { label: 'Facebook', url: 'https://www.facebook.com/helastaniszewska.photography' },
          { label: 'Instagram', url: 'https://www.instagram.com/helastaniszewska' },
          { label: 'Strona', url: 'https://truestoryphotographs.com' },
        ]},
        { name: 'Agnieszka Łukomska', links: [
          { label: 'Facebook', url: 'https://www.facebook.com/agn.luk' },
          { label: 'Instagram', url: 'https://www.instagram.com/agnieszka_w_barcelonie/' },
          { label: 'Linktree', url: 'https://linktr.ee/agnieszka_w_barcelonie?utm_source=linktree_profile_share&ltsid=1250570b-db20-421c-8f86-430c47f3160b' },
        ]},
        { name: 'Krzysztof Monastyrski', links: [
          { label: 'Instagram', url: 'https://www.instagram.com/monarek_bcn/' },
          { label: 'Empik', url: 'https://www.empik.com/barcelona-w-blasku-sagrady-w-cieniu-pam-krzysztof-monastyrski,p1521396377,ksiazka-p?utm_source=desktop&utm_medium=share&utm_content=produkt' },
          { label: 'Linktree', url: 'https://linktr.ee/monarek?utm_source=linktree_profile_share&ltsid=b64d7543-8e69-4dc0-bb00-f51f1babbf6f' },
        ]},
        { name: 'Marta Cybulska', links: [
          { label: 'Facebook', url: 'https://www.facebook.com/martypisanie' },
          { label: 'Instagram', url: 'https://www.instagram.com/la_vidamarta/' },
          { label: 'Strona', url: 'https://cybulskaart.eu/' },
        ]},
        { name: 'Agnieszka Wolińska-Skuza', links: [
          { label: 'Facebook', url: 'https://www.facebook.com/agnieszka.wolinskaskuza' },
          { label: 'Instagram', url: 'https://www.instagram.com/agnieszkawolinskaskuza/' },
          { label: 'Strona', url: 'https://awolinskaskuza.com/' },
        ]},
        { name: 'Asia Jurek', links: [
          { label: 'Facebook', url: 'https://www.facebook.com/asia.jurek.7' },
          { label: 'Instagram', url: 'https://www.instagram.com/nutri.jj/' },
          { label: 'Linktree', url: 'https://linktr.ee/joannamjurek?utm_source=linktree_profile_share&ltsid=f0b571b6-dc8b-4c0a-8c6f-8067238108ac' },
        ]},
        { name: 'Natalia Sarzyńska', links: [
          { label: 'Instagram', url: 'https://www.instagram.com/zoryas.realm/' },
        ]},
        { name: 'Magdalena Gładysz', links: [
          { label: 'Facebook', url: 'https://www.facebook.com/MAGDAyARTE' },
          { label: 'Instagram', url: 'https://www.instagram.com/magda_y_arte/' },
          { label: 'Etsy', url: 'https://www.etsy.com/shop/HeyArtToday' },
        ]},
        { name: 'Roxane Dutheil', links: [
          { label: 'Instagram', url: 'https://www.instagram.com/tarragonarte/' },
          { label: 'Strona', url: 'https://tarragonarte.cat' },
        ]},
        { name: 'Katarzyna Rzedzian', links: [
          { label: 'Facebook', url: 'https://www.facebook.com/kataruda' },
          { label: 'Instagram', url: 'https://www.instagram.com/rudakata/' },
          { label: 'Etsy', url: 'https://www.etsy.com/es/shop/rudakata' },
        ]},
        { name: 'Jaime Albadalejo Pinto', links: [
          { label: 'Instagram', url: 'https://www.instagram.com/jaimealbada' },
          { label: 'YouTube', url: 'https://www.youtube.com/watch?v=EvsQraWrRgs' },
        ]},
        { name: 'Guimera Blues & The Sugar Boys', links: [
          { label: 'Instagram', url: 'https://www.instagram.com/guimera_blues_av/' },
        ]},
        { name: 'Justine Ant', links: [
          { label: 'Facebook', url: 'https://www.facebook.com/justine.antczak' },
          { label: 'Instagram', url: 'https://www.instagram.com/bcn.melody/' },
        ]},
        { name: 'Anulka Jarecka', links: [
          { label: 'YouTube', url: 'https://www.youtube.com/watch?v=IteGomdZ7dY' },
        ]},
        { name: 'Dirty Spoons', links: [
          { label: 'Instagram', url: 'https://www.instagram.com/dirtyspoonsband/' },
        ]},
        { name: 'Eye of the storm', links: [
          { label: 'Instagram', url: 'https://www.instagram.com/eyeofthestorm.music/' },
          { label: 'YouTube', url: 'https://www.youtube.com/channel/UCTH5SX8ri43HpDTgXoxAsVQ' },
        ]},
        { name: 'Marcin Bury - SocMigCatala', links: [
          { label: 'Instagram', url: 'https://www.instagram.com/socmigcatala/' },
        ]},
        { name: 'Daria Stróżyk', links: [
          { label: 'Instagram', url: 'https://www.instagram.com/dariastrozykart/' },
        ]},
        { name: 'Barcelona Soundwala', links: [
          { label: 'Instagram', url: 'https://www.instagram.com/barcelona.soundwala/' },
        ]},
        { name: 'Basia Siwik', links: [
          { label: 'Instagram', url: 'https://www.instagram.com/basiafitness/' },
          { label: 'Facebook', url: 'https://www.facebook.com/basiafitness/' },
          { label: 'Strona', url: 'https://basiafitness.com' },
        ]},
        { name: 'Agnieszka Natalia Woźniak', links: [
          { label: 'Instagram', url: 'https://www.instagram.com/agnieszkanataliaw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
        ]},
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

        <div className="grid grid-cols-1 gap-10">
          {categories.map((cat) => (
            <section key={cat.title}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{cat.title}</h2>
              {cat.description && (
                <p className="text-gray-600 mb-6">{cat.description}</p>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.items.map((s) => {
                  const primaryLink = s.links?.find(l => /strona|website|site|home|Mapa|Mapy|Facebook|Instagram|YouTube|Etsy|Empik|Sklep|Kontakt|Rezerwacje|Lekcja/i.test(l.label)) || s.links?.[0];
                  const domainMatch = primaryLink?.url?.match(/https?:\/\/([^\/]+)/i);
                  const domain = domainMatch ? domainMatch[1] : undefined;
                  const faviconSrc = domain ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128` : undefined;
                  const nameSlug = slugify(s.name);
                  const exts = ['webp','png','jpg','jpeg','svg','ico'] as const;
                  const foundExt = exts.find((ext) =>
                    fs.existsSync(path.join(process.cwd(), 'public', 'images', 'sponsors', `${nameSlug}.${ext}`))
                  );
                  const logoSrc = s.logoUrl || (foundExt ? `/images/sponsors/${nameSlug}.${foundExt}` : faviconSrc);
                  return (
                  <Card
                    key={`${cat.title}-${s.name}`}
                    className="bg-white border border-red-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardHeader className="p-4">
                      <CardTitle className="text-center text-base font-semibold text-gray-900">
                        {s.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      {logoSrc ? (
                        <div className="h-16 flex items-center justify-center mb-3">
                          <img
                            src={logoSrc}
                            alt={`${s.name} logo`}
                            className="h-12 w-12 rounded-md object-contain bg-white border border-red-100"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="h-16 rounded-md bg-gradient-to-br from-red-500 via-red-400 to-pink-400 flex items-center justify-center text-white font-bold mb-3">
                          LOGO
                        </div>
                      )}
                      {s.links && s.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 justify-center text-sm">
                          {s.links.map((lr) => (
                            <a
                              key={`${s.name}-${lr.label}-${lr.url}`}
                              href={lr.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-1 rounded border border-red-200 text-red-700 hover:bg-red-50"
                            >
                              {labelKey(lr.label) ? t(`linkLabels.${labelKey(lr.label)}` as any) : lr.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );})}
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
