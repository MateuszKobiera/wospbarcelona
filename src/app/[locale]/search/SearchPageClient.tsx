'use client';

import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { Calendar, Search, X } from 'lucide-react';
import type { SearchCategory, SearchEntry } from '@/lib/search-index';

const CATEGORIES: SearchCategory[] = ['blog', 'events', 'sponsors', 'about'];
const MIN_QUERY = 2;

const categoryStyles: Record<SearchCategory, string> = {
  blog: 'bg-blue-50 text-blue-700',
  events: 'bg-red-50 text-red-700',
  sponsors: 'bg-amber-50 text-amber-800',
  about: 'bg-green-50 text-green-700',
};

/**
 * Lowercases and strips diacritics character by character, so the result has
 * exactly the same length as the input and indices can be reused for highlighting.
 */
function normalize(text: string): string {
  let out = '';
  for (const ch of text) {
    const lower = ch.toLowerCase();
    let n = lower === 'ł' ? 'l' : lower.normalize('NFD').replace(/[̀-ͯ]/g, '');
    if (n.length !== ch.length) n = n.slice(0, ch.length).padEnd(ch.length, ' ');
    out += n;
  }
  return out;
}

type Range = [number, number];

function findRanges(normText: string, terms: string[]): Range[] {
  const ranges: Range[] = [];
  for (const term of terms) {
    let i = normText.indexOf(term);
    while (i !== -1) {
      ranges.push([i, i + term.length]);
      i = normText.indexOf(term, i + term.length);
    }
  }
  ranges.sort((a, b) => a[0] - b[0]);
  const merged: Range[] = [];
  for (const r of ranges) {
    const last = merged[merged.length - 1];
    if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
    else merged.push([...r]);
  }
  return merged;
}

function Highlight({ text, terms }: { text: string; terms: string[] }) {
  const ranges = findRanges(normalize(text), terms);
  if (ranges.length === 0) return <>{text}</>;
  const parts: ReactNode[] = [];
  let pos = 0;
  ranges.forEach(([start, end], i) => {
    if (start > pos) parts.push(text.slice(pos, start));
    parts.push(
      <mark key={i} className="bg-yellow-200 text-gray-900 rounded-sm px-0.5">
        {text.slice(start, end)}
      </mark>
    );
    pos = end;
  });
  if (pos < text.length) parts.push(text.slice(pos));
  return <>{parts}</>;
}

/** Picks a fragment of the text around the first match. */
function makeSnippet(entry: SearchEntry, terms: string[]): string {
  const normSummary = normalize(entry.summary);
  if (entry.summary && terms.some((t) => normSummary.includes(t))) {
    return entry.summary.length > 220 ? entry.summary.slice(0, 220).trimEnd() + '…' : entry.summary;
  }
  const normText = normalize(entry.text);
  const hits = terms.map((t) => normText.indexOf(t)).filter((i) => i >= 0);
  if (hits.length === 0) {
    return entry.summary.length > 220 ? entry.summary.slice(0, 220).trimEnd() + '…' : entry.summary;
  }
  const first = Math.min(...hits);
  let start = Math.max(0, first - 80);
  let end = Math.min(entry.text.length, first + 160);
  if (start > 0) {
    const space = entry.text.indexOf(' ', start);
    if (space !== -1 && space < first) start = space + 1;
  }
  if (end < entry.text.length) {
    const space = entry.text.lastIndexOf(' ', end);
    if (space > first) end = space;
  }
  return (start > 0 ? '…' : '') + entry.text.slice(start, end) + (end < entry.text.length ? '…' : '');
}

type IndexedEntry = SearchEntry & { nTitle: string; nSummary: string; nText: string };

function score(entry: IndexedEntry, terms: string[]): number {
  let total = 0;
  for (const term of terms) {
    const inTitle = entry.nTitle.includes(term);
    const inSummary = entry.nSummary.includes(term);
    let count = 0;
    let i = entry.nText.indexOf(term);
    while (i !== -1 && count < 5) {
      count++;
      i = entry.nText.indexOf(term, i + term.length);
    }
    if (!inTitle && !inSummary && count === 0) return 0; // every term must match somewhere
    total += (inTitle ? 10 : 0) + (inSummary ? 3 : 0) + count;
  }
  return total;
}

