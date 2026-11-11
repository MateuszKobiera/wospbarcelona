import React from 'react';
import type { BlogPostI18n } from '@/content/blog-i18n';

/**
 * Shared types + renderer for data-driven blog articles in `src/content/news/`.
 * Each article is a plain `NewsSource` object; `buildPost` turns it into a `BlogPostI18n`.
 * Paragraph/list text supports **bold** markup.
 */

export type Locale = 'pl' | 'en' | 'es' | 'ca';

export type NewsImage = {
    src: string;
    alt: string;
    caption?: string;
    /** Attribution for third-party (e.g. Wikimedia Commons) photos */
    credit?: { author: string; license: string; url: string };
    /** Show the whole image without cropping (e.g. posters) */
    fit?: 'contain';
};

export type NewsSection = {
    title?: string;
    p?: string[];
    ul?: string[];
    ol?: string[];
    /** Highlighted box with a key number */
    highlight?: { value: string; label: string };
    /** Pull quote */
    quote?: { text: string; author: string };
    /** Image shown after the text of the section */
    image?: NewsImage;
    /** Cards for businesses/organisations (logo, name, short text, external link) */
    cards?: NewsCard[];
    /** Internal call-to-action link; `href` is locale-less, e.g. '/sponsors/34-final' */
    cta?: { label: string; href: string };
};

export type NewsCard = {
    name: string;
    logo?: string;
    /** Short label above the name, e.g. "Cukiernia" */
    kind?: string;
    text: string;
    url?: string;
    linkLabel?: string;
};

export type NewsLocalized = {
    title: string;
    excerpt: string;
    sections: NewsSection[];
};

export type NewsSource = {
    slug: string;
    date: string;
    coverImage: string;
    thumbnailImage?: string;
    tags: string[];
    sources?: { label: string; url: string }[];
    content: Record<Locale, NewsLocalized>;
};

const sourcesLabel: Record<Locale, string> = { pl: 'Źródła', en: 'Sources', es: 'Fuentes', ca: 'Fonts' };
const photoLabel: Record<Locale, string> = { pl: 'Fot.', en: 'Photo:', es: 'Foto:', ca: 'Foto:' };

function renderInline(text: string): React.ReactNode {
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : <React.Fragment key={i}>{part}</React.Fragment>
    );
}

function renderImage(img: NewsImage, locale: Locale) {
    return (
        <figure className="my-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} loading="lazy" className={img.fit === 'contain' ? 'mx-auto w-full max-w-xl h-auto rounded-xl shadow-md' : 'w-full max-h-[480px] object-cover rounded-xl shadow-md'} />
            {(img.caption || img.credit) && (
                <figcaption className="mt-2 text-sm text-gray-500">
                    {img.caption}
                    {img.credit && (
                        <span className="block text-xs">
                            {photoLabel[locale]} {img.credit.author},{' '}
                            <a href={img.credit.url} target="_blank" rel="noopener noreferrer">
                                {img.credit.license}
                            </a>
                            , Wikimedia Commons
                        </span>
                    )}
                </figcaption>
            )}
        </figure>
    );
}

function renderSection(section: NewsSection, locale: Locale): React.ReactNode {
    return (
        <div className="space-y-3">
            {section.highlight && (
                <div className="bg-gradient-to-r from-red-50 via-pink-50 to-orange-50 rounded-xl p-6 border border-red-200 text-center shadow-sm">
                    <div className="text-3xl md:text-4xl font-extrabold text-red-600 mb-1">{section.highlight.value}</div>
                    <p className="text-gray-700 font-medium">{section.highlight.label}</p>
                </div>
            )}
            {section.p?.map((para, i) => <p key={i}>{renderInline(para)}</p>)}
            {section.ul && (
                <ul className="space-y-1">
                    {section.ul.map((li, i) => (
                        <li key={i}>{renderInline(li)}</li>
                    ))}
                </ul>
            )}
            {section.ol && (
                <ol className="space-y-1">
                    {section.ol.map((li, i) => (
                        <li key={i}>{renderInline(li)}</li>
                    ))}
                </ol>
            )}
            {section.quote && (
                <blockquote className="border-l-4 border-red-500 bg-red-50/60 rounded-r-lg px-5 py-4 italic">
                    <p>„{section.quote.text}”</p>
                    <footer className="mt-2 text-sm not-italic font-semibold text-red-700">— {section.quote.author}</footer>
                </blockquote>
            )}
            {section.cards && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                    {section.cards.map((card) => (
                        <div key={card.name} className="flex gap-4 rounded-xl border border-red-100 bg-white p-4 shadow-sm">
                            {card.logo && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={card.logo} alt={`${card.name} logo`} loading="lazy" className="h-16 w-16 flex-none rounded-lg object-contain bg-white border-0" />
                            )}
                            <div className="min-w-0">
                                {card.kind && <div className="text-xs font-semibold uppercase tracking-wide text-red-600">{card.kind}</div>}
                                <div className="font-bold text-gray-900">{card.name}</div>
                                <p className="mt-1 text-sm text-gray-700">{renderInline(card.text)}</p>
                                {card.url && (
                                    <a href={card.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold">
                                        {card.linkLabel ?? card.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {section.image && renderImage(section.image, locale)}
            {section.cta && (
                <p>
                    <a href={`/${locale}${section.cta.href}`} className="inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 font-semibold no-underline! hover:bg-red-700 text-white!">
                        {section.cta.label} →
                    </a>
                </p>
            )}
        </div>
    );
}

export function buildPost(src: NewsSource): BlogPostI18n {
    const build = (locale: Locale) => {
        const c = src.content[locale];
        const sections: { title?: string; body: React.ReactNode }[] = c.sections.map((s) => ({ title: s.title, body: renderSection(s, locale) }));
        if (src.sources && src.sources.length > 0) {
            sections.push({
                body: (
                    <p className="text-sm text-gray-500 border-t pt-4">
                        {sourcesLabel[locale]}:{' '}
                        {src.sources.map((s, i) => (
                            <React.Fragment key={s.url}>
                                {i > 0 && ', '}
                                <a href={s.url} target="_blank" rel="noopener noreferrer">
                                    {s.label}
                                </a>
                            </React.Fragment>
                        ))}
                    </p>
                ),
            });
        }
        return { title: c.title, excerpt: c.excerpt, sections };
    };

    return {
        slug: src.slug,
        date: src.date,
        coverImage: src.coverImage,
        thumbnailImage: src.thumbnailImage,
        tags: src.tags,
        social: {
            facebook: 'https://www.facebook.com/sztabWOSPBarcelona',
            instagram: 'https://www.instagram.com/wospbarcelona/',
        },
        content: { pl: build('pl'), en: build('en'), es: build('es'), ca: build('ca') },
    };
}
