'use client';

import { useEffect, useMemo, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Users, Calendar, MapPin } from 'lucide-react';

export function Hero() {
  const t = useTranslations('home');
  const locale = useLocale();

  const finaleDate = useMemo(() => new Date('2026-01-25T12:00:00+01:00'), []);
  const [isMounted, setIsMounted] = useState(false);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
    setNow(Date.now());

    const intervalId = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const countdown = useMemo(() => {
    if (!isMounted || now === null) {
      return null;
    }

    const diffMs = Math.max(0, finaleDate.getTime() - now);
    const totalSeconds = Math.floor(diffMs / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, [finaleDate, isMounted, now]);

  const format2 = (value: number) => String(value).padStart(2, '0');

  const stats = [
    { icon: Heart, label: t('stats.yearsHelp'), value: '9+' },
    { icon: Users, label: t('stats.volunteers'), value: '100+' },
    { icon: Calendar, label: t('stats.fundsRaised'), value: '35 tys. €+' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-red-50 to-pink-50 pt-0 pb-20 lg:pb-32">
      <div className="sticky top-16 left-0 w-full z-40">
        <div className="border-b border-red-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-1.5 text-[11px] font-semibold shadow-sm whitespace-nowrap w-fit shrink-0">
                  <Heart className="w-3.5 h-3.5" />
                  {t('final34Banner.title')}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-900 font-semibold tabular-nums">
                  <span className="inline-flex items-center gap-1 rounded-md bg-red-50 px-2 py-1">
                    {countdown ? countdown.days : '--'}
                    <span className="text-[11px] font-medium text-gray-600">{t('final34Banner.time.days')}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-red-50 px-2 py-1">
                    {countdown ? format2(countdown.hours) : '--'}
                    <span className="text-[11px] font-medium text-gray-600">{t('final34Banner.time.hours')}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-red-50 px-2 py-1">
                    {countdown ? format2(countdown.minutes) : '--'}
                    <span className="text-[11px] font-medium text-gray-600">{t('final34Banner.time.minutes')}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-red-50 px-2 py-1">
                    {countdown ? format2(countdown.seconds) : '--'}
                    <span className="text-[11px] font-medium text-gray-600">{t('final34Banner.time.seconds')}</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-x-3 sm:gap-y-1 text-xs sm:text-sm text-gray-700">
                <span className="inline-flex items-center gap-2 min-w-0">
                  <Calendar className="w-4 h-4 text-red-600" />
                  <span className="font-semibold">{t('final34Banner.dateLabel')}:</span>
                  <span className="truncate">{t('final34Banner.dateValue')}</span>
                </span>
                <span className="inline-flex items-center gap-2 min-w-0">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="font-semibold">{t('final34Banner.locationLabel')}:</span>
                  <span className="truncate">{t('final34Banner.locationValue')}</span>
                </span>
                <span className="inline-flex items-center gap-2 min-w-0">
                  <Heart className="w-4 h-4 text-red-600" />
                  <span className="font-semibold">{t('final34Banner.goalLabel')}:</span>
                  <span className="truncate">{t('final34Banner.goalValue')}</span>
                </span>
              </div>

              <div className="sm:shrink-0">
                <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 text-white h-8 px-3">
                  <Link href={`/${locale}/events/1`}>{t('final34Banner.cta')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-red-600 font-semibold mb-8">
              {t('subtitle')}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              {t('description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              <Link href={`/${locale}/contact`}>{t('cta')}</Link>
            </Button>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              <Link href={`/${locale}/about`}>{t('learnMore')}</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      </div>
    </section>
  );
}
