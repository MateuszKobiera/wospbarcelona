import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import SponsorsPageClient from './SponsorsPageClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('sponsors.title'),
    description: t('sponsors.description'),
    openGraph: {
      title: t('sponsors.title'),
      description: t('sponsors.description'),
    },
  };
}

export default function SponsorsPage() {
  return <SponsorsPageClient />;
}
