import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import EventsPageClient from './EventsPageClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('events.title'),
    description: t('events.description'),
    openGraph: {
      title: t('events.title'),
      description: t('events.description'),
    },
  };
}

export default function EventsPage() {
  return <EventsPageClient />;
}
