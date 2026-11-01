import type { NewsImage } from './_shared';

/**
 * Freely licensed photos from Wikimedia Commons (stored in /public/images/blog/commons).
 * Attribution is REQUIRED by the licences – it is rendered automatically under each image.
 * Captions are in Polish; articles in other languages override `caption` where needed via `withCaption`.
 */
const base = '/images/blog/commons/';

export const IMG = {
    owsiak2024: {
        src: base + 'owsiak-polandrock-2024.jpg',
        alt: 'Jerzy Owsiak na scenie Pol\'and\'Rock Festival 2024',
        credit: { author: 'Krzysztof Popławski', license: 'CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:30_Pol%27and%27Rock_2024,_Jerzy_Owsiak_0014.jpg' },
    },
    polandrock2022a: {
        src: base + 'polandrock-2022-a.jpg',
        alt: 'Namioty organizacji na Pol\'and\'Rock Festival w Czaplinku-Broczynie',
        credit: { author: 'Ralf Lotys (Sicherlich)', license: 'CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:2022-08_Pol%E2%80%99and%E2%80%99Rock_(019)_Czaplinek.jpg' },
    },
    polandrock2022b: {
        src: base + 'polandrock-2022-b.jpg',
        alt: 'Uczestnicy zajęć na trawie przed namiotami Pol\'and\'Rock Festival',
        credit: { author: 'Ralf Lotys (Sicherlich)', license: 'CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:2022-08_Pol%E2%80%99and%E2%80%99Rock_(061).jpg' },
    },
    polandrock2023: {
        src: base + 'polandrock-2023-a.jpg',
        alt: 'Podświetlona strefa festiwalowa nocą na Pol\'and\'Rock 2023',
        credit: { author: 'Ralf Lotys (Sicherlich)', license: 'CC BY 4.0', url: 'https://commons.wikimedia.org/wiki/File:2023_-Pol%E2%80%99and%E2%80%99Rock_(026)_Pomorze_Zachodnie.jpg' },
    },
    swiatelko: {
        src: base + 'swiatelko-do-nieba-2012.jpg',
        alt: 'Fajerwerki „Światełko do nieba” nad Pałacem Kultury w Warszawie',
        credit: { author: 'Bladyniec', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Wielka_Orkiestra_%C5%9Awi%C4%85tecznej_Pomocy_-_%C5%9Awiate%C5%82ko_do_nieba,_Warszawa_2011.ogv' },
    },
    rondoSerce: {
        src: base + 'rondo-wosp-warszawa-2016.jpg',
        alt: 'Napis WOŚP i serce z podświetlonych okien wieżowca w Warszawie',
        credit: { author: 'Adrian Grycuk', license: 'CC BY-SA 3.0 PL', url: 'https://commons.wikimedia.org/wiki/File:Rondo_1_Wielka_Orkiestra_%C5%9Awi%C4%85tecznej_Pomocy_2016.jpg' },
    },
    dublin2007: {
        src: base + 'wosp-dublin-2007.jpg',
        alt: 'Koncert WOŚP w Dublinie w 2007 roku',
        credit: { author: 'Michal Osmenda', license: 'CC BY-SA 2.0', url: 'https://commons.wikimedia.org/wiki/File:Wielka_Orkiestra_%C5%9Awi%C4%85tecznej_Pomocy_2007,_Dublin_(357212881).jpg' },
    },
    nicu: {
        src: base + 'nicu-incubator.jpg',
        alt: 'Oddział intensywnej terapii noworodka z inkubatorami',
        credit: { author: 'Realistroot', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Night_at_NICU.jpg' },
    },
    barcelonaSkyline: {
        src: base + 'barcelona-skyline.jpg',
        alt: 'Nocna panorama Barcelony z Sagradą Família i Torre Glòries',
        credit: { author: 'Jcca76', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Barcelona_desde_El_Carmelo.JPG' },
    },
} satisfies Record<string, NewsImage>;

/** Same photo with a (localized) caption. */
export function withCaption(img: NewsImage, caption: string): NewsImage {
    return { ...img, caption };
}
