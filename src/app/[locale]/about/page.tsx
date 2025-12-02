import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('about.title'),
    description: t('about.description'),
    openGraph: {
      title: t('about.title'),
      description: t('about.description'),
    },
  };
}

export default function AboutPage() {
  return <AboutPageClient />;
}
