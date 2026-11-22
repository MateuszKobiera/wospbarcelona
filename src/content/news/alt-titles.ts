/**
 * Alternative (similar) titles for articles shown twice on the same page
 * (e.g. featured + regular grid), so the same headline isn't repeated.
 */
export const ALT_TITLES: Record<string, Record<string, string>> = {
  'praktyki-studenckie-w-barcelonie-wosp': {
    pl: 'Praktyki studenckie w Barcelonie – dołącz do Sztabu WOŚP',
    en: 'Student internships in Barcelona – join the WOŚP team',
    es: 'Prácticas para estudiantes en Barcelona: únete al equipo de WOŚP',
    ca: "Pràctiques per a estudiants a Barcelona: uneix-te a l'equip de WOŚP",
  },
};

export function altTitle(slug: string, locale: string): string | undefined {
  const t = ALT_TITLES[slug];
  return t ? t[locale] ?? t.pl : undefined;
}
