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
            {
                key: 'krakoviak',
                links: [
                    { label: 'Telefon', url: 'tel:+34935390616' },
                    { label: 'maps', url: 'https://maps.app.goo.gl/kWQt3NZxNPzwSihj8' },
                ],
                logoUrl: '/images/sponsors/krakoviak.png'
            },
            {
                key: 'artTur',
                links: [
                    { label: 'website', url: 'https://www.art-tur.pl' },
                    { label: 'Facebook', url: 'https://www.facebook.com/artturkrasnik' },
                    { label: 'WhatsApp', url: 'https://wa.me/+48725162189' },
                    { label: 'Email', url: 'mailto:artur.samonek23@interia.pl' },
                ],
                logoUrl: '/images/sponsors/art-tur.jpg'
            },
            {
                key: 'deliciasByBea',
                links: [
                    { label: 'website', url: 'https://www.deliciasbybea.com' },
                    { label: 'Instagram', url: 'https://www.instagram.com/delicias_by_bea' },
                    { label: 'Email', url: 'mailto:deliciasbybea@gmail.com' },
                    { label: 'maps', url: 'https://maps.app.goo.gl/Kce5nYkcZJyC532x5' },
                ],
                logoUrl: '/images/sponsors/delicias_by_bea_2.avif'
            },
            {
                key: 'polcat',
                links: [
                    { label: 'website', url: 'https://polcat.net' },
                    { label: 'Instagram', url: 'https://www.instagram.com/_polcat_/' },
                    { label: 'Facebook', url: 'https://www.facebook.com/Catalunya4youpl/?locale=pl_PL' },
                    { label: 'TikTok', url: 'https://www.tiktok.com/@polcat_' },
                    { label: 'Email', url: 'mailto:kontakt@polcat.net' },
                    { label: 'Telefon', url: 'tel:+34677359234' },
                    { label: 'Google Maps', url: 'https://g.co/kgs/mcBJTqS' },
                ],
                logoUrl: '/images/sponsors/polcat.jpg'
            },
            {
                key: 'spaParaMascota',
                links: [
                    { label: 'WhatsApp', url: 'https://wa.me/34646424462' },
                    { label: 'Instagram', url: 'https://www.instagram.com/spa_para_mascota/' },
                    { label: 'Maps', url: 'https://maps.app.goo.gl/?q=ul.+Sant+Isidre+60,+Badalona' },
                ],
                logoUrl: '/images/sponsors/Logo Spa para mascota.webp'
            },
            {
                key: 'tomexCarBus',
                links: [
                    { label: 'Telefon', url: 'tel:+34616322660' },
                    { label: 'Facebook', url: 'https://www.facebook.com/tomexcarbus85' },
                    { label: 'Email', url: 'mailto:tomexcarbus@gmail.com' },
                ],
                logoUrl: '/images/sponsors/tomex_2.png'
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
                key: 'domiWKatalonii',
                links: [
                    { label: 'Instagram', url: 'https://www.instagram.com/domiwkatalonii/' },
                ],
                logoUrl: '/images/sponsors/Domi-w-Katalonii-partner.png'
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
    const [phoneLightbox, setPhoneLightbox] = useState<{ open: boolean; phone: string; name: string }>({
        open: false,
        phone: '',
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

    const openPhoneLightbox = (phone: string, name: string) => {
        setPhoneLightbox({ open: true, phone, name });
    };

    const closePhoneLightbox = () => {
        setPhoneLightbox({ open: false, phone: '', name: '' });
        setCopyButtonText(t('linkLabels.copyPhone'));
        setCopyButtonColorClass('bg-red-600 hover:bg-red-700');
    };

    const [copyButtonText, setCopyButtonText] = useState(t('linkLabels.copyPhone'));
    const [copyButtonColorClass, setCopyButtonColorClass] = useState('bg-red-600 hover:bg-red-700');

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopyButtonText('Skopiowano');
            setCopyButtonColorClass('bg-green-600 hover:bg-green-700');
            setTimeout(() => {
                setCopyButtonText(t('linkLabels.copyPhone'));
                setCopyButtonColorClass('bg-red-600 hover:bg-red-700');
            }, 2000);
        });
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
                                                                {s.links?.map((lr) => {
                                                                    const isPhone = labelKey(lr.label) === 'phone';
                                                                    return isPhone ? (
                                                                        <button
                                                                            key={`${s.key}-${lr.label}-${lr.url}`}
                                                                            onClick={() => openPhoneLightbox(lr.url.replace('tel:', ''), itemName)}
                                                                            className="px-3 py-1.5 rounded-full border border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 text-sm font-medium transition-colors cursor-pointer"
                                                                        >
                                                                            {labelKey(lr.label) ? t(`linkLabels.${labelKey(lr.label)}` as keyof typeof t) : lr.label}
                                                                        </button>
                                                                    ) : (
                                                                        <a
                                                                            key={`${s.key}-${lr.label}-${lr.url}`}
                                                                            href={lr.url}
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                            className="px-3 py-1.5 rounded-full border border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 text-sm font-medium transition-colors cursor-pointer"
                                                                        >
                                                                            {labelKey(lr.label) ? t(`linkLabels.${labelKey(lr.label)}` as keyof typeof t) : lr.label}
                                                                        </a>
                                                                    );
                                                                })}
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

            {/* Phone Lightbox Modal */}
            {phoneLightbox.open && (
                <div className="fixed inset-0 backdrop-blur-sm bg-white/10 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closePhoneLightbox}
                        className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white hover:text-red-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl z-10"
                        aria-label="Zamknij telefon"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                            {phoneLightbox.name}
                        </h3>
                        <p className="text-gray-600 mb-6 text-center">
                            {t('linkLabels.phoneNumber')}
                        </p>
                        <div className="bg-gray-100 rounded-lg p-4 mb-6">
                            <p className="text-xl font-semibold text-gray-900 text-center">
                                {phoneLightbox.phone}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => copyToClipboard(phoneLightbox.phone)}
                                className={`flex-1 ${copyButtonColorClass} text-white font-medium py-3 px-4 rounded-lg transition-colors`}
                            >
                                {copyButtonText}
                            </button>
                            <button
                                onClick={closePhoneLightbox}
                                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                            >
                                {t('linkLabels.close')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