export default function SearchPageClient({ entries }: { entries: SearchEntry[] }) {
  const t = useTranslations('search');
  const locale = useLocale();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState(() => searchParams.get('q') ?? '');
  const [category, setCategory] = useState<SearchCategory | 'all'>(() => {
    const c = searchParams.get('c');
    return c && (CATEGORIES as string[]).includes(c) ? (c as SearchCategory) : 'all';
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Keep the URL shareable without triggering a server round-trip.
  useEffect(() => {
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (category !== 'all') params.set('c', category);
    const qs = params.toString();
    window.history.replaceState(null, '', `/${locale}/search${qs ? `?${qs}` : ''}`);
  }, [query, category, locale]);

  const indexed = useMemo<IndexedEntry[]>(
    () => entries.map((e) => ({ ...e, nTitle: normalize(e.title), nSummary: normalize(e.summary), nText: normalize(e.text) })),
    [entries]
  );

  const terms = useMemo(
    () => normalize(query).split(/\s+/).filter((w) => w.length > 0),
    [query]
  );
  const active = query.trim().length >= MIN_QUERY;

  const matches = useMemo(() => {
    if (!active) return [];
    return indexed
      .map((entry) => ({ entry, score: score(entry, terms) }))
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score || (b.entry.date ?? '').localeCompare(a.entry.date ?? ''));
  }, [indexed, terms, active]);

  const counts = useMemo(() => {
    const c: Record<SearchCategory, number> = { blog: 0, events: 0, sponsors: 0, about: 0 };
    for (const m of matches) c[m.entry.category]++;
    return c;
  }, [matches]);

  const visible = category === 'all' ? matches : matches.filter((m) => m.entry.category === category);

  const tabClass = (isActive: boolean) =>
    `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-colors cursor-pointer ${
      isActive
        ? 'bg-red-600 border-red-600 text-white'
        : 'bg-white border-gray-200 text-gray-700 hover:border-red-300 hover:text-red-600'
    }`;

  return (
    <main className="py-16 bg-linear-to-br from-white via-red-50 to-pink-100 min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('title')}</h1>
          <p className="text-lg text-gray-600">{t('description')}</p>
        </div>

        <form role="search" onSubmit={(e) => e.preventDefault()} className="relative mb-6">
          <label htmlFor="site-search" className="sr-only">{t('placeholder')}</label>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          <input
            ref={inputRef}
            id="site-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('placeholder')}
            autoComplete="off"
            className="w-full rounded-full border-2 border-red-200 bg-white text-gray-900 placeholder:text-gray-400 py-4 pl-12 pr-12 text-lg shadow-sm focus:outline-none focus:border-red-500 focus:ring-4 focus:ring-red-100 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(''); inputRef.current?.focus(); }}
              aria-label={t('clear')}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </form>

        <div className="flex flex-wrap gap-2 mb-8" role="tablist">
          <button type="button" role="tab" aria-selected={category === 'all'} onClick={() => setCategory('all')} className={tabClass(category === 'all')}>
            {t('all')}
            {active && <span className="text-xs opacity-80">{matches.length}</span>}
          </button>
          {CATEGORIES.map((c) => (
            <button key={c} type="button" role="tab" aria-selected={category === c} onClick={() => setCategory(c)} className={tabClass(category === c)}>
              {t(`categories.${c}`)}
              {active && <span className="text-xs opacity-80">{counts[c]}</span>}
            </button>
          ))}
        </div>

        {!active ? (
          <p className="text-center text-gray-500 py-12">{t('minChars', { count: MIN_QUERY })}</p>
        ) : visible.length === 0 ? (
          <div className="text-center py-12 bg-white/70 rounded-2xl border border-gray-200">
            <p className="text-lg font-medium text-gray-700 mb-2">{t('noResults', { query: query.trim() })}</p>
            <p className="text-gray-500">{t('noResultsHint')}</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-4" aria-live="polite">{t('results', { count: visible.length })}</p>
            <ul className="space-y-4">
              {visible.map(({ entry }) => (
                <li key={entry.id}>
                  <Link
                    href={entry.href}
                    className="group flex gap-4 rounded-xl bg-white border border-red-100 p-4 shadow-sm hover:shadow-md hover:border-red-300 transition-all"
                  >
                    {entry.image && (
                      <div className="relative hidden sm:block w-32 h-24 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                        <Image src={entry.image} alt="" fill className="object-cover" sizes="128px" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded ${categoryStyles[entry.category]}`}>
                          {t(`categories.${entry.category}`)}
                        </span>
                        {entry.date && (
                          <span className="inline-flex items-center text-xs text-gray-500">
                            <Calendar className="w-3 h-3 mr-1" />
                            {entry.date}
                          </span>
                        )}
                      </div>
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                        <Highlight text={entry.title} terms={terms} />
                      </h2>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                        <Highlight text={makeSnippet(entry, terms)} terms={terms} />
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}
