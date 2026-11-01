import { isValidElement, type ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { blogPostsI18n } from '@/content/blog-i18n';
import { upcomingEventsData, pastEventsData } from '@/content/events';

export type SearchCategory = 'blog' | 'events' | 'sponsors' | 'about';

export type SearchEntry = {
  id: string;
  category: SearchCategory;
  title: string;
  /** Short text shown under the title when nothing in the body matches. */
  summary: string;
  /** Full searchable text (plain, no markup). */
  text: string;
  href: string;
  image?: string;
  date?: string;
};

/** Max characters of body text kept per entry, to keep the client payload small. */
const MAX_TEXT = 5000;

/** Props that hold technical values, not readable content. */
const SKIPPED_PROPS = new Set([
  'className', 'src', 'href', 'width', 'height', 'sizes', 'style', 'target', 'rel',
  'id', 'key', 'ref', 'loading', 'priority', 'fill', 'type', 'role', 'viewBox', 'd',
]);

/** Pulls readable text out of a JSX tree (blog sections are stored as ReactNode). */
function reactNodeToText(node: ReactNode, out: string[] = [], depth = 0): string[] {
  if (node == null || typeof node === 'boolean' || depth > 40) return out;
  if (typeof node === 'string' || typeof node === 'number') {
    out.push(String(node));
    return out;
  }
  if (Array.isArray(node)) {
    for (const child of node) reactNodeToText(child as ReactNode, out, depth + 1);
    return out;
  }
  if (isValidElement(node)) {
    const props = (node.props ?? {}) as Record<string, unknown>;
    for (const [key, value] of Object.entries(props)) {
      if (SKIPPED_PROPS.has(key)) continue;
      reactNodeToText(value as ReactNode, out, depth + 1);
    }
    return out;
  }
  if (typeof node === 'object') {
    // Plain arrays/objects passed as props (e.g. InfoBox items: [['Data', '31 stycznia']])
    for (const value of Object.values(node as unknown as Record<string, unknown>)) {
      reactNodeToText(value as ReactNode, out, depth + 1);
    }
  }
  return out;
}

/** Collects every string value from a messages subtree. */
function collectStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === 'string') out.push(value);
  else if (Array.isArray(value)) value.forEach((v) => collectStrings(v, out));
  else if (value && typeof value === 'object') Object.values(value).forEach((v) => collectStrings(v, out));
  return out;
}

function clean(parts: string[]): string {
  return parts
    .join(' ')
    .replace(/\*\*|__/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, MAX_TEXT);
}

type Dict = Record<string, unknown>;
const get = (obj: unknown, path: string): unknown =>
  path.split('.').reduce<unknown>((acc, key) => (acc && typeof acc === 'object' ? (acc as Dict)[key] : undefined), obj);
const str = (obj: unknown, path: string, fallback = ''): string => {
  const v = get(obj, path);
  return typeof v === 'string' ? v : fallback;
};

export async function buildSearchIndex(locale: string): Promise<SearchEntry[]> {
  const messages = (await getMessages({ locale })) as Dict;
  const entries: SearchEntry[] = [];

  // --- Blog -------------------------------------------------------------
  for (const post of blogPostsI18n) {
    const content = post.content[locale as keyof typeof post.content] ?? post.content.pl;
    const body: string[] = [];
    for (const section of content.sections) {
      if (section.title) body.push(section.title);
      reactNodeToText(section.body, body);
    }
    entries.push({
      id: `blog-${post.slug}`,
      category: 'blog',
      title: content.title,
      summary: content.excerpt ?? '',
      text: clean([content.excerpt ?? '', ...(post.tags ?? []), ...body]),
      href: `/${locale}/news/${post.slug}`,
      image: post.thumbnailImage ?? post.coverImage,
      date: post.date,
    });
  }

  // --- Events -----------------------------------------------------------
  for (const event of [...upcomingEventsData, ...pastEventsData]) {
    const base = `events.items.${event.id}`;
    const title = str(messages, `${base}.title`);
    if (!title) continue;
    const description = str(messages, `${base}.description`);
    const location = str(messages, `${base}.location`, event.location ?? '');
    const category = str(messages, `events.categories.${event.categoryKey}`);
    entries.push({
      id: `event-${event.id}`,
      category: 'events',
      title,
      summary: description,
      text: clean([description, location, category, str(messages, `${base}.fullDescription`)]),
      href: `/${locale}/events/${event.id}`,
      image: event.image,
      date: event.date,
    });
  }

  // --- Sponsors ---------------------------------------------------------
  const sponsorItems = (get(messages, 'sponsors.items') ?? {}) as Dict;
  for (const [key, item] of Object.entries(sponsorItems)) {
    const name = str(item, 'name');
    if (!name) continue;
    const description = str(item, 'description');
    entries.push({
      id: `sponsor-${key}`,
      category: 'sponsors',
      title: name,
      summary: description,
      text: clean([description, str(messages, 'nav.sponsors34')]),
      href: `/${locale}/sponsors/34-final#${key}`,
    });
  }
  for (const page of ['sponsors35', 'sponsors34'] as const) {
    entries.push({
      id: `sponsor-page-${page}`,
      category: 'sponsors',
      title: str(messages, `metadata.${page}.title`),
      summary: str(messages, `metadata.${page}.description`),
      text: clean([str(messages, `metadata.${page}.description`)]),
      href: `/${locale}/sponsors/${page === 'sponsors35' ? '35-final' : '34-final'}`,
    });
  }

  // --- About ------------------------------------------------------------
  const about = (get(messages, 'about') ?? {}) as Dict;
  const aboutTitle = str(about, 'title');
  entries.push({
    id: 'about-main',
    category: 'about',
    title: aboutTitle,
    summary: [str(about, 'mission'), str(about, 'history')].filter(Boolean).join(' '),
    text: clean([str(about, 'description'), str(about, 'mission'), str(about, 'history')]),
    href: `/${locale}/about`,
  });
  const cards = Array.isArray(about.missionCards) ? (about.missionCards as Dict[]) : [];
  cards.forEach((card, i) => {
    entries.push({
      id: `about-card-${i}`,
      category: 'about',
      title: str(card, 'title'),
      summary: str(card, 'description'),
      text: clean([str(card, 'description')]),
      href: `/${locale}/about`,
    });
  });
  const sections: Array<[string, unknown]> = [
    ['wospHistory', about.wospHistory],
    ...Object.entries((about.page ?? {}) as Dict),
  ];
  for (const [key, section] of sections) {
    const parts = collectStrings(section);
    if (parts.length === 0) continue;
    const title = str(section, 'title', aboutTitle);
    const rest = parts.filter((p) => p !== title);
    entries.push({
      id: `about-${key}`,
      category: 'about',
      title,
      summary: rest.find((p) => p.length > 60) ?? rest[0] ?? '',
      text: clean(rest),
      href: `/${locale}/about`,
    });
  }

  return entries.filter((e) => e.title);
}
