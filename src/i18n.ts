import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['pl', 'en', 'es', 'ca'] as const;
export const defaultLocale = 'pl' as const;

export default getRequestConfig(async ({ requestLocale }) => {
  // Validate that the incoming `locale` parameter is valid
  const locale = await requestLocale;
  
  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
