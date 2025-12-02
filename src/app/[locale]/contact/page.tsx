import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });
    return {
        title: t('contact.title'),
        description: t('contact.description'),
        openGraph: {
            title: t('contact.title'),
            description: t('contact.description'),
        },
    };
}

export default function ContactPage() {
    return <ContactPageClient />;
}
