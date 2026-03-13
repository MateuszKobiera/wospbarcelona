'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPhotoGalleryProps {
    photos: string[];
    altPrefix?: string;
}

export function BlogPhotoGallery({ photos: allPhotos, altPrefix = 'Zdjęcie' }: BlogPhotoGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(8);

    const photos = allPhotos.slice(0, visibleCount);

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const nextImage = () => {
        const next = currentImageIndex + 1;
        if (next >= photos.length) {
            if (visibleCount < allPhotos.length) {
                setVisibleCount((prev) => Math.min(prev + 8, allPhotos.length));
                setCurrentImageIndex(next);
            } else {
                closeLightbox();
            }
        } else {
            setCurrentImageIndex(next);
        }
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + 8, allPhotos.length));
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                {photos.map((src, index) => (
                    <div
                        key={src}
                        className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                        onClick={() => openLightbox(index)}
                    >
                        <Image
                            src={src}
                            alt={`${altPrefix} ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < allPhotos.length && (
                <div className="text-center mb-6">
                    <button
                        onClick={loadMore}
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                    >
                        Pokaż więcej ({allPhotos.length - visibleCount} zdjęć)
                    </button>
                </div>
            )}

            {lightboxOpen && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white hover:text-red-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl backdrop-blur-sm border border-white/10 z-10"
                        aria-label="Zamknij galerię"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-blue-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl backdrop-blur-sm border border-white/10 z-10"
                        aria-label="Poprzednie zdjęcie"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-blue-400 p-3 rounded-full transition-all duration-200 hover:scale-110 shadow-xl backdrop-blur-sm border border-white/10 z-10"
                        aria-label="Następne zdjęcie"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
                        <Image
                            src={photos[currentImageIndex]}
                            alt={`${altPrefix} ${currentImageIndex + 1}`}
                            width={1600}
                            height={1200}
                            className="max-w-full max-h-full object-contain"
                            priority
                        />
                    </div>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-lg">
                        <span className="text-sm">{currentImageIndex + 1} / {allPhotos.length}</span>
                    </div>
                </div>
            )}
        </>
    );
}