'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { Calendar, Award, Stethoscope, ExternalLink, Users, Heart, HeartHandshakeIcon, StoreIcon, UsersIcon, FlagIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siFacebook, siInstagram, siYoutube } from 'simple-icons/icons';
import { useState } from 'react';

export default function AboutPageClient() {
    const t = useTranslations('about');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [visiblePhotos, setVisiblePhotos] = useState(8);

    const allPhotos = [
        'DSCF7186.jpg', 'DSCF7189.jpg', 'DSCF7194.jpg', 'DSCF7203.jpg',
        'DSCF7205.jpg', 'DSCF7221.jpg', 'DSCF7223.jpg', 'DSCF7238.jpg',
        'DSCF7239.jpg', 'DSCF7250.jpg', 'DSCF7254.jpg', 'DSCF7257.jpg',
        'DSCF7258.jpg', 'DSCF7259.jpg', 'DSCF7260.jpg', 'DSCF7264.jpg',
        'DSCF7267.jpg', 'DSCF7271.jpg', 'DSCF7272.jpg', 'DSCF7274.jpg',
        'DSCF7277.jpg', 'DSCF7279.jpg', 'DSCF7281.jpg', 'DSCF7282.jpg',
        'DSCF7283.jpg', 'DSCF7285.jpg', 'DSCF7287.jpg', 'DSCF7290.jpg',
        'DSCF7291.jpg', 'DSCF7292.jpg', 'DSCF7295.jpg', 'DSCF7300.jpg',
        'DSCF7302.jpg', 'DSCF7308.jpg', 'DSCF7309.jpg', 'DSCF7313.jpg',
        'DSCF7314.jpg', 'DSCF7318.jpg', 'DSCF7320.jpg', 'DSCF7321.jpg',
        'DSCF7324.jpg', 'DSCF7330.jpg', 'DSCF7331.jpg', 'DSCF7334.jpg',
        'DSCF7339.jpg', 'DSCF7344.jpg', 'DSCF7346.jpg', 'DSCF7351.jpg',
        'DSCF7352.jpg', 'DSCF7361.jpg', 'DSCF7364.jpg', 'DSCF7366.jpg',
        'DSCF7367.jpg', 'DSCF7368.jpg', 'DSCF7369.jpg', 'DSCF7370.jpg',
        'DSCF7371.jpg', 'DSCF7372.jpg', 'DSCF7374.jpg', 'DSCF7375.jpg',
        'DSCF7376.jpg', 'DSCF7377.jpg', 'DSCF7389.jpg', 'DSCF7404.jpg',
        'DSCF7408.jpg', 'DSCF7409.jpg'
    ];

    const photos = allPhotos.slice(0, visiblePhotos);

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const nextImage = () => {
        const nextIndex = currentImageIndex + 1;
        if (nextIndex >= photos.length) {
            if (visiblePhotos < allPhotos.length) {
                setVisiblePhotos((prev) => Math.min(prev + 8, allPhotos.length));
                setCurrentImageIndex(nextIndex);
            } else {
                closeLightbox();
            }
        } else {
            setCurrentImageIndex(nextIndex);
        }
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const loadMorePhotos = () => {
        setVisiblePhotos((prev) => Math.min(prev + 8, allPhotos.length));
    };

    return (
        <div className="min-h-screen">
            <main className="py-16 bg-gradient-to-br from-white via-red-50 to-pink-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* WOŚP History Section */}
                    <div className="rounded-lg p-8 bg-white border border-red-100 shadow-sm mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('page.wospSection.title')}</h2>

                        {/* YouTube Video */}
                        <div className="mb-8">
                            <div className="aspect-video w-full max-w-4xl mx-auto">
                                <iframe
                                    className="w-full h-full rounded-lg shadow-lg border-0"
                                    src="https://www.youtube.com/embed/nBXar_Xr5lU"
                                    title="Wielka Orkiestra Świątecznej Pomocy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        <div className="prose prose-lg text-gray-700 max-w-none">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Calendar className="w-6 h-6 text-red-600 mr-2" />
                                        {t('page.wospSection.historyTitle')}
                                    </h3>
                                    <p className="mb-4">{t('wospHistory.content')}</p>
                                    <p className="mb-4">{t('wospHistory.events')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Stethoscope className="w-6 h-6 text-red-600 mr-2" />
                                        {t('page.wospSection.goalsTitle')}
                                    </h3>
                                    <p className="mb-4">{t('wospHistory.medicalGoals.content')}</p>
                                    <p className="mb-4">{t('wospHistory.medicalGoals.impact')}</p>
                                </div>
                            </div>

                            <div className="bg-red-50 p-6 rounded-lg mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Award className="w-6 h-6 text-red-600 mr-2" />
                                    {t('page.wospSection.foundationTitle')}
                                </h3>
                                <p className="mb-4">{t('wospHistory.jurek.content')}</p>
                                <p>{t('wospHistory.jurek.transparency')}</p>
                            </div>

                            <div className="text-center mt-8">
                                <a
                                    href="https://www.wosp.org.pl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                                >
                                    <span>{t('page.wospSection.visitLink')}</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* WOŚP Barcelona Section */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('page.barcelonaSection.title')}</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                {t('page.barcelonaSection.subtitle')}
                            </p>
                        </div>

                        {/* Mission Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {t.raw('missionCards').map((card: { title: string; description: string; icon: string }, index: number) => {
                                type IconMapType = { [key: string]: React.ReactNode };
                                const iconMap: IconMapType = {
                                    'heart': <HeartHandshakeIcon className="w-5 h-5 text-red-600" />,
                                    'store': <StoreIcon className="w-5 h-5 text-amber-600" />,
                                    'users': <UsersIcon className="w-5 h-5 text-blue-700" />,
                                    'flag': <FlagIcon className="w-5 h-5 text-green-600" />
                                };
                                const bgColorMap: { [key: string]: string } = {
                                    'heart': 'bg-red-100',
                                    'store': 'bg-amber-100',
                                    'users': 'bg-blue-100',
                                    'flag': 'bg-green-100'
                                };

                                return (
                                    <div key={index} className="group rounded-2xl p-[1px] bg-gradient-to-br from-red-500 via-pink-500 to-orange-400 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                                        <Card className="rounded-2xl bg-white border border-gray-200/60 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-0.5 cursor-default h-full">
                                            <CardContent className="p-6 md:p-7 h-full flex flex-col">
                                                <div className="flex items-center mb-3">
                                                    <div className={`w-10 h-10 rounded-full ${bgColorMap[card.icon] || 'bg-gray-100'} flex items-center justify-center mr-3`}>
                                                        {iconMap[card.icon] || <Heart className="w-5 h-5 text-gray-600" />}
                                                    </div>
                                                    <h3 className="text-sm font-semibold text-gray-900">{card.title}</h3>
                                                </div>
                                                <p className="text-sm text-gray-700 flex-grow">{card.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* How We Work Section */}
                    <div className="rounded-lg p-8 bg-white border border-red-100 shadow-sm mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('page.workSection.title')}</h2>

                        <div className="prose prose-lg text-gray-700 max-w-none">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Calendar className="w-6 h-6 text-red-600 mr-2" />
                                        {t('page.workSection.seasonTitle')}
                                    </h3>
                                    <p className="mb-4">{t('page.workSection.paragraphs.season1')}</p>
                                    <p className="mb-4">{t('page.workSection.paragraphs.season2')}</p>
                                    <p className="mb-4">{t('page.workSection.paragraphs.season3')}</p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Users className="w-6 h-6 text-red-600 mr-2" />
                                        {t('page.workSection.volunteersTitle')}
                                    </h3>
                                    <p className="mb-4">{t('page.workSection.paragraphs.volunteers1')}</p>
                                    <p className="mb-4">{t('page.workSection.paragraphs.volunteers2')}</p>
                                    <p className="mb-4">{t('page.workSection.paragraphs.volunteers3')}</p>
                                </div>
                            </div>

                            <div className="bg-red-50 p-6 rounded-lg mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <Heart className="w-6 h-6 text-red-600 mr-2" />
                                    {t('page.workSection.partnersTitle')}
                                </h3>
                                <p className="mb-4">{t('page.workSection.paragraphs.partners1')}</p>
                                <p className="mb-4">{t('page.workSection.paragraphs.partners2')}</p>
                                <p className="mb-4">{t('page.workSection.paragraphs.partners3')}</p>
                                <p>{t('page.workSection.paragraphs.partners4')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="mb-16">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('page.socialsSection.followTitle')}</h2>
                            <p className="text-gray-600">{t('page.socialsSection.description')}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <Link href="https://facebook.com/sztabWOSPBarcelona" target="_blank" rel="noopener noreferrer" className="block">
                                <Card className="border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                                    <CardContent className="p-4">
                                        <div className="flex items-center mb-3">
                                            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                                                <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 text-blue-600 fill-current" aria-hidden>
                                                    <path d={siFacebook.path} />
                                                </svg>
                                            </div>
                                            <div className="text-sm font-semibold text-gray-900">Facebook</div>
                                        </div>
                                        <p className="text-sm text-gray-700">{t('page.socialsSection.facebookDesc')}</p>
                                    </CardContent>
                                </Card>
                            </Link>

                            <Link href="https://instagram.com/wospbarcelona" target="_blank" rel="noopener noreferrer" className="block">
                                <Card className="border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                                    <CardContent className="p-4">
                                        <div className="flex items-center mb-3">
                                            <div className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                                                <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 text-pink-600 fill-current" aria-hidden>
                                                    <path d={siInstagram.path} />
                                                </svg>
                                            </div>
                                            <div className="text-sm font-semibold text-gray-900">Instagram</div>
                                        </div>
                                        <p className="text-sm text-gray-700">{t('page.socialsSection.instagramDesc')}</p>
                                    </CardContent>
                                </Card>
                            </Link>


                            <Link href="https://www.youtube.com/@sztabwospbarcelona3771" target="_blank" rel="noopener noreferrer" className="block">
                                <Card className="border-gray-200/80 transition hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                                    <CardContent className="p-4">
                                        <div className="flex items-center mb-3">
                                            <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center mr-2">
                                                <svg role="img" viewBox="0 0 24 24" className="w-5 h-5 text-red-600 fill-current" aria-hidden>
                                                    <path d={siYoutube.path} />
                                                </svg>
                                            </div>
                                            <div className="text-sm font-semibold text-gray-900">YouTube</div>
                                        </div>
                                        <p className="text-sm text-gray-700">{t('page.socialsSection.youtubeDesc')}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </div>
                    </div>

                    {/* 33rd Final Section */}
                    <div className="rounded-lg p-8 bg-white border border-red-100 shadow-sm">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('page.final33Section.title')}</h2>

                        <div className="prose prose-lg text-gray-700 max-w-none mb-8">
                            <p className="text-center text-xl mb-6">{t('page.final33Section.intro')}</p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t('page.final33Section.resultsTitle')}</h3>
                                    <div className="bg-red-50 p-6 rounded-lg">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-red-600 mb-2">13 881,91 €</div>
                                            <div className="text-lg text-gray-700">{t('page.final33Section.collectedDesc')}</div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{t('page.final33Section.medicalTitle')}</h3>
                                    <p>{t('page.final33Section.medicalDesc')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Photo Gallery */}
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">{t('page.final33Section.galleryTitle')}</h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                                {photos.map((photo, index) => (
                                    <div
                                        key={photo}
                                        className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                        onClick={() => openLightbox(index)}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                                            📸 Ładowanie...
                                        </div>
                                        <Image
                                            src={`/images/33-final/${photo}`}
                                            alt={`Zdjęcie z 33. Finału WOŚP Barcelona ${index + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300 z-10"
                                            onLoad={(e) => {
                                                const target = e.currentTarget as HTMLImageElement;
                                                target.style.opacity = '1';
                                            }}
                                            onError={(e) => {
                                                const target = e.currentTarget as HTMLImageElement;
                                                target.style.display = 'none';
                                            }}
                                            style={{ opacity: 0, transition: 'opacity 0.3s' }}
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {visiblePhotos < allPhotos.length && (
                                <div className="mb-6">
                                    <button
                                        onClick={loadMorePhotos}
                                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                                    >
                                        {t('page.final33Section.loadMore')} ({allPhotos.length - visiblePhotos} {t('page.final33Section.remaining')})
                                    </button>
                                </div>
                            )}

                            <div className="text-center bg-gray-50 rounded-lg p-4">
                                <p className="text-sm text-gray-600">
                                    📸 {t('page.final33Section.photoCredit')}: <strong>Hela Staniszewska</strong>
                                </p>
                                <p className="text-xs text-gray-500 mt-1">{t('page.final33Section.photoCreditThanks')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Lightbox Modal */}
                    {lightboxOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                            <button
                                onClick={closeLightbox}
                                className="absolute top-4 right-4 bg-black bg-opacity-30 hover:bg-opacity-50 text-white hover:text-red-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl backdrop-blur-sm border border-white border-opacity-10 z-10"
                                aria-label="Zamknij galerię"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white hover:text-blue-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl backdrop-blur-sm border border-white border-opacity-10 z-10"
                                aria-label="Poprzednie zdjęcie"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white hover:text-blue-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl backdrop-blur-sm border border-white border-opacity-10 z-10"
                                aria-label="Następne zdjęcie"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
                                <Image
                                    src={`/images/33-final/${photos[currentImageIndex]}`}
                                    alt={`Zdjęcie z 33. Finału WOŚP Barcelona ${currentImageIndex + 1}`}
                                    width={1600}
                                    height={1200}
                                    className="max-w-full max-h-full object-contain"
                                    priority
                                />
                            </div>

                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                                <span className="text-sm">{currentImageIndex + 1} / {allPhotos.length}</span>
                            </div>

                            <div className="absolute bottom-4 right-4 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                                <span className="text-xs">📸 Hela Staniszewska</span>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
