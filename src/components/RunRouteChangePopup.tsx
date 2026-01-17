'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'wosp_run_route_change_v1_dismissed';

export default function RunRouteChangePopup() {
    const t = useTranslations('runRoutePopup');
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        let timeoutId: number | null = null;
        try {
            const dismissed = localStorage.getItem(STORAGE_KEY);
            if (!dismissed) {
                timeoutId = window.setTimeout(() => setIsOpen(true), 0);
            }
        } catch {
            timeoutId = window.setTimeout(() => setIsOpen(true), 0);
        }

        return () => {
            if (timeoutId !== null) {
                window.clearTimeout(timeoutId);
            }
        };
    }, []);

    const close = () => {
        setIsOpen(false);
        try {
            localStorage.setItem(STORAGE_KEY, '1');
        } catch {
            // ignore
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4">
            <div className="relative w-full max-w-lg rounded-xl bg-white shadow-xl border border-red-100">
                <button
                    aria-label={t('close')}
                    onClick={close}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
                >
                    <span aria-hidden>×</span>
                </button>
                <div className="p-5 sm:p-6">
                    <div className="text-xs font-semibold tracking-wide uppercase text-red-600">
                        {t('badge')}
                    </div>
                    <h2 className="mt-2 text-lg sm:text-xl font-bold text-gray-900">
                        {t('title')}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                        {t('message')}
                    </p>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:justify-end">
                        <Button asChild className="bg-red-600 hover:bg-red-700 text-white flex-1 sm:flex-initial">
                            <Link href={`/${locale}/events/5`} onClick={close}>
                                {t('cta')}
                            </Link>
                        </Button>
                        <a
                            href="https://www.facebook.com/share/r/1AgZ12M2Ha/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-initial"
                        >
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={close}>
                                {t('routeVideo')}
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
