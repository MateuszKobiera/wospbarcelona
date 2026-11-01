import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Final35SponsorsClient from './Final35SponsorsClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('sponsors35.title'),
    description: t('sponsors35.description'),
    openGraph: {
      title: t('sponsors35.title'),
      description: t('sponsors35.description'),
    },
  };
}

export default function Sponsors35Page() {
  return <Final35SponsorsClient />;
}
