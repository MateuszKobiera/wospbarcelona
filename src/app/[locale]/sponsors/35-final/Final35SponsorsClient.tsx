'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ContactForm } from '@/components/ContactForm';
import { ArrowRight, Baby, Globe, Heart, Megaphone, Plus, Sparkles, Users } from 'lucide-react';

const categoryKeys = ['sponsors', 'partners', 'coorganizers'] as const;

const benefitIcons = [Globe, Megaphone, Users, Heart];

export default function Final35SponsorsClient() {
    const t = useTranslations('sponsors');
    const locale = useLocale();
    const benefits = t.raw('final35.benefits') as { title: string; description: string }[];

    return (
        <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-700 px-4 py-1.5 text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4" />
                        {t('final35.badge')}
                    </span>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('final35.title')}</h1>
                    <p className="flex items-center justify-center gap-2 text-lg font-semibold text-red-600 mb-6">
                        <Baby className="w-5 h-5" />
                        {t('final35.subtitle')}
                    </p>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('final35.description')}</p>
                </div>

                {/* Why sponsor */}
                <section className="rounded-2xl bg-gradient-to-br from-red-600 via-red-500 to-pink-500 text-white p-8 md:p-12 shadow-xl mb-16">
                    <h2 className="text-3xl font-bold mb-3 text-center">{t('final35.whyTitle')}</h2>
                    <p className="text-lg text-white/90 max-w-3xl mx-auto text-center mb-10">{t('final35.whyIntro')}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((b, i) => {
                            const Icon = benefitIcons[i % benefitIcons.length];
                            return (
                                <div key={b.title} className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                                    <p className="text-sm text-white/90 leading-relaxed">{b.description}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-10">
                        <a
                            href="#kontakt"
                            className="inline-flex items-center gap-2 bg-white text-red-600 hover:bg-red-50 font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
                        >
                            {t('final35.ctaButton')}
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </section>

                {/* Empty categories */}
                <div className="space-y-16">
                    {categoryKeys.map((key) => (
                        <section key={key}>
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t(`categories.${key}.title`)}</h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t(`categories.${key}.description`)}</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[0, 1, 2].map((i) => (
                                    <a
                                        key={i}
                                        href="#kontakt"
                                        className="group rounded-xl border-2 border-dashed border-red-200 bg-white/60 hover:bg-white hover:border-red-400 transition-all p-8 flex flex-col items-center justify-center text-center min-h-[200px]"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-red-50 group-hover:bg-red-100 flex items-center justify-center mb-4 transition-colors">
                                            <Plus className="w-7 h-7 text-red-400 group-hover:text-red-600" />
                                        </div>
                                        <p className="font-semibold text-gray-700">{t('final35.placeholderTitle')}</p>
                                        <p className="text-sm text-gray-500 mt-1">{t('final35.placeholderDesc')}</p>
                                    </a>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Previous finale link */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 mb-4">{t('final35.previousText')}</p>
                    <Link
                        href={`/${locale}/sponsors/34-final`}
                        className="inline-flex items-center gap-2 border border-red-200 text-red-700 hover:bg-red-50 font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                        {t('final35.previousLink')}
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Contact */}
                <section id="kontakt" className="mt-20 text-center scroll-mt-24">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('cta.title')}</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t('final35.contactSubtitle')}</p>
                    <div className="rounded-xl bg-white/80 backdrop-blur p-6">
                        <ContactForm />
                    </div>
                </section>
            </div>
        </main>
    );
}
