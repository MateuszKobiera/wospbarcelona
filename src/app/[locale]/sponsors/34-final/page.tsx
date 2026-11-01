import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Final34SponsorsClient from './Final34SponsorsClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('sponsors34.title'),
    description: t('sponsors34.description'),
    openGraph: {
      title: t('sponsors34.title'),
      description: t('sponsors34.description'),
    },
  };
}

export default function Sponsors34Page() {
  return <Final34SponsorsClient />;
}
