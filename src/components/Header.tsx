'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import Image from 'next/image';

const languages = [
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ca', name: 'Català', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const tHome = useTranslations('home');
  const locale = useLocale();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Countdown logic
  const finaleDate = useMemo(() => new Date('2026-01-25T12:00:00+01:00'), []);
  const [isMounted, setIsMounted] = useState(false);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
    setNow(Date.now());
    const intervalId = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const countdown = useMemo(() => {
    if (!isMounted || now === null) return null;
    const diffMs = Math.max(0, finaleDate.getTime() - now);
    const totalSeconds = Math.floor(diffMs / 1000);
    return {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
  }, [finaleDate, isMounted, now]);

  const format2 = (value: number) => String(value).padStart(2, '0');

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('about'), href: `/${locale}/about` },
    { name: t('events'), href: `/${locale}/events` },
    { name: t('blog'), href: `/${locale}/blog` },
    { name: t('sponsors'), href: `/${locale}/sponsors` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Countdown Banner */}
      <div className="border-b border-red-100 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white px-3 py-1 text-xs font-semibold shadow-sm">
              <Heart className="w-3 h-3" />
              {tHome('final34Banner.title')}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-900 font-semibold tabular-nums">
              <span className="inline-flex items-center gap-1 rounded-md bg-white/80 px-2 py-0.5">
                {countdown ? countdown.days : '--'}
                <span className="text-[10px] font-medium text-gray-500">{tHome('final34Banner.time.days')}</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-white/80 px-2 py-0.5">
                {countdown ? format2(countdown.hours) : '--'}
                <span className="text-[10px] font-medium text-gray-500">{tHome('final34Banner.time.hours')}</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-white/80 px-2 py-0.5">
                {countdown ? format2(countdown.minutes) : '--'}
                <span className="text-[10px] font-medium text-gray-500">{tHome('final34Banner.time.minutes')}</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-white/80 px-2 py-0.5">
                {countdown ? format2(countdown.seconds) : '--'}
                <span className="text-[10px] font-medium text-gray-500">{tHome('final34Banner.time.seconds')}</span>
              </span>
            </div>
            <span className="hidden sm:inline-flex text-xs text-gray-700 font-medium">
              {tHome('final34Banner.dateValue')} • Espacio 88, Barcelona
            </span>
            <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white h-7 px-3 text-xs">
              <Link href={`/${locale}/events/1`}>{tHome('final34Banner.cta')}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <Image
              src="/images/favicon.ico"
              alt="WOŚP Barcelona"
              width={40}
              height={40}
              priority
            />
            <span className="font-bold text-xl text-gray-900">WOŚP Barcelona</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Selector & Donate Button */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-900 cursor-pointer">
                  <Globe className="w-4 h-4" />
                  <span className="font-semibold">{locale.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 text-gray-900">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} asChild className="flex items-center space-x-2 text-gray-900 focus:bg-gray-100">
                    <Link href={`/${lang.code}`} className="flex items-center space-x-2">
                      <Image src={`/flags/${lang.code}.svg`} alt={`${lang.name} flag`} width={18} height={12} />
                      <span className="text-sm">{lang.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">
              <Link href={`/${locale}/donate`}>{t('donate')}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md font-medium"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-900 cursor-pointer">
                        <Globe className="w-4 h-4" />
                        <span className="font-semibold">{locale.toUpperCase()}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white border border-gray-200 text-gray-900">
                      {languages.map((lang) => (
                        <DropdownMenuItem key={lang.code} asChild className="flex items-center space-x-2 text-gray-900 focus:bg-gray-100">
                          <Link href={`/${lang.code}`} className="flex items-center space-x-2">
                            <Image src={`/flags/${lang.code}.svg`} alt={`${lang.name} flag`} width={18} height={12} />
                            <span className="text-sm">{lang.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <Button asChild className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">
                    <Link href={`/${locale}/donate`}>{t('donate')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
