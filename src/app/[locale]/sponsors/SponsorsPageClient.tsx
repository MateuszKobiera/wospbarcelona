'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ContactForm } from '@/components/ContactForm';
import { useState } from 'react';
import { X } from 'lucide-react';

type LinkRef = { label: string; url: string };
type SponsorItem = {
    key: string;
    links?: LinkRef[];
    logoUrl?: string;
    menuUrl?: string;
};

type Category = {
    categoryKey: string;
    items: SponsorItem[];
};

const categories: Category[] = [
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
            {
                key: 'laMagiaSabores',
                links: [
                    { label: 'Instagram', url: 'https://www.instagram.com/lamagiadelossabores/' },
                    { label: 'website', url: 'https://foodtruckya.com/es/catering/la-magia-de-los-sabores' },
                ],
                logoUrl: '/images/sponsors/la-magia-de-los-sabores.jpg',
                menuUrl: '/images/sponsors/la-magia-de-los-sabores-menu.jpeg'
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

export default function SponsorsPageClient() {
    const t = useTranslations('sponsors');
    const [menuLightbox, setMenuLightbox] = useState<{ open: boolean; url: string; name: string }>({
        open: false,
        url: '',
        name: ''
    });

    const labelKey = (label: string): string | null => {
        const l = label.toLowerCase();
        if (/^strona|website|site|home$/.test(l)) return 'website';
        if (/^mapy|maps$/.test(l)) return 'maps';
        if (/^sklep|shop$/.test(l)) return 'shop';
        if (/^kontakt|contact$/.test(l)) return 'contact';
        if (/^rezerwacje|booking$/.test(l)) return 'booking';
        if (/^lekcja próbna|free trial$/.test(l)) return 'trial';
        if (/^kariera|careers$/.test(l)) return 'careers';
        if (/^telefon|phone|teléfono|telèfon$/.test(l)) return 'phone';
        return null;
    };

    const openMenuLightbox = (url: string, name: string) => {
        setMenuLightbox({ open: true, url, name });
    };

    const closeMenuLightbox = () => {
        setMenuLightbox({ open: false, url: '', name: '' });
    };

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

                                                    {((s.links && s.links.length > 0) || s.menuUrl) && (
                                                        <div className="space-y-3">
                                                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                                {t('linkLabels.links')}
                                                            </div>
                                                            <div className="flex flex-wrap gap-2 justify-center">
                                                                {s.links?.map((lr) => (
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
                                                                {s.menuUrl && (
                                                                    <button
                                                                        onClick={() => openMenuLightbox(s.menuUrl!, itemName)}
                                                                        className="px-3 py-1.5 rounded-full border border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 text-sm font-medium transition-colors cursor-pointer"
                                                                    >
                                                                        {t('linkLabels.menu')}
                                                                    </button>
                                                                )}
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

            {/* Menu Lightbox Modal */}
            {menuLightbox.open && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeMenuLightbox}
                        className="absolute top-4 right-4 bg-black bg-opacity-30 hover:bg-opacity-50 text-white hover:text-red-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl backdrop-blur-sm border border-white border-opacity-10 z-10"
                        aria-label="Zamknij menu"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
                        <Image
                            src={menuLightbox.url}
                            alt={`${menuLightbox.name} menu`}
                            width={800}
                            height={1200}
                            className="max-w-full max-h-full object-contain"
                            priority
                        />
                    </div>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                        <span className="text-sm">{menuLightbox.name} - Menu</span>
                    </div>
                </div>
            )}
        </main>
    );
}
